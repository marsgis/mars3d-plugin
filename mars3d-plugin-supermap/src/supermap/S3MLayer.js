import * as Cesium from "cesium";
import * as mars3d from "mars3d";

let BaseLayer = mars3d.layer.BaseLayer;

/**
 * 超图S3M三维模型图层,
 * 【需要引入  mars3d-supermap 插件库】
 *
 * @param {Object} [options] 参数对象，包括以下：
 * @param {String} options.url supermap的S3M服务地址,示例："url": "http://www.supermapol.com/realspace/services/3D-Olympic/rest/realspace"
 * @param {String} [options.layername] 指定图层名称,未指定时，打开iserver场景服务下所有图层
 * @param {String} [options.sceneName] 工作空间中有多个场景，需要指定场景名称；设置为undefined，默认打开第一个
 * @param {Object} [options.s3mOptions] [S3M支持的参数]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html?classFilter=S3MTilesLayer} ,示例： {"selectEnabled":false},
 * @param {Object} [options.position] 模型新的中心点位置（移动模型）
 * @param {Number} options.position.alt 获取或设置底部高程。（单位：米）
 *
 * @param {String|Number} [options.id = uuid()] 图层id标识
 * @param {String|Number} [options.pid = -1] 图层父级的id，一般图层管理中使用
 * @param {String} [options.name = ''] 图层名称
 * @param {Boolean} [options.show = true] 图层是否显示
 * @param {BaseClass|Boolean} [options.eventParent]  指定的事件冒泡对象，默认为map对象，false时不冒泡
 * @param {Object} [options.center] 图层自定义定位视角 {@link Map#setCameraView}
 * @param {Number} options.center.lng 经度值, 180 - 180
 * @param {Number} options.center.lat 纬度值, -90 - 90
 * @param {Number} [options.center.alt] 高度值
 * @param {Number} [options.center.heading] 方向角度值，绕垂直于地心的轴旋转角度, 0-360
 * @param {Number} [options.center.pitch] 俯仰角度值，绕纬度线旋转角度, 0-360
 * @param {Number} [options.center.roll] 翻滚角度值，绕经度线旋转角度, 0-360
 * @param {Boolean} [options.flyTo] 加载完成数据后是否自动飞行定位到数据所在的区域。
 * @export
 * @class S3MLayer
 * @extends {BaseLayer}
 */
export class S3MLayer extends BaseLayer {
  /**
   * 模型对应的Cesium.S3MTilesLayer图层组
   * @type {Object[]}
   * @readonly
   * @see http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html
   */
  get layer() {
    return this._layerArr;
  }

  /**
   * 设置S3M图层本身支持的参数
   * @type {Object}
   * @see [S3M支持的参数]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html?classFilter=S3MTilesLayer}
   */
  get s3mOptions() {
    return this.options.s3mOptions;
  }
  set s3mOptions(value) {
    for (let key in value) {
      let val = value[key];
      this.options.s3mOptions[key] = val;

      if (key == "transparentBackColor") {
        //去黑边，与offset互斥，注意别配置offset
        val = Cesium.Color.fromCssColorString(val);
      } else if (key == "transparentBackColorTolerance") {
        val = Number(val);
      }

      for (let i = 0; i < this._layerArr.length; i++) {
        let layer = this._layerArr[i];
        if (layer == null) {
          continue;
        }
        layer[key] = val;
      }
    }
  }

  /**
   * 对象添加到地图前创建一些对象的钩子方法，
   * 只会调用一次
   * @return {void}  无
   * @private
   */
  _mountedHook() {
    //场景添加S3M图层服务
    let promise;
    if (this.options.layername) {
      promise = this._map.scene.addS3MTilesLayerByScp(this.options.url, {
        name: this.options.layername,
        autoSetVie: this.options.flyTo,
        cullEnabled: this.options.cullEnabled,
      });
    } else {
      promise = this._map.scene.open(this.options.url, this.options.sceneName, {
        autoSetVie: this.options.flyTo,
      });
    }

    Cesium.when(
      promise,
      (smLayer) => {
        if (Array.isArray(smLayer)) {
          this._layerArr = smLayer;
        } else {
          this._layerArr = [smLayer];
        }

        //设置图层属性
        for (let i = 0; i < this._layerArr.length; i++) {
          let layer = this._layerArr[i];
          if (layer == null) {
            continue;
          }

          layer.isS3M = true; //标识下

          //s3mOptions
          if (this.options.s3mOptions) {
            for (let key in this.options.s3mOptions) {
              let val = this.options.s3mOptions[key];
              if (key == "transparentBackColor") {
                //去黑边，与offset互斥，注意别配置offset
                layer[key] = Cesium.Color.fromCssColorString(val);
              } else if (key == "transparentBackColorTolerance") {
                layer[key] = Number(val);
              } else {
                layer[key] = this.options.s3mOptions[key];
              }
            }
          }

          //高度调整 offset.z
          if (this.options?.position?.alt) {
            layer.style3D.bottomAltitude = this.options.position.alt;
            layer.refresh();
          }
        }

        if (this.options.flyTo) {
          this.flyToByAnimationEnd();
        }

        if (this.options.dataUrl) {
          for (let i = 0; i < this._layerArr.length; i++) {
            let ql = this._layerArr[i];

            //读取子图层信息，通过数组的方式返回子图层的名称以及子图层所包含的对象的IDs
            ql.setQueryParameter({
              url: this.options.dataUrl,
              dataSourceName: ql.name.split("@")[1],
              dataSetName: ql.name.split("@")[0],
              isMerge: true,
            });

            //获取图层风格
            //Note_GJ: rgba, 1为不透明，0为全透明。已经在模型中导入材质，所以这里的颜色不特别设置
            //var style3D = new Cesium.Style3D();
            // var color = Cesium.Color.fromCssColorString("#919191");//混泥土颜色 RGB(145, 145,145)
            // style3D.fillForeColor = color;
            // ql.style3D = style3D;
            //设置后需刷新图层
            // ql.refresh();
            ql.selectEnabled = true;
          }
        }
      },
      (error) => {
        this.showError("渲染时发生错误，已停止渲染。", error);
      }
    );
  }

  /**
   * 对象添加到地图上的创建钩子方法，
   * 每次add时都会调用
   * @return {void}  无
   * @private
   */
  _addedHook() {
    for (let i in this._layerArr) {
      this._layerArr[i].visible = true;
      this._layerArr[i].show = true;
    }
  }

  /**
   * 对象从地图上移除的创建钩子方法，
   * 每次remove时都会调用
   * @return {void}  无
   * @private
   */
  _removedHook() {
    if (this._layerArr) {
      for (let i in this._layerArr) {
        this._layerArr[i].visible = false;
        this._layerArr[i].show = false;
      }
    }
  }

  /**
   * 设置透明度
   * @param {Number} value 透明度
   * @return {void}  无
   */
  setOpacity(value) {
    if (this._layerArr) {
      for (let i = 0; i < this._layerArr.length; i++) {
        let item = this._layerArr[i];
        if (item == null) {
          continue;
        }

        item.style3D.fillForeColor.alpha = value;
      }
    }
  }

  //定位至数据区域
  flyTo(options = {}) {
    if (this.options.center) {
      this._map.setCameraView(this.options.center, options);
    } else if (this.options.extent) {
      this._map.flyToExtent(this.options.extent, options);
    }
  }
}
mars3d.layer.S3MLayer = S3MLayer;

//注册下
mars3d.LayerUtil.register("supermap_s3m", S3MLayer);

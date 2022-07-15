import * as mars3d from "mars3d"
const Cesium = mars3d.Cesium
const BaseLayer = mars3d.layer.BaseLayer

/**
 * 天地图 三维地名服务图层
 * 【需要引入 mars3d-tdt 插件库】
 * @param {Object} [options] 参数对象，包括以下：
 * @param {String} [options.url='https://t{s}.tianditu.gov.cn/mapservice/GetTiles'] 天地图服务地址
 * @param {String} [options.subdomains='01234567'] 服务负载子域
 * @param {String} [options.key=mars3d.Token.tianditu] 天地图服务token令牌
 *
 * @param {String|Number} [options.id = createGuid()] 图层id标识
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
 * @class TdtDmLayer
 * @extends {BaseLayer}
 */
export class TdtDmLayer extends BaseLayer {
  get layer() {
    return this.wtfs
  }

  // 对象添加到地图上的创建钩子方法
  _addedHook() {
    // 服务域名
    const tdtUrl = this.options.url || "https://t{s}.tianditu.gov.cn/mapservice/GetTiles"
    const token = this.options.key || mars3d.Token.tianditu

    // 服务负载子域
    let subdomains
    if (Array.isArray(this.options.subdomains)) {
      subdomains = this.options.subdomains.slice()
    } else if (Cesium.defined(this.options.subdomains) && this.options.subdomains.length > 0) {
      subdomains = this.options.subdomains.split("")
    } else {
      subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"]
    }

    if (!Cesium.GeoWTFS) {
      console.error("请确认正确引入天地图官方提供的cesiumTdt.js文件，并确认无冲突！")
      return
    }

    // 叠加三维地名服务
    const wtfs = new Cesium.GeoWTFS({
      ...this.options,
      viewer: this._map.viewer,
      subdomains: subdomains,
      metadata: {
        boundBox: {
          minX: -180,
          minY: -90,
          maxX: 180,
          maxY: 90
        },
        minLevel: 1,
        maxLevel: 20
      },
      aotuCollide: true, // 是否开启避让
      collisionPadding: [5, 10, 8, 5], // 开启避让时，标注碰撞增加内边距，上、右、下、左
      serverFirstStyle: true, // 服务端样式优先
      labelGraphics: {
        font: "28px sans-serif",
        fontSize: 28,
        fillColor: Cesium.Color.WHITE,
        scale: 0.5,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 5,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        showBackground: false,
        backgroundColor: Cesium.Color.RED,
        backgroundPadding: new Cesium.Cartesian2(10, 10),
        horizontalOrigin: Cesium.HorizontalOrigin.MIDDLE,
        verticalOrigin: Cesium.VerticalOrigin.TOP,
        eyeOffset: Cesium.Cartesian3.ZERO,
        pixelOffset: new Cesium.Cartesian2(0, 8)
      },
      billboardGraphics: {
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
        eyeOffset: Cesium.Cartesian3.ZERO,
        pixelOffset: Cesium.Cartesian2.ZERO,
        alignedAxis: Cesium.Cartesian3.ZERO,
        color: Cesium.Color.WHITE,
        rotation: 0,
        scale: 1,
        width: 18,
        height: 18
      }
    })

    // 三维地名服务，使用wtfs服务
    wtfs.getTileUrl = function () {
      return tdtUrl + "?lxys={z},{x},{y}&tk=" + token
    }

    wtfs.initTDT([
      { x: 6, y: 1, level: 2, boundBox: { minX: 90, minY: 0, maxX: 135, maxY: 45 } },
      { x: 7, y: 1, level: 2, boundBox: { minX: 135, minY: 0, maxX: 180, maxY: 45 } },
      { x: 6, y: 0, level: 2, boundBox: { minX: 90, minY: 45, maxX: 135, maxY: 90 } },
      { x: 7, y: 0, level: 2, boundBox: { minX: 135, minY: 45, maxX: 180, maxY: 90 } },
      { x: 5, y: 1, level: 2, boundBox: { minX: 45, minY: 0, maxX: 90, maxY: 45 } },
      { x: 4, y: 1, level: 2, boundBox: { minX: 0, minY: 0, maxX: 45, maxY: 45 } },
      { x: 5, y: 0, level: 2, boundBox: { minX: 45, minY: 45, maxX: 90, maxY: 90 } },
      { x: 4, y: 0, level: 2, boundBox: { minX: 0, minY: 45, maxX: 45, maxY: 90 } },
      { x: 6, y: 2, level: 2, boundBox: { minX: 90, minY: -45, maxX: 135, maxY: 0 } },
      { x: 6, y: 3, level: 2, boundBox: { minX: 90, minY: -90, maxX: 135, maxY: -45 } },
      { x: 7, y: 2, level: 2, boundBox: { minX: 135, minY: -45, maxX: 180, maxY: 0 } },
      { x: 5, y: 2, level: 2, boundBox: { minX: 45, minY: -45, maxX: 90, maxY: 0 } },
      { x: 4, y: 2, level: 2, boundBox: { minX: 0, minY: -45, maxX: 45, maxY: 0 } },
      { x: 3, y: 1, level: 2, boundBox: { minX: -45, minY: 0, maxX: 0, maxY: 45 } },
      { x: 3, y: 0, level: 2, boundBox: { minX: -45, minY: 45, maxX: 0, maxY: 90 } },
      { x: 2, y: 0, level: 2, boundBox: { minX: -90, minY: 45, maxX: -45, maxY: 90 } },
      { x: 0, y: 1, level: 2, boundBox: { minX: -180, minY: 0, maxX: -135, maxY: 45 } },
      { x: 1, y: 0, level: 2, boundBox: { minX: -135, minY: 45, maxX: -90, maxY: 90 } },
      { x: 0, y: 0, level: 2, boundBox: { minX: -180, minY: 45, maxX: -135, maxY: 90 } }
    ])

    this.wtfs = wtfs
  }

  // 对象从地图上移除的创建钩子方法
  _removedHook() {
    if (this.wtfs) {
      this.wtfs.destroy()
      this.wtfs = null
    }
  }
}
mars3d.layer.TdtDmLayer = TdtDmLayer

// 注册下
mars3d.layer.register("tdt_dm", TdtDmLayer)

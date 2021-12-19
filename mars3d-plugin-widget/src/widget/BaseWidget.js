import * as mars3d from "mars3d";
import { Loader } from "./loader";
import { eventTarget, getCacheVersion, getDefWindowOptions } from "./widgetManager";
import { WidgetEventType } from "./WidgetEventType";

let jQuery = window.jQuery;
let layer = window.layer; //请引入layer弹窗插件
let BaseClass = mars3d.BaseClass;

let _resources_cache = [];

/**
 * widget 配置参数
 *
 * @typedef {Object} BaseWidget.widgetOptions
 *
 * @property {String} name 必须，中文名称，用于标识和弹窗标题。
 * @property {String} uri 必须，JS文件路径，路径是相对于widgets目录的路径。如："widgets/bookmark/widget.js"
 * @property {String} [id] 定义该插件的唯一标识,方便后续判断。
 * @property {Boolean} [autoDisable=true] 激活其他新插件时，是否自动释放本插件
 * @property {Boolean} [disableOther=true] 激活本插件时，是否释放其它已激活的插件
 * @property {String} [group] 配置group后，同group下的widget互斥，打开任意一个会自动释放其他的
 * @property {object} [windowOptions] 存在弹窗的插件的弹窗相关参数配置，更多参数请参考 [layer弹窗API]{@link https://www.layui.com/doc/modules/layer.html} 包括：
 * @property {Number|String} [windowOptions.width] 窗口宽度，可以是 像素数字(像素值) 或者 字符串(屏幕宽度百分比)，示例：200 或 "20%"
 * @property {Number|String} [windowOptions.height] 窗口高度，可以是 像素数字(像素值) 或者 字符串(屏幕高度百分比)，示例：600 或 "50%"
 * @property {String|Object} [windowOptions.position='auto'] 窗口所在位置坐标，配置字符串可选值：auto垂直水平居中，t顶部,b底部,r右边缘,l左边缘,lt左上角,lb左下角,rt右上角,rb右下角；也可以配置对象：
 * @property {Number|String} [windowOptions.position.top] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕高度百分比)，示例：10 或 "5%"
 * @property {Number|String} [windowOptions.position.bottom] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕高度百分比)，示例：10 或 "5%"
 * @property {Number|String} [windowOptions.position.left] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕宽度百分比)，示例：10 或 "5%"
 * @property {Number|String} [windowOptions.position.right] 位置css的top值，可以是 像素数字(像素值) 或者 字符串(屏幕宽度百分比)，示例：10 或 "5%"
 * @property {Number} [windowOptions.minHeight] 限定的窗口最小高度(像素值)，默认不限制
 * @property {Number} [windowOptions.maxHeight] 限定的窗口最大高度(像素值)，默认不限制
 * @property {Number} [windowOptions.minWidth] 限定的窗口最小宽度(像素值)，默认不限制
 * @property {Number} [windowOptions.maxWidth] 限定的窗口最大宽度(像素值)，默认不限制
 *
 * @property {Boolean} [windowOptions.maxmin=true] 是否可以在弹层右下角拖动来拉伸尺寸
 * @property {Number|Array} [windowOptions.shade=0] 遮罩，默认为0不显示，可配置数字0.3透明度的黑色背景（'#000'），其他颜色，可以shade: [0.8, '#393D49']
 * @property {Boolean} [windowOptions.shadeClose=false] 当shade是存在的，点击弹层外区域后是否关闭弹窗。
 * @property {Number} [windowOptions.closeBtn=1] 当为0时，不显示关闭按钮，配置1和2来展示两种风格的关闭按钮
 * @property {Number} [windowOptions.noTitle=false] 是否不显示标题，为true是不显示标题
 *
 * @property {Boolean} [openAtStart=false] 打开系统后是否自动启动本插件
 * @property {String} [style] 添加到widget的view中的class样式名
 * @property {Object} [css] 添加到widget的css值
 * @property {Boolean} [show=true] 激活后是否显示弹窗，false时激活后自动隐藏弹窗。
 * @property {*} [其他] 传入数据等，定义的任意参数在widget内部方法中都可以通过this.config获取到
 */

/**
 * widget基础类,
 * 需要继承后使用，不用手动实例化，框架内部自动实例化及相关处理。
 * 【需要引入  mars3d-widget 插件库】
 *
 * @param {Map} map 地图对象
 * @param {BaseWidget.widgetOptions} options 配置参数
 * @class BaseWidget
 * @extends {BaseClass}
 * @see [支持的事件类型]{@link WidgetEventType}

 * @example
//使用示例
class MyWidget extends mars3d.widget.BaseWidget {
  //外部资源配置
  get resources() {
    return [
      'js/test.js', //当前同目录下
      './lib/dom2img/dom-to-image.js', //主页面相同目录下
    ]
  }
  //弹窗配置
  get view() {
    return {
      type: 'window',
      url: 'view.html',
      windowOptions: {  width: 250 },
    }
  }
  //初始化[仅执行1次]
  create() {}
  //每个窗口创建完成后调用
  winCreateOK(opt, result) {
    this.viewWindow = result
  }
  //打开激活
  activate() {}
  //关闭释放
  disable() {
    this.viewWindow = null
  }
}

//注册到widget管理器中。
mars3d.widget.bindClass(MyWidget)
 */
export class BaseWidget extends BaseClass {
  constructor(map, options) {
    super(options);

    /**
     *  获取当前地图
     * @type {Map}
     * @readonly
     */
    this.map = map;

    /**
     *  获取当前配置参数
     * @type {BaseWidget.widgetOptions}
     * @readonly
     */
    this.options = options; //配置的config信息

    /**
     *  获取当前配置参数，别名，同options
     * @type {BaseWidget.widgetOptions}
     * @readonly
     */
    this.config = options;

    /**
     *  获取当前widget的目录路径
     * @type {String}
     * @readonly
     */
    this.path = options.path || ""; //当前widget目录相对路径

    /**
     *  是否激活状态
     * @type {Boolean}
     * @readonly
     */
    this.isActivate = false;

    /**
     *  是否已创建
     * @type {Boolean}
     * @readonly
     */
    this.isCreate = false;

    this._viewcreate_allcount = 0;
    this._viewcreate_okcount = 0;
    this._viewConfig = this.view;

    this.init();
  }

  /**
   * 该模块依赖的外部js、css资源文件，会在实例化之前加入的页面中。
   * 默认引用是当前widget所在同path目录的资源，
   * 相当于html主页面的资源 或 外部资源 请 以 “/” 或 “.” 或 “http” 开始的url
   * @type {String[]}
   * @readonly
   * @abstract
   */
  get resources() {
    return null;
  }

  /**
   * 定义关联的view弹窗或页面配置信息，目前支持3种类型，
   * （1）type:'window'，iframe模式弹窗	,参考_example示例，	独立的html子页面，比较自由，简单粗暴、无任何限制；可以每个页面用不同的UI和第三方插件不用考虑冲突问题；任何水平的开发人员均容易快速开发。
   * （2）type:'divwindow'，div元素模式弹窗	参考_example_divwin示例，可直接互相访问，这种模式弊端是易引起模块间id命名冲突，在css和html中命名时需注意。
   * （3）type:'append'，任意html元素	参考_example_append示例，任意div节点，比较自由。
   * 为空时表示当前模块无关联的view页面，
   * 其中url地址规则，参考resources说明
   * @type {Object|Object[]}
   * @readonly
   * @abstract
   */
  get view() {
    return null;
  }

  //==============激活插件=================
  /**
   * 激活widget，同 mars3d.widget.activate方法
   * @return {void}  无
   */
  activateBase() {
    let that = this;

    if (this.isActivate) {
      //已激活状态时跳出
      this.eachView(function (viewopt) {
        if (viewopt._dom) {
          //将层置顶
          jQuery(".layui-layer").each(function () {
            jQuery(this).css("z-index", 19891000);
          });
          jQuery(viewopt._dom).css("z-index", 19891014);
        }
      });
      return;
    }

    eventTarget.fire(WidgetEventType.beforeActivate, {
      sourceTarget: this,
    });
    this.beforeActivate();
    this.isActivate = true;

    if (!this.isCreate) {
      eventTarget.fire(WidgetEventType.beforeCreate, {
        sourceTarget: this,
      });

      //首次进行创建
      if (this.resources && this.resources.length > 0) {
        let resources = [];

        for (let i = 0; i < this.resources.length; i++) {
          let _resource = this.resources[i];
          _resource = this._getUrl(_resource);

          if (_resources_cache.indexOf(_resource) != -1) {
            continue;
          } //不加重复资源

          resources.push(_resource);
        }
        _resources_cache = _resources_cache.concat(resources); //不加重复资源

        Loader.async(resources, function () {
          let result = that.create(function () {
            that._createWidgetView();
            that.isCreate = true;
          });
          eventTarget.fire(WidgetEventType.created, {
            sourceTarget: that,
          });

          if (result) {
            return;
          }
          if (that.options.createAtStart) {
            that.options.createAtStart = false;
            that.isActivate = false;
            that.isCreate = true;
            return;
          }
          that._createWidgetView();
          that.isCreate = true;
        });
        return;
      } else {
        let result = this.create(function () {
          that._createWidgetView();
          this.isCreate = true;
        });
        eventTarget.fire(WidgetEventType.created, {
          sourceTarget: this,
        });

        if (result) {
          return;
        }
        if (that.options.createAtStart) {
          that.options.createAtStart = false;
          that.isActivate = false;
          that.isCreate = true;
          return;
        }
      }
      this.isCreate = true;
    }
    this._createWidgetView();
  }

  /**
   * 构造方法完成后的钩子方法，子类继承后按需使用
   * @return {void}  无
   * @abstract
   */
  init() {}

  /**
   * 模块初始化，仅首次初始化执行1次
   * @param {Function} [endfun] 当create内存在异步时，可以异步后调用下endfun
   * @return {void}  无
   * @abstract
   */
  create() {}

  //创建插件的view
  _createWidgetView() {
    let viewopt = this._viewConfig;
    if (viewopt === undefined || viewopt === null) {
      this._startActivate();
    } else if (Array.isArray(viewopt)) {
      this._viewcreate_allcount = viewopt.length;
      this._viewcreate_okcount = 0;

      for (let i = 0; i < viewopt.length; i++) {
        this.createItemView(viewopt[i]);
      }
    } else {
      this._viewcreate_allcount = 1;
      this._viewcreate_okcount = 0;
      this.createItemView(viewopt);
    }
  }

  /**
   * 遍历所有view配置
   *
   * @param {Function} callback 回调方法
   * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
   * @return {*} callback执行的返回结果
   */
  eachView(callback, index) {
    let viewopt = this._viewConfig;
    if (viewopt === undefined || viewopt === null) {
      return false;
    } else if (Array.isArray(viewopt)) {
      let hascal = false;
      if (index != null) {
        return callback(viewopt[index]);
      }
      for (let i = 0; i < viewopt.length; i++) {
        hascal = callback(viewopt[i]);
      }
      return hascal;
    } else {
      return callback(viewopt);
    }
  }

  createItemView(viewopt) {
    let that = this;
    switch (viewopt.type) {
      default:
      case "window":
        this._openWindow(viewopt);
        break;
      case "divwindow":
        this._openDivWindow(viewopt);
        break;
      case "append":
        that.getHtml(this._getUrl(viewopt.url), function (html) {
          that._appendView(viewopt, html);
        });
        break;
      case "custom": //自定义
        viewopt.open(
          this._getUrl(viewopt.url),
          function (html) {
            that.winCreateOK(viewopt, html);
            eventTarget.fire(WidgetEventType.openView, {
              sourceTarget: that,
              view: viewopt,
              dom: html,
            });
            that._viewcreate_okcount++;
            if (that._viewcreate_okcount >= that._viewcreate_allcount) {
              that._startActivate(html);
            }
          },
          this
        );
        break;
    }
  }

  //==============layer弹窗=================
  _openWindow(viewopt) {
    let view_url = this._getUrl(viewopt.url);

    let opts = {
      type: 2,
      content: [view_url, "no"],
      success: (layero, index) => {
        if (!this.isActivate) {
          layer.close(index);
          return;
        }
        if (viewopt._layerIdx != index) {
          layer.close(viewopt._layerIdx);
          viewopt._layerIdx = index;
        }

        viewopt._layerOpening = false;
        viewopt._dom = layero;

        //得到iframe页的窗口对象，执行iframe页的方法：viewWindow.method();
        let viewWindow = window[layero.find("iframe")[0]["name"]];

        //设置css
        if (this.options.css) {
          jQuery("#layui-layer" + viewopt._layerIdx).css(this.options.css);
        }

        //隐藏弹窗
        if (this.options.hasOwnProperty("visible") && !this.options.visible) {
          jQuery(layero).hide();
        }

        layer.setTop(layero);

        this.winCreateOK(viewopt, viewWindow);
        eventTarget.fire(WidgetEventType.openView, {
          sourceTarget: this,
          view: viewopt,
          dom: layero,
        });

        this._viewcreate_okcount++;
        if (this._viewcreate_okcount >= this._viewcreate_allcount) {
          this._startActivate(layero);
        }

        //通知页面,页面需要定义initWidgetView方法
        if (viewWindow && viewWindow.initWidgetView) {
          if (this.config?.style) {
            jQuery(viewWindow.document.body).addClass(this.config.style);
          }

          viewWindow.initWidgetView(this);
        } else {
          mars3d.Log.logError(view_url + "页面没有定义function initWidgetView(widget)方法，无法初始化widget页面!");
        }
      },
    };
    if (viewopt._layerIdx && viewopt._layerIdx > 0) {
      layer.close(viewopt._layerIdx);
      viewopt._layerIdx = -1;
    }

    viewopt._layerOpening = true;
    viewopt._layerIdx = layer.open(this._getWinOpt(viewopt, opts));
  }
  _openDivWindow(viewopt) {
    let view_url = this._getUrl(viewopt.url);
    //div弹窗
    this.getHtml(view_url, (data) => {
      let opts = {
        type: 1,
        content: data,
        success: (layero, index) => {
          if (!this.isActivate) {
            layer.close(index);
            return;
          }
          if (viewopt._layerIdx != index) {
            layer.close(viewopt._layerIdx);
            viewopt._layerIdx = index;
          }

          viewopt._layerOpening = false;
          viewopt._dom = layero;

          //隐藏弹窗
          if (this.options.hasOwnProperty("show") && !this.options.show) {
            jQuery(layero).hide();
          }

          layer.setTop(layero);
          this.winCreateOK(viewopt, layero);
          eventTarget.fire(WidgetEventType.openView, {
            sourceTarget: this,
            view: viewopt,
            dom: layero,
          });

          this._viewcreate_okcount++;
          if (this._viewcreate_okcount >= this._viewcreate_allcount) {
            this._startActivate(layero);
          }
        },
      };
      viewopt._layerOpening = true;
      viewopt._layerIdx = layer.open(this._getWinOpt(viewopt, opts));
    });
  }
  _getUrl(url) {
    url = this.addCacheVersion(url);

    if (url.startsWith("/") || url.startsWith(".") || url.startsWith("http")) {
      return url;
    } else {
      return this.path + url;
    }
  }
  _getWinOpt(viewopt, opts) {
    //优先使用cofig中配置，覆盖js中的定义
    let def = getDefWindowOptions();

    let windowOptions = { ...def, ...viewopt.windowOptions, ...this.options.windowOptions };
    viewopt.windowOptions = windowOptions; //赋值

    let that = this;
    let _size = this._getWinSize(windowOptions);

    let title = false;
    if (!windowOptions.noTitle) {
      title = this.options.name || " ";
      if (this.options.icon) {
        title = '<i class="' + this.options.icon + '" ></i>&nbsp;' + title;
      }
    }

    //默认值
    let defOpts = {
      title: title,
      area: _size.area,
      offset: _size.offset,
      shade: 0,
      maxmin: false,
      beforeEnd: function () {
        that.beforeDisable();
      },
      end: function () {
        // 销毁后触发的回调
        viewopt._layerIdx = -1;
        viewopt._dom = null;
        that.disableBase();
      },
      full: function (dom) {
        //最大化后触发的回调
        that.winFull(dom);
      },
      min: function (dom) {
        //最小化后触发的回调
        that.winMin(dom);
      },
      restore: function (dom) {
        //还原 后触发的回调
        that.winRestore(dom);
      },
    };
    return { ...defOpts, ...windowOptions, ...opts };
  }
  //计算弹窗大小和位置
  _getWinSize(windowOptions) {
    //获取高宽
    let _width = this.bfb2Number(windowOptions.width, document.documentElement.clientWidth, windowOptions);
    let _height = this.bfb2Number(windowOptions.height, document.documentElement.clientHeight, windowOptions);

    //计算位置offset
    let offset = "";
    let position = windowOptions.position;
    if (position) {
      if (typeof position === "string") {
        //t顶部,b底部,r右边缘,l左边缘,lt左上角,lb左下角,rt右上角,rb右下角
        offset = position;
      } else if (typeof position === "object") {
        let _top;
        let _left;

        if (position.hasOwnProperty("top") && position.top != null) {
          _top = this.bfb2Number(position.top, document.documentElement.clientHeight, windowOptions);
        }
        if (position.hasOwnProperty("bottom") && position.bottom != null) {
          windowOptions._hasresize = true;

          let _bottom = this.bfb2Number(position.bottom, document.documentElement.clientHeight, windowOptions);

          if (_top != null) {
            _height = document.documentElement.clientHeight - _top - _bottom;
          } else {
            _top = document.documentElement.clientHeight - _height - _bottom;
          }
        }

        if (position.hasOwnProperty("left") && position.left != null) {
          _left = this.bfb2Number(position.left, document.documentElement.clientWidth, windowOptions);
        }
        if (position.hasOwnProperty("right") && position.right != null) {
          windowOptions._hasresize = true;
          let _right = this.bfb2Number(position.right, document.documentElement.clientWidth, windowOptions);

          if (_left != null) {
            _width = document.documentElement.clientWidth - _left - _right;
          } else {
            _left = document.documentElement.clientWidth - _width - _right;
          }
        }

        if (_top == null) {
          _top = (document.documentElement.clientHeight - _height) / 2;
        }
        if (_left == null) {
          _left = (document.documentElement.clientWidth - _width) / 2;
        }

        offset = [_top + "px", _left + "px"];
      }
    }

    //最大最小高度判断
    if (windowOptions.hasOwnProperty("minHeight") && _height < windowOptions.minHeight) {
      windowOptions._hasresize = true;
      _height = windowOptions.minHeight;
    }
    if (windowOptions.hasOwnProperty("maxHeight") && _height > windowOptions.maxHeight) {
      windowOptions._hasresize = true;
      _height = windowOptions.maxHeight;
    }

    //最大最小宽度判断
    if (windowOptions.hasOwnProperty("minWidth") && _width < windowOptions.minWidth) {
      windowOptions._hasresize = true;
      _width = windowOptions.minWidth;
    }
    if (windowOptions.hasOwnProperty("maxWidth") && _width > windowOptions.maxWidth) {
      windowOptions._hasresize = true;
      _width = windowOptions.maxWidth;
    }

    let area;
    if (_width && _height) {
      area = [_width + "px", _height + "px"];
    } else {
      area = _width + "px";
    }

    return { area: area, offset: offset };
  }

  /**
   * 更新窗口大小或位置，改变了主页面尺寸后需要调用(内部已自动调用)。
   * @return {void}  无
   */
  indexResize() {
    if (!this.isActivate) {
      return;
    }

    let that = this;
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx == null || viewopt._layerIdx == -1 || viewopt.windowOptions == null || !viewopt.windowOptions._hasresize) {
        return;
      }

      let _size = that._getWinSize(viewopt.windowOptions);

      let _style = {};
      if (Array.isArray(_size.area)) {
        if (_size.area[0]) {
          _style.width = _size.area[0];
        }
        if (_size.area[1]) {
          _style.height = _size.area[1];
        }
      }

      if (Array.isArray(_size.offset)) {
        if (_size.offset[1]) {
          _style.top = _size.offset[0];
        }
        if (_size.offset[1]) {
          _style.left = _size.offset[1];
        }
      }
      jQuery(viewopt._dom).attr("myTopLeft", true);
      layer.style(viewopt._layerIdx, _style);

      if (viewopt.type == "divwindow") {
        layer.iframeAuto(viewopt._layerIdx);
      }
    });
  }

  //==============直接添加dom节点=================
  _appendView(viewopt, html) {
    viewopt._dom = jQuery(html).appendTo(viewopt.parent || "body");

    //设置css
    if (this.options.css) {
      jQuery(viewopt._dom).css(this.options.css);
    }

    this.winCreateOK(viewopt, html);

    this._viewcreate_okcount++;
    if (this._viewcreate_okcount >= this._viewcreate_allcount) {
      this._startActivate(html);
    }
  }

  /**
   * 每个view窗口或页面创建完成后调用的钩子方法
   *
   * @param {Object} opt 对应的view配置
   * @param {Object|String} result 得到iframe页的窗口对象 或 view的html内容
   * @return {void}  无
   * @abstract
   */
  winCreateOK(opt, result) {}

  /**
   * 窗口最大化后触发后 的钩子方法
   * @return {void}  无
   * @abstract
   */
  winFull() {}

  /**
   * 窗口最小化后触发 的钩子方法
   * @return {void}  无
   * @abstract
   */
  winMin() {}

  /**
   * 最小化窗口
   * @return {void}  无
   */
  minView() {
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx) {
        layer.min(viewopt._layerIdx, viewopt);
      }
    });
  }

  /**
   * 还原窗口
   * @return {void}  无
   */
  restoreView() {
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx) {
        layer.restore(viewopt._layerIdx);
      }
    });
  }

  /**
   * 最大化窗口
   * @return {void}  无
   */
  fullView() {
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx) {
        layer.full(viewopt._layerIdx, viewopt);
      }
    });
  }

  /**
   * 窗口还原后触发 的钩子方法
   * @return {void}  无
   * @abstract
   */
  winRestore() {}

  _startActivate(layero) {
    this.activate(layero);
    eventTarget.fire(WidgetEventType.activated, {
      sourceTarget: this,
    });

    if (this.options.success) {
      this.options.success(this);
      delete this.options.success; //一次性的
    }
    if (!this.isActivate) {
      //窗口打开中没加载完成时，被释放
      this.disableBase();
    }
  }

  /**
   * 激活模块之前 的钩子方法
   * @return {void}  无
   * @abstract
   */
  beforeActivate() {}

  /**
   * 激活模块【类内部实现方法】
   * @return {void}  无
   * @abstract
   */
  activate() {}

  //==============释放插件=================

  /**
   * 释放插件，同 mars3d.widget.disable方法
   * @return {void}  无
   */
  disableBase() {
    if (!this.isActivate) {
      return;
    }
    this.isActivate = false;

    this.beforeDisable();
    eventTarget.fire(WidgetEventType.beforeDisable, {
      sourceTarget: this,
    });

    //关闭所有窗口
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx && viewopt._layerIdx > 0) {
        layer.close(viewopt._layerIdx);

        if (viewopt._layerOpening) {
          //窗口还在加载中,success方法中去关闭
        } else {
          viewopt._layerIdx = -1;
        }
        return true;
      } else {
        if (viewopt.type == "append" && viewopt._dom) {
          viewopt._dom.remove();
          viewopt._dom = null;
        }
        if (viewopt.type == "custom" && viewopt.close) {
          viewopt.close();
        }
        return false;
      }
    });

    this.disable();

    //还原配置为初始状态
    if (this.options.autoReset) {
      this.resetConfig();
    }
    eventTarget.fire(WidgetEventType.disabled, {
      sourceTarget: this,
    });
  }

  /**
   * 释放模块前
   * @return {void}  无
   * @abstract
   */
  beforeDisable() {}

  /**
   * 释放模块【类内部实现方法】
   * @return {void}  无
   * @abstract
   */
  disable() {}

  //==============其他方法=================
  bfb2Number(str, allnum, windowOptions) {
    if (typeof str === "string" && str.indexOf("%") != -1) {
      windowOptions._hasresize = true;

      return (allnum * Number(str.replace("%", ""))) / 100;
    }
    return str;
  }
  addCacheVersion(_resource) {
    if (_resource == null) {
      return _resource;
    }

    let cacheVersion = getCacheVersion();
    if (cacheVersion) {
      if (_resource.indexOf("?") == -1) {
        _resource += "?cache=" + cacheVersion;
      } else if (_resource.indexOf("cache=" + cacheVersion) == -1) {
        _resource += "&cache=" + cacheVersion;
      }
    }
    return _resource;
  }

  /**
   * 还原配置为初始状态
   * @return {void}  无
   */
  resetConfig() {
    if (this.options._firstConfigBak) {
      let _backData = this.options._firstConfigBak;
      for (let aa in _backData) {
        if (aa == "uri") {
          continue;
        }
        this.options[aa] = _backData[aa];
      }
    }
  }

  /**
   * 设置view弹窗的显示和隐藏，基于修改css实现
   *
   * @param {Boolean} show 是否显示
   * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
   * @return {void}  无
   */
  setViewShow(show, index) {
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx && viewopt._layerIdx > 0) {
        if (show) {
          jQuery("#layui-layer" + viewopt._layerIdx).show();
        } else {
          jQuery("#layui-layer" + viewopt._layerIdx).hide();
        }
      } else if (viewopt.type == "append" && viewopt._dom) {
        if (show) {
          jQuery(viewopt._dom).show();
        } else {
          jQuery(viewopt._dom).hide();
        }
      }
    }, index);
  }

  /**
   * 设置view弹窗的css
   *
   * @param {Object} style css值
   * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
   * @return {void}  无
   */
  setViewCss(style, index) {
    this.eachView(function (viewopt) {
      if (viewopt._layerIdx != null && viewopt._layerIdx > 0) {
        layer.style(viewopt._layerIdx, style);
      } else if (viewopt.type == "append" && viewopt._dom) {
        jQuery(viewopt._dom).css(style);
      }
    }, index);
  }

  /**
   * 设置view弹窗的标题
   *
   * @param {String} title css值
   * @param {Number} [index] 当有多个view时，可以指定单个操作的view的index
   * @return {void}  无
   */
  setTitle(title, index) {
    this.eachView(function (viewopt) {
      if (viewopt._dom) {
        viewopt._dom.find(".layui-layer-title").html(title);
      }
    }, index);
  }

  /**
   * 读取html页面的内容
   *
   * @param {string} url html页面的url
   * @param {Function} callback 读取完成后的回调方法
   * @return {void}  无
   */
  getHtml(url, callback) {
    jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "html",
      timeout: 0, //永不超时
      success: function (data) {
        callback(data);
      },
    });
  }
}

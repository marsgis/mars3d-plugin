/**
 * widget模块化框架，公共处理类
 * 【需要引入  mars3d-widget 插件库】
 * @module widget
 */
import * as mars3d from "mars3d"
import { Loader } from "./loader"
import { WidgetEventType } from "./WidgetEventType"

const jQuery = window.jQuery

// 内部参数
let thismap
const basePath = ""
let widgetsdata = []
let defoptions
let cacheVersion
let isdebuger
const removeKeys = ["_class"]

/**
 * 初始化widget管理器，在构造完成map后调用一次即可。
 *
 * @param {Map} map 地图对象
 * @param {Object} [widgetcfg={}] 全局配置(一般存放在widget.json)，包括：
 * @param {BaseWidget.widgetOptions} [widgetcfg.defaultOptions] 所有widget的默认参数值，可以系统内所有widget相同配置统一在此处传入，额外的个性化的再配置到各widget中。
 * @param {BaseWidget.widgetOptions[]} [widgetcfg.openAtStart] 默认自启动并不可释放的插件，其中autoDisable和openAtStart固定，设置无效。
 * @param {BaseWidget.widgetOptions[]} [widgetcfg.widgets] 所有插件配置，传入后后续激活时，只用传入uri即可。
 * @param {String} [widgetcfg.version] 加载资源时，附加的参数，主要为了清理浏览器缓存，可选值："time"（实时时间戳）或固定的字符串值，每次发布新版本换下固定值。
 * @param {Boolean} [widgetcfg.debugger] 是否显示插件测试栏，true时会在地图下侧显示所有插件测试按钮，方便测试。
 *
 * @param {String} [_basePath=''] widgets目录所在的主路径(统一前缀), 如果widgets目录不在主页面一起或存在路由时，可以传入自定义主目录，值为 widgets目录相对于当前html页面的相对路径。
 * @return {void}  无
 * @example
let widgetCfg ={
  "version": "2017",
  "defaultOptions": {
    "style": "dark",
    "windowOptions": {
      "skin": "layer-mars-dialog animation-scale-up",
      "position": {
        "top": 50,
        "right": 10
      },
      "maxmin": false,
      "resize": true
    },
    "autoReset": false,
    "autoDisable": true,
    "disableOther": true
  },
  "openAtStart": [
    {
      "name": "放大缩小按钮",
      "uri": "widgets/toolButton/zoom.js"
    }
  ],
  "widgets": [
    {
      "name": "模板-div弹窗",
      "uri": "widgets/_example_divwin/widget.js"
    },
    {
      "name": "模板-append模板",
      "uri": "widgets/_example_append/widget.js"
    }
  ]
}
mars3d.widget.init(map, widgetCfg, './')
 */
export function init(map, widgetcfg = {}, _basePath = "") {
  thismap = map

  widgetsdata = []
  defoptions = mars3d.Util.merge(
    {
      windowOptions: { position: "rt", maxmin: false, resize: true },
      autoDisable: true,
      disableOther: true
    },
    widgetcfg.defaultOptions
  )

  cacheVersion = widgetcfg.version
  if (cacheVersion === "time") {
    cacheVersion = new Date().getTime()
  }

  // 将自启动的加入
  let arrtemp = widgetcfg.openAtStart
  if (arrtemp && arrtemp.length > 0) {
    for (let i = 0; i < arrtemp.length; i++) {
      const item = arrtemp[i]
      if (!item.hasOwnProperty("uri") || item.uri === "") {
        // eslint-disable-next-line no-console
        console.error("widget未配置uri", item)
        continue
      }
      if (item.hasOwnProperty("visible") && !item.visible) {
        continue
      }

      item.autoDisable = false
      item.openAtStart = true
      item._nodebug = true

      bindDefOptions(item)

      item._firstConfigBak = { ...item }
      widgetsdata.push(item)
    }
  }

  // 显示测试栏
  // 为了方便测试，所有widget会在页面下侧生成一排按钮，每个按钮对应一个widget，单击后激活对应widget
  isdebuger = widgetcfg.debugger
  if (isdebuger) {
    const inhtml =
      '<div id="widget-testbar" class="mars3d-widgetbar animation-slide-bottom no-print-view" > ' +
      '     <div style="height: 30px; line-height:30px;"><b style="color: #4db3ff;">widget测试栏</b>&nbsp;&nbsp;<button  id="widget-testbar-remove"  type="button" class="btn btn-link btn-xs">关闭</button> </div>' +
      '     <button id="widget-testbar-disableAll" type="button" class="btn btn-info" ><i class="fa fa-globe"></i>漫游</button>' +
      "</div>"
    jQuery("body").append(inhtml)

    jQuery("#widget-testbar-remove").click(function (e) {
      removeDebugeBar()
    })
    jQuery("#widget-testbar-disableAll").click(function (e) {
      disableAll()
    })
  }

  // 将配置的加入
  arrtemp = widgetcfg.widgets
  if (arrtemp && arrtemp.length > 0) {
    for (let i = 0; i < arrtemp.length; i++) {
      const item = arrtemp[i]
      if (item.type === "group") {
        let inhtml =
          ' <div class="btn-group dropup">  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-align-justify"></i>' +
          item.name +
          ' <span class="caret"></span></button> <ul class="dropdown-menu">'
        for (let j = 0; j < item.children.length; j++) {
          const childItem = item.children[j]
          if (!childItem.hasOwnProperty("uri") || childItem.uri === "") {
            // eslint-disable-next-line no-console
            console.error("widget未配置uri", childItem)
            continue
          }

          inhtml +=
            ' <li data-widget="' + childItem.uri + '" class="widget-btn" ><a href="#"><i class="fa fa-star"></i>' + childItem.name + "</a></li>"

          bindDefOptions(childItem)
          childItem._firstConfigBak = { ...childItem }
          widgetsdata.push(childItem) // 将配置的加入
        }
        inhtml += "</ul></div>"

        if (isdebuger && !item._nodebug) {
          jQuery("#widget-testbar").append(inhtml)
        }
      } else {
        if (!item.hasOwnProperty("uri") || item.uri === "") {
          // eslint-disable-next-line no-console
          console.error("widget未配置uri", item)
          continue
        }

        // 显示测试栏
        if (isdebuger && !item._nodebug) {
          const inhtml =
            '<button type="button" class="btn btn-primary widget-btn" data-widget="' +
            item.uri +
            '"  > <i class="fa fa-globe"></i>' +
            item.name +
            " </button>"
          jQuery("#widget-testbar").append(inhtml)
        }

        bindDefOptions(item)
        item._firstConfigBak = { ...item }
        widgetsdata.push(item) // 将配置的加入
      }
    }

    if (isdebuger) {
      jQuery("#widget-testbar .widget-btn").each(function () {
        jQuery(this).click(function (e) {
          const uri = jQuery(this).attr("data-widget")
          if (!uri || uri === "") {
            return
          }

          if (isActivate(uri)) {
            disable(uri)
          } else {
            activate(uri)
          }
        })
      })
    }
  }

  for (let i = 0; i < widgetsdata.length; i++) {
    const item = widgetsdata[i]

    if (item.openAtStart || item.createAtStart) {
      _arrLoadWidget.push(item)
    }
  }

  jQuery(window).resize(function () {
    for (let i = 0; i < widgetsdata.length; i++) {
      const item = widgetsdata[i]
      if (item._class) {
        item._class.indexResize() // BaseWidget: indexResize
      }
    }
  })

  if (isdebuger) {
    const hash = getLocationParam()
    if (hash) {
      activate(hash)
    }
  }

  loadWidgetJs()
}

/**
 * 获取默认init时中传入配置的 windowOptions 参数
 * @return {Object} windowOptions参数默认值
 * @see BaseWidget.widgetOptions
 */
export function getDefWindowOptions() {
  return mars3d.Util.clone(defoptions.windowOptions, removeKeys)
}

function getLocationParam() {
  let param = window.location.toString()
  if (param.indexOf("#") === -1) {
    return ""
  }
  param = param.split("#")
  if (param && param.length > 0) {
    return param[1]
  }
}

function bindDefOptions(item) {
  // 赋默认值至options（跳过已存在设置值）
  if (defoptions) {
    for (const aa in defoptions) {
      if (aa === "windowOptions") {
        // for (var jj in defoptions['windowOptions']) {
        //    if (!item['windowOptions'].hasOwnProperty(jj)) {
        //        item['windowOptions'][jj] = defoptions['windowOptions'][jj];
        //    }
        // }
      } else if (!item.hasOwnProperty(aa)) {
        item[aa] = defoptions[aa]
      }
    }
  }

  // 赋值内部使用属性
  item.path = getFilePath(basePath + item.uri)
  item.name = item.name || item.label // 兼容name和label命名
}

/**
 * 激活指定 widget模块
 *
 * @param {String|BaseWidget.widgetOptions} item 指widget模块的uri 或 指模块的配置参数,当有配置参数时，参数优先级是：
 * 【activate方法传入的配置 > init方法传入的配置(widget.json) > widget.js内部配置的】
 * @param {Map} [item.map] 当单页面简单场景没有init时，也可以传入map来使用单个widget
 * @param {Boolean} [noDisableOther=false]  不释放其他已激活的widget
 * @return {BaseWidget.widgetOptions}  指widget模块对象
 * @example
//常用方式，直接使用uri
mars3d.widget.activate("widgets/bookmark/widget.js");

//使用对象，可以传入更多参数，具体参数参看配置项手册，。
mars3d.widget.activate({
  name:"视角书签"
  uri: "widgets/bookmark/widget.js",
  autoDisable: true,
  testdata:'测试数据1987', //传数据进widget内部，widget内部使用this.config.testdata获取到传的数据
});
 */
export function activate(item, noDisableOther) {
  if (!thismap && item.map) {
    init(item.map, {}, item.basePath)
  }

  // 参数是字符串id或uri时
  if (typeof item === "string") {
    item = { uri: item }

    if (noDisableOther != null) {
      // 是否释放其他已激活的widget
      item.disableOther = !noDisableOther
    }
  } else {
    if (!item.uri) {
      // eslint-disable-next-line no-console
      console.error("activate激活widget时需要uri参数！", item)
    }
  }

  let thisItem
  for (let i = 0; i < widgetsdata.length; i++) {
    const othitem = widgetsdata[i]
    if (item.uri === othitem.uri || (othitem.id && item.uri === othitem.id)) {
      thisItem = othitem
      if (thisItem.isloading) {
        return thisItem
      } // 激活了正在loading的widget 防止快速双击了菜单

      // 赋值
      for (const aa in item) {
        if (aa === "uri") {
          continue
        }
        thisItem[aa] = item[aa]
      }
      break
    }
  }

  if (!thisItem) {
    bindDefOptions(item)
    thisItem = item
    // 非config中配置的，外部传入，首次激活
    if (!item._firstConfigBak) {
      item._firstConfigBak = { ...item }
    }
    widgetsdata.push(item)
  }

  if (isdebuger) {
    // eslint-disable-next-line no-console
    console.log("开始激活widget：" + thisItem.uri)
    window.location.hash = "#" + thisItem.uri
  }

  // 释放其他已激活的widget
  if (thisItem.disableOther) {
    if (Array.isArray(thisItem.disableOther)) {
      disable(thisItem.disableOther)
    } else {
      disableAll(thisItem.uri, thisItem.group)
    }
  }

  if (thisItem.group) {
    disableGroup(thisItem.group, thisItem.uri)
  }

  // 激活本widget
  if (thisItem._class) {
    if (thisItem._class.isActivate) {
      // 已激活时
      if (thisItem._class.update) {
        // 刷新
        thisItem._class.update()
      } else {
        // 重启
        _reStart(thisItem)
      }
    } else {
      thisItem._class.activateBase() // BaseWidget: activateBase
    }
  } else {
    for (let i = 0; i < _arrLoadWidget.length; i++) {
      if (_arrLoadWidget[i].uri === thisItem.uri) {
        // 如果已在加载列表中的直接跳出
        return _arrLoadWidget[i]
      }
    }
    _arrLoadWidget.push(thisItem)

    if (_arrLoadWidget.length === 1) {
      loadWidgetJs()
    }
  }
  return thisItem
}

let timetemp
// 重启
function _reStart(thisItem) {
  clearInterval(timetemp)

  thisItem._class.disableBase()
  timetemp = setInterval(function () {
    if (thisItem._class.isActivate) {
      return
    }
    thisItem._class.activateBase()
    clearInterval(timetemp)
  }, 200)
}

/**
 * 获取指定的widget配置信息
 *
 * @param {String} uri widget的uri 或 id
 * @return {BaseWidget.widgetOptions} widget配置信息
 */
export function getWidget(uri) {
  for (let i = 0; i < widgetsdata.length; i++) {
    const item = widgetsdata[i]

    if (uri === item.uri || uri === item.id) {
      return item
    }
  }
}

/**
 * 获取指定的widget 对应的实例化对象
 *
 * @param {String} uri widget的uri 或 id
 * @return {BaseWidget} widget对应的实例化对象
 */
export function getClass(uri) {
  const item = getWidget(uri)
  if (item) {
    return item._class
  } else {
    return null
  }
}

/**
 * 获取widget的当前激活状态
 *
 * @param {String} uri widget的uri 或 id
 * @return {Boolean} 是否激活
 */
export function isActivate(uri) {
  const _class = getClass(uri)
  if (!_class) {
    return false
  }
  return _class.isActivate
}

/**
 * 释放指定的widget
 *
 * @param {String|String[]} uri widget的uri 或 id
 * @return {Boolean} 是否成功调用了释放
 */
export function disable(uri) {
  if (!uri) {
    return false
  }

  if (Array.isArray(uri)) {
    const arrUri = uri
    for (let i = 0; i < widgetsdata.length; i++) {
      const item = widgetsdata[i]

      for (let j = 0; j < arrUri.length; j++) {
        const uri = arrUri[j]
        if (item._class && (uri === item.uri || uri === item.id)) {
          item._class.disableBase()
          arrUri.splice(j, 1)
          break
        }
      }
    }
  } else {
    if (typeof uri === "object") {
      uri = uri.uri
    }
    for (let i = 0; i < widgetsdata.length; i++) {
      const item = widgetsdata[i]

      if (item._class && (uri === item.uri || uri === item.id)) {
        item._class.disableBase()
        return true
      }
    }
  }
  return false
}

/**
 * 关闭释放所有widget
 *
 * @export
 * @param {String|Boolean} [nodisable] 传string时 指定不释放的widget的uri或id ，传true值强制释放所有widget(默认autoDisable为false的widet不会释放)
 * @param {String} [group] 指定强制释放的group名(默认autoDisable为false的widet不会释放)，传入group值后会强制释放所有同group组的widget
 * @return {void}  无
 */
export function disableAll(nodisable, group) {
  for (let i = 0; i < widgetsdata.length; i++) {
    const item = widgetsdata[i]

    if (group && item.group === group) {
      // 同组别的全部释放
    } else {
      if (nodisable !== true && !item.autoDisable) {
        continue
      }
    }

    // 指定不释放的跳过
    if (nodisable && (nodisable === item.uri || nodisable === item.id)) {
      continue
    }

    if (item._class) {
      item._class.disableBase() // BaseWidget: disableBase
    }
  }
}

/**
 * 关闭释放同组widget
 *
 * @param {String} group 指定强制释放的group名
 * @param {String} [nodisable]  指定不释放的widget的uri或id
 * @return {void}  无
 */
export function disableGroup(group, nodisable) {
  if (!group) {
    return
  }

  for (let i = 0; i < widgetsdata.length; i++) {
    const item = widgetsdata[i]
    if (item.group === group) {
      // 指定不释放的跳过
      if (nodisable && (nodisable === item.uri || nodisable === item.id)) {
        continue
      }
      if (item._class) {
        item._class.disableBase() /// /BaseWidget: disableBase
      }
    }
  }
}

/**
 * 遍历所有widget
 * @param {Function} method 回调方法
 * @return {void}  无
 */
export function eachWidget(method) {
  for (let i = 0; i < widgetsdata.length; i++) {
    const item = widgetsdata[i]
    method(item)
  }
}

const _arrLoadWidget = []
let loadItem
let isloading
function loadWidgetJs() {
  if (_arrLoadWidget.length === 0) {
    return
  }

  if (isloading) {
    setTimeout(loadWidgetJs, 500)
    return
  }
  isloading = true

  loadItem = _arrLoadWidget[0]
  loadItem.isloading = true
  let _uri = loadItem.uri
  if (cacheVersion) {
    if (_uri.indexOf("?") === -1) {
      _uri += "?cache=" + cacheVersion
    } else {
      _uri += "&cache=" + cacheVersion
    }
  }

  if (window.NProgress) {
    window.NProgress.start()
  }

  fire(WidgetEventType.loadBefore, {
    sourceTarget: loadItem
  })

  Loader.async([basePath + _uri], function () {
    isloading = false
    loadItem.isloading = false

    if (window.NProgress) {
      window.NProgress.done(true)
    }

    _arrLoadWidget.shift()
    loadWidgetJs()
  })
}

/**
 * 绑定类到当前对应js的widget中。
 *
 * @param {BaseWidget} _class 定义的BaseWidget子类
 * @return {Object} 实例化后的对象
 */
export function bindClass(_class) {
  fire(WidgetEventType.load, {
    sourceTarget: _class
  })

  if (!loadItem) {
    const _jspath = getThisJSPath()
    for (let i = 0; i < widgetsdata.length; i++) {
      const item = widgetsdata[i]
      if (_jspath.endsWith(item.uri)) {
        item.isloading = false
        item._class = new _class(thismap, item)
        item._class.activateBase() // BaseWidget: activateBase
        return item._class
      }
    }
  } else {
    loadItem.isloading = false
    loadItem._class = new _class(thismap, loadItem)
    loadItem._class.activateBase() // BaseWidget: activateBase
    return loadItem._class
  }
}

function getThisJSPath() {
  let jsPath
  const js = document.scripts
  for (let i = js.length - 1; i >= 0; i--) {
    jsPath = js[i].src
    if (!jsPath) {
      continue
    }
    if (jsPath.indexOf("widgets") === -1) {
      continue
    }
    // jsPath = jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
    return jsPath
  }
  return ""
}

// 获取路径
function getFilePath(file) {
  const pos = file.lastIndexOf("/")
  return file.substring(0, pos + 1)
}

/**
 * 移除Widget测试栏（当有开启debugger时）
 * @return {void}  无
 */
export function removeDebugeBar() {
  jQuery("#widget-testbar").remove()
}

/**
 * 获取配置的version配置参数，用于附加清除浏览器缓存
 * @return {String} 配置的version参数
 */
export function getCacheVersion() {
  return cacheVersion
}

/**
 * 获取init方法传入的主目录配置参数
 * @return {String} 主目录配置参数
 */
export function getBasePath() {
  return basePath
}

/**
 * 销毁对象
 * @return {void}  无
 */
export function destroy() {
  for (let i = 0; i < widgetsdata.length; i++) {
    const item = widgetsdata[i]

    if (item._class) {
      item._class.disableBase() // BaseWidget: disableBase

      if (item._class.destroy) {
        item._class.destroy()
      }
      delete item._class
    }
  }

  thismap = null
}

// 事件相关
export const eventTarget = new mars3d.BaseClass()

/**
 * 绑定指定类型事件监听器
 *
 * @param {WidgetEventType|WidgetEventType[]} types 事件类型
 * @param {Function} [fn] 绑定的监听器回调方法
 * @param {Object} [context]  侦听器的上下文(this关键字将指向的对象)。
 * @return {void}  无
 */
export function on(types, fn, context) {
  return eventTarget.on(types, fn, context)
}

/**
 * 解除绑定指定类型事件监听器
 *
 * @param {WidgetEventType|WidgetEventType[]} types 事件类型
 * @param {Function} [fn] 绑定的监听器回调方法
 * @param {Object} [context]  侦听器的上下文(this关键字将指向的对象)。
 * @return {void}  无
 */
export function off(types, fn, context) {
  return eventTarget.off(types, fn, context)
}

/**
 * 触发指定类型的事件。
 *
 * @param {WidgetEventType} type 事件类型
 * @param {Object} data 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
 * @param {BaseClass|Object} [propagate=null] 将事件传播给父类 (用addEventParent设置)
 * @return {void}  无
 */
export function fire(type, data, propagate) {
  return eventTarget.fire(type, data, propagate)
}

/**
 * 绑定一次性执行的指定类型事件监听器
 * 与on类似，监听器只会被触发一次，然后被删除。
 *
 * @param {WidgetEventType|WidgetEventType[]} types 事件类型
 * @param {Function} [fn] 绑定的监听器回调方法
 * @param {Object} [context]  侦听器的上下文(this关键字将指向的对象)。
 * @return {void}  无
 */
export function once(types, fn, context) {
  return eventTarget.once(types, fn, context)
}

/**
 * 是否有绑定指定的事件
 *
 * @param {WidgetEventType} type 事件类型
 * @param {BaseClass} [propagate=null] 是否判断指定的父类 (用addEventParent设置的)
 * @return {Boolean} 是否存在
 */
export function listens(type, propagate) {
  return eventTarget.listens(type, propagate)
}

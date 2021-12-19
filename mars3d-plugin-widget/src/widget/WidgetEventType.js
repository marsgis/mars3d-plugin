/**
 * widget事件类型枚举, mars3d.widget.EventType
 * 【需要引入  mars3d-widget 插件库】
 *  @enum {String}
 */
const WidgetEventType = {
  /**
   * 在实例初始化之后、创建之前执行
   */
  beforeCreate: "beforeCreate",
  /**
   * 实例创建后执行
   */
  created: "created",
  /**
   * 在activat挂载开始之前调用
   */
  beforeActivate: "beforeActivate",
  /**
   * activate方法调用后
   */
  activated: "activated",
  /**
   *view弹窗构造完成后后调用
   */
  openView: "openView",
  /**
   * 实例销毁之前调用
   */
  beforeDisable: "beforeDisable",
  /**
   *实例销毁完成调用
   */
  disabled: "disabled",

  /**
   *加载完成 未做任何其他处理前
   */
  loadBefore: "loadBefore",
  /**
   *加载完成，执行所有内部处理后
   */
  load: "load",
};

export { WidgetEventType };

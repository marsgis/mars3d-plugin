import * as mars3d from "mars3d";

import "./theme/widget.scss";

import * as widget from "./widget/widgetManager";
// eslint-disable-next-line no-import-assign
mars3d.widget = widget;

import { BaseWidget } from "./widget/BaseWidget";
mars3d.widget.BaseWidget = BaseWidget;

import { WidgetEventType } from "./widget/WidgetEventType";
mars3d.widget.WidgetEventType = WidgetEventType;
mars3d.widget.EventType = WidgetEventType;

export { widget };

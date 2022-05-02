 
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/muyao1987/cdn/mars3d.cn/logo.png" width="300px" />
</p>
<p align="center">一款免费的三维地球客户端开发平台 ：Mars3D</p>
<p align="center">
  <a target="_black" href="https://github.com/marsgis/mars3d">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github">
  </a>
  <a target="_black" href="https://www.npmjs.com/package/mars3d">
  <img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars3d?style=flat&logo=npm">
  </a>
  <a target="_black" href="https://www.npmjs.com/package/mars3d">
  <img alt="Npm version" src="https://img.shields.io/npm/v/mars3d.svg?style=flat&logo=npm&label=version"/>
  </a>
</p>
Mars3D平台插件, 结合supermap超图库使用的功能插件
 


## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
  
### 打包编译项目
 运行`npm run build`来构建项目。 



## mars3d与超图的融合有2个方式

### 方式1：原生Cesium库+s3m插件
 mars3d(含Cesium) + s3m独立插件 + mars3d-supermap，需要引入的资源为：
```js
"mars3d": [
  "Cesium/Widgets/widgets.css", //原生Cesium
  "Cesium/Cesium.js",
  "turf/turf.min.js",
  "mars3d/mars3d.css", //mars3d
  "mars3d/mars3d.js",
  "mars3d/plugins/supermap/SuperMap3D.js", //s3m支持原生cesium的独立插件，参考 https://github.com/SuperMap/iClient3D-for-WebGL
  "mars3d/plugins/supermap/mars3d-supermap.js",//mars3d-supermap简化调用封装
],
```
更多参考mars3d功能示例中[S3M图层示例](https://mars3d.cn/editor.html?id=layer-other/s3m/basis)

#### 此方式的特别说明
经过测试，[SuperMap3D](https://github.com/SuperMap/iClient3D-for-WebGL/tree/main/Cesium_S3MLayer_Plugins/S3MTilesLayer)插件代码不是最新的，超图官网API很多在此插件中都没有。



### 方式2：需要替换Cesium库
超图版本Cesium + mars3d + mars3d-supermap ，需要引入的资源为：
```js
"mars3d": [
  "Cesium-supermap/Widgets/widgets.css", //超图版本Cesium 
  "Cesium-supermap/Cesium.js",
  "mars3d/plugins/compatible/cesium-version.js", //cesium版本兼容处理
  "turf/turf.min.js",
  "mars3d/mars3d.css", //mars3d
  "mars3d/mars3d.js",
  "mars3d/plugins/supermap/mars3d-supermap.js",//mars3d-supermap简化调用封装
],
```
相关示例和项目可以访问：[https://github.com/marsgis/mars3d-link-supermap](https://github.com/marsgis/mars3d-link-supermap/)
 
 
#### 此方式的特别说明
 不是所有功能都可以正常用，因为：

- 使用的是超图版Cesium，所以mars3d-cesium的所有修改都无效，影响到wfs、模型编辑、地形编辑等功能(可以用超图的相关API来替代实现)
- 超图Cesium修改了地球的默认参数，造成3dtiles加载位置偏差很大。




## 相关依赖 
 超图版Cesium、mars3d、
 


## Mars3D 是什么 
>  `Mars3D三维地球平台软件` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

 > Mars3D平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。


## 相关网站 

- Mars3D官网：[http://mars3d.cn](http://mars3d.cn)  

- Mars3D开源项目列表：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)

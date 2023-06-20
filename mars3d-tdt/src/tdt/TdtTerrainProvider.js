import * as mars3d from "mars3d"
const Cesium = mars3d.Cesium

/**
 * 天地图 地形服务
 * 【需要引入 mars3d-tdt 插件库】
 *
 * @param {object} [options] 参数对象，包括以下：
 * @param {string} [options.url='https://t{s}.tianditu.gov.cn/DataServer'] 天地图服务地址
 * @param {string} [options.subdomains='01234567'] 服务负载子域
 * @param {string} [options.key=mars3d.Token.tianditu] 天地图服务token令牌
 *
 * @export
 * @class TdtTerrainProvider
 * @extends {Cesium.TerrainProvider}
 */
export class TdtTerrainProvider extends Cesium.GeoTerrainProvider {
  constructor(options = {}) {
    if (!options.urls) {
      const baseurl = options.url || "https://t{s}.tianditu.gov.cn/mapservice/swdx"
      const token = options.key || mars3d.Token.tianditu

      let subdomains
      if (Array.isArray(options.subdomains)) {
        subdomains = options.subdomains.slice()
      } else if (Cesium.defined(options.subdomains) && options.subdomains.length > 0) {
        subdomains = options.subdomains.split("")
      } else {
        subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"]
      }

      const urls = []
      subdomains.forEach((element) => {
        const url = mars3d.Util.template(baseurl, { s: element }) + "?T=elv_c&tk=" + token
        urls.push(url)
      })

      options.urls = urls
    }
    super(options)

    this._layers = [] // 兼容  Boolean(scene.terrainProvider._layers)
  }
}
mars3d.LayerUtil.registerTerrainProvider("tdt", TdtTerrainProvider)

mars3d.provider.TdtTerrainProvider = TdtTerrainProvider

/** 请求后台的地址 */
export const BASEURL = import.meta.env.PUBLIC_BASEURL
/** 是否开发环境 */
export const isDEV = import.meta.env.DEV
/** 是否rdm环境 */
export const isRDM = import.meta.env.envMode === 'rdm'
/** vite启动的时间 */
export const BUILD_TIME = import.meta.env.PUBLIC_BUILD_TIME
/** 版本号 */
export const BUILD_V = import.meta.env.PUBLIC_BUILD_V
/** 项目名称 */
export const ProjectName = import.meta.env.PUBLIC__ProjectName
/** 路由前缀 */
export const RouteBasePah = `/h/${ProjectName}`

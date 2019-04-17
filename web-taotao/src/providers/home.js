import {fetchGet,fetchPost,sessionSet,sessionGet} from "../config/http";
export default {
  menuList(objParam){
    return fetchGet('home/menuList',objParam)
  },

  getHomecontents(objParam){
    return fetchGet('home/getContent',objParam)
  },

  getcontents(objParam){
    return fetchGet('getContent',objParam)
  },

  getcontentMessage(objParam){
    return fetchGet('view',objParam)
  }
}
 
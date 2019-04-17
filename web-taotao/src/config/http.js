import Vue from 'vue'
import axios from 'axios'
//响应timeout时间
axios.defaults.timeout = 30000;
//配置请求头
//axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common['DriveId'] = '1008623456';
//配置接口地址
//axios.defaults.baseURL = 'http://10.16.160.150:8081/';
axios.defaults.baseURL = 'http://localhost:9091/';
//返回一个Promise(post)
export function fetchPost(url, params) {//param 传object{a:3,b:4}格式 比较好
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
//返回一个Promise(get)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
Vue.prototype.fetchPost=fetchPost;
Vue.prototype.fetchGet=fetchGet;
//Vue.prototype.$Ajax = axios;//默认的方式。。。。。

export function sessionSet(key, val) {//vue实例外使用，eg：providers/LoginProvider.js中
  sessionStorage[key] = JSON.stringify(val);
}
export function sessionGet(key) {
  let v3= sessionStorage[key];
  if (v3 && v3 != 'null' && v3 != 'undefined') {
    return JSON.parse(v3);
  } else {
    return null;//null
  }
}
Vue.prototype.sessionSet=sessionSet;//vue实例内 使用
Vue.prototype.sessionGet=sessionGet;

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'normalize.css'
import 'normalize.css'
import 'grid.css' 
import JQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import {routes} from './routes';



global.JQuery = JQuery

let bootstrap = require('bootstrap')

//let normalize = require("normalize")

const api = axios.create({
  baseURL: 'http://localhost:54417/api/'
})

const axiosPlugin = {
  install(Vue){
    Vue.prototype.$api = api;
  }
}

Vue.use(axiosPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  routes,
  render: h => h(App)
})

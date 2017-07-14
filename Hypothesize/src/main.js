// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// notify app that vuex is installed
import Vuex from 'vuex'

// initiate usage of vuex
Vue.use( Vuex );

// import state file
import HypothesizeStore from './Store'

// create const with new instance of Vuex store
const store = new Vuex.Store( HypothesizeStore );

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app-hypothosize',

  store: store,

  template: '<App/>',

  components: { App }
})

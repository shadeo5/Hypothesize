// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// notify app that vuex is installed
import Vuex from 'vuex'

// initiate usage of vuex
Vue.use( Vuex );

// create const with new instance of Vuex to reference
const store = new Vuex.Store({

  //all properties and data that define our application's state
  state:{
    goals :
    [
      {
        "title" : "Goal 1",
        "tag"   : 'green',
        "complete" : false
      },
      {
        "title" : "Goal 2",
        "tag"   : 'green',
        "complete" : false
      }
    ]
  },

  // invoked by actions when changes to state object occur
  mutations:{

    renameTitle( state, title){
      state.goals.title = name;
    },

    addGoal( state ){
      let newGoal = {
        "title" : "New Goal",
        "tag"   : 'green',
        "complete" : false
      }
    }
  },

  //can call multiple mutations or other actions and validate data before commiting to mutation
  actions:{

    changeGoalTitle({ context, title }){
      context.commit( renameTitle, title )
    }

  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app-hypothosize',

  store: store,

  template: '<App/>',

  components: { App }
})

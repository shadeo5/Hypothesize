export default{ //make this data availble

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

    renameTitle( state, title ){
      state.goals.title = name;
    },

    addGoal( state ){
      let newGoal = {
        "title" : "New Goal",
        "tag"   : 'green',
        "complete" : false
      }
    },

    deleteGoal ( state ){
      console.log(this);
    }
  },

  //can call multiple mutations or other actions and validate data before commiting to mutation
  actions:{

    changeGoalTitle({ context, title }){
      context.commit( renameTitle, title )
    }

  }
}

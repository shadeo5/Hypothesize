export default{ //make this data availble

  //all properties and data that define our application's state
  focus :
  {
    index: null,
    title: "Goal Title",
    hypothesis: [ ]
  },

  state:{
    goals :
    [
      {
        "title" : "Goal 1",
        "tag"   : 'green',
        "complete" : false,
        "hypothesis" : [
          {
            "test" : "test"
          }
        ]
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

    //goal options
    renameTitle( state, title ){
      state.goals.title = name;
    },

    addGoal( state ){
      state.goals.push ({
        "title" : "New Goal",
        "tag"   : 'green',
        "complete" : false,
        "hypothesis" : []
      })
    },

    deleteGoal( state, index ){
      console.log(index);
      state.goals.splice( index , 1 );
    }

  },

  //can call multiple mutations or other actions and validate data before commiting to mutation
  actions:{

    changeGoalTitle( context, title ){
      context.commit( renameTitle, title )
    },

    deleteGoal ( context, index ){
      context.commit( 'deleteGoal', index)
    },

    addGoal ( context, index ){
      context.commit( 'addGoal' )
    },



  }
}

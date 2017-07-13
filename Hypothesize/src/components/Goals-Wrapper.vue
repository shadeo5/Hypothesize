<template>
  <ul class="goals-wrapper">
    <goal-item v:for="goal in goals"></goal-item>
  </ul>
</template>

<script>

// import Introduction from './components/Introduction'
import GoalItem from './Goal-Item'


export default {
  name: 'GoalsWrapper',
  components : { GoalItem },
  computed:{
    // use goals data on component
    goals(){return this.$store.state.goals},
  }
}
</script>

<style>
  .goals-wrapper{
    width : 75%;
    margin: 0 auto;
    padding: 0;
    border: 1px solid #efefef;
    min-height: 100px;
  }
</style>

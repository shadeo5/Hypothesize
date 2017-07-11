<template>
  <ul class="goals-wrapper">
    <goal-item></goal-item>
  </ul>
</template>

<script>

// import Introduction from './components/Introduction'
import GoalItem from './Goal-Item'


export default {
  name: 'GoalsWrapper',
  components : {
    GoalItem
  }
}
</script>

<style>

</style>

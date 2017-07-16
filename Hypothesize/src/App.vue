<template>
  <section id="app">
    <img src="./assets/logo.png">
    <introduction></introduction>
    <goals-wrapper></goals-wrapper>
  </section>
</template>

<script>
import Introduction from './components/Introduction'
import GoalsWrapper from './components/Goals-Wrapper'


export default {
  name: 'app',

  components: { Introduction, GoalsWrapper}
  
}
</script>

<style>
  html, body{
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      font-family: 'helvetica';
      font-size: 16px;
      font-weight: normal;
      line-height: 1.2em;
      color: #333;
    }

    a{ text-decoration: none;}

    *{box-sizing: border-box;}

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

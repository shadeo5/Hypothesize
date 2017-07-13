<template>
  <li class="goal-item">
    <span class="goal-item__reorder">...</span><span class="goal-item__title">Title</span><button class="goal-item__deletebtn">delete</button>
  </li>
</template>

<script>


export default {
  name: 'goalitem',

  // props: ["goals", "index" ],

  computed: function(){
    console.log('hi');
  }

};

</script>

<style>
  .goal-item{
    list-style: none;
    border-bottom : 1px solid #eee;
    padding : 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .goal-item__reorder{
    flex-grow: 1;
  }

  .goal-item__title{
    flex-grow: 4;
  }

  .goal-item__deletebtn{
    flex-grow: 2;
  }

</style>

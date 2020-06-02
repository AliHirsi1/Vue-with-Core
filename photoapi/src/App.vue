<template>
  <div id="app">   
    <navbar></navbar>
    <home></home> 
    
  </div>
</template>

<script>
import navbar from './components/navbar';
import home from './components/home';
export default {
  components:{   
     navbar,
     home,
    
  }, 
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    background-color: #fff;
    color: #555;
    font-family: 'lato', 'Arial', sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-rendering: optimizeLegibility;
    
  }

  

  
</style>

<template>
  <div id="app">   
    <nav-bar></nav-bar>   
    
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  components:{   
    'nav-bar': navbar,
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

<template>
  <div id="app">
    <h1>Cats grouped under owner's gender</h1>
    <cats data="test"></cats>
    
  </div>
</template>

<script>
import Cats from './components/Cats';


export default {
  name: 'app',
  components: {
    Cats,
  },
};
</script>

<style>
body {
    font-family:  Verdana, Geneva, Tahoma, sans-serif;
    color: steelblue;
    background-color: beige;
}
h1{
  margin:1.5em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>

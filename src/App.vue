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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

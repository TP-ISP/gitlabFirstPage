<template>
  <div id="app">
  <TopMenu></TopMenu>
    <LeftSidebar></LeftSidebar>
    <router-view/>
  </div>
</template>

<script>
  import LeftSidebar from './components/LeftSidebar'
  import TopMenu from './components/TopMenu'
  export default {
    components: {LeftSidebar, TopMenu},
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

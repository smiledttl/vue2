<template>
  <div id="app">
    <!-- <div>
      <img src="./assets/logo.png">
    </div> -->
    <!-- <p><input type="text" v-model="a"></p> -->
    <div style="width:20%;float:left;">
      <h2>Navigation</h2>
      <ul style="list-style: none;">
        <li>
          <router-link to="/">
          Home
          </router-link>
        </li>
        <li>
          <router-link to="/todo">
          Todos
          </router-link>
        </li>
        <li>
          <router-link to="/first">
          First
          </router-link>
        </li>
        <li>
          <router-link to="/about">
          About
          </router-link>
        </li>
      </ul>
    </div>
    <div style="width:80%;float:left;">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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

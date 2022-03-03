<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
export default defineComponent({
  setup() {
    
  },
  mounted(){
    let url = "https://mock.mengxuegu.com/mock/6220b047e7ee771c8c6e215a/example/table/list#!method=get";
    axios.get(url).then(()=>{

    })
    
  }
})

</script>


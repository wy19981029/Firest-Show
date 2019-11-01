<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/joke">Joke</router-link> |
	  <router-link to="/Car">Car</router-link> |
	  
	  <span v-if="!this.$store.getters.getpading">
		  <router-link to="/login">登录</router-link> |
		  <router-link to="/regest">注册</router-link>
	  </span>
	  
	  <span v-else>
	  		  <router-link to="/logOut">退出登录</router-link> |
	  		  <router-link to="/center">个人中心</router-link>
	  </span>
	  
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

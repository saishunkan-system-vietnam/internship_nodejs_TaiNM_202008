<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Homepage</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/airline" class="nav-link">Airline</a>
        </li>
        <li class="nav-item">
          <a href="/seat" class="nav-link">Seat</a>
        </li>
        <li class="nav-item">
          <a href="/category" class="nav-link">Category</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

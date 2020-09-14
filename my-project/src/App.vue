<template>
  <div id="app">
    <div v-if="$route.meta.plainLayout">
      <Header />
      <div class="content-container">

        <div class="container-fluid">
          <router-view />
        </div>

      </div>
    </div>
    <div v-if="$route.meta.client">
      <HeaderClient />
      <div class="content-container">
        <div class="container-fluid">
          <router-view />
        </div>

      </div>
    </div>
    <div v-if="!$route.meta.plainLayout && !$route.meta.client">
      <router-view />
    </div>
  </div>
  
</template>

<script>
  import Header from '../src/components/master/Header';
  import HeaderClient from '../src/components/master/HeaderClient';
  export default {
    name: 'App',
    components: {
      Header, HeaderClient
    }
  }

</script>

<style>
</style>

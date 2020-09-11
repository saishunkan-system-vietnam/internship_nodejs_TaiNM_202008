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
    <div v-if="!$route.meta.plainLayout">
      <!-- <router-view name="Banner"/> -->
      <router-view />
    </div>
  </div>
</template>

<script>
  import Header from '../src/components/master/Header';
  export default {
    name: 'App',
    components: {
      Header
    }
  }

</script>

<style>
</style>

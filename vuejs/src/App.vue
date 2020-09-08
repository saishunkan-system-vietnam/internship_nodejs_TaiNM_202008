<template>
  <div id="app">
    <div class="container-fluid">
        <div class="row">
          <div class="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100 abc" id="sidebar">
            <router-view name="testHeader"/>
          </div>
          <div class="col pt-2">
              <router-view/>
          </div>
        </div>
    </div>
    <div class="container-fluid">
      <!-- <router-view name="Banner"/> -->
      <!-- <router-view/> -->
      <router-view name="Footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>

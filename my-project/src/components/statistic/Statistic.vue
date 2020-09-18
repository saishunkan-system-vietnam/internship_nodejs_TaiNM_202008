<template>
  <div>
      
  <div class="container">
    <h1>Thống Kê</h1>
      <div class="row">
      <div class="col-xl-4 col-md-6">
        <div class="card bg-primary text-white mb-4">
          <div class="card-body">Chờ thanh toán</div>
          <div class="card-footer d-flex align-items-center justify-content-between">
            <a class="small text-white stretched-link" href="#">{{ statistic.pending }}</a>
            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card bg-success text-white mb-4">
          <div class="card-body">Đã thanh toán</div>
          <div class="card-footer d-flex align-items-center justify-content-between">
            <a class="small text-white stretched-link" href="#">{{ statistic.success }}</a>
            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card bg-danger text-white mb-4">
          <div class="card-body">Hủy thanh toán</div>
          <div class="card-footer d-flex align-items-center justify-content-between">
            <a class="small text-white stretched-link" href="#">{{ statistic.danger }}</a>
            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import callAPI from '../../conf/axios';
import VueCookies from 'vue-cookies';
  export default {
      data() {
          return {
              statistic: []
          }
      },
      beforeCreate () {
        if ($cookies.isKey('login')) {
        callAPI.get('statistic').then(response => {
              // console.log(response);
              this.statistic = response.data[0];
          });
        }else{
          this.$router.push('/login');
        }  
      },
  }

</script>

<style scoped>
    h1{
        text-align: center;
        margin-bottom: 50px;
    }
</style>

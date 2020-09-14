<template>
  <div>
    <h1>Orders</h1>
    <div class="container">
      <table class="table">
        <thead style="text-align: center">
          <tr>
            <th>id</th>
            <th>Khách hàng</th>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th>Giá/vé</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Ngày đặt</th>
            <th>Trạng thái</th>
            <th>Duyệt đơn</th>
            <th>Hủy Đơn</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light abc" v-for="order in orders" :key="order.id">
            <!-- <td>{{index}}</td> -->
            <td>{{ order.id_order }}</td>
            <td>{{ order.name }}</td>
            <td>{{ order.start }}</td>
            <td>{{ order.end }}</td>
            <td>{{ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.price) }}</td>
            <td>{{ order.quantity }}</td>
            <td>{{ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.total) }}</td>
            <td>{{ Intl.DateTimeFormat('vi-VN').format(order.reg_date) }}</td>
            <td v-if="order.status === 1">Chờ xử lý</td>
            <td v-if="order.status === 2">Đã xử lý</td>
            <td v-if="order.status === 3">Đã thanh toán</td>
            <td v-if="order.status === 4">Hủy đơn</td>
            <td v-if="order.status === 4">
            </td>
            <td v-if="order.status === 1">
              <a href="" class="btn waves-effect waves-light yellow darken-2" @click="editOrder(order.id_order)"><i
                  class="fas fa-pen-square">Xử lý</i>
              </a>
            </td>
            <td v-if="order.status === 2">
              <a href="" class="btn waves-effect waves-light yellow darken-2" @click="editOrder(order.id_order)"><i
                  class="fas fa-pen-square">Xử lý</i>
              </a>
            </td>
            <td v-if="order.status === 3">
              <a href="" class="btn waves-effect waves-light yellow darken-2" @click="editOrder(order.id_order)"><i
                  class="fas fa-pen-square">Xử lý</i>
              </a>
            </td>
            <td>
              <a href="" class="btn waves-effect waves-light red darken-2" @click="deleteOrder(order.id_order)"><i
                  class="fas fa-trash">Hủy</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import callAPI from '../../conf/axios';
  import VueCookies from 'vue-cookies'
  export default {
    data() {
      return {
        orders: [],
        users: [],
      }
    },
    async mounted() {
      if ($cookies.isKey('login')) {
        await callAPI.get('orders').then(response => {
          // console.log(response.data)
          if (response.data.mess == 'levelFail') {
               this.$router.push('/login');
          } else {
            this.orders = response.data.data;
          }
        });
      }else{
         this.$router.push('/login');
      }
      // let cookie = this.$cookie.get('_redisDemo');
      // console.log($cookies.set('aaa','sdasds'));
      // console.log($cookies.get('aaa'));
      // console.log("-------------");
    },
    methods: {
      editOrder: function(id) {
          callAPI.put('orders/'+id,{
              "id": id,
              "status": 2
          });
      },
      deleteOrder: function(id) {
          callAPI.put('orders/'+id,{
              "id": id,
              "status": 4
          });
      }
    },
  }

</script>

<style scoped>

</style>

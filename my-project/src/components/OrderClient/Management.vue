<template>
  <div>
    <h1>Orders</h1>
    <div class="container">
      <table class="table">
        <thead style="text-align: center">
          <tr>
            <th>id</th>
            <th>Hãng bay</th>
            <th>Loại ghế</th>
            <th>Khởi hành</th>
            <th>Kết thúc</th>
            <th>Giá/vé</th>
            <th>Số lượng</th>
            <th>Ngày đặt</th>
            <th>Trạng thái</th>
            <th>Hủy Đơn</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light abc" v-for="order in orders" :key="order.id">
            <!-- <td>{{index}}</td> -->
            <td>{{ order.id }}</td>
            <td>{{ order.airline }}</td>
            <td>{{ order.seat }}</td>
            <td>{{ order.start }}</td>
            <td>{{ order.end }}</td>
            <td>{{ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.price) }}</td>
            <td>{{ order.quantity }}</td>
            <td>{{ Intl.DateTimeFormat('vi-VN').format(order.reg_date) }}</td>
            <td v-if="order.status === 1">Chờ xử lý</td>
            <td v-if="order.status === 2">Đã xử lý</td>
            <td v-if="order.status === 3">Đã thanh toán</td>
            <td v-if="order.status === 4">Hủy đơn</td>
            <td v-if="order.status != 4">
              <a href="" class="btn waves-effect waves-light red darken-2" @click="deleteOrder(order.id)"><i
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
  export default {
    data() {
      return {
        orders: []
      }
    },
    mounted () {
        callAPI.get('/orders/findById').then(response=>{
            // console.log(response.data.data);
            this.orders = response.data.data;
        });
    },
    methods: {
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

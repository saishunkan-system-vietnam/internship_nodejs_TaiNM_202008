<template>
  <table border="1">
    <tr>
        <th>Họ và tên</th>
        <th>Hãng Bay</th>
        <th>Loại Ghế</th>
        <th>Điểm đi</th>
        <th>Điểm đến</th>
        <th>NGày giờ</th>
        <th>Số lượng ghế</th>
        <th>Giá ghế</th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
        <td>{{ post[0] }}</td>
        <td>{{ post[1] }}</td>
        <td>{{ post[2] }}</td>
        <td>{{ post[3] }}</td>
        <td>{{ post[4] }}</td>
        <td>{{ post[5] }}</td>
        <td>{{ post[6] }}</td>
        <td>{{ post[7] }}</td>
    </tr>
</table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  // lấy dữ liệu khis component được tạo thành công
  created() {
    axios
      .get(`http://localhost:3000/ticket`)
      .then(response => {
        console.log(response.data.data);
        this.posts = response.data.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
};
</script>

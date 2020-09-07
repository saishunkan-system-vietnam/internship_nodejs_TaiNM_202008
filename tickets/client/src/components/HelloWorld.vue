<template>
  <table border="1">
    <tr>
        <th>Họ và tên</th>
        <th>Năm sinh</th>
        <th>Giới tính</th>
        <th>Quê quán</th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
        <td>{{ post[0] }}</td>
        <td>{{ post[1] }}</td>
        <td>{{ post[2] }}</td>
        <td>{{ post[3] }}</td>
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

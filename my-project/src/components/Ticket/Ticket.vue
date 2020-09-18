<template>
  <div class="container">
    <h1>Ticket</h1>
    <button class="btn btn-primary">
      <router-link to="/admin/ticketCreate" style="color: white">Create</router-link>
    </button>
    <table  class="table">
      <thead style="text-align: center">
        <tr>
          <th>id</th>
          <th>Hãng Bay</th>
          <th>Loại Ghế</th>
          <th>Điểm đi</th>
          <th>Điểm đến</th>
          <th>NGày giờ</th>
          <th>Số lượng ghế</th>
          <th>Giá ghế</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-light abc" v-for="post in posts" :key="post.id">
          <!-- <td>{{index}}</td> -->
          <td>{{ post[0] }}</td>
          <td>{{ post[1] }}</td>
          <td>{{ post[2] }}</td>
          <td>{{ post[3] }}</td>
          <td>{{ post[4] }}</td>
          <td>{{ Intl.DateTimeFormat('vi-VN',{  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'UTC'}).format(post[5]) }}</td>
          <td>{{ post[6] }}</td>
          <td>{{ post[7] }}</td>
          <td style="width: 18%;">
            <a href="" class="btn waves-effect waves-light yellow darken-2" @click="updateTutorial(post[0])"><i
                class="fas fa-pen-square">edit</i>
            </a>
            <a href="" class="btn waves-effect waves-light red darken-2" @click="deleteTutorial(post[0])"><i
                class="fas fa-trash">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import callAPI from '../../conf/axios';

  export default {
    data() {
      return {
        posts: [],
        errors: [],
      };
    },

    // lấy dữ liệu khi component được tạo thành công
    beforeCreate() {
      callAPI
        .get('ticket')
        .then(response => {
          console.log(response.data.data);
          this.posts = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    methods: {
      async deleteTutorial(id) {
        console.log(id);
        //    console.log(`${url}/${id}`);
        await callAPI.delete(`ticket/${id}`)
          .then(response => {
            location.reload();
          });
      },
      async updateTutorial(id) {
        //  console.log(id);
        //     console.log(`${url}/${id}`);
        this.$router.push(`/admin/ticketUpdate/${id}`);
      },
    }
  };

</script>

<style scoped>
  body {

    background: linear-gradient(limegreen,
        transparent),
      linear-gradient(90deg,
        skyblue,
        transparent),
      linear-gradient(-90deg,
        coral,
        transparent);
    background-blend-mode: screen;
  }

  .abc {
    text-align: center;
  }

</style>

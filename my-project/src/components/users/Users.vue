<template>
    <div>
         <h1>Users</h1>
         <div class="container">
            <button><router-link to="/users/create">Create</router-link></button>
            <table class="table table-responsive bordered highlight centered hoverable z-depth-2">
                <thead>
                    <tr class="table-primary abc">
                        <th>id</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Level</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-light abc" v-for="post in users" :key="post.id">
                        <!-- <td>{{index}}</td> -->
                        <td>{{ post.id }}</td>
                        <td>{{ post.email }}</td>
                        <td>{{ post.name }}</td>
                        <td>{{ post.phone }}</td>
                        <td>{{ post.address }}</td>
                        <td>{{ post.level === 2? 'Member':'Admin' }}</td>
                        <td style="width: 18%;">
                            <a href="" class="btn waves-effect waves-light yellow darken-2" @click="editUser(post.id)"><i class="fas fa-pen-square">edit</i>
                            </a>
                        </td>
                        <td style="width: 18%;">
                            <a href="" class="btn waves-effect waves-light red darken-2" @click="deleteUser(post.id)"><i class="fas fa-trash">delete</i>
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
  import VueCookies from 'vue-cookies';
  // const HTTP = axios.create({
  //   withCredentials: true
  // })
export default {
  data() {
    return {
      users: [],
    };
  },

  mounted () {
    if ($cookies.isKey('login')) {
        callAPI
        .get(`users`).then(response => {
          // console.log(response.data);
          this.users = response.data.data;
          response.data.mess === "error"? this.$router.push('/login') : this.$router.push('/users');
        })
        .catch(e => {
          this.errors.push(e);
      });
        }else{
          this.$router.push('/login');
        } 
  },
  methods: {
      deleteUser: function(id) {
        callAPI.delete('users/' + id)
            .then(response => {console.log('success')});
      },
      editUser: function(id) {
        this.$router.push(`users/update/${id}`);
      }
  },
};
</script>

<style scoped>
body{
  
  background: linear-gradient(
		limegreen,
		transparent
	),
	linear-gradient(
		90deg,
		skyblue,
		transparent
	),
	linear-gradient(
		-90deg,
		coral,
		transparent
	);
  background-blend-mode: screen;
}
.abc{
   text-align: center;  
}

h1 {
    text-align: center;
}

</style>
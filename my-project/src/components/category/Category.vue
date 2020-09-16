<template>
  <div class="container">
    <form class="form-inline">
      <input type="text" class="form-control" placeholder="Search by Airline Name" v-model="search" />
    </form>
    <br />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Airline Code</th>
          <th scope="col">Airline Name</th>
          <th scope="col">Type of Seat</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in filteredItems" :key="category.test">
          <th scope="row">{{category.alCode}}</th>
          <td>{{category.alName}}</td>
          <td>{{category.sName}}</td>
          <td>
            <a
              href
              class="btn waves-effect waves-light red darken-2"
              @click="deleteCategory(category.alID, category.sID)"
            >
              <font-awesome-icon icon="user-secret" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="card-footer pb-0 pt-3">
      <jw-pagination :items="categories" :pageSize="5" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  data() {
    return {
      //   input: { alCode: "", alName: "" },
      categories: [],
      pageOfItems: [],
      search: "",
    };
  },

  created() {
    DataService.getCategory()
      .then((response) => {
        this.categories = response.data.data;
        // console.log(response.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    deleteCategory(alID, sID) {
      DataService.deleteCategory(alID, sID)
        .then((response) => console.log("success"))
        .catch((e) => console.log(e));
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      // console.log(pageOfItems)
    },
  },
  computed: {
    filteredItems() {
      return this.pageOfItems.filter((pageOfItem) => {
        return (
          pageOfItem.alName.toLowerCase().indexOf(this.search.toLowerCase()) >
          -1
        );
      });
    },
  },
};
</script>
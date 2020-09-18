<template>
  <div class="container">
    <form class="form-inline">
      <input type="text" class="form-control" placeholder="Search by Airline Name" v-model="search" />
    </form>
    <br />

    <table class="table" id="myTable">
      <thead>
        <tr>
          <th style="cursor: pointer" scope="col" @click="sortTable(0)">Airline Code</th>
          <th scope="col">Airline Name</th>
          <th scope="col">Type of Seat</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in pageOfItems" :key="category.test">
          <th scope="row">{{category.alCode}}</th>
          <td>{{category.alName}}</td>
          <td>{{category.sName}}</td>
          <td>
            <a
              href
              class="btn waves-effect waves-light red darken-2"
              @click="deleteCategory(category.alID, category.sID)"
            >
              <i style="color: red" class="fas fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="card-footer pb-0 pt-3">
      <jw-pagination :items="filteredItems" :pageSize="5" @changePage="onChangePage"></jw-pagination>
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

  beforeCreate() {
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
    onChangePage(filteredItems) {
      // update page of items
      this.pageOfItems = filteredItems;
      // console.log(pageOfItems)
    },
    sortTable(n) {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      //Set the sorting direction to ascending:
      dir = "asc";
      /*Make a loop that will continue until
  no switching has been done:*/
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
    first, which contains table headers):*/
        for (i = 1; i < rows.length - 1; i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
      one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          //Each time a switch is done, increase this count by 1:
          switchcount++;
        } else {
          /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    },
  },
  computed: {
    filteredItems() {
      return this.categories.filter((category) => {
        return (
          category.alName.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>
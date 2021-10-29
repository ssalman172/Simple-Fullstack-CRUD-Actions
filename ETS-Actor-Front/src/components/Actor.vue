<template>
  <div class="container">
    <h1>Actor Management - CRUD</h1>
    <!-- Create and Delete All handler -->
    <div class="center">
      <!-- Form field to handle create action (add actor) -->
      <form @submit.prevent="handleAddActor" class="flex center">
        <div class="flex-column">
          <input v-model="firstName" type="text" placeholder="First Name" />
          <input v-model="lastName" type="text" placeholder="Last Name" />
        </div>
        <button class="button addBtn" type="submit">Add Actor</button>
      </form>
    </div>
    <!-- Delete All -->
    <button class="mb1 button delBtn" @click="handleDeleteAll">
      Delete All Actors
    </button>
    <!-- Table Header for the data later -->
    <div>
      <table class="actor-list center">
        <th width="10%"><p>Actor Id</p></th>
        <th width="25%"><p>First Name</p></th>
        <th width="25%"><p>Last Name</p></th>
        <th width="25%"><p>Last Data Update</p></th>
        <th width="15%"><p>Action</p></th>
      </table>
    </div>
    <!-- ActorList object below will be used to show fethced data from backend -->
    <div>
      <ActorList :actor="actor" v-for="actor in actors" :key="actor.actor_id" />
    </div>
  </div>
</template>

<script>
import ActorList from "./ActorList.vue";
import { getData, addActor, deleteAllActor } from "../api/api";

export default {
  name: "Actor",
  components: {
    ActorList
  },
  data() {
    return {
      actors: [],
      firstName: "",
      lastName: ""
    };
  },
  // Fetch data on load
  async mounted() {
    const result = await getData();
    this.actors = result.data;
  },
  // Frontend & Backend conection methods (handlers)
  methods: {
    async reloadData() {
      const result = await getData();
      this.actors = result.data;
    },
    async handleAddActor() {
      let currentDate = new Date();
      const data = {
        first_name:
          this.firstName === ""
            ? alert("First name can't be emptied.")
            : this.firstName,
        last_name: this.lastName === "" ? "-" : this.lastName,
        last_update: currentDate.toISOString()
      };
      await addActor(data);
      await this.reloadData();
      this.firstName = "";
      this.lastName = "";
    },
    async handleDeleteAll() {
      let delAllMsg = confirm("Are you sure to delete all actors data?");
      if (delAllMsg == true) {
        await deleteAllActor();
        await this.reloadData();
      }
    }
  }
};
</script>

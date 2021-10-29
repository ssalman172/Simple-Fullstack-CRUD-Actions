<template>
  <div class="container">
    <h1>Actor Management - CRUD</h1>
    <div class="center">
      <form @submit.prevent="handleAddActor" class="flex center">
        <div class="flex-column">
          <input
            v-model="firstName"
            class="box-shadow"
            type="text"
            placeholder="First Name"
          />
          <input
            v-model="lastName"
            class="box-shadow"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <button type="submit">Add Actor</button>
      </form>
    </div>
    <button class="mb1" @click="handleDeleteAll">Delete All Actors</button>
    <div>
      <table class="actor-list center">
        <tr>
          <td>Actor Id</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Last Data Update</td>
          <td>Action</td>
        </tr>
      </table>
    </div>
    <div>
      <ActorList :actor="actor" v-for="actor in actors" :key="actor.actor_id" />
    </div>
  </div>
</template>

<script>
import ActorList from "./ActorList.vue";
import {
  getData,
  addActor,
  deleteAllActor,
  deleteAllFilmActor
} from "../api/api";

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
  async mounted() {
    const result = await getData();
    this.actors = result.data;
  },
  methods: {
    async handleAddActor() {
      let currentDate = new Date();
      const data = {
        first_name: this.firstName,
        last_name: this.lastName === "" ? "-" : this.lastName,
        last_update: currentDate.toISOString()
      };
      await addActor(data);
      this.firstName = "";
      this.lastName = "";
    },
    async handleDeleteAll() {
      let delAllMsg = confirm("Are you sure to delete all actors data?");
      if (delAllMsg == true) {
        await deleteAllFilmActor();
        await deleteAllActor();
      }
    }
  }
};
</script>

<style></style>

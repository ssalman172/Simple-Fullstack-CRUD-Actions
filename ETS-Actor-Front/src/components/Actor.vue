<template>
  <div class="container">
    <h1>Actor Management - CRUD</h1>
    <div class="buttons mb1">
      <button class="mr1" @click="handleAddActor">Add Actor</button>
      <button class="mr1" @click="handleAddActor">Delete All Actors</button>
    </div>
    <div>
      <!-- <ActorList: actor="actor" v-for="actor in actors" :key="actor.actor_id" /> -->
    </div>
  </div>
</template>

<script>
import ActorList from "./ActorList.vue";
import { getData, addActor } from "../api/api";

export default {
  name: "Actor",
  components: {
    ActorList
  },
  data() {
    return {
      actors: []
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
        first_name: this.first_name,
        last_name: this.last_name,
        last_update: currentDate.toISOString()
      };
      await addActor(data);
    }
  }
};
</script>

<style></style>

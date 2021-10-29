<template>
  <div class="container">
    <h1>Actor Management - CRUD</h1>
    <div class="buttons mb1">
      <button class="mr1" @click="handleAddActor">Add Actor</button>
      <button class="mr1" @click="handleAddActor">Delete All Actors</button>
    </div>
    <div>
      <ul class="actor-list-header flex center">
        <li class="mr1">Actor Id</li>
        <li class="mr1">First Name</li>
        <li class="mr1">Last Name</li>
        <li class="mr1">Last Data Update</li>
      </ul>
      <table class="actor-list center">
        <tr>
          <td>{{ actor_id }}</td>
          <td>{{ first_name }}</td>
          <td>{{ last_name }}</td>
          <td>{{ last_update }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { updateActor, deleteActor, deleteAllActor } from "../api/api";

export default {
  name: "ActorList",
  props: {
    actor: Object
  },
  data() {
    return {
      actor_id: this.actor.actor_id,
      first_name: this.actor.first_name,
      last_name: this.actor.last_name,
      last_update: this.actor.last_update
    };
  },
  methods: {}
};
</script>

<style></style>

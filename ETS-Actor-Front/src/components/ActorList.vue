<template>
  <div class="container">
    <div>
      <table class="actor-list center">
        <tr>
          <td>{{ actor_id }}</td>
          <td>{{ first_name }}</td>
          <td>{{ last_name }}</td>
          <td>{{ last_update }}</td>
          <td>
            <div class="flex-column">
              <button @click="handleUpdate(actor_id)">Update</button>
              <button @click="handleDelete(actor_id)">Delete</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { updateActor, deleteActor, deleteFilmActor } from "../api/api";

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
  methods: {
    async handleUpdate(actor_id) {},
    async handleDelete(actor_id) {
      let delMsg = confirm(
        `Are you sure to delete actor "${this.first_name}" data?`
      );
      if (delMsg == true) {
        await deleteFilmActor(actor_id);
        await deleteActor(actor_id);
      }
    }
  }
};
</script>

<style></style>

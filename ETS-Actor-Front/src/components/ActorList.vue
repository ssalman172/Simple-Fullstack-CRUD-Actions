<template>
  <div class="container">
    <div>
      <table class="actor-list">
        <tr>
          <td width="10%">{{ actor_id }}</td>
          <td width="25%">{{ first_name }}</td>
          <td width="25%">{{ last_name }}</td>
          <td width="25%">{{ last_update }}</td>
          <td width="15%">
            <div class="flex-column">
              <button @click="modalUpdate = true">Edit</button>
              <button @click="handleDelete(actor_id)">Delete</button>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="modal center" v-if="modalUpdate">
      <h4 class="margin0">
        {{ `Edit data for ${first_name} ${last_name}` }}
      </h4>
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
        </form>
        <button @click="handleUpdate(actor_id)" type="submit">
          Update Actor
        </button>
        <button @click="modalUpdate = false">Cancel</button>
      </div>
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
      last_update: this.actor.last_update,
      firstName: "",
      lastName: "",
      modalUpdate: false
    };
  },
  methods: {
    async handleUpdate(actor_id) {
      let currentDate = new Date();
      const data = {
        first_name: this.firstName,
        last_name: this.lastName === "" ? "-" : this.lastName,
        last_update: currentDate.toISOString()
      };
      await updateActor(actor_id, data);
      this.firstName = "";
      this.lastName = "";
      this.modalUpdate = false;
      location.reload();
    },
    async handleDelete(actor_id) {
      let delMsg = confirm(
        `Are you sure to delete actor "${this.first_name}" data?`
      );
      if (delMsg == true) {
        await deleteFilmActor(actor_id);
        await deleteActor(actor_id);
        location.reload();
      }
    }
  }
};
</script>

<style scoped>
.modal {
  background: rgb(237, 242, 250);
  height: 125px;
  width: 100%;
}
</style>

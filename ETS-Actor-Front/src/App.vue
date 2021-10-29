<template>
  <div id="app">
    <Actor />
  </div>
</template>

<script>
import Actor from "./components/Actor.vue";

export default {
  name: "App",
  components: {
    Actor
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.actor-list-header {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.mr1 {
  margin-right: 1rem;
}

.mb1 {
  margin-bottom: 1rem;
}
</style>

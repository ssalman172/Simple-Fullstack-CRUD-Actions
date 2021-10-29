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
}

.button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

input[type="text"],
select {
  width: 100%;
  padding: 6px 10px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.addBtn {
  background-color: #4caf50;
  color: white;
}

.addBtn:hover {
  background-color: #279728;
}

.delBtn {
  background-color: #be3838;
  color: white;
}

.delBtn:hover {
  background-color: #9c2b2b;
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

.actor-list {
  width: 100%;
  table-layout: fixed;
  overflow: hidden;
}

.actor-list th {
  background: gray;
}

.actor-list th p {
  font-weight: bold;
  color: wheat;
}

.actor-list tr:hover {
  background-color: #ddd;
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

.margin0 {
  margin: 0;
}
</style>

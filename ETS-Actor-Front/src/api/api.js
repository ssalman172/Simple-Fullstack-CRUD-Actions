import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getData() {
  try {
    return axios.get(`${BASE_URL}/actor`);
  } catch (error) {
    console.log(error);
  }
}

export async function updateActor(actor_id, data) {
  try {
    return axios.put(`${BASE_URL}/actor/update/${actor_id}`, data);
  } catch (error) {
    console.log(error);
  }
}

export async function addActor(data) {
  try {
    return axios.post(`${BASE_URL}/actor`, data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteActor(actor_id) {
  try {
    return axios.delete(`${BASE_URL}/actor/delete/${actor_id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFilmActor(actor_id) {
  try {
    return axios.delete(`${BASE_URL}/filmActor/delete/${actor_id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAllActor() {
  try {
    axios.delete;
    return axios.delete(`${BASE_URL}/actor/delete`);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAllFilmActor() {
  try {
    return axios.delete(`${BASE_URL}/filmActor/delete`);
  } catch (error) {
    console.log(error);
  }
}

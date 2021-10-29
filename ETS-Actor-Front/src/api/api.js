import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function getData() {
  try {
    return axios.get(`${BASE_URL}/actor`);
  } catch (error) {
    console.log(error);
  }
}

export async function updateActor(id, data) {
  try {
    return axios.put(`${BASE_URL}/actor/update/${id}`, data);
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

export async function deleteActor(id) {
  try {
    return axios.delete(`${BASE_URL}/actor/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAllActor() {
  try {
    return axios.delete(`${BASE_URL}/actor/delete`);
  } catch (error) {
    console.log(error);
  }
}

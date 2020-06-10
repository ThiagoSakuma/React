import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.55.55:3333" //colocar o seu ip aqui
});

export default api;
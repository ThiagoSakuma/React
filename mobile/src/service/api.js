import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.136:3333" //colocar o ip aqui
});

export default api;
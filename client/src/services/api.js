import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-poweredstartupideavalidator.onrender.com/api",
});

export default API;
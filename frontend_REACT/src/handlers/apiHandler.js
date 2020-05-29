import axios from "axios";

const handler = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default handler;

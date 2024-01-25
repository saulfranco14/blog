// clientAxios.js
import axios from "axios";

const apiKey = process.env.API_KEY;

const clientAxios = axios.create({
  baseURL: process.env.API_BLOG,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-api-key": apiKey,
  },
});

export default clientAxios;

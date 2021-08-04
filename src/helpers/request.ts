import axios from "axios";

export const snRequest = axios.create({
  // Timeout 30p
  baseURL: "https://ven04150.service-now.com",
  timeout: 30 * 60 * 1000,
  auth: {
    username: "Alfie.Hancock@ltapac.onmicrosoft.com",
    password: "ServiceNow2021",
  },
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const reachRequest = axios.create({
  // Timeout 30p
  baseURL: "https://api.reach.livetiles.io",
  timeout: 30 * 60 * 1000,
  headers: {
    Accept: "application/json",
  },
});

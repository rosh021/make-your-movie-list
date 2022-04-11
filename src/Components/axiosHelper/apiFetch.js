import axios from "axios";

const apiUrl = "https://imdb-api.com/en/API/SearchTitle/k_9jv93lvu";

export const fetchApi = (title) => {
  return axios.get(apiUrl + "/" + title);
};

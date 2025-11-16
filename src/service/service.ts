import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

export const fetchApiStore = async (resource: string, query?: string) => {
  return await axios
    .get(`${api_url}/${resource}?${query}`)
    .then((res) => res.data);
};

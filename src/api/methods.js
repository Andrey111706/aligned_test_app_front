import axios from "axios";

const apiUrl = "http://localhost:3001";

export const itemsDB = {
  create: (url, name, type, youtubeId) => {
    return axios.post(`${apiUrl}/item`, {
      url: url.trim(),
      name: name.trim(),
      type,
      youtubeId,
    });
  },
  update: (url, name, type, youtubeId, editItemId) => {
    return axios.put(`${apiUrl}/item/${editItemId}`, {
      url: url.trim(),
      name: name.trim(),
      type,
      youtubeId,
    });
  },
  delete: (deleteId) => {
    return axios.delete(`${apiUrl}/item/${deleteId}`);
  },
  getAll: () => {
    return axios.get(`${apiUrl}/items`);
  },
};

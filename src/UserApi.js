import axios from "axios";

const api = axios.create({  
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// export const getPosts = () => {
//   return api.get("/posts").then((response) => response.data);
// };

export const getUsers = async () => {
  try {
    const response = (await api.get("/users")).data;
    return response;
  } catch (err) {
    return err.message;
  }
};

export const getUser = (id) => {
  return api.get(`/users/${id}`).then((response) => response.data);
};

export const updateUser = ({ id, ...updatedUser }) => {
  return api.put(`/users/${id}`, updatedUser).then((response) => response.data);
};

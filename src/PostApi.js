import axios from "axios";

const api = axios.create({  
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// export const getPosts = () => {
//   return api.get("/posts").then((response) => response.data);
// };

export const getPosts = async () => {
  try {
    const response = (await api.get("/posts")).data;
    return response;
  } catch (err) {
    return err.message;
  }
};

export const getPost = (id) => {
  api.get(`/posts/${id}`).then((response) => response.data);
};

export const updatePost = ({ id, ...updatedPost }) => {
  api
    .put(`/posts/${id}`, updatedPost)
    .then((response) => response.data);
};

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "./PostApi";

const Users = () => {
  useEffect(() => {
    api.getPosts().then((response) => {
      console.log("In APP res", response);
    });
  }, []);

  const { data } = useQuery(["posts"], async () => {
    const res = await api.getPosts();
    return res;
  });
  console.log("data", data)
  return (
    <h1>hello world</h1>
    // <>
    // <h1>hello world</h1>
    // <div>
    //   <ul>
    //     {
    //       data.map((post) =>
    //         <li key={post.id}>{post.title}</li>
    //       )
    //     }
    //   </ul>
    // </div>
    // </>
  );
};

export default Users;

/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "./UserApi";

const Users = ({ setUserID }) => {
  useEffect(() => {
    api.getUsers().then((response) => {
      console.log("In APP res", response);
    });
  }, []);

  const {
    data: users,
    isLoading,
    error,
    isError,
  } = useQuery(
    ["users"],
    async () => {
      const res = await api.getUsers();
      return res;
    },
    { retry: false }
  );
  console.log("data", users);

  if (isLoading) {
    return "isLoading...";
  }
  return (
    <>
      <h1>Users List</h1>
      <div>
        <ul>
          {users?.map((user) => (
            <>
              <li key={user.id}>
                {user.name}{" "}
                <button onClick={() => setUserID(user.id)}>view</button>
              </li>{" "}
              <br />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;

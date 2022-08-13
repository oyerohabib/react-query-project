import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "./UserApi";

const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData(["user", user.id], data);
      setIsEditing(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    mutate(fields);
  };

  if (isLoading) {
    return "saving your changes";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "20px" }}
          />
        </label>
        <label>
          Email:{" "}
          <textarea
            name="details"
            cols="30"
            value={fields.email}
            onChange={handleChange}
            rows="10"
            style={{ width: "100%", marginBottom: "20px" }}
          ></textarea>
        </label>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default UserForm;

import React, {useState} from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "./UserApi";
import UserForm from "./UserForm";

const UserDetails = ({ userID }) => {

  const [isEditing, setIsEditing] = useState(false)

  const { data: user, isLoading } = useQuery(
    ["user", userID],
    () => api.getUser(userID),
    { enabled: Boolean(userID) }
  );

  console.log("userDetails", user);

  if (!userID) {
    return "select a user";
  }

  if (isLoading) {
    return "Loading User Detail";
  }

  return (
    <div>
      <h1>User Details</h1>

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "cancel" : "edit"}
      </button>

      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing} />
      ) : (
        <div>
          <h4>{user?.name}</h4>
          <h4>{user?.email}</h4>
        </div>
      )}
    </div>
  );
};

export default UserDetails;

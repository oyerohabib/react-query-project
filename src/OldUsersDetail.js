import React from 'react'
import { useQuery } from '@tanstack/react-query'
import * as api from "./UserApi"

const UsersDetail = ({userID}) => {

  const {data, isLoading} = useQuery(["user", userID], () => api.getPost(userID))
  console.log(data)

  if (userID) {
    return "Select a Post."
  }

  if (isLoading) {
    return "Loading Post Details"
  }

  return (
    <div>
      <h1>Hello world</h1>
      {/* <h1>{data?.title}</h1>
      <span>{data?.id}</span> */}
    </div>
  );
}

export default UsersDetail
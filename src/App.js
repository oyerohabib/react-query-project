/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
// import {
//   getAllIssues,
//   getMerchantData,
//   getUserID,
//   getMerchantIssue,
//   postMerchantIssue,
//   deleteMerchantIssue,
// } from "./UsersApi";
// import { useEffect } from "react";
import Users from "./Users";
import Practice from "./Practice";
import UseStateForm from "./UseStateForm";
import UseReducerForm from "./UseReducerForm";
import Products from "./Products";
import UseReducer from "./UseReducer";
import Todo from "./Todo";
import UserDetails from "./UserDetails";

function App() {
  const [userID, setUserID] = useState();

  // useEffect(() => {
  // getUserID();
  // getAllIssues();
  // getMerchantData();
  // getMerchantIssue();
  // postMerchantIssue()
  // deleteMerchantIssue()
  // }, []);

  return (
    <div className="App">
      <div className="section1">
        <Users setUserID={setUserID} />
      </div>
      <div className="section2">
        <UserDetails userID={userID} />
        {userID}
      </div>

      {/* <Practice /> */}
      {/* <UseStateForm /> */}
      {/* <UseReducerForm/> */}
      {/* <Products/> */}
      {/* <UseReducer/> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;

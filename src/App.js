import "./App.css";
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

function App() {
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
      {/* <Users/> */}
      {/* <Practice /> */}
      {/* <UseStateForm /> */}
      {/* <UseReducerForm/> */}
      <Products/>
    </div>
  );
}

export default App;

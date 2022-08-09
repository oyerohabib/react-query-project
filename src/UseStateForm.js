import React, { useState } from "react";
import "./App.css";

const UseStateForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    surname: "",
    username: "",
    password: "",
    country: "",
    state: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(user);

  return (
    <form className="form-input">
      <h1>Form</h1>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="text"
        name="address"
        onChange={handleChange}
        placeholder="address"
      />
      <input
        type="text"
        name="surname"
        onChange={handleChange}
        placeholder="surname"
      />
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="text"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <input
        type="text"
        name="country"
        onChange={handleChange}
        placeholder="country"
      />
      <input
        type="text"
        name="state"
        onChange={handleChange}
        placeholder="state"
      />
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default UseStateForm;

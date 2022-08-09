import React, { useState } from "react";

const Practice = () => {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({
    name: "habib",
    email: "habib@yahoo.com",
    images: ["profile.png", "cover.png"],
  });
  const [input, setInput] = useState("");

  const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  };

  const updateUser = () => {
    setUser((prev) => ({...prev, name: input}))
    setInput("")
  }

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>increase</button> <br /> <br />
        <button onClick={increaseAsync}>increase async</button>
      </div>
      <div>
        <h1>my name is: {user.name}</h1>
        <h1>my email is: {user.email}</h1>
        <h1>profile picture is: {user.images[1]}</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="update user name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={updateUser}>update user</button>
      </div>
    </>
  );
};

export default Practice;

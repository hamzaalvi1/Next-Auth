"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

function SignIn() {
  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (evt) =>
    setSignInData({ ...signInData, [evt.target.name]: evt.target.value });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signIn("credentials", signInData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name={"username"}
          value={signInData.username}
          placeholder="Enter Your name"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={signInData.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={signInData.password}
          onChange={(e) => handleChange(e)}
          autoComplete="new-password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;

import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlfor="name" className="flabel">
          Full name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="password"
          placeholder="full name"
          id="name"
          name="name"
        />

        <label className="flabel" htmlfor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email@gmail.com"
        />

        <label className="flabel" htmlfor="password">
          Password
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button className="special">Log In</button>
      </form>
      <button className="flink" onClick={() => props.onFormSwitch("login")}>
        Always have an accout? Login here.
      </button>
    </div>
  );
};

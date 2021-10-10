import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import style from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <fieldset className={style.field}>
        <legend className={style.field}>Please Login In</legend>
        <div className={style.errorsContainer}>
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
        <div>
          <label>Username or Email</label>
          <div className={style.inputContainer}>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className={style.inputContainer}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button type="submit">Log In</button>
          <form action="/users/demo" method="post">
            <button className={style.demo} type="submit">
              Demo User
            </button>
          </form>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(sessionActions.demoLogin());
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    history.push("/");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.field}>
        <legend className={styles.field}>Please Login In</legend>
        <div className={styles.errorsContainer}>
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
        <div>
          <label>Username or Email</label>
          <div className={styles.inputContainer}>
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
          <div className={styles.inputContainer}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Log In</button>
          <button type="submit" onClick={demoLogin}>
            Demo User
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;

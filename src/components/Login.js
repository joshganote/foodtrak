import React, { useRef, useState, useEffect } from "react";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  /**
   * Can use this state to eventually navigate to another page if successful login
   */
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    errRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true)
  }

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="username">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setUser(e.target.value)}
            value={password}
            required
          />
          <button>
            Sign In
          </button>
        </form>
        <p>Need an Account?</p><br />
        <span className="line">
          {/* put router link */}
          <a href="#">Sign Up</a>
        </span>
      </section>
    </>
  );
};

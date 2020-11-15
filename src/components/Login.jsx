import React from 'react';
import "../App.css";

export default function Login() {
  return(
    <div className="container">
      <form>
        <div className="form-control">
          <label>Username: <input type="text"></input></label>
          <label>Password: <input type="password"></input></label>
        </div>
        <input type="submit" value="Log In"></input>
      </form>
      <br /><br /><br /><br />
      <button className="btn">Register</button>
    </div>
  );
}
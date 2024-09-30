import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-2"/>
      <input id="wd-password" placeholder="password" className="form-control mb-2" type="password" />
      {/* <input placeholder="verify password" type="password" /><br/> */}
      <Link id="wd-signup-btn" to="/Kanbas/Account/Signup"  className="btn btn-primary w-100"> Sign up </Link>
      <Link id="wd-signin-btn" to="/Kanbas/Account/Porfile" >Sign in</Link>
    </div>
);}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiHide, BiShow } from "react-icons/bi";
import "./login.css";

const Login = () => {
   const [showPass, setShowPass] = useState(false);
   return (
      <div className="body-login">
         <section className="login">
            <h1>login to your account</h1>
            <div className="email-login">
               <input type="email" placeholder="Email*" />
               <HiOutlineMail className="icon" />
            </div>
            <div className="p-login">
               <input type="password" placeholder="Password*" />
               {!showPass ? (
                  <BiHide className="icon" onClick={() => setShowPass(true)} />
               ) : (
                  <BiShow className="icon" onClick={() => setShowPass(false)} />
               )}
            </div>
            <button>Log in</button>
            <p>Don't have an account?</p>
            <Link to="/">
               <h4>Create an account</h4>
            </Link>
         </section>
      </div>
   );
};
export default Login;

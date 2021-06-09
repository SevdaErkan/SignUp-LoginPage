import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { IoMdKey } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";
import "./signUp.css";

const SignUp = () => {
   return (
      <main>
         <header>
            <p className="title">Welcome To SEYTECH!</p>
            <p className="text">
               In order to register you need a code.Please ask to your admin if
               you don't have it.
            </p>
         </header>
         <section className="container">
            <h1>create an account</h1>
            <div className="names">
               <input className="left" type="text" placeholder="Name*" />
               <MdPersonOutline className="icon" />
               <input className="right" type="text" placeholder="Last Name*" />
               <MdPersonOutline className="icon" />
            </div>
            <div className="email-ph">
               <input className="left" type="email" placeholder="Email*" />
               <HiOutlineMail className="icon" />
               <input className="right" type="number" placeholder="Phone*" />
               <HiPhone className="icon" />
            </div>
            <div className="password">
               <input
                  className="left"
                  type="password"
                  placeholder="Password*"
               />
               <IoMdKey className="icon" />
               <input
                  className="right"
                  type="password"
                  placeholder="Confirm Password*"
               />
               <IoMdKey className="icon" />
            </div>
            <div className="address">
               <input
                  className="left"
                  type="number"
                  placeholder="Register Code*"
               />
               <IoMdKey className="icon" />
               <input className="right" type="text" placeholder="State*" />
               <FiPlus className="icon" />
               <input
                  className="middle"
                  type="text"
                  placeholder="Avatar Url*"
               />
               <AiOutlinePicture className="icon-avatar" />
            </div>
            <button>Register</button>
            <div>
               <b>Already have an account?</b>
            </div>
            <Link className="link" to="/login">
               <h4>Login</h4>
            </Link>
         </section>
      </main>
   );
};
export default SignUp;

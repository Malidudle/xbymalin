"use client";

import React from "react";
import styles from "./NotLoggedIn.module.css";
import { signIn } from "next-auth/react";

const NotLoggedIn = () => {
  return (
    <div>
      <img
        src="https://img.pixers.pics/pho_wat(s3:700/FO/42/33/65/53/700_FO42336553_63c6e5fd96fc54ae881ef6212d90bd37.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/wall-murals-surprised-fat-man.jpg.jpg"
        alt="Log In Please"
        width={200}
        height={500}
      />
      <h1>You Need to log in dawg</h1>
      <button className={styles.button} onClick={() => signIn()}>
        Log in bro...
      </button>
    </div>
  );
};

export default NotLoggedIn;

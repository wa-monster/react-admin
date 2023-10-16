import React from "react";
import ParticlesBg from "particles-bg";
import styles from "./index.module.less";
export default function Login() {
  return (
    <div className="login-content w-full h-full flex justify-center items-center">
      <ParticlesBg type="fountain" bg={true} />
      <div className={`w-[400px] h-[500px] ${styles.loginForm}`}></div>
    </div>
  );
}

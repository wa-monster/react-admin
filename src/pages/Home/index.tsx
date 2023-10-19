import React from "react";
import Loader from "react-loaders";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
export default function Home() {
  const navigate = useNavigate();
  const outLogin = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div>
      Home
      <Button onClick={() => outLogin()}>退出登录</Button>
      <div className="h-10">
        <Loader type="line-scale" active></Loader>
      </div>
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const AuthRoute = ({ children }: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token === "" && location.pathname !== "/login") {
      navigate("/login");
    } else {
      if (token) {
        if (location.pathname === "/" || location.pathname === "/login") {
          navigate("/home");
        }
      }
    }
  }, [location.pathname]);
  return children;
};

export default AuthRoute;

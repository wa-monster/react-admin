import React from "react";
import ParticlesBg from "particles-bg";
import styles from "./index.module.less";
import { Button, Form, Input, Checkbox, theme } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { useToken } = theme;

export default function Login() {
  type LoginFormType = {
    username: string;
    password: string;
    remember?: boolean;
  };
  const { token } = useToken();
  console.log("token", token.colorPrimary);

  return (
    <div className="login-content w-full h-full flex justify-center items-center">
      <ParticlesBg type="fountain" bg={true} />
      <div className={`w-[400px] h-[500px] ${styles.loginBox}`}>
        <div className="h-[100px]"></div>
        <div className={styles.webName} style={{ color: token.colorPrimary }}>
          YANG
        </div>
        <Form name="login" autoComplete="off" className={styles.loginForm}>
          <Form.Item<LoginFormType> name="username">
            <Input
              placeholder="admin"
              prefix={<UserOutlined style={{ color: token.colorPrimary }} />}
            ></Input>
          </Form.Item>
          <Form.Item<LoginFormType> name="password">
            <Input.Password
              placeholder="yang123456"
              prefix={<LockOutlined style={{ color: token.colorPrimary }} />}
            />
          </Form.Item>
          <Form.Item<LoginFormType> name="remember">
            <div style={{ color: token.colorPrimary }}>
              <span>记住账号 </span>
              <Checkbox></Checkbox>
            </div>
          </Form.Item>
          <Form.Item>
            <Button block type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div
        className={`h-full w-full absolute top-0 left-0 ${styles.textLogoBox}`}
      >
        <svg width="1092" height="220">
          <text
            x="150"
            y="200"
            fill="#000"
            stroke="#333"
            className={styles.textLogo}
            strokeWidth="2"
            fontSize="95"
          >
            Hello World
          </text>
        </svg>
      </div>
    </div>
  );
}

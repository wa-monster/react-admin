import React from "react";
import ParticlesBg from "particles-bg";
import styles from "./index.module.less";
import { Button, Form, Input, Checkbox, theme } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useStore, observer } from "@/store";
import YangLogo from "@/components/YangLogo";

const { useToken } = theme;
function GetCheck(props: any) {
  const { token } = useToken();
  return (
    <div style={{ color: token.colorPrimary }} className="flex items-center">
      <span style={{ marginRight: "10px" }}>记住账号</span>
      <Checkbox checked={props.checked} onChange={props.onChange}></Checkbox>
    </div>
  );
}
function Login() {
  const navigate = useNavigate();
  const { user } = useStore();
  const { token } = useToken();

  type LoginFormType = {
    username: string;
    password: string;
    remember?: boolean;
  };
  const initialValues = {
    username: user.userName,
    remember: user.userName ? true : false,
  };

  // 登录
  const toLogin = (values: LoginFormType) => {
    if (values.remember) {
      user.setUserName(values.username);
    } else {
      user.setUserName("");
    }
    if (values.username === "admin" && values.password === "yang123") {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="login-content w-full h-full flex justify-center items-center">
      <ParticlesBg type="fountain" bg={true} />
      <div className={`w-[400px] h-[400px] ${styles.loginBox}`}>
        <YangLogo></YangLogo>
        <Form
          name="login"
          autoComplete="off"
          className={styles.loginForm}
          initialValues={initialValues}
          onFinish={toLogin}
        >
          <Form.Item<LoginFormType>
            name="username"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input
              placeholder="admin"
              prefix={<UserOutlined style={{ color: token.colorPrimary }} />}
            ></Input>
          </Form.Item>
          <Form.Item<LoginFormType>
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              placeholder="yang123"
              prefix={<LockOutlined style={{ color: token.colorPrimary }} />}
            />
          </Form.Item>
          <Form.Item<LoginFormType> name="remember" valuePropName="checked">
            <GetCheck></GetCheck>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
        <div
          className="flex justify-between items-center "
          style={{ padding: "0 40px" }}
        >
          <div style={{ color: token.colorPrimary, cursor: "pointer" }}>
            忘记密码
          </div>
          <div style={{ color: token.colorPrimary, cursor: "pointer" }}>
            注册
          </div>
        </div>
      </div>
    </div>
  );
}
export default observer(Login);

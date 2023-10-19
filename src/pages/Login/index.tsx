import React, { useEffect } from "react";
import ParticlesBg from "particles-bg";
import styles from "./index.module.less";
import { Button, Form, Input, Checkbox, theme } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import counter from "@/store/index";
import { observer } from "mobx-react";
const { useToken } = theme;
function Login() {
  const navigate = useNavigate();

  type LoginFormType = {
    username: string;
    password: string;
    remember?: boolean;
  };
  const { token } = useToken();

  const toLogin = (values: LoginFormType) => {
    console.log(values);
    if (values.remember) {
      console.log("1");
    } else {
      console.log("2");
    }
    if (values.username === "admin" && values.password === "yang123") {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    const pathArr = Array.prototype.slice.call(
      document.querySelectorAll(".logo-yang  svg path")
    );
    pathArr.forEach((path) => {
      const len = path.getTotalLength();
      path.setAttribute("stroke-dasharray", len);
      path.setAttribute("stroke-dashoffset", 0);
      path.children[0].setAttribute("from", -(len + 1));
    });
  }, []);
  return (
    <div className="login-content w-full h-full flex justify-center items-center">
      <ParticlesBg type="fountain" bg={true} />
      <div className={`w-[400px] h-[400px] ${styles.loginBox}`}>
        <div className={`logo-yang ${styles.textLogoBox}`}>
          <svg
            className={styles.logoText}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="400px"
            height="100px"
            viewBox="0 0 400 100"
          >
            <defs>
              <path
                id="gl_1"
                stroke={token.colorPrimary}
                d="M20.273438,0 l0,-20.507812 l-19.023438,-29.609375 l8.8671875,0 l14.5703125,23.125 l15.9375,-23.125 l7.3046875,0 l-19.960938,29.609375 l0,20.507812 l-7.6953125,0 Z"
              >
                <animate
                  id="ani1"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="0"
                  begin="2s;ani2.end"
                  dur="3s"
                  fill="freeze"
                ></animate>
                <animate
                  id="ani2"
                  from="0"
                  begin="ani1.end"
                  to="0"
                  dur="2s"
                  fill="freeze"
                ></animate>
              </path>
              <path
                id="gl_2"
                stroke={token.colorPrimary}
                d="M0.46875,0 l19.765625,-50.117188 l7.6953125,0 l19.765625,50.117188 l-8.1640625,0 l-4.7265625,-12.5390625 l-22.890625,0 l-4.8046875,12.5390625 l-6.640625,0 ZM14.21875,-18.320312 l18.28125,0 l-9.1796875,-23.945312 l-9.1015625,23.945312 Z"
              >
                <animate
                  id="ani1"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="0"
                  begin="2s;ani2.end"
                  dur="3s"
                  fill="freeze"
                ></animate>
                <animate
                  id="ani2"
                  from="0"
                  begin="ani1.end"
                  to="0"
                  dur="2s"
                  fill="freeze"
                ></animate>
              </path>
              <path
                id="gl_3"
                stroke={token.colorPrimary}
                d="M5.78125,0 l0,-50.273438 l7.265625,0 l23.007812,36.445312 l0.078125,0 l0,-36.289062 l6.2890625,0 l0,50.117188 l-7.109375,0 l-23.164062,-36.71875 l-0.1171875,0 l0,36.71875 l-6.25,0 Z"
              >
                <animate
                  id="ani1"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="0"
                  begin="2s;ani2.end"
                  dur="3s"
                  fill="freeze"
                ></animate>
                <animate
                  id="ani2"
                  from="0"
                  begin="ani1.end"
                  to="0"
                  dur="2s"
                  fill="freeze"
                ></animate>
              </path>
              <path
                id="gl_4"
                stroke={token.colorPrimary}
                d="M43.476562,-49.0625 l0,7.0703125 c-5.15625,-2.369793 -9.973957,-3.5546875 -14.453125,-3.5546875 c-5.182291,0 -9.440104,1.9010391 -12.7734375,5.703125 c-3.359375,3.802082 -5.0390625,8.645832 -5.0390625,14.53125 c0,5.911457 1.8880215,10.768229 5.6640625,14.5703125 c3.776043,3.7760415 8.59375,5.6640625 14.453125,5.6640625 c1.328125,0 3.0208359,-0.15625 5.078125,-0.46875 l0,-13.2421875 l-9.4140625,0 l0,-5.78125 l17.109375,0 l0,23.28125 c-5.234375,1.6666667 -10.1953125,2.5 -14.8828125,2.5 c-7.760416,0 -14.0625,-2.4088542 -18.90625,-7.2265625 c-4.8697915,-4.817709 -7.3046875,-11.08073 -7.3046875,-18.789062 c2.3841858E-07,-7.890625 2.421875,-14.283855 7.265625,-19.179688 c4.843751,-4.895836 11.171875,-7.34375 18.984375,-7.34375 c4.427086,0 9.166668,0.75520706 14.21875,2.265625 Z"
              >
                <animate
                  id="ani1"
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="0"
                  begin="2s;ani2.end"
                  dur="3s"
                  fill="freeze"
                ></animate>
                <animate
                  id="ani2"
                  from="0"
                  begin="ani1.end"
                  to="0"
                  dur="2s"
                  fill="freeze"
                ></animate>
              </path>
            </defs>
            <use
              href="#gl_1"
              transform="translate(100,75)"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeLinecap="butt"
            />
            <use
              href="#gl_2"
              transform="translate(148.20312,75)"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeLinecap="butt"
            />
            <use
              href="#gl_3"
              transform="translate(196.40625,75)"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeLinecap="butt"
            />
            <use
              href="#gl_4"
              transform="translate(244.60938,75)"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeLinecap="butt"
            />
          </svg>
        </div>
        <div>
          <span>{counter.count}</span>
          <button onClick={() => counter.up()}> +</button>
          <button onClick={() => counter.down()}> -</button>
        </div>
        <Form
          name="login"
          autoComplete="off"
          className={styles.loginForm}
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
            <div style={{ color: token.colorPrimary }}>
              <span>记住账号</span>
              <Checkbox></Checkbox>
            </div>
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

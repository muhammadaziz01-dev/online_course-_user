import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../service/auth";

import "./style.scss";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import { setCookies } from "../../utils/cookise";

const index = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //Aftarization -> signin and signup <-=-=-=--=-=-=-==-=-=-=-
  const signUp = async (values: any) => {
    const userInfo = {...values, role: 'user'};

    try {
      const res = await auth.signup(userInfo);
      console.log(res);
      if (res.status === 201) {
        messageApi.success("Signup successful");
        setTimeout(() => {
          setIsSignUp(false);
        }, 1000);
      }
    } catch (err: any) {
      console.log(err);
      messageApi.error("Error " + err?.message);
    }
  };

  const signIn = async (values: any) => {
    try {
      const res = await auth.signin(values);
      console.log(res);
      if (res.status === 200) {
        setCookies("access_token", res?.data?.token);
        messageApi.success("Signin successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error: any) {
      console.log(error);
      messageApi.error("Error " + error?.message);
    }
  };

  //=-=-=-=-=-=---=---=--=-=-=-=-=-=-=-=-=-=-=-=---=---=--

  return (
    <>
      {contextHolder}
      <div className="auth-parent ">
        <div
          className={`container-auth ${isSignUp ? "active" : ""}`}
          id="container-auth"
        >
          <div className="form-container sign-up">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#001529",
                },
                components: {
                  Input: {
                    activeBorderColor: "#001529",
                    activeShadow: "#001529",
                    hoverBorderColor: "#001529",
                  },
                },
              }}
            >
              <Form
                name="nest-messages"
                onFinish={signUp}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                layout="vertical"
              >
                <h1 className="text-center mb-2 text-[23px] font-semibold">
                  Ro'yxatdan o'tish
                </h1>
                <div>
                  {/*email*/}
                  <Form.Item
                    name="email"
                    label="Email"
                    hasFeedback
                    style={{ width: 300 }}
                    rules={[{ required: true }]}
                  >
                    <Input
                      style={{ width: 300, fontSize: 16 }}
                      size="large"
                      type="email"
                    />
                  </Form.Item>

                  {/* Password */}
                  <Form.Item
                    name="password"
                    label="Password"
                    hasFeedback
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      //   {
                      //     min: 6,
                      //     message: "Please input at least 6 characters!",
                      //   },
                    ]}
                  >
                    <Input.Password
                      style={{ width: "100%", fontSize: 16 }}
                      size="large"
                    />
                  </Form.Item>

                  {/* role */}
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    //   loading={loader}
                    style={{ width: 300 }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
          <div className="form-container sign-in">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#001529",
                },
                components: {
                  Input: {
                    activeBorderColor: "#001529",
                    activeShadow: "#001529",
                    hoverBorderColor: "#001529",
                  },
                },
              }}
            >
              <Form
                name="nest-messages"
                onFinish={signIn}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                layout="vertical"
              >
                <h1 className="text-center mb-2 text-[23px] font-semibold">
                  Kirish
                </h1>
                <div>
                  {/*email*/}
                  <Form.Item
                    name="email"
                    label="Email"
                    hasFeedback
                    style={{ width: 300 }}
                    rules={[{ required: true }]}
                  >
                    <Input
                      style={{ width: 300, fontSize: 16 }}
                      size="large"
                      type="email"
                    />
                  </Form.Item>

                  {/* Password */}
                  <Form.Item
                    name="password"
                    label="Password"
                    hasFeedback
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      //   {
                      //     min: 6,
                      //     message: "Please input at least 6 characters!",
                      //   },
                    ]}
                  >
                    <Input.Password
                      style={{ width: "100%", fontSize: 16 }}
                      size="large"
                    />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    //   loading={loader}
                    style={{ width: 300 }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Qaytib kelganingizdan xursandmiz!</h1>
                <p className="py-2">
                  Saytning barcha imkoniyatlaridan foydalanish uchun shaxsiy
                  ma'lumotlaringizni kiriting
                </p>
                <button
                  className="bg-white  rounded-md  text-[#001529] px-3 py-1  mt-3 font-medium"
                  onClick={() => setIsSignUp(false)}
                >
                  Kirish
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Salom , Do'stim!</h1>
                <p className="py-2">
                  Saytning barcha imkoniyatlaridan foydalanish uchun shaxsiy
                  ma'lumotlaringiz bilan ro'yxatdan o'ting
                </p>
                <button
                  className="bg-white  rounded-md  text-[#001529] px-3 py-1  mt-3 font-medium"
                  onClick={() => setIsSignUp(true)}
                >
                  Ro'yxatdan o'tish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

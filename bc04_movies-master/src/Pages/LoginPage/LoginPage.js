import { Button, Checkbox, Divider, Form, Input, message, theme } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "../../redux/constants/constantUser";
import { localServ } from "../../services/localService";
import { userServ } from "../../services/userService";
import Lottie from "lottie-react";
import bg_animate from "../../assets/bg_login.json";
import { setUserLoginActionServ } from "../../redux/actions/actionUser";

const LoginPage = () => {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const onFinish = (values) => {
    // userServ
    //   .postLogin(values)
    //   .then((res) => {
    //     // lưu vào localstorage
    //     localServ.user.set(res.data.content);

    //     // dispatch to store

    //     dispatch({
    //       type: SET_USER,
    //       payload: res.data.content,
    //     });

    //     //  chuyển hướng san trang chủ

    //     message.success("Đăng nhập thành công");

    //     setTimeout(() => {
    //       navigate("/");
    //     }, 2000);

    //   })
    //   .catch((err) => {
    //     message.error("Đăng nhập thất bại");
    //     console.log(err);
    //   });

    let onSuccess = () => {
      message.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };
    let onFail = () => {
      message.error("Đăng nhập thất bại");
    };
    dispatch(setUserLoginActionServ(values, onSuccess, onFail));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto h-screen w-screen flex items-center justify-center   bg-red-500">
      <div className="w-1/2 h-full">
        <Lottie animationData={bg_animate} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center ">
        <Form
          className=" w-full "
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

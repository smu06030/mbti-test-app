import React, { useState } from "react";
import Card from "./../../components/Layout/Card";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "./../../constants/path";
import Input from "./../../components/Layout/Input";
import Button from "./../../components/Layout/Button";
import { postLogin } from "../../api/auth";
import { useUserStore } from "../../store/userStore";

const Login = () => {
  const navigate = useNavigate();
  const setIsLogin = useUserStore((state) => state.setIsLogin);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const [loginState, setLoginState] = useState({
    id: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await postLogin(loginState);

    if (data?.success) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("nickname", data.nickname);
      
      setUserInfo({
        userId: data.userId,
        nickname: data.nickname,
      });
      setIsLogin(true);
      navigate(PATH.ROOT);
    }
  };

  return (
    <Card className="w-[420px]">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-screen-md w-full py-4 flex justify-center items-center flex-col gap-4"
      >
        <h1 className="pb-4 text-2xl font-bold">로그인</h1>
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <Input
            inputs={{
              type: "text",
              name: "id",
              placeholder: "아이디를 입력하세요.",
            }}
            value={loginState}
            setValue={setLoginState}
          />
          <Input
            inputs={{
              type: "password",
              name: "password",
              placeholder: "비밀번호를 입력하세요.",
            }}
            value={loginState}
            setValue={setLoginState}
          />
          <Button className="w-full py-4">로그인</Button>
        </div>
        <p className="text-sm font-light">
          계정이 없으신가요?
          <Link
            to={PATH.REGISTER}
            className="font-medium ml-1 text-red-500 hover:text-red-700 hover:underline"
          >
            회원가입
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default Login;

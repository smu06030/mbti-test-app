import React, { useState } from "react";
import Card from "../../components/Layout/Card";
import Input from "../../components/Layout/Input";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import Button from "../../components/Layout/Button";
import { postRegister } from "../../api/auth";

const Register = () => {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await postRegister(registerState)
    
    if(data?.success){
      alert(`${data.message}! 로그인 페이지로 이동합니다.`);
      navigate(PATH.LOGIN)
    }
  };

  return (
    <Card className="w-[420px]">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-screen-md w-full py-4 flex justify-center items-center flex-col gap-4"
      >
        <h1 className="pb-4 text-2xl font-bold">회원가입</h1>
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <Input
            inputs={{
              type: "text",
              name: "id",
              placeholder: "아이디를 입력하세요.",
            }}
            value={registerState}
            setValue={setRegisterState}
          />
          <Input
            inputs={{
              type: "password",
              name: "password",
              placeholder: "비밀번호를 입력하세요.",
            }}
            value={registerState}
            setValue={setRegisterState}
          />
          <Input
            inputs={{
              type: "text",
              name: "nickname",
              placeholder: "닉네임을 입력하세요.",
            }}
            value={registerState}
            setValue={setRegisterState}
          />
          <Button className="w-full py-4">회원가입</Button>
        </div>
        <p className="text-sm font-light">
          이미 계정이 있으신가요?
          <Link
            to={PATH.LOGIN}
            className="font-medium ml-1 text-red-500 hover:text-red-700 hover:underline"
          >
            로그인
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default Register;

import React from "react";
import { PATH } from "../../constants/path";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Layout/Button";
import { useUserStore } from "../../store/userStore";

const PrivateHeader = () => {
  const navigate = useNavigate();
  const isLogin = useUserStore(state => state.isLogin);
  const setIsLogin = useUserStore(state => state.setIsLogin);

  const onSignOutHandler = () => {
    // 로그아웃 로직
    if(isLogin){
      alert("로그아웃!");
      localStorage.removeItem("accessToken")
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");
      
      navigate(PATH.ROOT);
      setIsLogin(false);
    }
  };

  return (
    <header className="p-6 min-h-8 flex justify-between items-center text-red-500 bg-[#f5f5f5] shadow-header">
      <Link to={PATH.ROOT} className="text-xl font-bold">
        MBTI
      </Link>
      <div className="flex justify-center items-center cursor-pointer gap-4 transition-all duration-300">
        <Link to={PATH.PROFILE}>프로필</Link>
        <Link to={PATH.TEST}>테스트</Link>
        <Link to={PATH.RESULTS}>결과 보기</Link>
        <Button onClick={onSignOutHandler}>로그아웃</Button>
      </div>
    </header>
  );
};

export default PrivateHeader;

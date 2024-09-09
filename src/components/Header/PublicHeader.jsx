import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";

const PublicHeader = () => {
  return (
    <header className="p-6 min-h-8 flex justify-between items-center text-red-500 bg-[#f5f5f5] shadow-header">
      <Link to={PATH.ROOT} className="text-xl font-bold ">MBTI</Link>
      <Link to={PATH.LOGIN}>로그인</Link>
    </header>
  );
};

export default PublicHeader;

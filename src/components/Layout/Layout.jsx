import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from './../Header/PublicHeader';
import PrivateHeader from './../Header/PrivateHeader';
import { useUserStore } from "../../store/userStore";

const Layout = () => {
  const isLogin = useUserStore((state)=> state.isLogin)

  return (
    <div className="m-auto p-0 font-Pretendard">
      {!isLogin ? <PublicHeader /> : <PrivateHeader />}
      <main className="px-6 my-8 flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

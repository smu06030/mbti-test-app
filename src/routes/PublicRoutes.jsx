import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "./../constants/path";
import { useUserStore } from "../store/userStore";

const PublicRoutes = () => {
  const isLogin = useUserStore((state) => state.isLogin);
  
  return isLogin ? <Navigate to={PATH.ROOT} replace/> : <Outlet />;
};

export default PublicRoutes;
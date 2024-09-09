import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { PATH } from '../constants/path';
import { useUserStore } from '../store/userStore';

const PrivateRoutes = () => {
  const isLogin = useUserStore((state) => state.isLogin);

  return !isLogin ? <Navigate to={PATH.LOGIN} replace/> : <Outlet />
}

export default PrivateRoutes
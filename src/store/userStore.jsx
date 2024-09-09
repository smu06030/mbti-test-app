import { create } from "zustand";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
  userInfo: {
    userId: localStorage.getItem("userId") || undefined,
    nickname: localStorage.getItem("nickname") || undefined
  },
};

export const useUserStore = create((set) => ({
  ...initialState,
  setIsLogin: (loginStatus) => set({ isLogin: loginStatus }),
  setUserInfo: (user) => set({ userInfo: { ...user } }),
}));

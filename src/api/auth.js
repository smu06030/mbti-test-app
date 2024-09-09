import { api, auth } from "../api/axios.js";
import { apiList } from "../utils/apiList.js";

// 로그인
export const postLogin = async (userData) => {
  try {
    const response = await api({ ...apiList.postLogin, data: userData });
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

// 회원가입
export const postRegister = async (userData) => {
  try {
    const response = await api({ ...apiList.postRegister, data: userData });
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

// 유저 정보 가져오기
export const getUserProfile = async () => {
  try {
    const response = await auth(apiList.getUserProfile);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

// 유저 정보 업데이트
export const updateProfile = async (nickname) => {
  try {
    const response = await auth({...apiList.patchUserProfile, data: {nickname: nickname} });
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
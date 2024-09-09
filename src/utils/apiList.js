import { API } from "../constants/api";

export const apiList = {
  // 회원가입
  postRegister: {
    method: "post",
    url: `${API.REGISTER}`,
  },

  // 로그인
  postLogin: {
    method: "post",
    url: `${API.LOGIN}`,
  },

  // 유저 정보 조회
  getUserProfile: {
    method: "get",
    url: `${API.USER}`,
  },

  // 프로필 변경
  patchUserProfile: {
    method: "patch",
    url: `${API.PROFILE}`,
  },

  // 테스트 결과 생성
  postTestResult: {
    method: "post",
  },

  // 테스트 결과 수정
  patchTestResult: {
    method: "patch",
  },

  // 테스트 결과 삭제
  deleteTestResult: {
    method: "delete",
  },
};
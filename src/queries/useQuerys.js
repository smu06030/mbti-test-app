import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKey";
import { getUserProfile } from "../api/auth";
import { getTestResults } from "../api/testResults";

// 사용자 프로필 가져오기
export const useGetUserProfileQuery = () => {
  return useQuery({
    queryKey: queryKeys.userController.userInfo(),
    queryFn: getUserProfile,
  });
};

// MBTI 결과 가져오기
export const useGetTestResultsQuery = () => {
  return useQuery({
    queryKey: queryKeys.resultController.results(),
    queryFn: getTestResults,
  });
};

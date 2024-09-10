import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./queryKey";
import { updateTestResultVisibility, deleteTestResult, } from "../api/testResults";
import { updateProfile } from "../api/auth";

// 공개, 비공개 전환 업데이트
export const useUpdateVisibilityMutaion = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.resultController.results());
    },
  });
};

// MBTI 결과 삭제
export const useDeleteTestResultMutaion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.resultController.results());
    },
  });
};

// 닉네임 업데이트
export const useUpdateNicknameMutation = () => {
  const queryClient = useQueryClient();
  const [data, setData] = useState(null);

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (response) => {
      setData(response);
      queryClient.invalidateQueries(queryKeys.userController.userInfo());
    },
  });

  return { mutate, data };
};

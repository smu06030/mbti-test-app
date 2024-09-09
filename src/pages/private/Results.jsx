import React from "react";
import { getTestResults } from "../../api/testResults";
import { useUserStore } from "../../store/userStore";
import TestResultItem from "../../components/Result/TestResultItem";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../queries/queryKey";

const Results = () => {
  const userInfo = useUserStore((state) => state.userInfo);

  const { data: results, isLoading } = useQuery({
    queryKey: queryKeys.resultController.results(),
    queryFn: getTestResults,
  });

  if(isLoading) return <h2>데이터가 없습니다.</h2>

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <div className="space-y-4">
          {results
            .filter(
              (result) => result.visibility || result.userId === userInfo.userId
            )
            .map((result) => (
              <TestResultItem key={result.id} result={result} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Results;

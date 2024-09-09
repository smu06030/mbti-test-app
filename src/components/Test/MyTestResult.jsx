import React from "react";
import Button from './../Layout/Button';
import { useNavigate } from 'react-router-dom';

const MyTestResult = ({testResults}) => {
  const navigate =  useNavigate();
  
  return (
    <div>
      <h2 className="pt-4 pb-4 text-2xl font-bold">
        테스트 결과: {testResults.result}
      </h2>
      <p className="pb-8">{testResults.description}</p>
      <Button
        className="w-[400px] py-4 mb-4"
        onClick={() => navigate("/Results")}
      >
        결과 페이지로 이동하기
      </Button>
    </div>
  );
};

export default MyTestResult;

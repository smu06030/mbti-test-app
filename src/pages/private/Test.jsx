import React, { useState } from "react";
import { questions } from "../../mock/questions";
import Card from "../../components/Layout/Card";
import Button from "../../components/Layout/Button";
import { calculateMBTI } from "../../utils/mbtiCalculator";
import { createTestResult } from "../../api/testResults";
import { useUserStore } from "../../store/userStore";

const Test = () => {
  const userInfo = useUserStore(state => state.userInfo)
  const [answers, setAnswers] = useState(
    questions.reduce((acc, question) => ({ ...acc, [question.id]: "" }), {})
  );

  // 라디오 상태 저장
  const onRadioHandler = (e, id) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  // 전체 선택 유무
  const isAllCheckedQuestion = Object.values(answers).every((answer)=>answer !== "");

  // MBTI 계산
  const onSubmitHandler = async () => {
    const result = calculateMBTI(Object.values(answers));
    const resultData = {
      userId: userInfo.userId,
      nickname: userInfo.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    }

    const data = await createTestResult(resultData);
  }

  const examQuestion = questions.map((question) => (
    <div
      key={question.id}
      className="w-[400px] flex flex-col justify-center items-start gap-4"
    >
      <div className="text-xl">{question.question}</div>
      <div className="w-full flex justify-center items-start flex-col gap-2">
        <label className="flex flex-row justify-start items-center cursor-pointer w-full h-[48px] text-sm px-4 outline-none border border-solid border-gray-300 rounded-md gap-2">
          <input
            type="radio"
            name={question.id}
            value="예"
            onChange={(e) => onRadioHandler(e, question.id)}
          />
          <p>예</p>
        </label>
        <label className="flex flex-row justify-start items-center cursor-pointer w-full h-[48px] text-sm px-4 outline-none border border-solid border-gray-300 rounded-md gap-2">
          <input
            type="radio"
            name={question.id}
            value="아니요"
            onChange={(e) => onRadioHandler(e, question.id)}
          />
          <p>아니요</p>
        </label>
      </div>
    </div>
  ));

  return (
    <Card>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="pt-4 pb-8 text-2xl font-bold">MBTI 테스트</h1>
        {examQuestion}
        <Button className="w-[400px] py-4 mb-4" onClick={onSubmitHandler} disabled={!isAllCheckedQuestion}>제출하기</Button>
      </div>
    </Card>
  );
};

export default Test;

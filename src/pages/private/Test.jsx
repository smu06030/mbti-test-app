import React, { useState } from "react";
import { questions } from "../../mock/questions";
import Card from "../../components/Layout/Card";
import { calculateMBTI } from "../../utils/mbtiCalculator";
import { createTestResult } from "../../api/testResults";
import { useUserStore } from "../../store/userStore";
import { MBTI_DESCRIPTIONS } from "../../constants/mbtiDescriptions";
import ListQuestions from "../../components/Test/ListQuestions";
import MyTestResult from "../../components/Test/MyTestResult";

const Test = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const [answers, setAnswers] = useState(
    questions.reduce((acc, question) => ({ ...acc, [question.id]: "" }), {})
  );
  const [testResults, setTestResults] = useState(null);

  // 전체 선택 유무
  const isAllCheckedQuestion = Object.values(answers).every(
    (answer) => answer !== ""
  );

  // input radio 상태 저장
  const onRadioHandler = (e, id) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

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
    };

    await createTestResult(resultData);

    setTestResults({
      result,
      description: MBTI_DESCRIPTIONS[result],
    });
  };

  return (
    <Card>
      <div className="flex flex-col justify-center items-center gap-4">
        {testResults ? (
          <MyTestResult testResults={testResults} />
        ) : (
          <ListQuestions
            questions={questions}
            isAllCheckedQuestion={isAllCheckedQuestion}
            onRadioHandler={onRadioHandler}
            onSubmitHandler={onSubmitHandler}
          />
        )}
      </div>
    </Card>
  );
};

export default Test;

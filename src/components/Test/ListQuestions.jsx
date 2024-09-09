import React from "react";
import Button from "../Layout/Button";

const ListQuestions = ({ questions, isAllCheckedQuestion, onRadioHandler, onSubmitHandler }) => {
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
    <>
      <h1 className="pt-4 pb-8 text-2xl font-bold">MBTI 테스트</h1>
      {examQuestion}
      <Button
        className="w-[400px] py-4 mb-4"
        onClick={onSubmitHandler}
        disabled={!isAllCheckedQuestion}
      >
        제출하기
      </Button>
    </>
  );
};

export default ListQuestions;

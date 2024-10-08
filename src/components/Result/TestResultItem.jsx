import React from "react";
import { useUserStore } from "../../store/userStore";
import { useDeleteTestResultMutaion, useUpdateVisibilityMutaion, } from "../../queries/useMutations";
import { MBTI_DESCRIPTIONS } from "../../constants/mbtiDescriptions";
import Loading from "../../assets/Loading";

const TestResultItem = ({ result }) => {
  const userInfo = useUserStore((state) => state.userInfo);
  const { mutate: updateMutate, isPending: loading } = useUpdateVisibilityMutaion();
  const { mutate: deleteMutate, isPending: loadings } = useDeleteTestResultMutaion();

  // 게시글 작성자, 날짜 포멧, 설명
  const isOwner = result.userId === userInfo.userId;
  const formattedDate = new Date(result.date).toLocaleString();
  const description = MBTI_DESCRIPTIONS[result.result] || "MBTI 유형 설명을 찾을 수 없습니다.";
  
  // 공개, 비공개 토글 이벤트
  const handleToggleVisibility = () => {
    const newVisibility = !result.visibility;

    updateMutate({ id: result.id, visibility: newVisibility });
  };

  // 결과 삭제 이벤트
  const handleDelete = () => {
    deleteMutate(result.id);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-xl font-semibold">{result.nickname}</h4>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
      <p className="text-2xl font-bold text-yellow-400 mb-4">{result.result}</p>
      <p className="text-base text-gray-300 mb-4">{description}</p>
      {isOwner && (
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleToggleVisibility}
            className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
          >
            {loading ? <Loading /> : result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition"
          >
            {loadings ? <Loading /> : "삭제"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../../api/auth";
import Card from "../../components/Layout/Card";
import Button from "../../components/Layout/Button";
import { useCustomMutation } from "../../hooks/useCustomMutation";
import { queryKeys } from "../../queries/queryKey";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  
  // 사용자 프로필 가져오기
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.userController.userInfo(),
    queryFn: getUserProfile,
  });

  // 닉네임 업데이트
  const { mutate: updateNickname, data: updateNicknameData } =
    useCustomMutation(updateProfile, queryKeys.userController.userInfo());
  
  useEffect(() => {
    if (data && data.nickname && nickname !== data.nickname)
      setNickname(data.nickname);
    if (updateNicknameData && updateNicknameData.message)
      setSuccessMessage(updateNicknameData.message);
  }, [data, updateNicknameData]);

  // 닉네임 업데이트 핸들러
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    updateNickname(nickname);
  };

  if (isLoading) return <h2>데이터가 없습니다.</h2>;
  
  return (
    <Card className="w-[420px]">
      <form
        onSubmit={onSubmitHandler}
        className="max-w-screen-md w-full py-4 flex justify-center items-center flex-col gap-4"
      >
        <h1 className="pb-4 text-2xl font-bold">프로필 수정</h1>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <div className="w-full flex justify-center items-start flex-col gap-4">
          <label htmlFor="nickname" className="text-sm">
            닉네임
          </label>
          <input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full h-[48px] text-sm px-4 outline-none border border-solid border-gray-300 rounded-md"
          />

          <Button className="w-full py-4">닉네임 변경</Button>
        </div>
      </form>
    </Card>
  );
};

export default Profile;

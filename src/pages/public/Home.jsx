import React from "react";
import Card from "./../../components/Layout/Card";
import Button from "../../components/Layout/Button";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { useUserStore } from "../../store/userStore";

const dummy = [
  {
    id: 1,
    title: "성격 유형 검사",
    description:
      "자신의 성격 유형을 파악하고 삶의 여러 영억에서 어떤 영향을 미치는지 알아보세요.",
  },
  {
    id: 2,
    title: "성격 유형 이해",
    description:
      "다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.",
  },
  {
    id: 3,
    title: "팀 평가",
    description:
      "팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useUserStore((state)=> state.isLogin)

  const onPersonalityTest = () => {
    if(!isLogin){
      alert("로그인이 필요합니다.");
      navigate(PATH.LOGIN);
    }
    
    navigate(PATH.TEST)
  }

  const introCard = dummy.map((post) => (
    <Card key={post.id}>
      <h1 className="text-xl mb-4 font-medium">{post.title}</h1>
      <p className="text-sm font-light">{post.description}</p>
    </Card>
  ));

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <div className="mt-4 flex flex-row justify-center items-center gap-8">
        {introCard}
      </div>
      <div className="mt-8">
        <Button className="rounded-3xl" onClick={onPersonalityTest}>내 성격 알아보러 가기</Button>
      </div>
    </section>
  );
};

export default Home;

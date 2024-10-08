## 📔 MBTI 테스트

### 개인 프로젝트 소개

본인의 MBTI를 테스트해 볼 수 있는 사이트입니다.

배포 링크 : https://mbti-test-app-six.vercel.app/ <br />
깃허브 링크 : https://github.com/smu06030/mbti-test-app

## 🗂️ 파일 구조

📦src <br />
 ┣ 📂assets <br />
 ┣ 📂api <br />
 ┣ 📂components <br />
 ┃ ┣ 📂Header <br />
 ┃ ┣ 📂Layout <br />
 ┃ ┣ 📂Result <br />
 ┃ ┗ 📂Test <br />
 ┣ 📂constants <br />
 ┣ 📂mock <br />
 ┣ 📂pages <br />
 ┃ ┣ 📂private <br />
 ┃ ┗ 📂public <br />
 ┣ 📂queries <br />
 ┣ 📂routes <br />
 ┣ 📂store <br />
 ┣ 📂utils <br />
 ┣ 📜App.jsx <br />
 ┗ 📜main.jsx <br />

## 💡 주요 기능

### 구현 사항
- ✅ 회원가입, 로그인, 프로필 관리 기능 구현
  - JWT 인증 서버를 사용하여 회원가입, 로그인, 프로필 수정
- ✅ MBTI 테스트 제공
  - 로그인한 유저만 진행할 수 있고 총 20개의 문항으로 구성된 테스트
- ✅ 테스트 결과 관리
  - 테스트 결과의 공개 여부를 변경할 수 있고 삭제 기능

### 도전
- ✅ 로그인 유지 기능
  - `localstorage`를 활용해 JWT 토큰 저장
- ✅ Zustand
  - 유저 정보 저장
- ✅ Tanstack Query
  - 비동기 데이터 관리 및 캐싱으로 테스트 결과 상태 관리
- ✅ axios
  - 인스턴스로 코드 재사용성과 유지보수를 높임
<br /><br />

## 🛠️ 사용 기술

### 프론트 엔드
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" /><img src="https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="zustand"/><img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" alt="react query"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router" /><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind-css" /><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white" alt="react-router" /><br />

### 버전 관리
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/><br />

## ❓ 이슈

### Glitch에서 JSON-server의 응답 속도 차이
#### 이슈 🔥
MBTI 테스트 앱을 개발하며 Glitch 플랫폼에서 JSON-server를 배포하여 사용했습니다. 하지만 로컬 환경에서의 실행 속도와 비교했을 때 상당한 지연이 발생하는 문제를 경험했습니다.

#### 해결 과정 🔎
로컬에서 `json-server --watch db.json --port 5000`으로 서버를 구동했을 때와 <br />
`Glitch`에서 서버를 구동했을 때와 응답 시간이 거의 10배 이상 차이 나는 현상을 console.time을 통해 확인했습니다.

#### 로컬
<img src="https://blog.kakaocdn.net/dn/EhcDD/btsJxiXwoTl/uarpTkkVMR5NKPNmwLMej0/img.gif"/>

#### 서버
<img src="https://blog.kakaocdn.net/dn/EAXOK/btsJwZRtKPF/4Xm855qmmKuk2MAaUzKv41/img.gif"/><br />

그래서 서버 응답 속도가 느리더라도 사용자 경험을 개선하기 위해 **`로딩 UI`** 를 도입하기로 결정했습니다.

#### 해결 방법 ✨
버튼을 클릭할 때 **`useMutation`** 을 활용해 요청이 되는 동안 로딩 스피너를 표시하여 사용자가 서버 응답을 기다리는 동안 명확한 피드백을 받을 수 있도록 했습니다.

```js
const { mutate: updateVisibility, isLoading: isUpdating } = useUpdateVisibilityMutation();

return (
  <button>
    {isUpdating ? <Spinner /> : "삭제"}
  </button>
);
```
<img src="https://blog.kakaocdn.net/dn/clVrR8/btsJxjPyjvI/QMVIQPST0oDXX4Pd4q2nUK/img.gif"/><br />

서버 성능 문제를 완벽히 해결하기 어려운 상황에서도, **`로딩 UI`** 를 도입해 속도 차이로 인한 사용자 불만을 최소화하고, 더 나은 사용자 경험을 제공할 수 있었습니다.

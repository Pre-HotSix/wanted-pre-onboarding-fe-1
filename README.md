# 🎉 원티드 프리온보딩 프론트엔드 코스 1차 과제

## 배포 링크

https://pre-onboarding-hotsix.netlify.app/
- TEST 이메일
  ```
  hihello@naver.com
  ```
- TEST 비밀번호
  ```
  qwerasdf
  ```
- 회원가입 시 나만 접근가능한 todolist를 사용할 수 있습니다.
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 임시 이메일, 비밀번호 사용을 권장드립니다.
<br/>
<br/>

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모(팀장)](https://github.com/endmoseung)|프론트엔드|프리온보딩 코스 수료후 관련기업 취업성공!|
|[손우영](https://github.com/dndud2906)|프론트엔드|프리온보딩 기반으로 하루빨리 이직|
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드|10월 안에 취직!|
|[강다현](https://github.com/KKangdaa)|프론트엔드|실무를 아는 신입개발자 되기|
|[임성훈](https://github.com/sasumpi123)|프론트엔드| |
<br/>

## 실행 방법

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/wanted-pre-onboarding-fe-1.git
```
package를 설치합니다
```markdown
$ npm install
```
프로젝트를 실행합니다
```markdown
$ npm start
```
<br/>

**프로젝트 실행 전**

1. 최상위 폴더에 `.env` 파일을 생성합니다.
2. REACT_APP_SERVER_API_KEY을 설정해 줍니다.
3. 환경 변수의 `key`값은 https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/ 입니다.
<br/>

## 폴더 구조

```
root
├── .prettierrc
├── .eslint
├── .env
├── package-lock.json
├── package.json
├── tsconfig.json
├── public
|   ├── favicon.ico
|   └── index.html
└── src
    ├── apis
    ├── components
    ├── hooks
    ├── pages
    ├── routes
    ├── styles
    ├── theme
    ├── types
    ├── App.tsx
    └── index.tsx
```

|폴더|구분|
|:--|:--|
|apis|서버 통신을 위한 api로직을 정의|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|hooks|자주사용되는 훅을 커스텀 훅으로 관리하는 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|styles|전역으로 사용하는 style 관리 폴더|
|theme|재사용을 위한 CSS 관리 폴더|
|types|타입정의를 관리하는 폴더|
<br/>

## Best Practice

### 1. Api 함수 로직 분리
- 사용하는 api들을 apis폴더내에 파일로 선언해서 사용했습니다.  
💡 **이유** : 기존에는 페이지내에서 함수를 선언하고 호출했었습니다. 그러나, 토론을 통해 서비스로직은 따로 관리해야된다는 의견을 수렴했고, apis에 따로 선언하여 재사용성을 높였습니다.
- 사용하는 api들을 기능에 맞게 분할해서 선언했습니다.  
💡 **이유** : todoApi.ts와 userApi.ts를 기능에 따라 나누는 것이, 서비스 목적에 따라 관리할수 있는 장점이 있다고 생각했습니다.

### 2. Todo 페이지
- useQuery 커스텀훅 생성  
💡 **이유** : 커스텀훅 생성을 통해 추상화, todo관련 api요청시 화면에 내용 최신화가 가능해진다고 생각했습니다.

### 3. themes로 자주 쓰이는 색상 핸들링
- 자주 사용하는 색깔들을 styledComponent의 theme을 이용해서 선언했습니다.  
💡 **이유** : 한 파일내에 정의하여 사용하면 유지보수를 높일 수 있고, 컴포넌트처럼 재사용해서 사용할 수 있습니다. 그리고 일관성있는 UI를 만들수 있다고 생각했습니다.

### 4. Redirect를 Protected Route개념으로 핸들링
- Protected Route개념으로 Redirect를 해결했습니다.  
💡 **이유** : 기존에는 페이지에서 mount시 useNavigation으로 페이지를 이동했습니다. 그러나, 이는 페이지를 직접 이동했다가 돌아가기때문에 화면깜빡임현상이 있었고, 이를 보완하기위해 라우팅에서 유효성검사를 통해 페이지 이동을 막았습니다.

### 5. 로그인 회원가입 유효성 해결
- useValidText를 사용하여 다소 장황할수 있는 valid함수를 useEffect로직에 포함시켜, 훅 외부에서 사용할때보다 간단한 return타입으로 사용할 수 있게 만들었습니다.  
💡 **이유** : 유효성검사를 통해 유효성검사 결과 텍스트, 유효성 검사 boolean을 UI요소로 사용하기 위해 해당방법을 도입하였습니다.

### 6. 토큰정보를 api요청에 담아 헤더로 보낼시 null로 담기는 에러 해결
- 회원가입 및 로그인 후에 투두리스트를 가져오기 위한 getTodos를 요청하는데 필요한 access_token값을, localStorage를 이용하여 index.ts파일에서 가져왔었습니다.  
그러나, index.ts파일에서는 access_token값을 페이지 mount시 불러오기 때문에, null값을 가져온후 로그인 or 회원가입 로직이 돌아가서 access_token값이 업데이트 되지않았고, headers에 null값이 들어가는 문제가 일어났습니다.  
💡 **해결방안** : getTodos, createTodo, updateTodo, removeTodo 함수에서 token을 직접적으로 받아온 후, headers를 추가한 API를 요청하여 해결했습니다.

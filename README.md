# 🦖원티드 프리온보딩 선발과제

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모](https://github.com/endmoseung)|프론트엔드| |
|[손우영](https://github.com/dndud2906)|프론트엔드| |
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드| |
|[강다현](https://github.com/KKangdaa)|프론트엔드| |
|[임성훈](https://github.com/sasumpi123)|프론트엔드| |

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
3. 환경 변수의 `key`값은 []()
<br/>

## 폴더구조

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

## 배포링크

https://pre-onboarding-hotsix.netlify.app/

## Best Practice

### Api 함수 로직 분리
1. 사용하는 api들을 apis폴더내에 파일로 선언해서 사용했습니다.
이유 : 원래는 페이지내에서 함수를 선언하고 호출했었는데, 이는 서비스로직은 따로 관리해야된다 생각했고, apis에 따로 선언해서 재사용성을 높였습니다.
2. 사용하는 api들을 기능에 맞게 분할해서 선언했습니다.
이유 : todoApi.ts와 userApi.ts를 기능에 따라 나눴는데, 서비스 목적에 따라 관리할수 있는 장점이 있다고 생각했습니다.

### Todo의 작성 취소 기능 추가

1. 작성된 투두의 편집 진행 중 취소를 누를경우 원래의 투두 컨텐츠로 fallback

### themes로 자주 쓰이는 색상 핸들링
1 . 자주 사용하는 색깔들을 styledComponent의 theme을 이용해서 선언했습니다.
이유 : 유지보수를 높이기 위함,  일관성있는 UI를 만들수 있으며, 그리고 컴포넌트처럼 재사용해서 사용할수 있다고 생각했습니다.

### Redirect를 Protected Route개념으로 핸들링
1 . Protected Route개념으로 Redirect를 해결했습니다.
이유 : 기존에 페이지에서 mount시 useNavigation으로 페이지 이동했습니다. 하지만 이는 페이지를 직접 이동했다가 돌아가는 화면깜빡임현상이 있었고 , 이를 보완하기위해 라우팅에서 유효성을 검사해 페이지 이동을 막았습니다.

### 토큰정보를 api요청에 담아 헤더로 보낼시 null로 담기는 에러 해결


회원가입 및 로그인 후에 투두리스트를 가져오기 위한 getTodos 를 요청하는데에 필요한 access_token값을 localStorage.getItem('access_token') 으로 이용하여 index.ts파일에서 가져왔었는데, 이 부분에서 index.ts파일에서 가져오는 localStorage.getItem('access_token') 값은 null 이고 업데이트 되지않아 headers값에 계속 null값이 들어가서 문제가 일어났었음

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



## Best Practice

### Api 함수 세분화

1. index.ts에 token, apiClient 와 같은 공통 변수를 제외한 get,put 등 메서드 용도별로 분류
2. todoApi.ts 에 Todo관련한 get,post,put,delete 메서드 정리
3. userApi.ts 에 유저 관련한 get,post,put,delete 메서드 정리

### Todo의 작성 취소 기능 추가

1. 작성된 투두의 편집 진행 중 취소를 누를경우 원래의 투두 컨텐츠로 fallback

### themes로 자주 쓰이는 색상 핸들링

1. 명료하게 RED,BLACK,GRAY등을 사용해서 styled-components에 prop으로 명확한 색상 입력 기능 추가

### Router 기능 폴더 정리

1. private, public 등 토큰 유무에 따른 경로 접근 컴포넌트 정리
2. Router.tsx를 해당 폴더에 분류

### 토큰정보를 api요청에 담아 헤더로 보낼시 null로 담기는 에러 해결

1. 

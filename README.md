# <O'REILLY> 🟦타입스크립트 프로그래밍

<image src="./screenshots/XL.jpg" width="400" />

# 📌목차

1. 소개
2. [타입스크립트: 3000미터 상공에서 내려다보기](./src/chapter2)
3. [타입의 모든 것](./src/chapter3)
4. [함수](./src/chapter4)
5. [클래스와 인터페이스](./src/chapter5)
6. [고급 타입](./src/chapter6)
7. [에러 처리](./src/chapter7)
8. [비동기 프로그래밍, 동시성과 병렬성](./src/chapter8)
9. [프론트엔드 프레임워크와 백엔드 프레임워크](./src/chapter9)
10. [Namespaces, Modules](./src/chapter10)
11. [자바스크립트와 상호 동작](./src/chapter11)
12. [타입스크립트 빌드 및 실행](./src/chapter12)
13. [결론](./src/chapter13)

# 📚공부하기

근무하며 책 읽고, 연습 문제와 실습에 관한 것들을 정리할 예정

# 🔨기본 셋팅

## 각 챕터 시작 전

```bash
npm init

npm install -D typescript eslint @types/node

tsc --init
```

## 폴더 구성

```
├────node_modules/
├────src/
│ └────chapter[:id]
│       └────index.ts
├────package.json
├────tsconfig.json
└────.eslint.json
```

## `tsconfig.json`, `eslint.json` 설정

1. `tsc --init` 으로 기본 생성한 후

2. ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs",
       "lib": ["ES2015"],
       "sourceMap": true,
       "outDir": "./dist",
       "strict": true
     },
     "include": ["src"]
   }
   ```

3. `eslint --init` 으로 자동 설정

## 실행 명령어

`npx tsc 파일 경로` 이후 `node dist/index.js`

## 다른 방법

- [`ts-node`](https://github.com/TypeStrong/ts-node) - 명령 한 번으로 컴파일 및 실행
- [`typescript-node-starter`](https://github.com/microsoft/TypeScript-Node-Starter) - 스캐폴딩

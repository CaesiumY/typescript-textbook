// 1. 인수 하나와 콜백 함수 하나를 취하는 함수를 인수로 받아서 프로미스를 반환하는 함수로 래핑해주는 범용 promisify 함수를 구현하자
// 제대로 구현했다면 다음처럼 사용할 수 있어야 한다.

import { readFile } from "fs";

const promisify = <T, A>( // A는 어차피 string일 것으로 생각했으나 'PathOrFileDescriptor' 라는 속성이 따로 있어서 제네릭 처리, T는 Buffer
  callback: (path: A, cb: (error: Error | null, data: T | null) => void) => void // path, cb를 인수로 받는 콜백 함수(콜백이 2차로 들어간다)
): ((path: A) => Promise<T>) => {
  // 경로를 받아와 프로미스를 반환하는 함수를 반환
  return (path: A) =>
    new Promise<T>((resolve, reject) => {
      callback(path, (error, data) => {
        if (error) return reject(error);
        if (data === null) return reject(null); // data는 타이핑에 따라 null일 수도 있으니 분기 처리

        resolve(data);
      });
    });
};

const readFilePromise = promisify(readFile); // 딱 보니 readfile을 콜백 함수로 넣어주고 새 프로미스 함수를 반환하는 구조

readFilePromise("./myfile.ts") // 반환된 함수에는 경로를 인수로 넣어줌
  .then((result) => console.log("Success", result.toString())) // resolve의 결과 데이터도 받아옴
  .catch((error) => console.error("error", error)); // reject의 결과도 받아옴

// 2. 237쪽의 '타입 안전 프로토콜'을 웹 워커 스레드에서 실행되는 나머지 절반을 구하자
// 3. 매핑된 타입(8.6.1)을 이용해 NodeJs의 child_process에 사용할 수 있는 타입 안전 메이지 전달 프로토콜을 구현하자

// 미안하지만 지금 필요없느 웹 워커 파트는 패-스

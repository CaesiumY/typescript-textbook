// 1. 타입스크립트 추론

let a = 1042; // number
let b = "apples and oranges"; // string
const c = "pineapples"; // "pineapples" -> 원시값은 재할당이 불가능하게 해서 상수로 만들어진다.
let d = [true, true, false]; // boolean[]
let e = { type: "ficus" }; // { type: string }
let f = [1, false]; // (number | boolean)[]
const g = [3]; // number[] -> 배열과 객체처럼 참조값은 값의 변경이 가능하기 때문에 상수가 아니다.
let h = null; // any

// 2. 에러의 원인

let i: 3 = 3;
i = 4;
// 3만을 가질 수 있는 변수에 4를 할당해서

let j = [1, 2, 3];
j.push(4);
j.push("5");
// number[]에 string을 넣으려고 해서

let k: never = 4;
// never형식 변수에는 할당 불가

let l: unknown = 4;
let m = l * 2;
// 알 수 없는 값이기 때문에 사용을 금지한다

let a = 1 + 2; // number로 추론된다.
let b = a + 3; // number로 추론된다.
let c = {
  apple: a,
  banana: b,
}; // number를 가진 객체로 추론된다.
let d = c.apple * 4; // number로 추론된다.

// TypeError를 발생시켜보자
a = "str";

// a에 string 속성을 주면 에러가 사라진다.
// let a: string | number = 1 + 2;

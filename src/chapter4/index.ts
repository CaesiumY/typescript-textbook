// 3번 문제 - 목적지만 인수로 받는 시그니처를 추가하고 reserve의 구현도 갱신

type Reservation = string;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
}; // 오버라이드

const reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination
  )
    return "왕복";

  if (fromOrDestination instanceof Date && typeof toOrDestination === "string")
    return "편도";

  if (typeof fromOrDestination === "string") return "목적지만";

  return "없음";
};

console.log(reserve(new Date(), new Date(), "Seoul")); // 왕복
console.log(reserve(new Date(), "Seoul")); // 편도
console.log(reserve("Seoul")); // 목적지만

// 4번 문제 - 한정된 다형성으로 인수의 개수 정의하기에서
// `call` 함수에 넘겨진 함수의 두 번째 인수가 string인 함수여야 정상 동작하도록 구현
// 이를 제외한 모든 함수는 컴파일 에러 발생

function call<T extends [unknown, string, ...unknown[]], R>( // unknown은 넘겨진 함수의 첫 번째 인수, string은 넘겨진 함수의 두 번째 인수, ...unknown[]은 나머지 인수
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

console.log(call(fill, 10, "a"));
// console.log(call(fill, 10, 5)); // string이 아니라 오류

// 5번 문제 - 타입 안전성을 지원하는 작은 assertion 라이브러리 `is`를 구현해보자

const is = <T, K extends T>(a: T, ...args: K[]): boolean => {
  return args.every((item) => item === a);
};

// string 과 string 비교
console.log(is("string", "otherString")); // false

// boolean 과 boolean 비교
console.log(is(true, false)); // false

// number 과 number 비교
console.log(is(42, 42)); // true

// 서로 다른 두 타입을 비교하면 컴파일 에러 발생
is(10, "foo"); // ts2345 컴파일 에러

// [어려움] 임의의 개수의 인수 전달 가능
console.log(is([1], [1, 2], [1, 2, 3])); // false

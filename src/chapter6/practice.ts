/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/prefer-as-const */

// NOTE - 1. 첫 번째 타입을 두 번째 타입에 할당할 수 있는지 정하고, 이유를 설명해보자.
// 서브 타입과 가변성 관점에서 고민해보자

// a. 1과 number - 할당 가능 1 <: number
let aa: number;
aa = 1 as 1;

// b. number와 1 - 수퍼 타입인 number를 서브 타입 1에 할당 불가
let bb: 1;
bb = 2 as number;

// c. string과 number | string - string <: number | string 이므로 할당 가능
let cc: number | string;
cc = "cc" as string;

// d. Boolean과 number - boolean과 number는 전혀 다른 타입이다. 할당 불가
let dd: number;
dd = true as boolean;

// e. number[] 와 (number|string)[] - number[] <: (number|string)[] 이므로 할당 가능
let ee: (number | string)[];
ee = [1, 2, 3] as number[];

// f. (number|string)[] 과 number[] - number[]가 더 좁은 범위의 서브 타입이기 때문에 슈퍼 타입 할당은 불가능
let ff: number[];
ff = [1, 2, 3] as (number | string)[];

// g. {a: true} 와 {a: boolean} - true <: boolean이므로 할당 가능
let gg: { a: boolean };
gg = { a: true } as { a: true };

// h. {a: {b: [string]}} 과 {a: {b: [number | string]}} - {a: {b: [string]}} <: {a: {b: [number | string]}} 이므로 할당 가능
let hh: { a: { b: [number | string] } };
hh = { a: { b: ["c"] } } as { a: { b: [string] } };

// i. (a: number) => string 과 (b: number) => string - 서로의 매개변수와 반환타입이 같거나 슈퍼타입이므로 할당 가능
let ii: (b: number) => string;
ii = ((b: number) => "c") as (a: number) => string;

// j. (b: number) => string 과 (a: string) => string - 서로의 반환타입은 같지만, 매개변수의 타입이 string과 number로 달라 할당 불가능
let jj: (a: string) => string;
jj = ((b: number) => "c") as (a: string) => string;

// k. (a: number | string) => string 과 (a: string) => string - 매개변수에서 string <: number | string 이므로 할당 가능
let kk: (a: string) => string;
kk = ((a: number | string) => "c") as (a: number | string) => string;

// l. E.X(열거형 enum E {X= 'x'}) 와 F.X(열거형 enum F {X= 'X'}) - enum 형식은 객체의 내용이 같아도 전혀 다른 객체이므로 할당 불가능
enum E {
  X = "X",
}

enum F {
  X = "X",
}

let ll: F.X;
ll = E.X as E.X;

// NOTE - 2. type O = {a: {b: {c: string}}} 라는 객체 타입이 있을 때 keyof O는 무슨 타입을 반환할까?
// O['a']['b']는 무슨 타입인가?
type O = { a: { b: { c: string } } };
type KO = keyof O; // 'a'
type OO = O["a"]["b"]; // {c: string}

// 객체에 있는 키들만 참조할 수 있으므로 정적으로 타이핑 된다.

// NOTE - 3. T나 U에 속하지만 둘 다에는 속하지 않는 Exclusive<T, U>를 구현해보자.
// 예를 들어 Exclusive<1 | 2 | 3, 2 | 3 | 4>의 결과는 1 | 4 다.
// 타입 검사기가 Exclusive<1 | 2 , 2 | 4> 를 어떻게 평가하는지 단계별로 서술해보자.

type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>;

type EX = Exclusive<1 | 2 | 3, 2 | 3 | 4>;
type CL = Exclusive<1 | 2, 2 | 4>;

// 그냥 각각 차집합을 합집합으로 만들어주면 된다.

// NOTE - 4. '6.6.3 확실한 할당 어서션' 에서 소개한 예제를 확실한 할당 어서션을 사용하지 않고 구현해보자
let userId: string = fetchUser();

userId.toUpperCase();

function fetchUser() {
  return globalCache.get("userId");
}

const globalCache = {
  get(key: string) {
    return key;
  },
};

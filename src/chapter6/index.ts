// NOTE - 1. 첫 번째 타입을 두 번째 타입에 할당할 수 있는지 정하고, 이유를 설명해보자.
// 서브 타입과 가변성 관점에서 고민해보자

// NOTE - 2. type 0 = {a: {b: {c: string}}} 라는 객체 타입이 있을 때 keyof 0는 무슨 타입을 반환할까?
// 0['a']['b']는 무슨 타입인가?

// NOTE - 3. T나 U에 속하지만 둘 다에는 속하지 않는 Exclusive<T, U>를 구현해보자.
// 예를 들어 Exclusive<1 | 2 | 3, 2 | 3 | 4>의 결과는 1 | 4 다.
// 타입 검사기가 Exclusive<1 | 2 , 2 | 4> 를 어떻게 평가하는지 단계별로 서술해보자.

// NOTE - 4. '6.6.3 확실한 할당 어서션' 에서 소개한 예제를 할당 어서션을 사용하지 않고 구현해보자

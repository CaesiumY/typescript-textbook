/* eslint-disable @typescript-eslint/no-namespace */
// 1. 선언 합치기를 가지고 놀아보자

// 1-a. 6.3.4 컴패니언 객체 패턴에서 소개한 컴패니언 객체를 값과 타입대신
// 네임스페이스와 인터페이스로 재구현하자

interface Currency {
  unit: "EUR" | "GBP" | "JPY" | "USD";
  value: number;
}

namespace Currency {
  export const DEFAULT: Currency["unit"] = "USD";
  export function from(value: number, unit = Currency.DEFAULT): Currency {
    return { unit, value };
  }
}

const amountDue: Currency = {
  unit: "JPY",
  value: 83733.1,
};

const otherAmountDue = Currency.from(330, "EUR");

// 1-b. 열거형에 정적 메서드를 추가하자

enum State {
  TODO = "todo",
  IN_PROGRESS = "in progress",
  DONE = "done",
}

namespace State {
  export function setProjectState(state: State, id: number): void {
    console.log(state, id);
  }
}

State.setProjectState(State.TODO, 0);

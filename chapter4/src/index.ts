// 3번 문제 - 목적지만 인수로 받는 시그니처를 추가하고 reserve의 구현도 갱신

type Reservation = string;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

const reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  )
    return "왕복";

  if (fromOrDestination instanceof Date && typeof toOrDestination === "string")
    return "편도";

  if (typeof fromOrDestination === "string") return "목적지만";

  return "없음";
};

console.log(reserve(new Date(), new Date(), "Seoul"));
console.log(reserve(new Date(), "Seoul"));
console.log(reserve("Seoul"));

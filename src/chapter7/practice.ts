// 1. 7장에서 배운 패턴 중 하나로 다음 API의 레어를 처리하는 방법을 설계하자.
// 모든 동작은 실패할 수 있으며 메서드 시그니처는 자유롭게 바꿀 수 있다.
// 일련이 동작을 수행하며 발생할 수 있는 에러를 어떻게 처리할지 생각해보자
// (예: 사용자의 ID로 로그인한 다음 친구 목록을 가져오고 각 친구의 이름을 얻음)

type UserID = unknown;

class API {
  getLoggedInUserID(): UserID;
  getFriendIDs(userID: UserID): UserID[];
  getUserName(userID: UserID): string;
}

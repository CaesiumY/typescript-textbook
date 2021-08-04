// 1. 7장에서 배운 패턴 중 하나로 다음 API의 레어를 처리하는 방법을 설계하자.
// 모든 동작은 실패할 수 있으며 메서드 시그니처는 자유롭게 바꿀 수 있다.
// 일련이 동작을 수행하며 발생할 수 있는 에러를 어떻게 처리할지 생각해보자
// (예: 사용자의 ID로 로그인한 다음 친구 목록을 가져오고 각 친구의 이름을 얻음)

// 예외 던지기로 풀어보자 (Option은 아직 너무 어렵다...)
const SAMPLE_USER_ID = "typescript";
const SAMPLE_USER_NAME = "textbook";
type UserID = {
  id: string;
  name: string;
};

class InvalidUserIDError extends RangeError {}
class EmptyUserID extends Error {}
class EmptyFriendIDs extends Error {}
class API {
  getLoggedInUserID(): UserID {
    const userID = {
      id: SAMPLE_USER_ID,
      name: SAMPLE_USER_NAME,
    }; // NOTE: assume that get userID from api

    if (!userID) throw new EmptyUserID("You should Login!");

    return userID;
  }
  getFriendIDs(userID: UserID): UserID[] {
    const friendIDs = [];

    for (let i = 0; i < 9; i++) {
      friendIDs.push({
        id: userID.id + i,
        name: userID.name + i,
      });
    } // NOTE: assume that get userID from api

    if (friendIDs.length <= 0) throw new EmptyFriendIDs("You have no friends!");

    return friendIDs;
  }
  getUserName(userID: UserID): string {
    if (userID.name.length >= 12 || !userID.id.match(/[^a-zA-Z0-9]/gi)) {
      throw new InvalidUserIDError(
        "User ID should be less than 12 characters and not contain any special characters"
      );
    }

    return userID.name;
  }
}

try {
  const api = new API();

  const currentLoggedInUserID = api.getLoggedInUserID();
  const friendsIDsPerUser = api.getFriendIDs(currentLoggedInUserID);
  const friendsNamesPerUser = friendsIDsPerUser.map((friendID) =>
    api.getUserName(friendID)
  );

  console.log(friendsNamesPerUser);
} catch (error) {
  if (error instanceof EmptyFriendIDs) console.info(error.message);
  else console.error(error.message);
}

// 타이핑이랑 별로 연관이 없게 만들어버렸다...

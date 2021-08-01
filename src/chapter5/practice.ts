// 1. 클래스와 인터페이스의 차이
// 인터페이스가 더 범용적이며 추상 클래스는 특별한 목적과 풍부한 기능을 가진다.
// 인터페이스는 형태를 정의하는 수단이다. 객체로 이루어진 모든 것을 정의할 수 있으며, 컴파일 타임에만 존재하므로 자바스크립트 코드를 만들지 않는다.
// 추상 클래스는 클래스만 정의할 수 있다. 런타임에 자바스크립트 코드를 만들어내며, 생성자와 기본구현 및 접근 한정자를 지정할 수 있다.
// 여러 클래스에서 특정 목적을 공유한다면 추상 클래스를, 가볍게 타입 정의를 하려면 인터페이스를 사용하자.

// 2. 클래스의 생성자를 private로 한다면 무슨 일이 일어나는가?

class Protected {
  protected constructor() {}
}
const sample = new Protected(); // 인스턴스 생성 불가

class ExtendedClass extends Protected {} // 클래스 확장은 가능
const sampleChild = new ExtendedClass();

class ExtendedClass2 extends Protected {
  constructor() {
    super();
  }
}
const sampleChild2 = new ExtendedClass2(); // super를 선언한 후에는 가능

// 3. "5.11.1 팩토리 패턴" 에서 개발한 코드를 추상화 원칙을 조금 어기는 대신 안전성을 확보할 수 있도록 개선
// 기존에는 항상 `Shoe` 가 반환되었지만, 이번에는 Shoe.create('boot') 호출하면 Boot를 반환하도록 바꿔보자(balletFlat도 마찬가지)

type Shoe = {
  purpose: string;
};

type ShoeCreator = {
  create(type: "balletFlat"): BalletFlat;
  create(type: "boot"): Boot;
  create(type: "sneaker"): Sneaker;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

let Shoe: ShoeCreator = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

Shoe.create("boot");

// 4. 빌더 패턴을 사용하는 방법을 설계해보자

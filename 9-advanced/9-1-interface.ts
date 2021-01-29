{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInteface {
    x: number;
    y: number;
  }

  // object ⭐️
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInteface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ⭐️
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInteface {
    x: number;
    y: number;
    z: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInteface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  // 😊 only interface can be merged
  interface PositionInteface {
    z: number;
  }

  //   type PositionType {

  //   }

  //   🥺Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string;

  type NumberType = number;
  type Direction = "left" | "right";

  /**
   * NOTE 어떤것을 구현할 목적이라면? Interface
   * 데이터를 담을 목적이라면 Type
   */
}

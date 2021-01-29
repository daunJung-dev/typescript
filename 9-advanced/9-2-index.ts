{
  /**
   * NOTE Utility Types
   * Type -> type
   */
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie;
  obj["name"]; // ellie;

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  const text: Name = "hello";

  type Gender = Animal["gender"];

  type AnimalKeys = keyof Animal; // name | age | gender

  const key: AnimalKeys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "ellie",
    gender: "female",
  };
}

// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
const either2 = new SimpleEither(true, "string");

console.log(either.left());
console.log(either.right());
console.log(either2.left());
console.log(either2.right());

{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }
  class StackImpl implements Stack {
    private stackArr: string[];

    get size(): number {
      return this.stackArr.length;
    }

    constructor(...args: string[]) {
      this.stackArr = args;
    }

    push(a: string): void {
      this.stackArr[this.stackArr.length] = a;
    }
    pop(): string {
      const lastOne = this.stackArr[this.stackArr.length - 1];
      this.stackArr = this.stackArr.slice(0, this.stackArr.length - 1);
      return lastOne;
    }
  }

  const test = new StackImpl("ellie");
  test.push("Bill");
  console.log(test, test.size);
  console.log(test.pop());
  console.log(test, test.size);
}

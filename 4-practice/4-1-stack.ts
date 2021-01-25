{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size(): number {
      return this._size;
    }

    constructor(private capacity?: number) {}

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error("Stack is full🌝");
      }
      this._size++;
      const node: StackNode = { value, next: this.head };
      this.head = node;
    }
    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is empty! ✋");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const test = new StackImpl();
  test.push("Bill");
  test.push("ellie");
  console.log(test, test.size);
  console.log(test.pop());
  console.log(test.pop());
  console.log(test, test.size);
  console.log(test.pop());
}

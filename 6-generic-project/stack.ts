{
  interface Stack<V> {
    readonly size: number;
    push(value: V): void;
    pop(): V;
  }

  type StackNode<V> = {
    readonly value: V;
    readonly next?: StackNode<V>;
  };

  class StackImpl<V> implements Stack<V> {
    private _size: number = 0;
    private head?: StackNode<V>;
    get size(): number {
      return this._size;
    }

    constructor(private capacity?: number) {}

    push(value: V): void {
      if (this.size === this.capacity) {
        throw new Error("Stack is full🌝");
      }
      this._size++;
      const node: StackNode<V> = { value, next: this.head };
      this.head = node;
    }
    pop(): V {
      if (this.head == null) {
        throw new Error("Stack is empty! ✋");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const strings = new StackImpl<string>();
  const numbers = new StackImpl<number>();

  strings.push("Bill");
  strings.push("ellie");
  console.log(strings, strings.size);
  console.log(strings.pop());
  console.log(strings.pop());
  console.log(strings, strings.size);
  numbers.push(3);
  numbers.push(4);
  console.log(numbers, numbers.size);
  console.log(numbers.pop());
  console.log(numbers.pop());
  console.log(numbers, numbers.size);
}

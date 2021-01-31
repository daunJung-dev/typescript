console.log(this);

function simpleFunction() {
  console.log(this);
}

simpleFunction();
console.clear();
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
// const caller = counter.increase;
const caller = counter.increase.bind(counter);
console.log(caller());

class Bob {}
const bob = new Bob();
bob.run = counter.increase;

/**
 * Let's make a game 🕹
 */
type Position = {
  x: number;
  y: number;
};
type Direction = "up" | "right" | "left" | "down";

const position: Position = { x: 0, y: 0 };

function move(direction: Direction): void {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    case "left":
      position.x -= 1;
      break;
    default:
      throw Error("unknown command");
  }
}

console.log(position);
move("up");
console.log(position);
move("down");
console.log(position);
move("left");
console.log(position);
move("right");
console.log(position);

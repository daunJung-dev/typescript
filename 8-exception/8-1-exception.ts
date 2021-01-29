// NOTE Java: Exception
/**
 * JavaScript: Error
 */
// const array = new Array(1000000000000000000);

// NOTE Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file Contetns";
}

function closeFile(fileName: string): void {}

const fileName = "not exist!💩";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log("catch🙋‍♂️");
} finally {
  closeFile(fileName);
  console.log("finally");
}

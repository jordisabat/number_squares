import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { getSquaresWithoutOverlapping } from "./helpers";

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log(
    "Let's say you have an empty web page open in your web browser.\nThe width and height of your web browser window can vary.\nCalculate the biggest square you can fit on the page (position, edge length).\nThen calculate the next biggest square you can fit without overlapping any other squares that are already on the page.\nKeep doing this until there is no room left on the page and you have calculated all the squares you can fit on it.\n\n\n"
  );

  try {
    const height = await rl.question("Tell me your canvas height? ");
    const heightNumber = Number(height);
    if (isNaN(heightNumber)) {
      console.log("ERROR: You should enter a number");
      return;
    }

    const width = await rl.question("Tell me your canvas width? ");
    const widthNumber = Number(width);
    if (isNaN(widthNumber)) {
      console.log("ERROR: You should enter a number");
      return;
    }

    const initialSquare = [] as Square[];
    const squares = getSquaresWithoutOverlapping(initialSquare, 70, 50);

    console.log(
      `\nFor height ${height} and width ${width} the number of squares are: ${squares.length}`
    );

    console.log("List of squares", squares);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    rl.close();
  }
}

main();

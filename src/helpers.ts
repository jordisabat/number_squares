const getMinValue = (height: number, width: number): number => {
  return height <= width ? height : width;
};

export const getSquaresWithoutOverlapping = (
  squares: Square[] = [] as Square[],
  height: number,
  width: number
): Square[] => {
  let previousSquare: Square | undefined;
  if (squares.length > 0) {
    previousSquare = squares[squares.length - 1];
  }
  const newSquare: Square = {
    position: {
      x: previousSquare ? previousSquare.position.x : 0,
      y: previousSquare ? previousSquare.position.y : 0,
    },
    side: getMinValue(height, width),
  };

  if (squares.length > 0) {
    if (height >= width) {
      newSquare.position.x = previousSquare
        ? newSquare.position.x + previousSquare.side
        : newSquare.side;
      height = height - newSquare.side;
    } else {
      newSquare.position.y = previousSquare
        ? newSquare.position.y + previousSquare.side
        : newSquare.side;
      width = width - newSquare.side;
    }
    newSquare.side = getMinValue(height, width);
  }

  if (newSquare.side <= 0) {
    return squares;
  }

  squares.push(newSquare);

  return getSquaresWithoutOverlapping(squares, height, width);
};

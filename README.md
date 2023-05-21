# Square Packing Algorithm

The Square Packing Algorithm is a method to calculate and place squares on a canvas in such a way that they fit within the available space without overlapping each other. 
This algorithm starts with an empty canvas defined by height and width and iteratively determines the largest possible square that can be accommodated, followed by the next largest square that fits without overlapping any existing squares. 
This process continues until there is no more room on the canvas.

## Result
The algorithm returns a list of squares, where each square is defined by its position (x, y) and side length.

## Usage

I created a terminal app where user is asked about the canvas size (width and height) and the program will return the list of squares available on that specific canvas.

    npm install
    npm start

## Algorithm Steps

The `getSquaresWithoutOverlapping` function has 3 parameters: list of squares, available height and width.

1. The algorithm begins by creating the next square to be placed on the canvas.
2. The side length of the square is determined as the minimum value between the available height and width.
3. In the first iteration, this square is saved as the starting point, and the algorithm moves to the next iteration.
4. In subsequent iterations, the algorithm checks the direction of the canvas and update the positions accordingly.
5. Depending on the canvas direction, the width or height is updated accordingly.
6. The next square is added to the list of squares that have been placed on the canvas.
7. The algorithm recursively calls the next iteration with the updated list of squares and the remaining available height and width.

## Testing

Below are a few tests to ensure the algorithm works as expected:
- if height or width are 0 should not return any squares
- if height and width are the same should return one square
- if height is higher than width should return the right number of squares
- if width is higher than height, should return the right number of squares
- if width and heigh are the same, should return a single square

These tests should cover scenarios and help ensure that the Square Packing Algorithm is correctly implemented and functional.

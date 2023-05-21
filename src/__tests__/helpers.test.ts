import { getSquaresWithoutOverlapping } from "../helpers";

describe("getSquaresWithoutOverlapping", () => {
  it("if height or width are 0 should not return any squares", () => {
    const squares: Square[] = [];
    const value = 70;
    const zero = 0;

    let result = getSquaresWithoutOverlapping(squares, value, zero);
    expect(result.length).toEqual(0);

    result = getSquaresWithoutOverlapping(squares, zero, value);
    expect(result.length).toEqual(0);

    result = getSquaresWithoutOverlapping(squares, zero, zero);
    expect(result.length).toEqual(0);
  });

  it("if height and width are the same should return one square", () => {
    const squares: Square[] = [];
    const height = 70;
    const width = 70;
    const result = getSquaresWithoutOverlapping(squares, height, width);

    expect(result.length).toEqual(1);

    expect(result[0].side).toBe(70);
    expect(result[0].position.x).toBe(0);
    expect(result[0].position.y).toBe(0);
  });

  it("if height is higher than width should return the right number of squares", () => {
    const squares: Square[] = [];
    const height = 50;
    const width = 70;
    const result = getSquaresWithoutOverlapping(squares, height, width);

    expect(result.length).toEqual(5);

    expect(result[0].side).toBe(50);
    expect(result[0].position.x).toBe(0);
    expect(result[0].position.y).toBe(0);

    expect(result[1].side).toBe(20);
    expect(result[1].position.x).toBe(0);
    expect(result[1].position.y).toBe(50);

    expect(result[2].side).toBe(20);
    expect(result[2].position.x).toBe(20);
    expect(result[2].position.y).toBe(50);

    expect(result[3].side).toBe(10);
    expect(result[3].position.x).toBe(40);
    expect(result[3].position.y).toBe(50);

    expect(result[4].side).toBe(10);
    expect(result[4].position.x).toBe(40);
    expect(result[4].position.y).toBe(60);
  });
  it("if width is higher than height, should return the right number of squares", () => {
    const squares: Square[] = [];
    const height = 70;
    const width = 50;
    const result = getSquaresWithoutOverlapping(squares, height, width);

    expect(result.length).toEqual(5);

    expect(result[0].side).toBe(50);
    expect(result[0].position.x).toBe(0);
    expect(result[0].position.y).toBe(0);

    expect(result[1].side).toBe(20);
    expect(result[1].position.x).toBe(50);
    expect(result[1].position.y).toBe(0);

    expect(result[2].side).toBe(20);
    expect(result[2].position.x).toBe(50);
    expect(result[2].position.y).toBe(20);

    expect(result[3].side).toBe(10);
    expect(result[3].position.x).toBe(50);
    expect(result[3].position.y).toBe(40);

    expect(result[4].side).toBe(10);
    expect(result[4].position.x).toBe(60);
    expect(result[4].position.y).toBe(40);
  });

  it("if width and heigh are the same, should return a single square", () => {
    const squares: Square[] = [];
    const height = 50;
    const width = 50;
    const result = getSquaresWithoutOverlapping(squares, height, width);

    expect(result.length).toEqual(1);

    expect(result[0].side).toBe(50);
    expect(result[0].position.x).toBe(0);
    expect(result[0].position.y).toBe(0);
  });
});

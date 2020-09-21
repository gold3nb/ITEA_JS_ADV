 FAIL  prototype/__tests__/shape.test.js
  ● Home Work 1.2 › Triangle › should return perimeter

    expect(received).toEqual(expected) // deep equality

    Expected: 6
    Received: "P = 6"

      40 |     it('should return perimeter', () => {
      41 |       const args = [1,2,3];
    > 42 |       expect((new Triangle(...args)).getP()).toEqual(6);
         |                                              ^
      43 |     });
      44 |     it('should return square', () => {
      45 |       expect((new Triangle(3,4,5)).getS()).toEqual(6);

      at Object.<anonymous> (prototype/__tests__/shape.test.js:42:46)

  ● Home Work 1.2 › Triangle › should return square

    expect(received).toEqual(expected) // deep equality

    Expected: 6
    Received: "S = 6"

      43 |     });
      44 |     it('should return square', () => {
    > 45 |       expect((new Triangle(3,4,5)).getS()).toEqual(6);
         |                                            ^
      46 |     });
      47 |     it('should return rightTriangle - true/false for angle 90 degrees', () => {
      48 |       expect((new Triangle(2,3,4)).isRightTriangle).toEqual(false);

      at Object.<anonymous> (prototype/__tests__/shape.test.js:45:44)

  ● Home Work 1.2 › Triangle › should return rightTriangle - true/false for angle 90 degrees

    expect(received).toEqual(expected) // deep equality

    Expected: false
    Received: "This triangle is right - true"

      46 |     });
      47 |     it('should return rightTriangle - true/false for angle 90 degrees', () => {
    > 48 |       expect((new Triangle(2,3,4)).isRightTriangle).toEqual(false);
         |                                                     ^
      49 |       expect((new Triangle(3,4,5)).isRightTriangle).toEqual(true);
      50 |     });
      51 |     it('should use inherited getP, getS ', () => {

      at Object.<anonymous> (prototype/__tests__/shape.test.js:48:53)

  ● Home Work 1.2 › Rectangle › should return perimeter

    expect(received).toEqual(expected) // deep equality

    Expected: 12
    Received: "P = 12"

      64 |     it('should return perimeter', () => {
      65 |       const args = [2,2,4,4];
    > 66 |       expect((new Square(...args)).getP()).toEqual(12);
         |                                            ^
      67 |     });
      68 |     it('should return square', () => {
      69 |       expect((new Square(2,4,2,4)).getS()).toEqual(8);

      at Object.<anonymous> (prototype/__tests__/shape.test.js:66:44)

  ● Home Work 1.2 › Rectangle › should return square

    expect(received).toEqual(expected) // deep equality

    Expected: 8
    Received: "S = 8"

      67 |     });
      68 |     it('should return square', () => {
    > 69 |       expect((new Square(2,4,2,4)).getS()).toEqual(8);
         |                                            ^
      70 |     });
      71 |     it('should return isSquare - true/false for square and rectangle appropriately', () => {
      72 |       expect((new Square(2,2,4,4)).isSquare).toEqual(false);

      at Object.<anonymous> (prototype/__tests__/shape.test.js:69:44)

  ● Home Work 1.2 › Rectangle › should return isSquare - true/false for square and rectangle appropriately

    expect(received).toEqual(expected) // deep equality

    Expected: false
    Received: "This isn't a square - false"

      70 |     });
      71 |     it('should return isSquare - true/false for square and rectangle appropriately', () => {
    > 72 |       expect((new Square(2,2,4,4)).isSquare).toEqual(false);
         |                                              ^
      73 |       expect((new Square(4,4,4,4)).isSquare).toEqual(true);
      74 |     });
      75 |     it('should use inherited getP, getS ', () => {

      at Object.<anonymous> (prototype/__tests__/shape.test.js:72:46)

const Shape = function(...args) {
	this.args = args;
	this.type = (this.args.length == 3) ? 'Triangle'
		  : (this.args.length == 4) ? 'Rectangle' 
		  : 'Incorrect figure';
}

Shape.prototype.getP = function() {
	if (this.type == 'Rectangle' || this.type == 'Square') {
		return `P = ${this.args.reduce((value, resSumRect) => resSumRect += value)}`;
	} else if (this.type == 'Triangle') {
		return `P = ${this.args.reduce((value, resSumTrian) => resSumTrian += value)}`
	} else {
		return 'P = 0';
	}
}

Shape.prototype.getS = function() {
	if (this.type == 'Rectangle' || this.type == 'Square') {
		return `S = ${this.args[0] * this.args[1]}`;
	} else if (this.type == 'Triangle') {
		return `S = ${1/2 * this.args[0] * this.args[1]}`;
	} else {
		return 'S = 0';
	}
}

const result = new Shape(2,5,2,5);
console.log(result.type);
console.log(result.getP());
console.log(result.getS());

const Triangle = function(...args) {
	Shape.apply(this, args);
	let checkIsZero = (this.args[0] > 0 
			&& this.args[1] > 0 
			&& this.args[2] > 0);

	this.type = (checkIsZero && this.args.length == 3) ? 'Triangle'
			: 'Incorrect figure';

	this.isRightTriangle = (checkIsZero) ? 'This triangle is right - true' 
			: `This triangle isn't right-angle - false`
}

const Square = function(...args) {
	Shape.apply(this, args);
	let checkIsSquare = (this.args[0] == this.args[1] 
			&& this.args[0] == this.args[2] 
			&& this.args[0] == this.args[3]);

	this.type = (checkIsSquare && this.args.length == 4) ? 'Square'
			: (!checkIsSquare && this.args.length == 4) ? 'Rectangle'
			: 'Incorrect figure'

	this.isSquare = (checkIsSquare && this.args.length == 4) 
			? `This square is right - true` 
			: `This isn't a square - false`
}

Triangle.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);

Triangle.prototype.constructor = Triangle;
Square.prototype.constructor = Square;

const triangle = new Triangle(3,4,5);
const square = new Square(2,5,2,5);

console.log('----------------------');
console.log(triangle.isRightTriangle);
console.log(triangle.type);
console.log(triangle.getP());
console.log(triangle.getS());

console.log('----------------------');
console.log(square.isSquare);
console.log(square.type);
console.log(square.getP());
console.log(square.getS());
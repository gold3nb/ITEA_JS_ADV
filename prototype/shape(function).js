function shape(...args) {
	return {
		type: `${(args.length === 4) ? 'Rectangle'
			: (args.length === 3) ? 'Triangle'
			: (args.length > 4) ? `This figure has ${args.length} angles` 
			: 'Incorrect figure'}`,

		getP() {
			if (this.type === 'Rectangle') {
				return `P = ${args.reduce((value, resSumRect) => resSumRect += value)}`;
			} else if (this.type === 'Triangle') {
				return `P = ${args.reduce((value, resSumTrian) => resSumTrian += value)}`
			} else {
				return 'P = 0';
			}
		},

		getS() {
			if (this.type === 'Rectangle') {
				return `S = ${args[0] * args[1]}`;
			} else if (this.type === 'Triangle') {
				return `S = ${1 / 2 * args[0] * args[1]}`;
			} else {
				return 'S = 0';
			}
		}
	}
}

console.log(shape(2,4,6).type);
console.log(shape(2,4,6).getP());
console.log(shape(2,4,6).getS());

console.log('-----------------');

const result = shape(2,5,2,5);

console.log(result.type);
console.log(result.getP());
console.log(result.getS());

console.log('-----------------');

const Triangle = function() {}
Triangle.prototype = new shape(2,3,4);
const triangle = new Triangle();

console.log(triangle.type);
console.log(triangle.getP());
console.log(triangle.getS());

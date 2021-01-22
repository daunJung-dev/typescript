/**
 * Let's make a calculator 🧮
 */
type CalculateType = 'add'| 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(type: CalculateType, a: number, b: number):number {
    switch(type) {
        case 'add':
            return a + b;
        case "subtract":
            return a - b;
        case 'multiply':
            return a * b;
        case "divide":
            return a / b;
        case "remainder":
            return a % b;
        default:
            throw Error('unknown command');
    }
    // if( type === 'add') return a + b
    // else if( type === 'subtract') return a - b
    // else if ( type === 'multiply') return a * b
    // else if ( type === 'divide') return a / b
    // else if ( type === 'remainder') return a % b
}
console.log(calculate('add', 1,3)); // 4
console.log(calculate('subtract', 3,1))// 2
console.log(calculate('multiply', 4, 2))// 8
console.log(calculate('divide', 4,2))// 2
console.log(calculate('remainder', 5, 2))// 1

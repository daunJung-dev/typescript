/**
 * Let's make a calculator 🧮
 */
type CalculateType = 'add'| 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(type: CalculateType, firstNum: number, secondNum: number):number {
    if( type === 'add') return firstNum + secondNum
    else if( type === 'subtract') return firstNum - secondNum
    else if ( type === 'multiply') return firstNum * secondNum
    else if ( type === 'divide') return firstNum / secondNum
    else if ( type === 'remainder') return firstNum % secondNum
}
 console.log(calculate('add', 1,3)); // 4
 console.log(calculate('subtract', 3,1))// 2
 console.log(calculate('multiply', 4, 2))// 8
 console.log(calculate('divide', 4,2))// 2
 console.log(calculate('remainder', 5, 2))// 1

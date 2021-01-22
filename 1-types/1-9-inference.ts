/**
 * Type Inference
 */

 let text: string = 'hello';
//  text = 1;
// 타입이 뻔한경우 생략해서 작성해도 좋다.
function print(messgae:string|number = 'hello') {
    console.log(messgae);
}

print('hello');
print(1);
print();
 
function add(x:number, y: number) {
    return x + y;
}
const result = add(1,2);


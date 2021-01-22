{
    // // JavaScript 💩
// function jsFetchNum(id) {
//     // code...
//     // code...
//     // code...
//     return new Promise((resolve, reject) => {
//         resolve(100);
//     }).catch(e => reject(e));
// }

// // 3초 스탑문제 성공~!

// // Typescript ✨
// function tsFetchNum(id: string):Promise<number> {
//     // code...
//     // code...
//     // code...
//     return new Promise((resolve, reject) => {
//         resolve(100);
//     });

// }
// Javascript ✨ => TypeScript
// Optional Parameter

    function printName(firstName: string, lastName?: string):void {
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve','jobs');
    printName('Ellie'); // 정해진 타입이 아닌경우 에러
    printName('Anna', undefined);
    printName('Anna', null);

    // Default Parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest Parameter
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,4,5,6,7));

    function addNumbers(...args:number[]):number {
        let summary:number = args.reduce((acc, cur) => acc+cur ,0);
        return summary;
    }
}
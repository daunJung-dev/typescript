{
    /** 
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     */
    // number
    const num:number = 1;

    // string;
    const str:string = 'hello';

    // boolean
    const bool: boolean =true;

    // undefined
    let nume:undefined; // 💩
    let age:number | undefined // 다른 변수가 선언되어있지 않을 수 있을때 사용
    age = undefined;
    age = 1;
    // null
    let person: null; // 💩
    person = undefined;

    // unknown: 어떤 타입일지 모르는 상태 // 💩
    // 겸손하기라도하지.......
    let notSure: unknown = 0;
    notSure ='he';
    notSure = true;

    // any 💩
    // 버릇없는 any...
    let anything:any = 0;
    anything = 'hello';

    // void: 아무것도 리턴하지 않는 것
    function print():void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 💩

    // never: 리턴하지 않는 함수
    function throwError(message: string):never {
        // message -> server (log)
        throw new Error(message);
        // while(true) {

        // }
    }
    let neverEnding: never; // X

    // object
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({name: 'ellie'});
    
    // 가능하면 명시적으로 작성하는게 최고!
}

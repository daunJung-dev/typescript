{
    // Array
    // 두가지 방식이 있다. 
    const fruits:string[] = ['🍅', '🍌'];
    const scroes: Array<number> = [1,3,4];
    
    function printArray(fruits: readonly string[]) {}

    // Tuple -> interface, typealias, class 로 대체하는게 좋음
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    const [name, age] = student;

}
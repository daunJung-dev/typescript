{
    /**
     * Enum
     */
    // Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({
        "MONDAY": 0,
        "TUESDAY": 1,
        "WEDNESDAY": 2,
    });
    
    const daysOfToday = DAYS_ENUM.MONDAY;

    // Typescript
    enum Days {
        Monday = 1, // 0
        Tuesday,  // 1
        Wednesday, // 2
        Thursday,
        Friday,
        Saturday,
        Sunday,
        // 문자열을 할당할 경우 다 적어줘야 한다.
    }
    console.log(Days.Friday);
    const day = Days.Saturday;

    console.log(day);
    
    /**
     * 타입스크립트에서 enum은 사실 안쓰는게 좋다.
     * 할당되어있지 않은 숫자도 할당이 가능하다는 문제가있다.
     * 타입이 정확히 보장되지 않는다면 타입스크립트에서 굳이 사용할 이유가 없다.
     * 앞에서 살펴본 유니온타입을 활요하는 것이 좋음✨
     * enum 은 대부분의 경우 union type 으로 대체 가능
     */
}
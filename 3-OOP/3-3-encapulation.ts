{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private -> 외부의 접근 제한
    // protected
    class CoffeeMaker {
        // 외부에서 내부의 상태를 변경시켜선 안되곘지!?
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;
        
        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }
        
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans+= beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if( this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk:false
            }
        }
    }

    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(12);
    
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num:number) {
            if (num < 0 ) {
                throw new Error('age should be a number that is greater than 0');
            }
            this.internalAge = num;
        }
        constructor(private firstName: string,  private lastName: string) {     
        }
    }
    const user = new User('steve', 'jobs');
    user.age = 6;
    console.log(user.fullName);
    console.log(user.fullName);
}
{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots:number) : CoffeeCup;
    }

    // public
    // private -> 외부의 접근 제한
    // protected
    class CoffeeMachine implements CoffeeMaker {
        // 외부에서 내부의 상태를 변경시켜선 안되곘지!?
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;
        
        constructor(beans: number) {
            this.coffeeBeans = beans;
        }
        
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans+= beans;
        }

        clean() {
            console.log('cleaning the machine...');
        }
        private grindBeans(shots:number) {
            console.log(`grinding beans for ${shots}`);
            if( this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preHeat(): void {
            console.log('heating up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
         console.log(`Pulling ${shots} shots... `) ;
         return {
             shots,
             hasMilk: false
         };
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preHeat();
            return this.extract(shots);
            // if( this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
            //     throw new Error('Not enough coffee beans!');
            // }
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            // return {
            //     shots,
            //     hasMilk:false
            // }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...')
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots:number): CoffeeCup {
            const coffee = super.makeCoffee(shots);

            return {
                ...coffee,
                hasSugar: true,
            }
        }
        
    }
    const machines:CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ]
    machines.forEach( machine => {
        console.log('------------------');
        machine.makeCoffee(1);
    })

}
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots:number) : CoffeeCup;
    }
    
    interface CommercialCoffeeMaker {
        makeCoffee(shots:number) : CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    // public
    // private -> 외부의 접근 제한
    // protected
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        // 외부에서 내부의 상태를 변경시켜선 안되곘지!?
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;
        
        private constructor(beans: number) {
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

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {
            
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);

    amateur.makeCoffee();
    pro.makeCoffee();

    // 동일한 오브젝트를 제공해도 인터페이스에 따라 기능을 제한해서 사용할 수 있다. 
    
}
import Duck from './duck';
import MallardDuck from './mallardDuck';
import RedheadDuck from './redheadDuck';

class MainProgram {
    public static main() {
        const firstDuck: Duck = new MallardDuck();
        const secondDuck: Duck = new RedheadDuck();
        const duckList: Duck[] = [firstDuck, secondDuck];

        duckList.forEach(duck => {
            duck.display();
            duck.quack();
            duck.swim();
        });
    }
}

MainProgram.main();
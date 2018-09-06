import Duck from './duck';

import DecoyDuck from './decoyDuck';
import MallardDuck from './mallardDuck';
import RedheadDuck from './redheadDuck';
import RubberDuck from './rubberDuck';

class MainProgram {
    public static main() {
        const duckPond: Duck[] = [
            new DecoyDuck(),
            new MallardDuck(),
            new RedheadDuck(),
            new RubberDuck(),
        ];

        duckPond.forEach(duck => {
            duck.display();
            duck.play();
        });
    }
}

MainProgram.main();
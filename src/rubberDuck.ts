import FlyNoWay from './behaviors/flyBehaviors/flyNoWay';
import QuackShriek from './behaviors/quackBehaviors/quackShriek';
import SwimFloat from './behaviors/swimBehaviors/swimFloat';

import Duck from './duck';

export default class RubberDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new QuackShriek(), new SwimFloat());
    }

    public display() {
        console.log('I am a Rubber Duck');
    }
}
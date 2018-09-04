import FlyNoWay from './behaviors/flyBehaviors/flyNoWay';
import QuackNoWay from './behaviors/quackBehaviors/quackNoWay';
import SwimNoWay from './behaviors/swimBehaviors/swimNoWay';

import Duck from './duck';

export default class DecoyDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new QuackNoWay(), new SwimNoWay());
    }

    public display() {
        console.log('I am a Decoy Duck');
    }
}
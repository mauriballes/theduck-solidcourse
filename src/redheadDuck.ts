import FlyWithWings from './behaviors/flyBehaviors/flyWithWings';
import QuackSquawk from './behaviors/quackBehaviors/quackSquawk';
import SwimWithFeet from './behaviors/swimBehaviors/swimWithFeet';

import Duck from './duck';

export default class RedheadDuck extends Duck {
    constructor() {
        super(new FlyWithWings(), new QuackSquawk(), new SwimWithFeet());
    }

    public display() {
        console.log('I am a Redhead Duck');
    }
}
import FlyBehavior from './behaviors/flyBehaviors/flyBehavior';
import QuackBehavior from './behaviors/quackBehaviors/quackBehavior';
import SwimBehavior from './behaviors/swimBehaviors/swimBehavior';

import FlyNoWay from './behaviors/flyBehaviors/flyNoWay';
import QuackNoWay from './behaviors/quackBehaviors/quackNoWay';
import SwimNoWay from './behaviors/swimBehaviors/swimNoWay';

export default abstract class Duck {
    private flyBehavior: FlyBehavior;
    private quackBehavior: QuackBehavior;
    private swimBehavior: SwimBehavior;

    constructor(
        flyBehavior: FlyBehavior = new FlyNoWay(),
        quackBehavior: QuackBehavior = new QuackNoWay(),
        swimBehavior: SwimBehavior = new SwimNoWay()) {

        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
        this.swimBehavior = swimBehavior;
    }

    public setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    public setQuackBehavior(quackBehavior: QuackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    public setSwimBehavior(swimBehavior: SwimBehavior) {
        this.swimBehavior = swimBehavior;
    }

    public play() {
        this.flyBehavior.fly();
        this.quackBehavior.quack();
        this.swimBehavior.swim();
    }

    public abstract display(): void;
}
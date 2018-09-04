import FlyBehavior from './behaviors/flyBehaviors/flyBehavior';
import QuackBehavior from './behaviors/quackBehaviors/quackBehavior';
import SwimBehavior from './behaviors/swimBehaviors/swimBehavior';

export default abstract class Duck {
    private flyBehavior: FlyBehavior;
    private quackBehavior: QuackBehavior;
    private swimBehavior: SwimBehavior;

    constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior, swimBehavior: SwimBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
        this.swimBehavior = swimBehavior;
    }

    public performFly() {
        this.flyBehavior.fly();
    }

    public performQuack() {
        this.quackBehavior.quack();
    }

    public performSwim() {
        this.swimBehavior.swim();
    }

    public abstract display(): void;
}
import FlyBehaivor from './flyBehavior';

export default class FlyNoWay implements FlyBehaivor {
    public fly() {
        console.log('I can not fly!');
    }
}
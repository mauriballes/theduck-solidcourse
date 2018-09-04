import SwimBehavior from './swimBehavior';

export default class SwimNoWay implements SwimBehavior {
    public swim() {
        console.log('I can not swim!');
    }
}
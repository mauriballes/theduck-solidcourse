import SwimBehavior from './swimBehavior';

export default class SwimFloat implements SwimBehavior {
    public swim() {
        console.log('I can float!');
    }
}
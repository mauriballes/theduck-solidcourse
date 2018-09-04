import SwimBehavior from './swimBehavior';

export default class SwimWithFeet implements SwimBehavior {
    public swim() {
        console.log('I swim with my feet!');
    }
}
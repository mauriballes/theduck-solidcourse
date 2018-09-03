import FlyBehaivor from './flyBehavior';

export default class FlyWithWings implements FlyBehaivor {
    public fly() {
        console.log('I fly with my wings!');
    }
}
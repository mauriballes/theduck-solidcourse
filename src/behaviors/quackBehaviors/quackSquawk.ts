import QuackBehaivor from './quackBehavior';

export default class QuackSquawk implements QuackBehaivor {
    public quack() {
        console.log('My quack sounds squawk!');
    }
}
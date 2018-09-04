import QuackBehaivor from './quackBehavior';

export default class QuackShriek implements QuackBehaivor {
    public quack() {
        console.log('My quack is a shriek!');
    }
}
import QuackBehaivor from './quackBehavior';

export default class QuackNoWay implements QuackBehaivor {
    public quack() {
        console.log('I can not quack!');
    }
}
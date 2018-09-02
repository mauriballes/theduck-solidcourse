export default abstract class Duck {
    public quack() {
        console.log('Quack!');
    }
    public swim() {
        console.log('Swim!');
    }
    public fly() {
        console.log('Fly!');
    }
    public abstract display(): void;
}
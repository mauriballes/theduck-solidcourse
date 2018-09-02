export default abstract class Duck {
    public quack() {
        console.log('Quack!');
    }
    public swim() {
        console.log('Swim!');
    }
    public abstract display(): void;
}
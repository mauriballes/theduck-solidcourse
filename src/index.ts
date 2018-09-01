const world: string = 'World';

export function hello(word: string = world): string {
    return `Hello, ${word}!`;
}
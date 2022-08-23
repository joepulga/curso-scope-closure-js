
const greeting = () => {
    let userName = 'joe';

    const displayUserName = () => {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());
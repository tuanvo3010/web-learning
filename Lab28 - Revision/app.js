let numbers = [1, 10, 15, 100];

const isEven = (number) => number % 2 === 0

for (const number of numbers) {
    if (isEven(number)) {
        console.log(number);
        break;
    }
}

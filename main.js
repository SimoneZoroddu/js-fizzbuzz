// controllo che funziona il log

console.log('salve');

// funziona tutto inizio l esercizio con il primo punto

for (let program = 1; program <= 100; program++) {
    //controlliamo che funzioni correttamente il for
    console.log(program);
    if (program % 3 === 0) {
        console.log('Fizz');
    } else if (program % 5 == 0) {
        console.log('Buzz');
    } else if (program % 3 === 0 + program % 5 == 0) {
        console.log('FizzBuzz');
    }
}
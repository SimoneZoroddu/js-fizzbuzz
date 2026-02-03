// controllo che funziona il log

console.log('salve');

let name_1 = 'Fizz'
let name_2 = 'Buzz'

// funziona tutto inizio l esercizio con il primo punto

for (let program = 1; program <= 100; program++) {
    let div_3 = (program % 3 == 0)
    let div_5 = (program % 5 == 0)

        if (div_3 && div_5) {
            console.log(name_1 + name_2);
        }   else if (div_3) {
            console.log(name_1);
        }   else if (div_5) {
            console.log(name_2);
        }   else {
            console.log(program);
        }
}
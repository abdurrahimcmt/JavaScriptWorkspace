
// const dolphin = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// console.log('Dolphins average scores is : ' + dolphin);
// console.log('Koalas average scores is : ' + koalas);

// if (dolphin < koalas) {
//     console.log(' koalas is winner');
// }
// else if (koalas < dolphin) {
//     console.log('Dolphin is winner');
// }
// else if(koalas === dolphin) {
//     console.log('Draw');
// }

// Bonus 1
const dolphin = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;

console.log(dolphin, koalas);


if (dolphin > koalas && dolphin >= 100) {
    console.log(' Dolphin is winner');
}
else if (koalas > dolphin && koalas >= 100) {
    console.log('Koalas is winner');
}
else if (koalas === dolphin && koalas >= 100 && dolphin >= 100) {
    console.log('Draw');
}
else {
    console.log('No team wins win the trophy');
}
/*const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const JohnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / JohnHeight ** 2;
const higherBMI = markBMI > johnBMI;

if (higherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}*/

/*console.log(markBMI, johnBMI, higherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const Jonas = `I'm ${firstName},a ${year - birthYear} years old ${job}`;
console.log(Jonas);

console.log(`I am a teacher
 and programmer`)*/
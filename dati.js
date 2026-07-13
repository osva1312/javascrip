let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];

let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];

let un = array_1[0][0];
let per = array_1[0][1];
let incatenarli = array_1[0][2];
let ghermirli = array_1[2][0];
let e = array_1[2][1];

let domarli = array_2[4][0][0];
let trovarli = array_2[0][0][0];
let nel = array_2[3][0];
let buio = array_2[4][1];
let anello = array_1[1][0]

let frase_completa = `${un} ${anello} ${per} ${domarli} ${un} ${anello} ${per} ${trovarli} ${un} ${ anello} ${per} ${ghermirli} ${e} ${nel} ${buio} ${incatenarli}`;
console.log(frase_completa);




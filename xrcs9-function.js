console.log('--------------------------');
console.log('- Excercise 9 - Function -');
console.log('--------------------------');

console.log('بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ');
console.log('\n');

console.log('Tugas 1');
console.log('--------');

function shoutOut(){
  console.log('Halo Function!');
}

shoutOut();

console.log('\n');

console.log('Tugas 2');
console.log('--------');
function calculateMultiply(num1, num2){
  return num1 * num2;
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);

console.log(hasilPerkalian);

console.log('\n');

console.log('Tugas 3');
console.log('--------');

function processSentence(name, age, address, hobby){
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di Jln. ${address}, dan saya punya hobby yaitu ${hobby}.`;
}
var name = 'Moko';
var age = 28;
var address = 'Lalu Mesir, No. 82, Babakan Utara, Sandubaya, Mataram - Lombok, NTB';
var hobby = 'hiking';
var fullSentence = processSentence(name, age, address, hobby);

console.log(fullSentence);

console.log('\n');

console.log('الحمد لله رب العالمين');

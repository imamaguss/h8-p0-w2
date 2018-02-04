// Tugas 1'
function shoutOut(){
  console.log('Halo Function!');
}

shoutOut();

// Tugas 2
console.log('\n');
function calculateMultiply(num1, num2){
  return num1 * num2;
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);

console.log(hasilPerkalian);

//Tugas 3
console.log('\n');
function processSentence(namee, age, address, hobby){
  return `Nama saya ${namee}, umur saya ${age} tahun, alamat saya di Jln. ${address}, dan saya punya hobby yaitu ${hobby}.`;
}

var namee = 'Moko';
var age = 28;
var address = 'Lalu Mesir, No. 82, Babakan Utara, Sandubaya, Mataram - Lombok, NTB';
var hobby = 'hiking';
var fullSentence = processSentence(namee, age, address, hobby);

console.log(fullSentence);

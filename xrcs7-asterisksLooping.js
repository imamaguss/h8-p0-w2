// 1. Melakukan Looping Menggunakan While
// Looping Pertama
console.log('LOOPING PERRTAMA');

var i= 2;
var jumlah = 20;

while(i <= jumlah){
  console.log(i + ' - I love coding');
  i+=2;
}

// Looping Kedua
console.log('LOOPING KEDUA');

var i = 20;
var jumlah = 0;

while(i >jumlah){
  console.log(i + ' I will become Full Stack Developer');
  i-=2;
}

console.log('\n');
// 2. Melakukan Looping menggunakan For
// Looping Pertama
console.log('LOOPING PERTAMA');

for(var i = 1; i <= 20; i++ ){
  console.log(i + ' - I love coding');
}

// Looping Kedua
console.log('LOOPING KEDUA');

for(var i = 20; i > 0; i--){
  console.log(i + ' - I will become fullstack developer');
}

console.log('\n');
// 3. Angka Ganjil dan Genap
// Problem 1 & 2
var counter = 1;
var jumlah = 100;

while(counter <= jumlah){
  if(counter % 2){
    console.log(counter + ' GANJIL');
    } else{
      console.log(counter + ' GENAP');
    }
    counter++;
}

console.log('\n');
// kelipatan 3
var counter = 1;
var jumlah = 100;
for(counter; counter <= jumlah; counter+=2){
    if(counter % 3 === 0){
      console.log(counter + ' kelipatan 3');
    }
}

console.log(' ');
// kelipatan 6
var counter = 1;
var jumlah = 100;
for(counter; counter <= jumlah; counter += 5){
  if(counter % 6 === 0){
    console.log(counter + ' kelipatan 6');
  }
}

console.log(' ');
// kelipatan 10
var counter = 1;
var jumlah = 100;
for(counter; counter <= jumlah; counter += 9){
  if(counter % 10 === 0){
    console.log(counter + ' kelipatan 10');
  }
}

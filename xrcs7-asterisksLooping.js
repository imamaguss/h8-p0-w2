console.log('1. Menyusun Barisan Bintang\n');
//menggunakan WHILE
var rows1W = 5;
for(rows1W; rows1W > 0; rows1W--){
  console.log('*');
}

*/
console.log('\n2. Menyusun Barisan Bintang dengan Nested Looping\n');

var rows2 = 5;
var cols2 = 5;
var patch2 = '';

for(rows2; rows2 > 0; rows2--){
  for(cols2; cols2 > 0; cols2--){
    patch2 += '*';
  }
  console.log(patch2);
}

console.log('\n3. Menyusun Barisan Bintang dengan Nested Looping\n' );

var rows3 = 5;

for(var i = 1; i <= rows3; i++){
var patch3 = '';
  for(var j = 0; j < rows3 ; j++){
    if (j < i) {
      patch3 += '*'
    }
  }
  console.log(patch3);
}

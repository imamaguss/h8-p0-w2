console.log("==============");
console.log("== PROXYTIA ==");
console.log("==============");

var nama = "Bento";
var peran = "Tabib";

if(nama === "" && peran === ""){
  console.log("Nama harus diisi!!");

} else if(nama !== "" && peran == ""){
  console.log(`Hallo ${nama}, Pilih peranmu untuk memulai game!!`);
} else if(nama !== "" && peran === "Ksatria"){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}
    \nHallo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if(nama !== "" && peran === "Tabib"){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}
    \nHallo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if(nama !== "" && peran === "Penyihir"){
  console.log(`Selamat datang di Dunia Proxytia, ${nama}
    \nHallo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else{
  console.log("Pastikan kamu sudah memasukkan nama dan peran dengan benar.");
}

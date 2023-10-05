function Tipe_Motor() {
  var Motor = {
    type: "Supra Fit",
    harga: 20000000,
    warna: ["Hitam", "Biru", "Merah"],
  };
  Motor.harga = 15000000;
  Motor.tahun = [1999, 2000, 2001, 2002];
  console.log(Motor);
  console.log(Motor.type);
  console.log(Motor.warna[1]);
  console.log(Motor.harga);
  console.log(Motor.tahun[0]);
}

Tipe_Motor();

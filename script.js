const hasil = document.querySelector("#hasil");
const lyr = document.querySelector(".layar");
const layar = document.querySelector("#layar");

let angka1 = "";
let angka2 = "";
let jumlah = "";
let baruHasil = false;
let operator = "";
const tmbl = document.querySelectorAll("td");
tmbl.forEach((e) => {
  e.addEventListener("click", () => {
    if (baruHasil && e.className == 'angka') {
      layar.textContent = e.textContent;
      hasil.textContent = ''
      baruHasil = false;
    } else if(baruHasil == false && e.className == 'angka') {
      layar.textContent += e.textContent;
    }

    if (e.className === "operator" ) {
      ubahPosisi();
      operator = e.textContent; //ambil operator
      hasil.textContent = layar.textContent + operator;
      angka1 = layar.textContent; //ambil angka pertama
      console.log(angka1 + " angka 1");
      layar.textContent = "";
    }
    // klik sama dengan
    if (e.className == "samadengan") {
      angka2 = layar.textContent;
      console.log(angka2 + " angka 2");
      baruHasil = true;

      if (operator === "+") {
        jumlah = Number(angka1) + Number(angka2);
        console.log("ini jumlahnya " + jumlah);
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      } else if (operator === "-") {
        jumlah = Number(angka1) - Number(angka2);
        console.log("ini jumlahnya " + jumlah);
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      } else if (operator === "/") {
        jumlah = Number(angka1) / Number(angka2);
        console.log("ini jumlahnya " + jumlah);
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      } else if (operator === "x") {
        jumlah = Number(angka1) * Number(angka2);
        console.log("ini jumlahnya " + jumlah);
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      }
    }
  });
});

function ubahPosisi() {
  lyr.style.position = "relative";
  layar.style.position = "absolute";
  layar.style.top = "25px";
}

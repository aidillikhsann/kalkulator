const hasil = document.querySelector("#hasil");
const lyr = document.querySelector(".layar");
const layar = document.querySelector("#layar");

let angka1 = "";
let angka2 = "";
let jumlah = "";
let baruHasil = false;
let histori = [];
let operator = "";
const tmbl = document.querySelectorAll("td");
tmbl.forEach((e) => {
  e.addEventListener("click", () => {
    // klik hapus semua
    if(e.className == 'hapusAll'){
      layar.textContent = "";
      hasil.textContent = "";
      ubahPosisi("0px");
    }
      // klik hapus satu
    if(e.className == 'hapus'){
      layar.textContent = layar.textContent.slice(0, -1);
    }
    if (baruHasil && e.className == "angka") {
      layar.textContent = e.textContent;
      ubahPosisi("0px");
      hasil.textContent = "";
      baruHasil = false;
    } else if (baruHasil == false && e.className == "angka") {
      layar.textContent += e.textContent;
    }
    if (e.className === "operator") {
      // baruHasil = true
      ubahPosisi("25px");
      operator = e.textContent; //ambil operator
      hasil.textContent = layar.textContent + operator;
      angka1 = layar.textContent; //ambil angka pertama
      // console.log(angka1 + " angka 1");
      layar.textContent = "";
    }
    // klik sama dengan
    if (e.className == "samadengan") {
      angka2 = layar.textContent;
      // console.log(angka2 + " angka 2");
      baruHasil = true;
      if (operator === "+") {
        jumlah = Number(angka1) + Number(angka2);
        tambahHistori()
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      } else if (operator === "-") {
        jumlah = Number(angka1) - Number(angka2);
        tambahHistori()
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      } else if (operator === "⁒") {
        jumlah = Number(angka1) / Number(angka2);
        tambahHistori()
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      } else if (operator === "x") {
        jumlah = Number(angka1) * Number(angka2);
        tambahHistori()
        hasil.textContent += angka2;
        layar.textContent = jumlah;
      }
    }
  });
});
function tambahHistori() {
  histori.push(`${angka1} ${operator} ${angka2} = ${jumlah}`);
  const hytoriList = document.querySelector(".hytori ul");
  const listItem = document.createElement("li");
  listItem.textContent = histori[histori.length - 1];
  hytoriList.appendChild(listItem);
}
function ubahPosisi(topPosition) {
  lyr.style.position = "relative";
  layar.style.position = "absolute";
  layar.style.top = topPosition;
}

var link = window.location.href.split('/');
var nama = document.getElementById("nama");
if(link[3] == 5200411081){
    nama.innerText = "Hello saya adalah Muhammad Taufik Ifannur";
}
if(link[3] == 5200411078){
    nama.innerText = "Hello saya adalah Ade Apriadi";
}
if(link[3] == 5200411098){
    nama.innerText = "Hello saya adalah Tofiq Nur Hidayat";
}
if(link[3] == 5200411117){
    nama.innerText = "Hello saya adalah Dwiki Baskoro Pamungkas";
}
console.log(link[3])
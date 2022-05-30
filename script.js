function showDiv() {
  Content.style = "opacity:1;margin-top:15vh;";
  ket.style = "margin-top:30px";
}
function memulai() {
  suratin.style = "transition:all 1s ease;transform:scale(.1);opacity:0";
  ket.style = "transition:all 1s ease;transform:scale(.1);opacity:0";
  setTimeout(pesan, 500);
}
function kpemb() {
  suratin.style = "display:none";
  ket.style = "display:none";
  fotoakhir.style = "display:inline-flex;transform:scale(1);";
  Content.style = "opacity:1;margin-top:2vh;";
  bq.style = "opacity:1;visibility:visible;margin-top:5px";
  setTimeout(ngetik, 1000);
}

function tombol() {
  Tombol.style = "margin-top:15px;opacity:1;transform: scale(1);";
  ftom = 1;
}
ftom = 0;
function fakhiran() {
  document.getElementById("akhiran").style = "display:inline-flex";
}
const swals = Swal.mixin({ allowOutsideClick: false, cancelButtonColor: "#FF0040", imageWidth: 100, imageHeight: 100 });
const swalst = Swal.mixin({ allowOutsideClick: false, showConfirmButton: false, timer: 3300, timerProgressBar: true, imageWidth: 100, imageHeight: 100 });
const style = document.createElement("style");
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
today = dd + " " + monthNames[today.getMonth()] + " " + yyyy;
function setel() {
  audio.play();
}
function setel2() {
  bgm.play();
}
function sjawab() {
  if (ftom == 1) {
    Tombol.style = "display:none";
    jawab();
  }
}
function otomatis() {
  befanimkata();
  setTimeout(animkata, 500);
}
function befanimkata() {
  kalimatc.style = "transform:scale(.3);";
}
function animkata() {
  kalimatc.style = "transform:scale(1);";
}

function kemunculan() {
  otomatis();
  kalimatc.innerHTML = ktbwh1;
  setTimeout(kemunculan2, 3500);
}
function kemunculan2() {
  otomatis();
  kalimatc.innerHTML = ktbwh2;
  setTimeout(kemunculan3, 3500);
}
function kemunculan3() {
  otomatis();
  kalimatc.innerHTML = ktbwh3;
  setTimeout(kemunculan4, 3500);
}
function kemunculan4() {
    otomatis();
    kalimatc.innerHTML = ktbwh4;
    setTimeout(kemunculan, 3500);
  }
var aa = 0,
  katangetik;
function ngetik() {
  if (aa < katangetik.length) {
    kalimat.innerHTML += katangetik.charAt(aa);
    aa++;
    setTimeout(ngetik, 100);
  }
  if (aa == katangetik.length) {
    kalimat.style = "margin-bottom:30px";
    if (ketrgn == "no") {
      kalimat.style = "margin-bottom:30px";
      setTimeout(ngetik2, 400);
    } else {
      setTimeout(kemunculan, 400);
      setTimeout(tombol, 3000);
    }
  }
}
var ai = 0,
  katangetik2;
function ngetik2() {
  if (ai < katangetik2.length) {
    kalimatc.innerHTML += katangetik2.charAt(ai);
    ai++;
    setTimeout(ngetik2, 300);
  }
  if (ai == katangetik2.length) {
    setTimeout(tombol, 500);
  }
}

async function jawab() {
  await swals.fire("Kirim pesan ke WhatsApp aku, ya!");
  window.location = "https://wa.me/qr/57DOF42TAL35M1" + pesanwhatsapp;
}

async function pertama() {
  audio = new Audio("song.mp3");
  setTimeout(showDiv, 100);
}
pertama();

async function pesan() {
  await swalst.fire({
    title: "Hi Ayangggg 💕❤️💓><",
    imageUrl: "https://i.ibb.co/bbRd5kL/cilukba.gif",
  });
  await swalst.fire({
    title: "Aku Mau Nanya Nih",
    imageUrl: "https://i.ibb.co/BsRSzpn/gigitin.gif",
  });
  var { isConfirmed: prtanya } = await swals.fire({
    title: `Kamu Sayang Gak Sama Aku? `,
    imageUrl: "https://i.ibb.co/P6d94Rh/tarikin.gif",
    confirmButtonText: "Sayang",
    cancelButtonText: "Engga",
    showCancelButton: true,
  });
  if (prtanya) {
    ketrgn = "yes";

    fotoakhir.src = "https://i.ibb.co/rHdNHGJ/0906-peacegoma.gif";
    katangetik = "Yeayyy! Kalau iya sayang, Aku cuma mau bilang nih ke kamu...         ";
    ktbwh1 = "Jangan Pernah Pergi ya sayang";
    ktbwh2 = "Tetap Sama Aku Terus";
    ktbwh3 = "Aku selalu sayang dan cinta kamu";
    ktbwh4 = "I LOVE YOU CANTIKK❤️❤️❤️"
    pesanwhatsapp = "Aku sayang sama kamu. I Love You too ><";
  } else {
    ketrgn = "no";

    fotoakhir.src = "https://i.ibb.co/4Wh4mg7/wortel.gif";
    katangetik = "Yaaahhh🥺 yaudah deh kalau engga sayang mah :(         ";
    katangetik2 = "See Youuu";
    pesanwhatsapp = "Aku gak sayang sama kamu :(";
  }

  setTimeout(kpemb, 300);
}

function openPage(id) {

  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

/* 🔒 MINIJUEGO (placeholder inicial) */
function startHack() {
  let code = prompt("ENTER ACCESS CODE:");

  if (code === "SOULS") {
    alert("ACCESS GRANTED");
    document.getElementById("classified").innerHTML =
      "<h2>CLASSIFIED DATA UNLOCKED</h2>";
  } else {
    alert("ACCESS DENIED");
  }
}
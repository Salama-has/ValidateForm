let cajas = document.querySelectorAll("#form input");
var EstoyEnLaCaja;

cajas.forEach((caja) => {
  caja.addEventListener("keydown", () => {
    CajaDondeEstoy(caja);
  });
});

cajas.forEach((caja) => {
  caja.addEventListener("keyup", () => {
    eevaluaPatron(caja);
  });
});

cajas.forEach((caja) => {
  caja.addEventListener("blur", () => {
    eevaluaPatron(caja);
  });
});

function CajaDondeEstoy(caja) {
  EstoyEnLaCaja = caja.id;
}

function eevaluaPatron() {
  if (EstoyEnLaCaja == "cId") {
    var patron = /^[0-9]+$/;
    var resultado = patron.test(cId.value);
    if (!resultado) {
      document.getElementById("cId").style.background = "red";
      document.getElementById("cId").focus();
    } else {
      document.getElementById("cId").style.background = "green";
    }
  }

  if (EstoyEnLaCaja == "cNombre") {
    var patron = /(?=^.{1,50}$)[a-zA-Záéíóú]+/;
    var resultado = patron.test(cNombre.value);
    if (!resultado) {
      document.getElementById("cNombre").style.background = "red";
      document.getElementById("cNombre").focus();
    } else {
      document.getElementById("cNombre").style.background = "green";
    }
  }
  if (EstoyEnLaCaja == "cDescripcion") {
    var patron = /(?=^.{1,150}$)[a-zA-Z0-9áéíóú]+/;
    var resultado = patron.test(cDescripcion.value);
    if (!resultado) {
      document.getElementById("cDescripcion").style.background = "red";
      document.getElementById("cDescripcion").focus();
    } else {
      document.getElementById("cDescripcion").style.background = "green";
    }
  }
  if (EstoyEnLaCaja == "cTipo") {
    var patron =
      /^Semáforo$|^Alcantarilla$|^Sucia$|^Limpia$|^Farola$|^Papelera$|^Jardin$|^Datos$|^Eléctrica$/;
    var resultado = patron.test(cTipo.value);
    if (!resultado) {
      document.getElementById("cTipo").style.background = "red";
      document.getElementById("cTipo").focus();
    } else {
      document.getElementById("cTipo").style.background = "green";
    }
  }

  if (EstoyEnLaCaja == "cLatitud") {
    var patron = /^[0-9.]*$/;
    var resultado = patron.test(cLatitud.value);
    if (!resultado) {
      document.getElementById("cLatitud").style.background = "red";
      document.getElementById("cLatitud").focus();
    } else {
      document.getElementById("cLatitud").style.background = "green";
    }
  }
  if (EstoyEnLaCaja == "cLongitud") {
    var patron = /^[-][0-9.]*$/;
    var resultado = patron.test(cLongitud.value);
    if (!resultado) {
      document.getElementById("cLongitud").style.background = "red";
      document.getElementById("cLongitud").focus();
    } else {
      document.getElementById("cLongitud").style.background = "green";
    }
  }
  if (EstoyEnLaCaja == "cFecahac") {
    var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
    var resultado = patron.test(cFecahac.value);
    if (!resultado) {
      document.getElementById("cFecahac").style.background = "red";
      document.getElementById("cFecahac").focus();
    } else {
      document.getElementById("cFecahac").style.background = "green";
    }
  }

  if (EstoyEnLaCaja == "cFecaham") {
    var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
    var resultado = patron.test(cFecaham.value);
    if (!resultado) {
      document.getElementById("cFecaham").style.background = "red";
      document.getElementById("cFecaham").focus();
    } else {
      document.getElementById("cFecaham").style.background = "green";
    }
  }
  if (EstoyEnLaCaja == "cFecaham") {
    var patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
    var resultado = patron.test(cFecaham.value);
    if (!resultado) {
      document.getElementById("cFecaham").style.background = "red";
      document.getElementById("cFecaham").focus();
    } else {
      document.getElementById("cFecaham").style.background = "green";
    }
  }
}

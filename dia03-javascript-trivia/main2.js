const rptCorrecta = document.querySelectorAll(".rpt__correcta");
const rptInCorrecta = document.querySelectorAll(".rpt__incorrecta");
let respuestasArray = [];
//rptCorrecta.innerHTML = "Respuesta correcta "
let contadorCorrectas = 0;
let contadorInCorrectas = 0;

let preguntas = [
  "¿Cuál es el equipo peruano más goleado de la Copa Libertadores?",
  "¿Cuantas maneras de aplicar CSS a nuestro sitio web existen?",
  "¿Que palabra se usa para declarar una constante en javascript",
];

let respuestas = [
  ["Cienciano", "Alianza Lima", "San Martin", "Melgar"],
  ["1", "3", "2", "0"],
  ["var", "let", "cons", "Ninguna de las anteriores"],
];

/*let indice_aleatorio=Math.floor(Math.random()*preguntas.length)
let  respuestas_posibles=respuestas[indice_aleatorio]*/

for (i in respuestas) {
  let txtrpta = "";
  for (ii in respuestas[i]) {
    txtrpta += `<button class="task__Radio text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full  type="button" name="alternativas${i}" >${respuestas[i][ii]}</button><br>`;
    /*txtrpta += `<label><input class="task__Radio" type="radio" name="alternativas${i}" onclick="verificar(event,${i},${ii})">${respuestas[i][ii]}</label><br>`;*/
    /*`<label><input type="radio" name="alternativas${i}" onclick="alert('hola')">${respuestas[i][ii]}</label><br>`;*/
    /*"<label><input type='radio' name='alternativas"+i+"' onclick='alert("+ '"click"'+ ")'> " + respuestas[i][ii] + "</label><br>";*/
  }

  /*alert(Number(i))
  
  alert("pregunta"+(Number(i)+1))
  */
  document.getElementById("pregunta" + (Number(i) + 1)).innerHTML =
    preguntas[i];

  document.getElementById("alternativa" + (Number(i) + 1)).innerHTML = txtrpta;
}

const radioButtons = document.querySelectorAll(".task__Radio");
/*
function radioButtonsDesactivar2(alternativa) {
  radioButtons.forEach((IndiceAlternativa) => {
    if (IndiceAlternativa.name == alternativa) {
      /*IndiceAlternativa.disabled = true;*/
/*IndiceAlternativa.innerHTML="dsabled";
    }
  });
}
*/
/*
function radioButtonsDesactivar(alternativa, event) {
  radioButtons.forEach((IndiceAlternativa) => {
    if (IndiceAlternativa.name == alternativa) {
      /*IndiceAlternativa.disabled = true;*/
/*event.target.style="cursor:none"*/
/*event.target.style="cursor:none; background:rgb(22 163 74); color:white"*/
/*alert(radioButtons.name);*/
/*alert("IndiceAlternativaxxx");
      /*IndiceAlternativa.innerHTML="dsabled";
    }
  });
}*/

function rptaCorrectaButton() {
  //actualiza el botón de correctas con el contador
  rptCorrecta.forEach(
    (IndiceRptCorrecta) =>
      (IndiceRptCorrecta.innerHTML = "Respuesta correcta " + contadorCorrectas)
  );
}

function rptaInCorrectaButton() {
  //actualiza el botón de incorrectas con el contador
  rptInCorrecta.forEach((IndiceRptInCorrecta) => {
    /*console.log(IndiceRptInCorrecta);*/
    IndiceRptInCorrecta.innerHTML =
      "Respuesta incorrecta " + contadorInCorrectas;
  });
}
/*
function verificar(evento, indexP, indexA) {
  const value = evento.target;
  alert(value);
  //alert(indexP)
  //alert(indexA)

  e.target.style.background = rgb(195, 0, 255);

  switch (indexP) {
    case 0: //pregunta1
      switch (indexA) {
        case 1:
          ++contadorCorrectas;
          rptaCorrectaButton();
          
          break;
        default:
          contadorInCorrectas++;
          rptaInCorrectaButton();
          radioButtonsDesactivar("alternativas0");
          break;
      }
      break;
    case 1: //pregunta2
      switch (indexA) {
        case 1:
          ++contadorCorrectas;
          rptaCorrectaButton();
          break;
        default:
          contadorInCorrectas++;
          rptaInCorrectaButton();
          radioButtonsDesactivar("alternativas1");
          break;
      }
      break;
    case 2: //pregunta3
      switch (indexA) {
        case 3:
          ++contadorCorrectas;
          rptaCorrectaButton();
          radioButtonsDesactivar("alternativas2");
          break;
        default:
          contadorInCorrectas++;
          rptaInCorrectaButton();
          radioButtonsDesactivar("alternativas2");
          break;
      }
      break;
  }
}
*/
/*
radioButtons[0].addEventListener("change", function(event)
{
  alert("ingreso");
}
);
*/

for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", function (event) {
    /*
    respuestas.pregunta=event.target.name  ;
    respuestas.respuesta=event.target.innerHTML  ;
*/

    const found = respuestasArray.findIndex(
      (element) => element.pregunta === event.target.name
    );
    console.log("found==>" + found);
    /*alert(found);*/

    if (found >= 0) {
      /*alert("ya existe");*/
      return;
    }

    let respuesta = {
      pregunta: event.target.name,
      respuesta: event.target.innerHTML,
    };

    //respuestas.push(respuesta);

    //console.log(Object.keys(respuestas).length)

    //console.log(respuesta);

    let clicked = event.target;

    /*alert(clicked.innerHTML);*/
    switch (clicked.name) {
      case "alternativas0": //pregunta1
        switch (clicked.innerHTML) {
          case "Alianza Lima":
            respuestasArray.push(respuesta);
            ++contadorCorrectas;
            rptaCorrectaButton();
            /*
            if (clicked.style.background != "rgb(22, 163, 74)") {*/
            clicked.style =
              "cursor:default; background:rgb(22 163 74); color:white";

            //}
            /*radioButtonsDesactivar("alternativas0", event);*/

            break;
          default:
            clicked.style =
              "cursor:default; background:rgb(220 38 38); color:white";
            contadorInCorrectas++;
            rptaInCorrectaButton();
            respuestasArray.push(respuesta);
            break;
        }
        break;
      case "alternativas1": //pregunta2
        switch (clicked.innerHTML) {
          case "3":
            respuestasArray.push(respuesta);
            ++contadorCorrectas;
            rptaCorrectaButton();
            clicked.style =
              "cursor:default; background:rgb(22 163 74); color:white";
            /*
            respuestasArray.push(respuesta);
            console.log(respuestasArray);
            ++contadorCorrectas;
            clicked.style =
              "cursor:default; background:rgb(22 163 74); color:white";
            rptaCorrectaButton();
*/
            /*radioButtonsDesactivar("alternativas1");*/
            break;
          default:
            clicked.style =
              "cursor:default; background:rgb(220 38 38); color:white";
            contadorInCorrectas++;
            rptaInCorrectaButton();
            /*}*/
            respuestasArray.push(respuesta);
            /*rptaInCorrectaButton();*/
            /*radioButtonsDesactivar("alternativas1");*/
            break;
        }
        break;
      case "alternativas2": //pregunta3
        switch (clicked.innerHTML) {
          case "Ninguna de las anteriores":
            respuestasArray.push(respuesta);
            ++contadorCorrectas;
            rptaCorrectaButton();
            clicked.style =
              "cursor:default; background:rgb(22 163 74); color:white";
            break;
          default:
            clicked.style =
              "cursor:default; background:rgb(220 38 38); color:white";
            contadorInCorrectas++;
            rptaInCorrectaButton();
            respuestasArray.push(respuesta);
            break;
        }
        break;
    }
  });
}

/*taskInput.addEventListener('keypress', function(event) {*/
// Lógica de la app

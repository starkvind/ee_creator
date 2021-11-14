/*
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getSum(total, num) {
  return total + Math.round(num);
};

function attribUpCheck(target) {
  return (getRandomInt(1, 20) < target || getRandomInt(1, 20) < target);
};

// https://gist.github.com/alisterlf/3490957
function RemoveAccents(str) {
  var accents    = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'";
  var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz_";
  str = str.split('');
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join('');
};

function calcHealth(level, dice) {
  console.log("DESGLOSE PUNTOS DE SALUD");
  var diceArray = dice.split("d");
  var totalHealth = 4; var healthUp = 0; var healthBonus = 0;
  do {
    healthUp++;
    healthBonus = getRandomInt(parseInt(diceArray[0]), parseInt(diceArray[1]));
    totalHealth += healthBonus
    console.log("> Nivel " + healthUp + " +" + healthBonus + " PS. (" + dice + ") Total: " + totalHealth + ".");
  } while (healthUp < level);
  return totalHealth;
  //return parseInt(getRandomInt(diceArray[0] * level, (diceArray[1] * level) * diceArray[0])  + 4);
};

function checkUsageDice(dice, maxresult, advantage) {
  var diceThrow = 0;
  var diceResult;
  var diceArray = dice.split("d");
  switch (advantage) {
    case "ventaja":
      diceThrow = Math.max(
        getRandomInt(parseInt(diceArray[0]), parseInt(diceArray[1])),
        getRandomInt(parseInt(diceArray[0]), parseInt(diceArray[1]))
      );
    break;
    case "desventaja":
      diceThrow = Math.min(
        getRandomInt(parseInt(diceArray[0]), parseInt(diceArray[1])),
        getRandomInt(parseInt(diceArray[0]), parseInt(diceArray[1]))
      );
    break;
    default:
      diceThrow = getRandomInt(parseInt(diceArray[0]), parseInt(diceArray[1]));
    break;
  }
  if (maxresult == undefined) { maxresult = 2; }
  if (diceThrow <= maxresult) {
    diceResult = consumeUsageDice(dice);
  } else {
    diceResult = dice;
  };
  //console.log("> Dado de Uso: " + diceArray[0] + "d" + diceArray[1] + " | Mínimo " + maxresult + " | Resultado " + diceThrow + " (" + advantage + ")");
  return diceResult;
};

function consumeUsageDice(dice) {
  var diceResult;
    switch(dice) {
      case "1d20":
        diceResult = "1d12";
      break;
      case "1d12":
        diceResult = "1d10";
      break;
      case "1d10":
        diceResult = "1d8";
      break;
      case "1d8":
        diceResult = "1d6";
      break;
      case "1d6":
        diceResult = "1d4";
      break;
      case "1d4":
        diceResult = "Agotado";
      break;
    }
    return diceResult;
};

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
};

Array.prototype.getDuplicates = function () {
    var duplicates = {};
    for (var i = 0; i < this.length; i++) {
        if(duplicates.hasOwnProperty(this[i])) {
            duplicates[this[i]].push(i);
        } else if (this.lastIndexOf(this[i]) !== i) {
            duplicates[this[i]] = [i];
        }
    }

    return duplicates;
};

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

/* jQuery draggable */
$(function() {
  $( "#hiddenOptions" ).draggable({ scroll: false, cursor: "move", cursorAt: { top: 50, left: 25 } });
} );

/* ------------------------------------------------------- */
/* Comprobamos Homebrew 																	 */
/* ------------------------------------------------------- */
function checkHomebrew() {
  if ($("#acceptHomebrew:checked").length > 0) {
    $('#optionClass optgroup#Homebrew').prop('disabled', false);
    $("#optionRace").prop("disabled", false);
  } else {
    $('#optionClass optgroup#Homebrew').prop('disabled', true);
    $("#optionClass").val("random");
    $("#optionRace").val("no");
    $("#optionRace").prop("disabled", true);
  }
};

// ¿Aceptamos homebrew?
$(document).on("change", "#acceptHomebrew", function() {
  checkHomebrew();
});

// Preparamos el fondo de la hoja de personaje.
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};

/* ------------------------------------------------------- */
/* Clicks de botones    																	 */
/* ------------------------------------------------------- */
// Creamos el personaje
$(document).on("click", "#createCharacter", function() {
  genChar();
});

$(document).on("change", "#optionClass", function(event) {
  // Comprobamos que la Clase es también una Raza y así evitamos que se elija.
  if ($("#acceptHomebrew:checked").length > 0 && raceClasses.includes(parseInt($('#optionClass').val()))) {
    // Desactivamos desplegable de Razas y ponemos su valor en Ninguna.
    $("#optionRace").prop("disabled", true);
    $("#optionRace").val("no");
  } else {
    // Si cambiamos a una Clase normal, lo volvemos a activar.
    $("#optionRace").prop("disabled", false);
  }
});

// http://stacktips.com/snippet/reading-and-creating-text-files-using-jquery-and-html5-file-api
$(document).on("click", "#openJson", function() {
  if ('FileReader' in window) {
      $('#inputFile').click();
  } else {
    alert('Your browser does not support the HTML5 FileReader.');
  }
});

// Hoja de personaje PDF
$(document).on("click", "#exportPdf", function() {
  // Imagen
  var img = new Image();
  img.onload = function() {
      var dataURI = getBase64Image(img);
      return dataURI;
  }
  img.src = "fpj_ee.jpg";
  // Documento
  var doc = new jsPDF('p', 'pt', 'a5');
  // Datos del personaje
  var playerData = JSON.parse($("#jsonSeed").val());

  // Añadimos imagen al contenido.
  doc.addImage(img.onload(), 'JPEG', 0, 0, 420, 596);
  // Especificamos la fuente.
  doc.setFont('times', 'normal');
  doc.setFontSize(8);
  // Vamos colocando los textos.
  // Nombre
  doc.text(77, 59.2, namePool[playerData.nombre] + " " + namePool[playerData.apellido]);
  // Nivel
  doc.text(248, 59.2, playerData.nivel.toString());
  // Clase
  doc.text(77, 84.2, $('#playerJob').html());
  // Atributos
  doc.text(81.5, 133.8, playerData.atributos["bio"].toString());
  doc.text(81.5, 171.8, playerData.atributos["com"].toString());
  doc.text(81.5, 209.8, playerData.atributos["psi"].toString());
  doc.text(81.5, 247.8, playerData.atributos["tec"].toString());
  // Dado de Salud y Puntos de Salud
  doc.text(78.5, 293, playerData.dados[1].toString());
  doc.text(82.5, 314, playerData.valores["salud"].toString());
  // Dado de Humanidad
  doc.text(78.5, 356, playerData.dados[2].toString());
  // Defensa
  doc.text(177.5, 365, playerData.valores["defensa"].toString());
  // Poder
  doc.text(256, 365, playerData.valores["poder"].toString());
  // Arma
  //playerClassEe.armas[playerData.class][playerData.arma]
  doc.text(118.5, 130.8, weaponsEe.nombre[playerData.arma]);
  doc.text(219.5, 130.8, playerData.dados[0]);
  doc.text(244.5, 130.8, weaponsEe.du[playerData.arma]);

  doc.save(
    RemoveAccents(
      $('#playerName').html().replace(/\s+/g, "_").toLowerCase() +
      "_" +
      $('#playerJob').html().replace(/\s+/g, "_").toLowerCase() +
      '.pdf'
    )
  );
});

$(document).on("change", "#inputFile", function(event) {
  var fileToLoad = event.target.files[0];
  if (fileToLoad) {
    var reader = new FileReader();
    reader.onload = function(fileLoadedEvent) {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      //$('#loadedSeed').html(textFromFileLoaded);
      genChar(textFromFileLoaded);
    };
    reader.readAsText(fileToLoad, 'UTF-8');
  }
});

$(document).on("click", "#downloadJson", function() {
  if ('Blob' in window && $("#jsonSeed").val() != "") {
    var pcName = RemoveAccents($('#playerName').html().replace(/\s+/g, "_").toLowerCase());
    var pcJob = RemoveAccents($('#playerJob').html().replace(/\s+/g, "_").toLowerCase());
    var fileName = prompt(
      "Introducir nombre de archivo",
      pcName +
      "_" +
      pcJob +
      '.json');
    if (fileName) {
      var textToWrite = $('#jsonSeed').val();//.replace(/n/g, 'rn');
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });

      if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
      } else {
        var downloadLink = document.createElement('a');
        downloadLink.download = fileName;
        downloadLink.innerHTML = 'Download File';

        if ('webkitURL' in window) {
          // Chrome allows the link to be clicked without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
          // Firefox requires the link to be added to the DOM before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.click(function(){
            document.body.removeChild(event.target);
          });

          downloadLink.style.display = 'none';
          document.body.appendChild(downloadLink);
        }
        downloadLink.click();
      }
    }
  } else {
    alert("Ha ocurrido algún problema.");
  }
});

/* jQuery append */
function appendCells(text, element) {
  var $tr = $( "<tr></tr>" );
  $tr.append( $( "<td id='appendCell' colspan='2'></td>" ).html( text ) );
  $tr.appendTo( $( element ) );
};

/* Botón de opciones ocultas. */
function hiddenOptions(command) {
  switch(command) {
    case 1:
      $("#hiddenOptions").fadeToggle("slow");
    break;
    default:
      $("#hiddenOptions").fadeToggle("fast");
    break;
  }
};

/* jQuery fadeOut */
function hideSheet() {
  $("#characterSheet").fadeOut("slow");
  $("#hideSheet").fadeOut("slow");
  $("#downloadJson").fadeOut("slow");
  $("#exportPdf").fadeOut("slow");
};

/* jQuery fadeToogle */
function showPopUp(element) {
  $( element ).fadeToggle("fast");
};

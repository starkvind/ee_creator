/* -------------------------------------------------------------------*/
/* MEJORAS DE PROTECCIÓN 																							*/
/* -------------------------------------------------------------------*/
function buyAmorUpgrades(firstCoins, firstArmor, raceCost, playerTraits) {
  var armorUpgrades = [];
  var randomUpgrade;
  var upgradePrice;
  var upgradeCosts = 0;
  var iam = 0; // Intentos aleatorios de Mejoras.
    if (
      // ¿La Protección admite Mejoras?
      armorsEe.mejoras[firstArmor] > 0 &&
      // ¿Queremos Mejoras? ¿Cuantas?
      $("#maxUpgrades").val() > 0 &&
      // Nada de 9999 Mejoras, loco.
      $("#maxUpgrades").val() <= 4
    ) {
      console.log("MEJORAS DE PROTECCIÓN");
      console.log("Cartera inicial: " + firstCoins);
      do {
        randomUpgrade = getRandomInt(0, armorsEe.nombre.length);
        upgradePrice = upgradesEe.precio[randomUpgrade] + raceCost;
        // Rasgo Altamente preparados.
        if (playerTraits.includes(64)) {
          upgradePrice = Math.ceil(upgradePrice / 2);
        };
        iam++;
        if (
          armorUpgrades.length < $("#maxUpgrades").val() &&
          armorUpgrades.length < armorsEe.mejoras[firstArmor] &&
          !armorUpgrades.includes(randomUpgrade) &&
          firstCoins > upgradePrice
        ) {
          // Si todo ha ido bien, añadimos la Mejora.
          armorUpgrades[armorUpgrades.length] = randomUpgrade;
          // Gastamos los Créditos correspondientes.
          firstCoins -= upgradePrice;
          upgradeCosts += upgradePrice;
          console.log(
            ">> Mejora: " +
            upgradesEe.nombre[randomUpgrade] +
            ", Precio: " +
            upgradePrice +
            ", Sobrecoste: " +
            raceCost +
            "."
          );
        }
      }
      while (iam < 50);
      console.log("Cartera final: " + firstCoins + " (Gasto: " + upgradeCosts + ")");
      console.log("------------------------");
    };
  return [armorUpgrades, upgradeCosts];
};

/* -------------------------------------------------------------------*/
/* IMPLANTES 						 																							*/
/* -------------------------------------------------------------------*/
function buyImplants (firstCoins, raceCost, playerDice, humanityMin, playerTraits) {
  var playerImplants = [];
  var randomImplant;
  var implantCosts = 0;
  var maxImplants = 5;
  var iai = 0; // Intentos aleatorios de Implantes
  // Rasgo Cuerpo tecnológico
  if (playerTraits.includes(1)) {
    // Añadimos la Interfaz neuronal.
    playerImplants[playerImplants.length] = 6;
  };

  // Si hemos puesto que queremos Implantes aleatorios.
  if (
    $("#maxImplants").val() > 0 &&
    // Nada de 9999 Implantes, loco.
    $("#maxImplants").val() <= maxImplants &&
    // Si tenemos el Rasgo Módulos de expansión, no podemos tener Implantes.
    !playerTraits.includes(30) &&
    // Si tenemos el Rasgo Deformidad de la luz, no podemos tener Implantes.
    !playerTraits.includes(91)
  ) {
    console.log("IMPLANTES");
    console.log("Cartera inicial: " + firstCoins);
    do {
      randomImplant = getRandomInt(0, implantsEe.nombre.length);
      iai++;
      if (
        playerImplants.length < $("#maxImplants").val() &&
        !playerImplants.includes(randomImplant) &&
        firstCoins > (implantsEe.precio[randomImplant] + raceCost) &&
        playerDice[2] != "1d4"
      ) {
        if (playerImplants.includes(implantsEe.requisitos[randomImplant]) || implantsEe.requisitos[randomImplant] == null) {
          // Si todo ha ido bien, añadimos el Implante.
          playerImplants[playerImplants.length] = randomImplant;
          // Gastamos los Créditos correspondientes.
          firstCoins -= implantsEe.precio[randomImplant] + raceCost;
          implantCosts += implantsEe.precio[randomImplant] + raceCost;
          // Quitamos Humanidad.
            // Si tenemos Muerte sintética, se consume automáticamente.
            if (playerTraits.includes(16)) {
              playerDice[2] = consumeUsageDice(playerDice[2]);
            // Si tenemos Prejuicios sintéticos o Simple y primitivo, tenemos Desventaja.
            } else if (playerTraits.includes(51) || playerTraits.includes(90)) {
              playerDice[2] = checkUsageDice(playerDice[2], 2, "desventaja");
            // Si tenemos Cuerpo tecnológico o Implantes iniciales, no consumimos Humanidad.
            }	else if (!playerTraits.includes(1) && !playerTraits.includes(98)) {
            // Si no tenemos ninguno de los dos Rasgos, tirada normal.
              playerDice[2] = checkUsageDice(playerDice[2], humanityMin);
            };
          console.log(
            ">> Implante: " +
            implantsEe.nombre[randomImplant] +
            ", Precio: " +
            implantsEe.precio[randomImplant] +
            ", Sobrecoste: " +
            raceCost +
            " | Humanidad " +
            playerDice[2] +
            "."
          );
        }
      }
    }
    while (iai < 50);
    // Rasgo Implantes iniciales II
    if (playerTraits.includes(98)) {
      // Obtenemos 200 Créditos para comprar Implantes.
      implantCosts = Math.max(0, implantCosts - 200);
    };
    console.log("Cartera final: " + firstCoins + " (Gasto: " + implantCosts + ")");
    console.log("------------------------");
  };
  return [playerImplants, implantCosts];
};
/* -------------------------------------------------------------------*/
/* EQUIPO COMÚN 				 																							*/
/* -------------------------------------------------------------------*/
function buyItems(firstCoins) {
  var playerItems = [];
  var randomItem;
  var itemCosts = 0;
  var iao = 0; // Intentos aleatorios de Objetos.
  if (
    $("#maxItems").val() > 0 &&
    // Nada de 9999 Objetos, loco.
    $("#maxItems").val() <= 5
  ) {
    console.log("EQUIPO COMÚN");
    console.log("Cartera inicial: " + firstCoins);
    do {
      randomItem = getRandomInt(0, itemsEe.nombre.length);
      iao++;
      if (
        playerItems.length < $("#maxItems").val() &&
        !playerItems.includes(randomItem) &&
        firstCoins > itemsEe.precio[randomItem]
      ) {
        // Si el objeto no está en la lista Homebrew, no lo incluímos si la opción no está marcada.
        if (!homebrewItems.includes(randomItem) || $("#acceptHomebrew:checked").length > 0) {
          // Si todo ha ido bien, añadimos la Mejora.
          playerItems[playerItems.length] = randomItem;
          // Gastamos los Créditos correspondientes.
          firstCoins -= itemsEe.precio[randomItem];
          itemCosts += itemsEe.precio[randomItem];
          console.log(
            ">> Objeto: " +
            itemsEe.nombre[randomItem] +
            ", Precio: " +
            itemsEe.precio[randomItem]
          );
        }
      };
    }
    while (iao < 50);
    console.log("Cartera final: " + firstCoins + " (Gasto: " + itemCosts + ")");
    console.log("------------------------");
  };
  return [playerItems, itemCosts];
};

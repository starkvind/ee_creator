/* ------------------------------------------------------- */
/* Clases de Estrellas Errantes                            */
/* ------------------------------------------------------- */
var playerClassEe = {
  nombre: [
    // Estrellas Errantes
    "Cable",						      // #000
    "Contrabandista",		      // #001
    "Diplomático",			      // #002
    "Errante",					      // #003
    "Psiónico",					      // #004
    "Soldado",					      // #005
    // El Naufragio
    "Gatónido",					      // #006
    "Androide",					      // #007
    "Operario",				        // #008
    "Antrófito",				      // #009
    "Piscem",						      // #010
    "Científico",				      // #011
    "Indolente",              // #012
    // Más allá de las Errantes
    "Amazona galáctica",      // #013
    "Arqueólogo planetario",  // #014
    "Cazarrecompensas",       // #015
    "Chatarrero sideral",     // #016
    "Clérigo cósmico",        // #017
    "Pirata espacial",        // #018
    "Policía galáctico",      // #019
    "Kaaarnakiano",           // #020
    "Lúxido",                 // #021
    // El Naufragio 2
    "Mitoxiano",              // #022
    "Blattorano",             // #023
    "Gamelio",                // #024
  ],
  nombre_f: [
    // Estrellas Errantes
    "Cable",
    "Contrabandista",
    "Diplomática",
    "Errante",
    "Psiónica",
    "Mujer soldado",
    // El Naufragio
    "Gatónida",
    "Ginoide",
    "Operaria",
    "Antrófita",
    "Pisces",
    "Científica",
    "Indolente",
    // Más allá de las Errantes
    "Amazona galáctica",
    "Arqueóloga planetaria",
    "Cazarrecompensas",
    "Chatarrera sideral",     // #016
    "Clériga cósmica",        // #017
    "Pirata espacial",        // #018
    "Policía galáctica",      // #019
    "Kaaarnakiana",           // #020
    "Lúxida",                 // #021
    // El Naufragio 2
    "Mitoxiana",              // #022
    "Blattorana",             // #023
    "Gamelia",                // #024
  ],
  atributos: [
    // Estrellas Errantes
    "TEC",
    "COM-TEC",
    "COM",
    "BIO",
    "PSI",
    "BIO-TEC",
    // El Naufragio
    "BIO",
    "TEC",
    "BIO-TEC",
    "PSI-TEC",
    "BIO-PSI",
    "TEC-PSI",
    "BIO",
    // Más allá de las Errantes
    "BIO",
    "PSI-BIO",
    "BIO-TEC",
    "TEC",
    "PSI",
    "BIO-TEC",
    "BIO-TEC",
    "BIO",
    "PSI-COM",
    // El Naufragio 2
    "PSI",
    "BIO-TEC",
    "COM",
  ],
  dados: [
    // Estrellas Errantes
    "1d6-1d6-1d8",
    "1d6-1d8-1d10",
    "1d4-1d6-1d10",
    "2d4-1d8-1d12",
    "1d4-1d6-1d8",
    "1d8-1d10-1d10",
    // El Naufragio
    "1d4-1d6-1d10",
    "1d8-1d10-1d6",
    "1d6-1d8-1d10",
    "1d10-1d8-1d6",
    "1d6-1d10-1d8",
    "1d6-1d4-1d8",
    "2d4-1d6-1d10",
    // Más allá de las Errantes
    "1d8-1d8-1d12",
    "1d6-1d6-1d10",
    "1d8-1d8-1d8",
    "1d6-1d6-1d8",
    "1d6-1d6-1d12",
    "1d6-1d8-1d8",
    "1d8-1d8-1d10",
    "1d8-1d10-1d10",
    "1d4-1d6-1d12",
    // El Naufragio 2
    "1d8-1d4-1d6",
    "1d8-1d8-1d8",
    "1d8-1d6-1d10",
  ],
  competencias: [
    // Estrellas Errantes
    "Cualquier arma salvo armas cuerpo a cuerpo a dos manos. Protecciones ligeras y medias.",
    "Todas las armas cuerpo a cuerpo, pistolas, escopetas, rifles, lanzallamas y granadas. Protecciones ligeras y medias.",
    "Armas ligeras cuerpo a cuerpo y pistolas. Protecciones ligeras.",
    "Cualquier arma cuerpo a cuerpo y pistolas. Ninguna protección.",
    "Ningún tipo de arma o protección.",
    "Cualquier tipo de arma o protección.",
    // El Naufragio
    "Armas cuerpo a cuerpo ligeras y a una mano, pistolas, escopetas y granadas. Protecciones ligeras.",
    "Cualquier tipo de arma. Ninguna protección.",
    "Cualquier arma cuerpo a cuerpo, pistolas y escopetas. Protecciones ligeras y medias.",
    "Debido a sus instintos de supervivencia, son capaces de usar cualquier arma salvo cañones o lanzallamas. Pueden equipar protecciones medias.",
    "Pueden usar cualquier arma cuerpo a cuerpo, pistolas, escopetas y rifles. Protecciones ligeras.",
    "Es capaz de usar armas ligeras cuerpo a cuerpo, pistolas, rifles y granadas, además de protecciones medias.",
    "Los indolentes pueden utilizar cualquier arma cuerpo a cuerpo y pistolas, pero no necesitan protección alguna.",
    // Más allá de las Errantes
    "Son capaces de manejar protecciones ligeras y medianas, y cualquier tipo de arma sin penalizadores.",
    "Pueden llevar protecciones ligeras. Además, son competentes con las armas cuerpo a cuerpo ligeras, de una mano y pistolas.",
    "Eres capaz de manejar todo tipo de protecciones y cualquier tipo de arma sin penalizadores",
    "Puedes llevar protecciones ligeras y eres competente con pistolas y escopetas.",
    "Pueden llevar protecciones ligeras y son competentes con todas las armas cuerpo a cuerpo.",
    "Pueden llevar protecciones ligeras y medias, y son competentes con todas las armas cuerpo a cuerpo, con pistolas, escopetas, rifles y granadas.",
    "Pueden llevar protecciones ligeras y medias, y son competentes con todas las armas cuerpo a cuerpo, con pistolas, escopetas, rifles, rifles de precisión y granadas.",
    "Pueden llevar protecciones ligeras y son competentes con todas las armas cuerpo a cuerpo primitivas.",
    "Pueden llevar protecciones ligeras y son competentes con armas cuerpo a cuerpo ligeras, de una mano y pistolas.",
    // El Naufragio 2
    "Pueden usar pistolas, rifles de precisión y granadas, pero no el resto de las armas ni protecciones: su estructura corporal se lo impide.",
    "Son una especie longeva y duradera, que pueden utilizar todas las armas cuerpo a cuerpo, además de pistolas, escopetas, rifles, rifles de precisión y granadas. También son capaces de equipar todo tipo de protección, no sin antes adaptarlas a su morfología insectoide.",
    "Pueden usar armas ligeras cuerpo a cuerpo, de una mano, pistolas, rifles y granadas, mientras que son capaces de portar protecciones ligeras o medias.",
  ],
  armas: [
    // Estrellas Errantes
    [1,2,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,8,10],
    [1,4],
    [1,2,3,4],
    [],
    [1,2,3,4,5,6,7,8,9,10],
    // El Naufragio
    [1,2,4,5,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5],
    [1,2,3,4,5,6,7,10],
    [1,2,3,4,5,6],
    [1,4,6,10],
    [1,2,3,4],
    // Más allá de las Errantes
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,4],
    [1,2,3,4,5,6,7,8,9,10],
    [4,5],
    [1,2,3],
    [1,2,3,4,5,6,10],
    [1,2,3,4,5,6,7,10],
    [1,2,3],
    [1,2,4],
    // El Naufragio 2
    [4,7,10],
    [1,2,3,4,5,6,7,10],
    [1,2,4,6,10],
  ],
  protecciones: [
    // Estrellas Errantes
    [1,2],
    [1,2],
    [1],
    [],
    [],
    [1,2,3],
    // El Naufragio
    [1],
    [],
    [1,2],
    [1,2],
    [1],
    [1,2],
    [],
    // Más allá de las Errantes
    [1,2],
    [1],
    [1,2,3],
    [1],
    [1],
    [1,2],
    [1,2],
    [1],
    [1],
    // El Naufragio 2
    [],
    [1,2,3],
    [1,2],
  ],
  rasgos: [
    // Estrellas Errantes
    [1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13],
    [14,15,16,17],
    [18,19],
    [20,21,22,23],
    // El Naufragio
    [41,24,25,26,27],
    [28,29,30],
    [37,38,39,40],
    [41,42,43,32],
    [41,44,45,33,46],
    [47,48,49,50],
    [51,52,53,17],
    // Más allá de las Errantes
    [54,55,56,57,58],
    [59,60,61,62],
    [63,64,65,66,67],
    [68,69,70,71,72],
    [73,74,75,76],
    [77,78,79,80],
    [81,82,83,84],
    [85,86,87,88,89,90],
    [91,92,93,94,95,96],
    // El Naufragio 2
    [108,109,110,111,41],
    [112,113,114,115,41],
    [116,117,118,119,41],
  ],
  origen: [
    // Estrellas Errantes
    "Estrellas Errantes",
    "Estrellas Errantes",
    "Estrellas Errantes",
    "Estrellas Errantes",
    "Estrellas Errantes",
    "Estrellas Errantes",
    // El Naufragio
    "El Naufragio (Especies)",
    "El Naufragio (Especies)",
    "El Naufragio (Clases)",
    "El Naufragio (Especies)",
    "El Naufragio (Especies)",
    "El Naufragio (Clases)",
    "El Naufragio (Clases)",
    // Más allá de las Errantes
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Clases)",
    "Más allá de las Errantes (Especies)",
    "Más allá de las Errantes (Especies)",
    // El Naufragio 2
    "El Naufragio (Especies)",
    "El Naufragio (Especies)",
    "El Naufragio (Especies)",
  ],
};
/* ------------------------------------------------------- */
/* Razas para Estrellas Errantes                           */
/* ------------------------------------------------------- */
var playerRacesEe = {
  nombre: [
    // El Naufragio
    "Humano",						// #000
    "Gatónido",					// #001
    "Antrófito",				// #002
    "Piscem",						// #003
    // Códice Grupo creativo
    "Gomer",						// #004
    "Porcino",					// #005
    "Targuniano",				// #006
    // Más allá de las Errantes
    "Humano",           // #007
    "Cyborg",           // #008
    "Enekín",           // #009
    "Hienoide",         // #010
    "Necroide",         // #011
    "Pulp-Pulp",        // #012
    "Ratoide",          // #013
    "Sabu",             // #014
    "Seregroide",       // #015
    "Silicoide",        // #016
    "Skalding",         // #017
  ],
  nombre_f: [
    // El Naufragio
    "Humana",
    "Gatónida",
    "Antrófita",
    "Pisces",
    // Códice Grupo creativo
    "Gomer",
    "Porcina",
    "Targuniana",
    // Más allá de las Errantes
    "Humana",
    "Cyborg",           // #008
    "Enekín",           // #009
    "Hienoide",         // #010
    "Necroide",         // #011
    "Pulp-Pulp",        // #012
    "Ratoide",          // #013
    "Sabu",             // #014
    "Seregroide",       // #015
    "Silicoide",        // #016
    "Skalding",         // #017
  ],
  rasgos: [
    // El Naufragio
    [31],
    [41,24],
    [41,32],
    [41,33],
    // Códice Grupo creativo
    [34],
    [35],
    [36],
    // Más allá de las Errantes
    [97],
    [98],
    [99],
    [100],
    [101],
    [102],
    [103],
    [104],
    [107],
    [105],
    [106],
  ],
  origen: [
    // El Naufragio
    "El Naufragio",
    "El Naufragio",
    "El Naufragio",
    "El Naufragio",
    // Códice Grupo creativo
    "Códice Grupo creativo",
    "Códice Grupo creativo",
    "Códice Grupo creativo",
    // Más allá de las Errantes
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
    "Más allá de las Errantes",
  ]
};
/* ------------------------------------------------------- */
/* Rasgos de Clase			                                   */
/* ------------------------------------------------------- */
var playerTraitsEe = {
  nombre: [
    "RASGO",																						// #000
    // Cable
    "Cuerpo tecnológico",																// #001
    "Esto me suena",																		// #002
    "Hacker",																						// #003
    "IA viva",																					// #004
    // Contrabandista
    "Charlatán",																				// #005
    "El secreto es el cuidado",													// #006
    "Ese montón de chatarra",														// #007
    "La Suerte te acompaña",														// #008
    "Sólo hay una forma de tratar con bichos",					// #009
    // Diplomático
    "Discurso inspirador",															// #010
    "Guardaespaldas",																		// #011
    "Líder",																						// #012
    "Nave en propiedad",																// #013
    // Errante
    "Inalcanzable",																			// #014
    "Maestro de la espada",															// #015
    "Muerte sintética",																	// #016
    "Siempre preparado",																// #017
    // Psiónico
    "Esfuerzo psiónico",																// #018
    "Poder del infinito",																// #019
    // Soldado
    "Artillero",																				// #020
    "Entrenamiento militar",														// #021
    "Maniobras tácticas",																// #022
    "Y no conocerán el miedo",													// #023
    // Gatónido
    "Agilidad felina",																	// #024
    "Garras naturales",																	// #025
    "Cazarratones",																			// #026
    "Carnívoro",																				// #027
    // Androide
    "Coraza tecnológica",																// #028
    "Vida artificial",																	// #029
    "Módulos de expansión",															// #030
    // Raciales (El Naufragio)
    "Adaptable",																				// #031
    "Ingenio de necesidad",															// #032
    "Mente en calma",																		// #033
    // Raciales (Códice Grupo creativo)
    "Xenoforma",																				// #034
    "Afinidad con el Karma",														// #035
    "Camuflaje",																				// #036
    // Operario
    "Obrero incansable",																// #037
    "Chapuzas",																					// #038
    "Duro de pelar",																		// #039
    "Sé de lo que hablo",																// #040
    // Raciales (El Naufragio) II
    "Biología alienígena", 															// #041
    // Antrófito
    "Cazador de hombres", 															// #042
    "Secretos medulares", 															// #043
    // Piscem
    "Pulmones marinos", 																// #044
    "Ojos de la bruma", 																// #045
    "Vestal de las mareas", 														// #046
    // Científico
    "Conocimiento estelar",															// #047
    "Medicina de emergencia", 													// #048
    "Prototipo experimental", 													// #049
    "Disección", 																				// #050
    // Indolente
    "Prejuicios sintéticos",														// #051
    "Dominio del arma",																	// #052
    "Sabiduría vil",																		// #053
    // Amazona galáctica
    "Orgullo de amazona",                               // #054
    "Pilotaje heroico",                                 // #055
    "Combatiente amazona",                              // #056
    "Puntería letal",                                   // #057
    "Voluntad y firmeza",                               // #058
    // Arqueólogo planetario
    "Ilustrado historiador",                            // #059
    "Alma de explorador",                               // #060
    "Sociedad de arqueólogos",                          // #061
    "La suerte del intrépido",                          // #062
    // Cazarrecompensas
    "Tipo de distancias cortas o largas",               // #063
    "Altamente preparados",                             // #064
    "Olerás mi aliento en tu nuca",                     // #065
    "Trampero",                                         // #066
    "Reducción mejorada",                               // #067
    // Chatarrero sideral
    "Mi cafetera y yo",                                 // #068
    "Señor de los droides",                             // #069
    "Mecánico avezado",                                 // #070
    "Yo sé lo que vale ese trozo de chatarra",          // #071
    "Rompetuercas",                                     // #072
    // Clérigo cósmico
    "Palabra de clérigo",                               // #073
    "Maestro de la vara",                               // #074
    "Prejuicios dogmáticos",                            // #075
    "Poder de la fe",                                   // #076
    // Pirata espacial
    "Vida de pirata",                                   // #077
    "Ese montón de chatarra pirata",                    // #078
    "Carrera criminal",                                 // #079
    "Este puerto me suena",                             // #080
    // Policía galáctico
    "Yo soy la ley",                                    // #081
    "Patrullero espacial",                              // #082
    "Tácticas policiales",                              // #083
    "Investigación policial",                           // #084
    // Kaaarnakiano
    "Filo kaaarnakiano",                                // #085
    "Baile bestial",                                    // #086
    "Cazador salvaje",                                  // #087
    "Hermano animal",                                   // #088
    "Regeneración carnívora",                           // #089
    "Simple y primitivo",                               // #090
    // Lúxido
    "Deformidad de la luz",                             // #091
    "Etéreo y adaptable",                               // #092
    "Recomposición solar",                              // #093
    "Ataque de energía",                                // #094
    "Luz bondadosa",                                    // #095
    "Influir sobre espacio/tiempo",                     // #096
    // Raciales (Más allá de las Errantes)
    "Versátil",                                         // #097
    "Implantes iniciales",                              // #098
    "Pequeño enekín",                                   // #099
    "Hijo de hiena",                                    // #100
    "Sangre necroide",                                  // #101
    "Corazón de Pulp-Pulp",                             // #102
    "Rata astuta",                                      // #103
    "Buen sabu",                                        // #104
    "Organismo mineral",                                // #105
    "Opsiófago",                                        // #106
    "Doble ser",                                        // #107
    // Mitoxiano (El Naufragio 2)
    "Regeneración celular",                             // #108
    "Membrana corporal",                                // #109
    "Órganos redundantes",                              // #110
    "Pulsos de memoria colectiva",                      // #111
    // Blattorano (El Naufragio 2)
    "Ácidos estomacales",                               // #112
    "Caparazón quitinoso",                              // #113
    "Corredor escurridizo",                             // #114
    "Difícil de matar",                                 // #115
    // Gamelios (El Naufragio 2)
    "Conocimiento de los antiguos",                     // #116
    "Palabras de paz",                                  // #117
    "Ojo analítico",                                    // #118
    "Sino del gamelio",                                 // #119
  ],
  info: [
    "ESTE RASGO NO DEBERÍA USARSE.",
    // Cable
    "No tiras por Humanidad cuando instalas un implante en tu cuerpo. Además, posees una interfaz neuronal.",
    "Cada vez que visites un nuevo planeta durante la partida, tira 1d6. Si obtienes 5, ya habrás estado antes, con lo que conoces las costumbres más habituales y los nombres de la gente de los bajos fondos a tener en cuenta. Si obtienes un 6 en la tirada, además tienes un contacto que te puede proporcionar información o recursos útiles. A cambio de un precio, claro está.",
    "Puedes realizar una prueba de TEC para controlar cualquier interfaz digital a la que accedas. Si lo consigues, puedes causar 1d6 PS a la seguridad de la interfaz digital. Las interfaces digitales tienen Salud igual a tantos d8 como su nivel. Cuando la Salud de una interfaz digital llega a cero, te habrás hecho con su control durante tantos intervalos como tu nivel.<br /><br />Un fallo en la prueba de TEC alertará a todo el sistema de tu intento de intrusión y probablemente también bloqueará futuros accesos.<br /><br />Cuando alcanzas el nivel 3, puedes realizar 1d8 PS a las interfaces digitales. Cuando llegas a nivel 5, causarás 1d10 PS.",
    "Si estás responsabilizándote de un puesto de Cálculo de una nave y de ningún otro, puedes conectar tu interfaz neuronal para utilizar siempre tu TEC en las tiradas de Cálculo, independientemente de cuál de las dos puntuaciones sea más alta.",
    // Contrabandista
    "Puedes convencer a cualquiera de lo que sea, sin necesidad de tirada. El problema es que se darán cuenta tantos intervalos más tarde como tu nivel.",
    "Obtienes un +2 a la prueba de TEC cuando intentas reparar una avería en una nave. Tras lograrlo, si asumes el puesto de Manejo, tienes ventaja en las tiradas para realizar maniobras evasivas durante todo el combate.",
    "Empiezas con una vieja nave comercial a la cual has cogido tanto cariño que cuando tomas el puesto de Manejo, puedes utilizar siempre tu TEC para realizar maniobras evasivas u ofensivas, independientemente de cuál de las dos puntuaciones sea más alta.<br /><br />Buenas noticias, si no fuera por ese prestamista al que le debes todavía los 20.000 créditos más intereses.",
    "Cada vez que tires 1d20 y obtengas como resultado un 1, puedes repetir la tirada.",
    "A partir de nivel 3, cuando atacas a un enemigo de una especie diferente a la tuya, le causas 2 PS adicionales. Desde nivel 5, causas en su lugar 4 PS adicionales.",
    // Diplomático
    "Si pronuncias un discurso motivador durante un intervalo, otorgas inspiración en un atributo de tu elección a todos los aliados que te escuchen. Todos los personajes inspirados obtienen un +1 al resultado de las pruebas que realicen durante tantos intervalos como tu nivel. Sólo puedes soltar un discurso inspirador al día. A partir de nivel 4 otorgas un +2.",
    "Tienes a tu disposición un guardaespaldas al que has contratado. El nivel de dicho guardaespaldas siempre es el mismo que el tuyo y toma los valores habituales de un enemigo de su nivel. Puedes escoger que un PJ sea tu guardaespaldas, en cuyo caso le otorgas la capacidad de realizar un ataque adicional cuando realiza la acción de protegerte. Si pierdes un guardaespaldas, puedes contratar otro. A nivel 3 puedes tener dos guardaespaldas, mientras que a nivel 5 puedes tener hasta tres.",
    "Si tiras tú la iniciativa, obtienes un +1 al resultado.",
    "Posees una nave diplomática de tu propiedad con una tripulación de 3d6 personas que te sirven proporcionándote todo tipo de comodidades.",
    // Errante
    "Tu valor de Defensa es igual a 2 + nivel. Además, cuando un ataque de cualquier tipo —incluidos los mentales— te causa daño a la Salud, sólo pierdes la mitad de PS.",
    "Como errante, has creado una espada de luz a la que debes poner un nombre propio. Has aprendido a canalizar tus técnicas de combate —debes elegir si es un arma de una mano o de dos— y, por ello, eres capaz de detener disparos y ataques con facilidad, por lo que obtienes un +2 a las pruebas de BIO cuando intentas evitar un ataque. Además, a nivel 3 tu dado de daño aumenta a 1d6 + 1d4 y a nivel 5 a 3d4.",
    "Pierdes Humanidad automáticamente cuando te colocas un implante.",
    "Puedes cambiar de arma automáticamente, sin gastar una acción.",
    // Psiónico
    "Puedes lanzar un poder aunque no tengas los puntos de Poder requerido, asumiendo después del efecto del poder un daño de 1d6 PS por cada punto que hayas necesitado.",
    "Puedes utilizar el poder del infinito para realizar auténticos milagros. En función de tu nivel, tienes unos puntos de Poder que puedes gastar diariamente en una serie de poderes conocidos. Tras meditar durante 2 horas eres capaz de recuperar todos tus puntos de Poder. Puedes realizar esta meditación durante un descanso, pero nunca más de una vez cada 24 horas.",
    // Soldado
    "Puedes disparar la Artillería de una nave si no se ha fijado el objetivo, pero tienes desventaja en la prueba de atributo. Si la nave ha hecho maniobra evasiva no puedes disparar.",
    "Eres especialista en utilizar armas a distancia. Elige un tipo de arma a distancia. Obtienes un +2 a las pruebas de TEC para atacar cuando la usas. Además, a nivel 3 tu dado de daño aumenta a 1d10 y a nivel 5 a 1d12.",
    "Al inicio de cada uno de tus turnos de combate puedes decidir aplicar una maniobra táctica de entre las siguientes.<ul><li><strong>Ataque adicional</strong>. Cuando atacas con un arma a distancia, puedes hacerlo dos veces, pero lo haces con desventaja.</li><li><strong>Ataque explosivo</strong>. Las tiradas de daño que realices ese turno explotan con los dos números mayores, en lugar de solamente con el mayor.</li><li><strong>Cobertura</strong>. Elige un aliado. El primer enemigo que ataque a dicho aliado recibirá antes un ataque tuyo.</li><li><strong>Fuego automático</strong>. Cuando causas daño con un rifle a un objetivo, causas la mitad de ese daño a todos los personajes Inmediatos a él.</li><li><strong>Tomar aliento</strong>. Puedes recuperar tanta Defensa como tu nivel —no puedes superar tu puntuación total de Defensa—. Si utilizas esta maniobra no puedes actuar, por lo que antes deberías buscar una buena cobertura.</li></ul>",
    "Nunca retrocedes. Obtienes ventaja en las pruebas de PSI contra el miedo.",
    // Gatónido
    "Obtienes ventaja en las pruebas de BIO para moverte sigilosamente, mantener el equilibrio o saltar.",
    "Si no tienes armas, puedes realizar ataques como si llevases una o dos –a tu elección– armas cuerpo a cuerpo ligeras.",
    "A partir de nivel 3, cuando atacas a un enemigo más pequeño que tú, le causas 1 PS adicional. Desde nivel 5, causas en su lugar 3 PS adicionales.",
    "Si comes carne mientras descansas, recuperas 1 PS adicional.",
    // Androide
    "Tu valor de Defensa es igual a tu nivel.",
    "No necesitas comer, dormir ni respirar. Eres inmune a venenos y enfermedades. Una vez cada 48 horas necesitas hacer un reinicio de tu sistema operativo durante 1d10 minutos y consumir una Vaina energética. No hacerlo te provocará Desventaja en todas las tiradas hasta que completes un reinicio. <br /><br /> Además, no puedes recibir curación de botiquines ni de poderes; para recuperar PS, necesitas que alguien haga una prueba de TEC usando una Herramienta para reparar androides. Si haces tú la tirada para repararte, tienes Desventaja.",
    "Tu cuerpo está configurado para utilizar Módulos de expansión que amplian tus capacidades como androide. Comienzas con 2 Módulos a nivel 1: desarrollas un Módulo adicional a nivel 3 y otro a nivel 5. Debido a esto, no puedes ponerte Implantes.",
    // Raciales I
    "Durante la creación de personaje, tras calcular tus atributos, puedes reducir en un punto uno de ellos.",
    "Tienes Ventaja a la hora de realizar pruebas de TEC relacionadas con la ingeniería inversa, la creación de aparatos a partir de chatarra o la reparación de los mismos.",
    "La estricta educación que has recibido desde renacuajo te otorga un +2 a las pruebas de PSI para resistir la intimidación, la persuasión y la tentación.",
    "Reciben la mitad de daño por caídas o golpes contundentes. Además, los gomers de la clase soldado suma 1 al daño cuando emplean su mordisco para atacar a un enemigo.",
    "Tiran con ventaja el Dado de Karma. Además, los porcinos de clase psiónico, poseen un punto adicional de poder.",
    "Obtienen +1 a las pruebas de BIO para ocultarse en la naturaleza. Ademas, los targunianos de clase errante poseen +2 a la Defensa.",
    // Operario
    "Tienes Ventaja en las pruebas de BIO relacionadas con cargar o arrastrar pesos, soportar largas jornadas de trabajo y aguantar la respiración. Además, puedes llevar encima más objetos que una persona normal (consulta con el <strong>Guardián Estelar</strong> el alcance concreto de este Talento).",
    "Debido a que manejas tecnología con asiduidad, tienes Ventaja en las pruebas de TEC a la hora de manipular o reparar aparatos mecánicos, vehículos y máquinas industriales. Necesitas usar Herramientas de trabajo para beneficiarte de este Talento.",
    "Pasar tanto tiempo en las minas o en las factorías de procesamiento te ha vuelto una persona especialmente resistente. Una vez al día, puedes ignorar los primeros 2 puntos de daño que recibas de un ataque. No podrás volver a utilizar este Talento hasta que descanses adecuadamente. <br /><br/>Cuando alcanzas el nivel 3, puedes usar hasta 2 veces este Talento antes de tener que descansar. Adicionalmente, tienes 1 PS adicional.",
    "Elige un oficio en concreto (<em>Minero, Calderero, Mecánico, Limpiador</em>, etc.) durante la creación de personaje. Obtienes un +2 a las pruebas de PSI realizadas para reconocer, analizar, identificar o resolver incidencias relacionadas con el oficio elegido.",
    // Razas alienígenas
    "Los implantes y mejoras de las armaduras tienen un coste de 50 Créditos adicionales debido a que deben ser adaptadas al cuerpo de esta especie. La Humanidad se reduce en caso de sacar 1.",
    // Antrófitos
    "Cuando ataca a un objetivo de la raza humana o de los piscem, causa 1 punto de daño adicional. a nivel 3, causa 2 puntos de daño adicionales y a nivel 5, 3 puntos de daño adicionales.",
    "Puede comerse una criatura inteligente para obtener sus conocimientos. Debe consumir por completo el cerebro y la médula ósea, y realizar una prueba de PSI: si tiene éxito, adquiere uno de los Talentos (seleccionado al azar por el <strong>Guardián Estelar</strong>) de la criatura devorada durante 1d4 Intervalos. El antrófito sólo puede usar este Talento una vez al día y debe realizar una prueba de Humanidad tras completar el proceso.",
    // Piscem
    "Siglos de evolución anfibia les otorga Ventaja en las pruebas de BIO para nadar, bucear o aguantar la respiración. Una vez al día, pueden forzar su sistema respiratorio para estar hasta tantos Intervalos como su nivel sin necesidad de respirar.",
    "Son capaces de detectar a sus objetivos mediante el calor que desprenden, pero sólo a corta distancia. Obtienen un +1 a las pruebas de ataque cuerpo a cuerpo pero sufren un -1 a las pruebas de ataque a distancia.",
    "Talento opcional. Solo para piscem hembras. El Dado de daño y de Salud del piscem se reduce en un rango. A cambio, obtiene Puntos de Poder igual a su Nivel x2 y puede aprender 1 poder psiónico por Nivel de la lista del Psiónico.",
    // Científico
    "El largo y extenso bagaje que posees te otorga Ventaja en las pruebas de PSI para identificar y/o comprender el funcionamiento de los Artefactos insólitos lleguen a tus manos. Además, una vez al día y si ocupas el puesto de Cálculo de una nave, puedes forzar tu mente para tener Ventaja para Analizar perímetro.",
    "Una vez al día, puedes usar una acción para aplicar un tratamiento de emergencia a un objetivo Inmediato que esté herido, sanándole 1d4 PS. A partir de nivel 3, puedes usar Medicina de emergencia 2 veces al día, y a nivel 5 restauras 2d4 PS.",
    "Talento opcional. Renuncias a tu arma y protección inicial a cambio de comenzar con una réplica fabricada por ti o por tu equipo de un Artefacto insólito. Sin embargo, este aparato tiene un 50% de posibilidades de sufrir un malfuncionamiento con consecuencias especialmente desastrosas. A nivel 3, se reduce a un 25%, y a nivel 5 a un 10%.",
    "Puedes utilizar tus conocimientos como científico para extraer órganos y componentes valiosos de criaturas alienígenas (vivas o muertas), que después puedes vender por tantos Créditos como nivel x 50. Requiere una acción, unas <strong>Herramientas de trabajo</strong>, superar una prueba de TEC y, tras completar el proceso, debes tirar por Humanidad.",
    // Indolente
    "Cada vez que te colocas un implante, tiras por Humanidad con Desventaja.",
    "Como errante, creaste una espada de luz con nombre propio. Esta arma (debes elegir si es a una o a dos manos) se corrompió al igual que tú cuando renunciaste a las virtudes. Obtienes un +2 a las pruebas de BIO cuando intentas evitar un ataque, y sufres la mitad de daño de cualquier fuente. Además, a nivel 3 tu dado de daño aumenta a 1d6 + 1d4.",
    "Para iniciarte como indolente, sacrificaste una parte importante de tu alma para empapar tu cuerpo con poderes nefandos. Tienes tantos puntos de poder como tu nivel, que puedes gastar para realizar proezas que otros errantes serían incapaces.<br /><br />Usar cualquiera de estas habilidades es una acción y consume 1 punto de poder; en combate, puedes sufrir 1d6 de daño e invocar el efecto sin perder puntos de poder.<br /><br /><ul><li><strong>Estrangular:</strong> Prueba de BIO. Rodeas las vías respiratorias de un objetivo Inmediato o Cercano con fuerza opresora, causándole 1d6 de daño, que ignora su Defensa, y paralizándole. Puedes mantener este poder cada Asalto sin gastar poder (pero sí la acción y la prueba), siempre y cuando sea el mismo objetivo.</li> <li><strong>Empujón:</strong> Prueba de BIO. Empujas con vigor invisible hasta 1d4 objetivos Inmediatos o Cercanos a un punto Lejano. El impacto causa 1d4 de daño a cada objetivo.</li> <li><strong>Fulminar:</strong> Prueba de PSI. De la punta de tus dedos emerge electricidad crepitante, del mismo color que tu arma de luz, hacia un objetivo Lejano, causándole 1d8 +1 de daño.</li> <li><strong>Telequinesia:</strong> Prueba de PSI. Hebras intangibles de fuerza obsidiana te permiten mover objetos (de hasta 50 kg) a tu voluntad de un punto Cercano a uno Lejano. Tú decides a qué velocidad se mueven: si golpeas a un enemigo de esta forma, causa 1d8 de daño.</li> <li><strong>Premonición:</strong> La energía oscura recorre cada célula de tu cuerpo, otorgándote durante un Intervalo tanta Defensa como tu nivel +1. <li><strong>Ira interna:</strong> Realizas dos ataques con tu espada de luz a uno o dos objetivos Inmediatos.</li> </ul>",
    // Amazona galáctica
    "Una vez al día una amazona puede sacar provecho de su orgullo. Cuando una amazona realice una prueba, ya fuera de ataque o compitiendo, contra un miembro del sexo opuesto, podrá obtener ventaja en su tirada.",
    "Algunas amazonas dicen que pilotar una nave es como cabalgar un caballo alado de las lunas de Turém. Cuando se encargan de las funciones de manejo y realizan maniobras defensivas añaden +2 a sus tiradas.",
    "Las amazonas son famosas por haber desarrollado un estilo de combate efectivo y poderoso. Pueden llevar dos armas de una mano o combinar un arma de mano con una pistola, con cualquiera de estas combinaciones podrá realizar dos ataques en su acción normal, uno con cada arma. <br /> <br /> Además, hay que tener en cuenta que las amazonas también son famosas por sus artes de combate defensivas. Son capaces de desviar ataques enemigos con ciertas armas, por lo que por cada arma de mano o de dos manos que lleven ganarán +1 o +2, respectivamente, a las tiradas de BIO para evitar ataques.",
    "Debido a su entrenada puntería obtendrán +1 a las tiradas de ataque y al daño tanto usando armas a distancia como la artillería de las naves.",
    "Realizando una prueba de PSI durante su asalto, pueden intentar superar cualquier estado alterado, cuyo origen sea mental o místico. Sí tienen éxito en su prueba, esta acción será gratuita y realizarán su asalto con normalidad. <br /><br />En todo caso, esta acción de superación es voluntaria, ya que si la prueba no es superada el desconcierto les sobrepasará, no pudiendo realizar acción alguna durante el resto de su asalto.",
    // Arqueólogo planetario
    "El haber estudiado tantas culturas planetarias y su historia, hace de estos personajes unos grandes contenedores del saber. Tendrán ventaja para conocer datos culturales, históricos y sociales sobre cualquier civilización conocida.",
    "Un arqueólogo siempre está atento y listo cuando explora ruinas, cuevas y lugares en estado salvaje. Sabe como nadie que muchos estos sitios están protegidos por trampas o enemigos acechando. En estos lugares tendrá ventaja para detectar trampas y embocadas, así como para orientarse o encontrar mecanismos y pasadizos secretos.",
    "Todos los arqueólogos pertenecen a algún tipo de sociedad o gremio de su oficio. Estas sociedades proveen de dinero y recursos a sus miembros, siempre que estos compartan sus éxitos con ellas. <br /><br /> Por ello, a diferencia de la mayoría de clases, un arqueólogo comienza con 5d6 x10 créditos de inicio. Además, estos personajes podrán acudir a las sedes o sucursales de estas sociedades, donde podrán conseguir prestados, alquilados o rebajados de precio, muchos bienes necesarios para sus aventuras.",
    "Un arqueólogo recibirá la mitad del daño recibido por accidentes, caídas o trampas, siempre que estas situaciones ocurran en el trascurso de sus labores de aventurero.",
    // Cazarrecompensas
    "Un cazarrecompensas debera elegir entre una de las dos opciones, teniendo una bonificacion con armas cuerpo a cuerpo si elige cortas, o con armas a distancia si elige largas. Antes de realizar un ataque con la tirada elegida podra elegir aplicar un +2 las tiradas de ataque o a la tirada de dano. Si no declara nada, por defecto la bonificacion se aplicara a la tirada de ataque.",
    "Siempre van perfectamente equipados para la caza. Pueden comprar protecciones y mejoras por la mitad de precio. Este talento no servira para forrarse comprando a la baja para despues vender cual listo galactico. Si intenta vender algo comprado asi, se considerara usado y no podra venderlo por mas de lo que le costó.",
    "Huir o esconderse de manera permanente de un obstinado cazarrecompensas es tarea ardua pues tienen ventaja en las tiradas de seguir rastros cercanos y recientes o detectar criaturas escondidas, asi como sus agujeros o escondites.",
    "¿Para qué ir detrás de una pieza cuando esta puede venir? Estos tipos son astutos y versados en su oficio, capaces de organizar elaboradas emboscadas o trampas. Tienen ventaja realizando en tales acciones.",
    "Desgraciadamente, a veces hay que cazar las piezas vivas. Cuerpo a cuerpo, estos profesionales pueden intentar reducir a un rival sin contar con la desventaja inicial.",
    // Chatarrero sideral
    "Un chatarrero comienza la aventura con una sencilla nave tipo Cafetera Estelar, que se supone ha construido a lo largo de su vida. Si esta nave es destruida o robada el chatarrero podra volver a construirse otra en un par de semanas, siempre que tenga los materiales necesarios y se encuentre en el lugar adecuado. Sin embargo, a estas naves 'gratuitas', el chatarrero les tendra demasiado carino y no podra venderlas ni cederlas de manera voluntaria y permanente. <br /><br /> Por cada nivel del chatarrero, a partir de 2, la Cafetera Estelar podra tener una mejora. Cada una se podra utilizar para modificar alguna de las siguientes caracteristicas de la nave: <ul><li>Un -1 en uno de los atributos de la nave</li><li>Un +1 en Defensa</li><li>Un +2 en Salud</li></ul>",
    "Pueden adquirir droides por la mitad de precio de lo normal, ya que saben encontrar modelos de segunda mano y tras unos retoques los dejan prácticamente como nuevos. Eso si, si los intenta vender sera por el precio comprado.<br /><br /> Cuando un chatarrero los repare con exito recuperarán el doble de salud. Además, si el droide descansa un dia completo junto con su chatarrero este personaje podrá sacrificar su recuperacion de salud por descansar para dedicarse plenamente en arreglarlo, este será totalmente recuperado o reparado.<br /><br /> Y lo mas importante, las expertas manitas de un chatarrero le permitirán reparar droides destruidos cuyos PS hayan caido hasta -5.",
    "Siempre que tiene el material adecuado obtiene ventaja a la prueba de TEC cuando intenta reparar una avería en una nave o cualquier otra maquinaria.",
    "Los chatarreros saben perfectamente el valor aproximado de cualquier maquina o pieza tecnologica. Cualquier canalla que intente enganarlo sobre eso tendra desventaja.",
    "Conocen los puntos debiles de cualquier maquina. Una vez por combate -tanto en combate normal como estelar- pueden anunciar un ataque <strong>rompedor</strong>. sobre una nave, maquina, droide, etc. Si este ataque tiene exito hara +2 de dano e ignorara la Defensa.",
    // Clérigo cósmico
    "Los clérigos son respetados por la mayoría de los seres creyentes del universo. Por defecto serán bien tratados, así como tendrán ventaja en tiradas de COM, por y con aquellos que promulguen con creencias afines a su alineamiento.",
    "Los clérigos son buenos combatientes cuerpo a cuerpo y tienen un manejo sorprendente de la vara plasmática. Arma que les acompaña durante toda su vida y con la que entrenan todos los días desde el momento que entran en una orden. <br /><br />Se trata de un arma de dos manos, una vara larga imbuida por plasma en sus partes extremas. Todo clérigo comienza con una vara plasmática, y en caso de perderla se podrá comprar otra en la mayoría de las tiendas por 100 Créditos. <br /><br />Gracias a su entrenamiento diario, el clérigo puede sacar, guardar y cambiar esta arma sin gastar una acción. A pesar de ser un arma de dos manos, el clérigo tiene la opción de usarla como un mano de mano, por si necesita la otra mano libre. <br /><br />Aunque para un clérigo, sin duda la mejor forma de usarla en el combate es cogerla con las dos manos, ya que ellos, con sus varas ignoran la penalización -2 a las tiradas de BIO que como norma general se tiene al atacar con un arma de dos manos, y además, siguen conservando su +2 al daño.<br /><br />Un clérigo también es diestro utilizando estas varas de manera defensiva, ganando +2 a las pruebas de BIO cuando evita un ataque mientras luche con ellas.",
    "Un servidor de la luz no podrá realizar o tolerar malas acciones sin que eso no le afecte, como de la misma manera que le sucede a un clérigo de la oscuridad con el bien. Cada vez que haga o tolere algo, que de manera grave rompa sus principios, deberá hacer un chequeo de humanidad.",
    "Los clérigos cósmicos pueden utilizar el poder de la fe para realizar auténticos milagros o hazañas sobrenaturales. En función de su nivel, tienen unos puntos de Poder que pueden gastar para usar una serie de dones adquiridos durante su carrera. <br /><br /> Tras meditar durante 2 horas son capaces de recuperar todos tus puntos de Poder. Pueden realizar esta meditación durante un descanso, pero nunca más de una vez cada 24 horas. El uso de estos poderes requiere gastar una acción debido a su concentración. Algunos poderes sólo pueden ser usados por los clérigos de la Luz (Luz) así como otros únicamente por los clérigos oscuros (Osc).",
    // Pirata espacial
    "Todo el mundo sabe que la reputación de los piratas está bien ganada. Usando la intimidación tienen ventaja en las pruebas de sacar información o convencer a cualquiera que no esté acostumbrado ni preparado para la violencia. <br /><br /> Los piratas también son unos viciosos y como todo el mundo cuando participen en cualquier juego de azar podrán arriesgarse a hacer trampas añadiendo +2 a su tirada. Si un tramposo no pirata saca una tirada natural menor a la mitad de la PSI del rival será descubierto, los piratas sólo serán descubierto si sacan menos de ¼. <br /><br /> La vida de taberna y sus costumbres también proporcionan ciertas ventajas a un pirata. Cuando haya que realizar tiradas de BIO para superar los efectos del alcohol un pirata obtendrá ventaja. <br /><br /> Así mismo, cuando estos bribones peleen dentro de un entorno familiar para ellos, como pueda ser un bar o una nave pirata, podrán usar armas improvisadas sin reducir el dado de Daño en uno, aunque sí que seguirán aplicándose el resto de penalizaciones. <br /><br />Y como último apunte para este talento, simplemente queda por tener en cuenta que cuando usen naves modelo Garfio, Corsario Ligera o Corsario, tendrán +1 en las pruebas de cualquiera de sus tres atributos.",
    "Todo pirata puede empezar su carrera con una vieja nave pirata, una Corsario Ligera, a la cual cogerá tanto cariño que cuando tome el puesto de Manejo, puede utilizar siempre su TEC para realizar maniobras evasivas u ofensivas, independientemente de cuál de las dos puntuaciones sea más alta. <br /><br /> Esto estaría bien si no fuera por ese pirata al que se le debe todavía los 20.000 créditos más intereses.",
    "Conforme estos criminales van avanzando en su 'carrera' cada vez consiguen más fama dentro del gremio, ya sea de origen cierto o no. Esto tiene sus consecuencias positivas y negativas. <br /><br /> Como pro el pirata irá acumulando seguidores, piratas de menor rango que le obedecerán a modo de capitán. A partir de nivel 2 obtendrá un seguidor por cada nivel que avance. Estos servidores serán PNJs controlados por el Guardián estelar y cada cierto tiempo deberán de ser pagados o premiados de alguna manera o se amotinarán. <br /><br /> Salvo que su capitán se gaste dinero en equiparlos, estos subordinados irán armados por defecto con un arma ligera de cuerpo a cuerpo, una pistola y portarán una protección ligera. <br /><br /> Sus características serán las siguientes: NIV 1 – DAÑO 1D4 - DEF 2 - SALUD 5. En caso ser usado como tripulación tendría una TEC de 12. <br /><br /> Por el contrario, la principal cuestión negativa de la carrera criminal es que a mayor nivel, el pirata y su banda estarán más buscados por las diferentes autoridades galácticas. Y de hecho, por ello pocos piratas mueren de viejos, y si el GE cuenta con este hándicap, la vida del pirata a veces se puede hacer muy difícil.",
    "Cada vez que un pirata visite un nuevo planeta durante la partida, tira 1d6. Si obtiene 5, ya habrá estado antes, con lo que conoce las costumbres más habituales y los nombres de la gente de los bajos fondos a tener en cuenta. Si obtiene un 6 en la tirada, además tiene un contacto que le puede proporcionar información o recursos útiles. A cambio de un precio, claro está.",
    // Policía galáctico
    "En tiradas de comunicación, cuando un poli trate de convencer, interrogar o hacer obedecer a alguien, siempre que sea bajo el amparo de la ley, tendrá ventaja. <br /><br /> Sin embargo, ser tan legalista no siempre ha de ser algo positivo, cuando realicen una acción ilegal o corrupta de cierta gravedad, deberá hacer una tirada de humanidad.",
    "Teniendo en cuenta que la mayoría de las naves patrulleras son naves Cuervo modificadas, todo el que ha sido patrullero espacial tarde o temprano se acaba convirtiendo en un experto en manejando naves tipo caza, con las que tendrán ventaja en las tiradas de manejo.",
    "De manera parecida al soldado, un policía también ha recibido instrucción en el combate. Al principio de cada uno de tus turnos de combate puede decidir aplicar una maniobra táctica de entre las siguientes: <ul><li><strong>Ataque adicional</strong>. Cuando ataca con un arma a distancia, puede hacerlo dos veces, pero lo haces con desventaja.</li><li><strong>Reducción mejorada</strong>. Atacando cuerpo a cuerpo, puede intentar reducir a un rival ignorando la desventaja inicial.</li><li><strong>Cobertura</strong>. El policía elige un aliado a cubrir. El primer enemigo que ataque a dicho aliado recibirá antes un ataque del agente.</li><li><strong>Fuego automático</strong>. Cuando causa daño con un rifle a un objetivo, causa la mitad de ese daño a todos los personajes Inmediatos a él.</li><li><strong>Tomar aliento</strong>. Puede recuperar tanta Defensa como su nivel —no puedes superar tu puntuación total de Defensa—. Si utiliza esta maniobra no puede actuar, por lo que antes debería buscar una buena cobertura.</li></ul>",
    "Siempre que el agente pueda acceder a un terminal con acceso a la base de datos de su organización policial podrá intentar averiguar información sobre algo o alguien con una tirada de TEC. La dificultad dependerá de la información a conseguir, no es lo mismo acceder a simples antecedentes policiales de alguien, que consultar archivos clasificados.",
    // Kaaarnakiano
    "Los Kaaarnakianos son expertos en la lucha con una especie de arma primitiva compuesta por varios filos o pinchos que se atan en un antebrazo a modo de garra. Prácticamente, son capaces de fabricárselos de manera automática y gratuita mientras tengan el material necesario para hacérselo, el cual consiste en huesos de pantera de Kaaarnak, una peligrosa bestia autóctona de su planeta, la cual viene descrita en la pág. 26 de este manual. Este material costaría unos 30 créditos y se podría encontrar en la mayoría de tiendas.<br /><br />Estos filos se consideran armas de una mano con las que sólo un kaaarnakiano es competente, y están diseñadas para atravesar las más duras protecciones, realizando daños penetrantes. Esto quiere decir que cuando se realice un ataque con éxito, los tres primeros puntos de Daño atravesarán automáticamente la Defensa, siendo el daño restante absorbido, si lo hay. <br /><br /> Además, armados con dichos filos estos hábiles guerreros también pueden utilizarlos para obtener ventaja a la hora de trepar o agarrase a algo.",
    "Siempre que tenga tres extremidades libres un kaaarnakiano puede realizar ágiles movimientos, saltos y volteretas, por lo que obtiene una bonificación igual a su nivel para las pruebas de BIO cuando intenta evitar un ataque o una trampa.",
    "Obtienen ventaja en las tiradas de rastrear, esconderse, encontrar comida y percepción, en entornos naturales ricos en vegetación.",
    "Los kaaarnakianos tienen un talento especial parar tratar con otros animales no racionales, obteniendo ventaja en las pruebas que impliquen relaciones sociales con ellos. Además, al alcanzar el nivel 3 es premiado con una joven pantera de Kaaarnak domesticada, que le acompañará allá donde éste quiera. Cuando el PJ llegue al nivel cinco la pantera se considerará adulta. Si esta compañera muere o se pierde de manera permanente volverá a conseguir otra igual en la siguiente aventura. <br /><br />Esta criatura tendrá las mismas habilidades que se describen en la Pág. 26, y según su edad sus características serán las siguientes:<ul><li><strong>Pantera joven doméstica</strong>: NIV 1 - DEF 1 - SALUD 5 Ataques: 2 Garrazos (1d4 penetrante)</li><li><strong>Pantera adulta doméstica</strong>: NIV 2 - DEF 2 - SALUD 8 Ataques: 2 Garrazos (1d6 penetrante)</li></ul>",
    "Si ese día ha comido carne, recupera el doble de salud cuando descansa o recibe curación, y tiene ventaja en las pruebas de superar venenos y enfermedades.",
    "Tiene desventaja en las tiradas de TEC cuando maneja alta tecnología, usa los atributos de una nave, o realiza pruebas de humanidad cuando se coloca un implante.",
    // Lúxido
    "Aunque su forma más normal es la de un humanoide, pueden deformarse a voluntad, estrecharse y alargarse de manera instantánea. Sin embargo, cuando se alcanzan ciertas formas muy difusas no se podrán agarrar, sostener o tocar objetos, pero sí podrán atravesar cualquier pared o puerta siempre que haya un mínimo hueco por el que pasar. Los objetos que el lúxido porte consigo se deformarán a la vez que él sin sufrir ningún daño, sin embargo, esta propiedad física hace que para estos personajes les sea realmente difícil llevar implantes o protecciones medias y pesadas, sobre su inestable cuerpo. Por ello, los seres de luz no pueden llevar este tipo de objetos. <br /><br />Además, debido a esta propiedad cuando se consulte la tabla de muerte cualquier herida permanente –resultado de 3-4-será considerada como simple herida –resultado de 5-6-.",
    "El personaje tendrá un +5 a la BIO para evitar ataques físicos, exceptuando los de energía, láser, fuego o plasma, además, cualquier daño físico se reduce a la mitad. A los lúxidos apenas les afecta la gravedad, por ello, como norma general, podrán volar, levitar y flotar a voluntad en cualquier lugar, aunque cuanto más peso lleven encima más limitado será este movimiento. <br/ ><br />Estos seres también pueden adaptar su cuerpo para sobrevivir a ciertas condiciones donde la vida normal no podría. Pueden sobrevivir en el espacio o en la mayoría entornos hostiles sin mayor problema.",
    "La única manera de recuperar salud para estos seres es simplemente exponiéndose ante cualquier fuente de luz natural con una potencia similar a la de nuestro sol en la Tierra. Si ese día ha recibido luz durante al menos 10 minutos, podrá realizar una especie de sueño y recuperar salud con normalidad.",
    "Puede realizar un ataque de energía tanto cuerpo a cuerpo con BIO como a distancia con TEC, hasta un alcance lejano. Para ello usará su propia energía vital, a mayor gasto mayor de PS mayor daño de este ataque. <br /><br />Deberá declarar cuanta salud gasta antes de lanzar el ataque, pudiendo usar hasta un máximo de 3. Por cada PS gastado hará 1d4 de daño. Sin embargo, si decide hacerlo en una distancia inmediata o cercana podrá afectar a 1d4 enemigos. Cualquier enemigo objetivo, dañado o no, quedará cegado 1d4 turnos salvo que disponga de alguna protección visual o circunstancia que lo impida.",
    "Cada vez que este personaje realice, permita o colabore en una acción malvada o inmoral deberá hacer un chequeo de humanidad.",
    "Cuando forman parte de la tripulación de una nave, pueden gastar su turno concentrándose para alterar el espacio/tiempo de su alrededor. Una de las cosas que puede hacer es usar sus poderes para facilitar el salto al hiperespacio, lo cual dará ventaja a la tirada del compañero que use cálculo para esa acción. <br /><br /> También puede elegir concentrase para ayudar en labores defensivas y crear campos reflectores alrededor de la nave, reduciendo en dos puntos el primer daño recibido durante ese turno. El uso de estos poderes no requerirá respetar el orden de iniciativa, el PJ simplemente perderá su asalto en eso y no podrá hacer nada más.",
    // Raciales (Más allá de las Errantes)
    "Una vez al día, puedes obtener +2 a una tirada de atributo. Debes anunciar el uso de este Talento antes de tirar.",
    "Obtienes 200 Créditos para gastar en Implantes durante la creación de personaje. Los Implantes tendrán un descuento del 50% salvo aquellos que cuesten 20 Créditos o menos. Puedes añadir hasta 100 Créditos adicionales de tu dinero inicial a esta cantidad, pero si resta algún Crédito de los 200, los perderás. No tiras por Humanidad cuando te añades un Implante. No puedes ponerte más de cuatro Implantes ni menos de dos.",
    "Tu reducido tamaño te da +1 a iniciativa y tienes Ventaja a la hora de esquivar ataques a distancia Cercana o mayor. <br /> Si tu clase es Chatarrero, obtienes +2 a las pruebas de TEC para reparar naves o maquinaria.",
    "Tienes +2 a las pruebas de BIO relacionadas con correr, sigilo y uso del olfato o del oído para percibir cosas. Si estás desarmado, puedes tratar tus garras y dientes como si fuesen dos armas ligeras cuerpo a cuerpo. <br /> Si tu clase es Pirata espacial, tienes +2 en las pruebas de COM para tratar con otros piratas y demás ralea.",
    "Tu metabolismo está parado en el tiempo. No necesitas respirar o comer; para descansar, entras en un letargo en el que es difícil despertarte. No envejeces y eres inmune a enfermedades y venenos comunes. Debes alimentarte del fluído vital de otros seres para disfrutar de los beneficios del descanso, y gracias a esto puedes llegar a sanar heridas mortales o incurables. Si cuando tiras en la Tabla de Muerte sacas un 2 y tu salud no ha bajado por debajo de -3, entras en letargo forzoso. De otra forma eres destruído. <br /><br/> Tienes Desventaja en todas las pruebas que hagas si te ves expuesto a luz diurna (como la del Sol, por ejemplo) y no vas protegido, aunque puedes ver bastante bien en penumbra. Sufres el doble de daño por fuego, luz o armas láser.",
    "Puedes respirar bajo el agua y tienes Ventaja en las pruebas de natación. Cuando descansas, debes estar hidratado o mojado para poder recuperar salud. Puedes retener humedad en tu cuerpo durante varias horas: si lo haces, recibes la mitad de daño de fuentes ígneas, pero sufres el doble de fuentes eléctricas. <br /> Si tu clase es Arqueólogo planetario, obtienes un +2 en tiradas para superar el miedo, situaciones deprimentes o pérdida de moral.",
    "Tienes +1 a la iniciativa y un +2 a las pruebas relacionadas con el sigilo, hurto y ocultación. Tienes Ventaja en cualquier prueba atlética que implique correr, saltar o trepar si tu objetivo es ponerte a salvo de algún peligro. <br /> Si tu clase es Contrabandista, obtienes un +2 a las pruebas de COM si tienes que negociar o estafar.",
    "Obtienes un +2 a las pruebas de BIO relacionadas con correr y un +2 a las pruebas de PSI para resistir el miedo y uso del olfato o del oído para percibir cosas. Si estás desarmado, puedes tratar tus garras y dientes como si fuesen dos armas ligeras cuerpo a cuerpo. <br />Si tu clase es Policía galáctico, obtienes un +2 a las pruebas de BIO para reducir y apresar a un objetivo.",
    "Tu dieta se basa en minerales blandos o pesados (si estos son tratados). Tu piel pétrea te permite reducir hasta 3 puntos de daño que sufras de un ataque; si el ataque es físico e ignora la Defensa, no puedes reducirlo. En aquellos casos en los que haya que modificar la cantidad de daño, esta reducción se aplica tras finalizar las demás operaciones. Eres inmune a daños eléctricos y reduces a la mitad el daño por fuego, pero recibes el doble de daño de fuentes congelantes. Debido a tu pesado cuerpo, tienes Desventaja en las pruebas de BIO relacionadas con el atletismo o la natación.",
    "Eres un ser que se alimenta de opsio, procedente de los lugares más calurosos de la galaxia. Tienes Ventaja en las pruebas de BIO para resistir el calor y recibes la mitad de daño de fuentes ígneas, aunque sufrirás Desventaja y recibirás el doble de daño si se trata del frío. Debes consumir una dosis de opsio al día para recibir los beneficios del descanso. <br /><br /> Además, obtienes los Poderes Aceleración metabólica y Llamaradas de opsio. Puedes usar uno de ellos una vez al día, y su coste es en PS en lugar de puntos de Poder. A nivel 3, puedes usarlos dos veces al día, y tres veces al día a nivel 5. Si bien puedes ir más allá de dicho límite, el coste de PS será el doble. Debes declarar que vas a usarlos antes de realizar la acción correspondiente.",
    "Eres una criatura  alienígena carente de detalles. Puedes concentrarte durante un Asalto para generar un duplicado de ti mismo, con el mismo equipo. Este tendrá parte de tus recuerdos y conocimientos, aunque su personalidad le hará un individuo independiente. El original pasa a tener la mitad de PS y Poder, y ambos reducen sus Dados de Daño y Salud un rango, no pudiéndose reducir por debajo de d4.<br /><br />Como jugador, llevarás a ambos personajes durante la partida, hasta que llegue el desvanecimiento: cuando uno de los seres muere, o porque el jugador lo fuerza. Debes hacer una prueba de Humanidad cuando esto ocurra, y no puede ocurrir un desdoblamiento el mismo día de un desvanecimiento. El individuo restante recuperará sus Dados de Daño y de Salud.",
    // Mitoxianos (El Naufragio 2)
    "Una vez al día, sin gastar acción, puedes recobrar partes de tu cuerpo a voluntad, sanandote 1d4 PS. A partir de nivel 4, puedes regenerarte dos veces al día.",
    "Todo tu cuerpo está cubierto por una pegajosa membrana vírica, que te protege de ataques físicos y de inclemencias climáticas. Tienes 2 puntos de Defensa, que aumentan a 4 al alcanzar el nivel 3. Siempre que te quede Defensa, recibes la mitad de daño de cualquier fuente.",
    "La disposición de tus órganos internos no es la de un humanoide, por lo que es más complicado que ciertas armas o aparatos te afecten. Tienes Ventaja a la hora de resistir estados alterados (como la Ceguera, Parálisis, Sangrado, etc.) que requieran una prueba de BIO.",
    "Talento opcional. Tu consciencia se ha conectado a uno de los nodos psíquicos de la red neuronal mitoxiana. Tienes tantos Puntos de Poder como tu Nivel x2, y 1d4 poderes psiónicos a tu disposición; sin embargo, pierdes 2 PS máximos a nivel 1 (<em>tu Salud máxima inicial se calcularía con 1d4 +2</em>). Cada vez que subes de nivel, puedes intercambiar uno de esos poderes por otro si el GE lo aprueba.",
    // Blattoranos (El Naufragio 2)
    "Eres capaz de alimentarte de cualquier cosa, ya sea nociva, venenosa o inorgánica. Necesitas un Intervalo para masticar un kilo de materia, y esto sirve para cubrir el cupo de alimentación diario.",
    "Tu cuerpo está recubierto por una capa orgánica de quitina. Mientras estés protegido por tu caparazón, eres inmune a cualquier tipo de radiación, enfermedad o peligro biológico.",
    "Tienes Ventaja en las pruebas de BIO a la hora de recorrer lugares angostos y oscuros; si entra tu cabeza, entra todo tu cuerpo.",
    "Si tus PS caen a 0, pierdes tu Caparazón quitinoso y obtienes +1 a la Tirada de Muerte; después, tardará 1 día completo en regenerarse. A partir de nivel 3 lo regeneras en 1d4 Intervalos.",
    // Gamelios (El Naufragio 2)
    "Tienes Ventaja a la hora de reconocer ruinas espaciales, artefactos insólitos u otros elementos míticos durante tus aventuras.",
    "Una vez al día puedes intentar detener una trifulca entre dos grupos enfrentados utilizando la palabra. Realiza una prueba de COM: si tienes éxito, provocarás una tregua temporal e incómoda.",
    "Milenios de sabiduría y conocimientos pueblan tu mente, lo que te permite ser un consejero o ayudante muy habilidoso y valorado. Una vez por Intervalo, puedes dar una buena idea a un aliado Cercano: este aliado obtendrá una bonificación igual a tu Nivel a la próxima tirada que realice y esté relacionada con tu consejo.",
    "A pesar de la desgracia que asoló a tu especie, los tuyos conservan una buena reputación. Siempre que visites una tienda por primera vez, tienes un 50% de recibir un descuento en las compras que hagas, simplemente por ser un gamelio.",
  ]
};
/* ------------------------------------------------------- */
/* Poderes								                                 */
/* ------------------------------------------------------- */
var powersEe = {
  nombre: [
    // Estrellas Errantes
    "Ataque mental",                        // #000
    "Atormentar",                           // #001
    "Bloqueo",                              // #002
    "Bloqueo masivo",                       // #003
    "Campo vital",                          // #004
    "Ceder energía",                        // #005
    "Celeridad",                            // #006
    "Choque sináptico",                     // #007
    "Conexión telepática",                  // #008
    "Control mental",                       // #009
    "Eliminar enfermedades",                // #010
    "Empujón",                              // #011
    "Enfriar",                              // #012
    "Espectro",                             // #013
    "Guía",                                 // #014
    "Invisibilidad",                        // #015
    "Intangibilidad",                       // #016
    "Leer pensamientos",                    // #017
    "Mover objeto",                         // #018
    "Presentir",                            // #019
    "Restablecer",                          // #020
    "Resucitar",                            // #021
    "Sanar",                                // #022
    "Silencio",                             // #023
    "Sintonizarse con el salto",            // #024
    "Telepatía",                            // #025
    // Más allá de las Errantes (Clérigo cósmico)
    "Detectar esencia",                     // #026
    "Onda de paz",                          // #027
    "Onda de ira",                          // #028
    "Sanar",                                // #029
    "Absorción vital",                      // #030
    "Protección divina",                    // #031
    "Rayo oscuro",                          // #032
    "Resucitar",                            // #033
    "Aniquilar",                            // #034
    // Más allá de las Errantes (Skalding)
    "Aceleración metabólica",               // #035
    "Llamaradas de Opsio",                  // #036
  ],
  info: [
    // Estrellas Errantes
    "Realizas una prueba de PSI para atacar a tu objetivo, que le causa 1d6 PS, ignorando su Defensa.",
    "Realizas una prueba de PSI para atacar a tu objetivo, causándole miedo durante 1d6 asaltos.",
    "Paraliza a un objetivo Inmediato o Cercano. Requiere mantenimiento.",
    "Paraliza 1d6 objetivos Inmediatos o Cercanos. Requiere mantenimiento.",
    "Obtienes durante 1d6 intervalos una Defensa invisible de 4.",
    "Restableces el Dado de Uso de una célula de energía a su valor original.",
    "Te permite desplazarte a un lugar Lejano sin perder tu acción o a un lugar Distante utilizando sólo dos turnos. Dura 1d4 turnos. Instantáneo.",
    "Realizas una prueba de PSI para atacar a tu objetivo, que le causa 2d4 PS, ignorando su Defensa.",
    "Establece una conexión telepática entre cualquier número de objetivos amistosos no Distantes. Dura 2d6 intervalos.",
    "Puedes controlar los actos de un objetivo inteligente Inmediato o Cercano. Requiere mantenimiento.",
    "Eliminas una enfermedad de un objetivo Cercano.",
    "Empujas místicamente a un objetivo Inmediato a un lugar Lejano.",
    "Puedes sacar calor de un objeto, haciendo que su temperatura descienda hasta congelarse.",
    "En combate estelar, tras las acciones de Artillería, puedes utilizar este poder para hacer que la nave en la que vas se vuelva invisible e irrastreable —por lo que dejará de estar fijada como objetivo— hasta el inicio del próximo asalto.",
    "Descubres la ruta más rápida o segura hacia una localización escogida que puedas seguir en 2d6 intervalos.",
    "Puedes volverte invisible durante 1d4 intervalos o hasta que ataques a alguien.",
    "Puedes volverte intangible durante 1d4 turnos. Durante este tiempo no puedes recibir daño físico y puedes traspasar barreras sin problemas.",
    "Lees la mente de un objetivo Inmediato o Cercano, lo que te otorga ventaja en las pruebas de  COM relacionadas con él.",
    "Puedes mover con la mente un objeto Inmediato o Cercano de hasta 30 kg y enviarlo a un lugar Lejano. Si impactas con él a un enemigo, causas 1d8 PS.",
    "Si lo activas, durante los próximos 2d6 intervalos puedes sentir que algo va mal cuando hay un engaño o  peligro Inmediato o Cercano para ti o para tus aliados. Instantáneo.",
    "Cura 3d6 PS a un aliado Inmediato o Cercano.",
    "Devuelve a la vida a alguien Inmediato o Cercano. Además del coste en puntos de Poder, debes realizar un sacrificio de algo importante para ti.",
    "Cura 1d8 PS a un aliado Inmediato o Cercano.",
    "Una esfera invisible de silencio cubre todo lo Cercano a un objetivo durante 1d6 intervalos. Instantáneo.",
    "Cuando alguien en tu nave va a hacer una prueba de Cálculo para realizar un salto forzado, puedes utilizar este poder para otorgarle ventaja.",
    "Durante un intervalo puedes comunicarte telepáticamente con un objetivo Inmediato, Cercano o Lejano.",
    // Más allá de las Errantes
    "Un clérigo puede realizar una prueba de PSI para detectar en un radio cercano presencias o energías, su intensidad y la naturaleza de la misma.",
    "Superando una prueba de PSI puede emitir una onda de energía positiva en un alcance Cercano, dentro de la cual, todos los aliados, incluido el clérigo, eliminarán cualquier estado alterado.",
    "Superando una prueba de PSI puede emitir una onda de fuerza negativa en un alcance Cercano. Todos los enemigos recibirán 1d6 puntos de Daño, ignorando Defensa, y adquirirán un estado alterado de aturdimiento durante 1d4 turnos, en el que obtendrán desventaja en todas las pruebas de atributo que realicen.",
    "Puede curar 1d8 PS o eliminar el efecto de algún veneno o enfermedad de un aliado Inmediato o Cercano, o a sí mismo. La simple curación de PS no requiere de superar prueba alguna, pero para eliminar venenos o enfermedades se requerirá una tirada de PSI. El GE podrá añadir dificultad a la tirada cuanto más grave sea el mal a eliminar.",
    "Se puede elegir un objetivo que esté en un alcance inmediato, y sobre el cual se lanzará un ataque místico que absorberá su energía vital. Se realizará una tirada de PSI y si el ataque tiene éxito el sujeto impactado sufrirá 1d6 puntos de Daño, que no podrán explotar e ignorarán la Defensa. El daño realizado será devuelto en forma de PS al clérigo de manera instantánea.",
    "A partir de nivel 3, una vez al día, un clérigo puede imbuirse de una energía mágica que lo protegerá hasta su próximo descanso, o su Defensa alcance O. Bajo esta protección su Defensa aumentará en uno por cada nivel del PJ, ningún daño recibido podrá ignorarla, y se obtendrá inmunidad sobre cualquier estado alterado cuyo origen sea mental, místico, químico u orgánico.",
    "A partir de nivel 3 con una tirada de PSI el clérigo podrá lanzar unos rayos místicos de energía oscura sobre un rival hasta una distancia cercana, ocasionándole 1d8 puntos de daño e ignorando la Defensa. A nivel 4 el daño será de 1d10 y a nivel 5 de 1d12.",
    "A partir de nivel 5 si una criatura lleva muerta un tiempo relativamente corto o su cuerpo aún está en ciertas buenas condiciones, con una tirada de PSI el clérigo podrá volverla a traer a la vida. La dificultad dependerá del estado del cuerpo, y sólo se podrá realizar una vez por muerte. Si se tiene éxito la criatura revivirá con 1d4 PS iniciales.",
    "A partir de nivel 5 un clérigo es capaz de utilizar uno de los poderes más temidos de universo. Tras elegir a un enemigo Cercano, realizará una prueba de PSI.  Si el clérigo supera esta prueba, la víctima entrará en un estado alterado de agonía y dolor, en el que su organismo, ya sea biológico o artificial, se estará destrozando por dentro. El objetivo, además de estar paralizado, durante el asalto del clérigo perderá de manera automática 1d8 PS, ignorando Defensa. <br /><br />El clérigo deberá gastar su acción cada asalto concentrándose, si quiere mantener este poder activo, aunque sin coste alguno de puntos de Poder. Este poder podrá ser interrumpido voluntariamente en cualquier momento por parte del clérigo. Aunque también puede ser interrumpido de manera involuntaria si durante su concentración es dañado por cualquier medio o atacado con éxito. Además, hay que tener en cuenta que otros poderes o talentos también podrán interrumpir o parar este letal estado alterado.",
    // Más allá de las Errantes (Skalding)
    "El organismo puede quemar opsio para acelerar su funcionamiento. Puede usarlo de manera automática para una de las siguientes acciones: <ul><li>Ganar +1 a la tirada de iniciativa</li><li>Recorrer el doble de distancia en un turno</li><li>Ganar +2 en una tirada de BIO para evitar un ataque.</li><li>Realizar una acción adicional en un turno. Si esta acción adicional se trata de una acción de ataque, sólo se realizará uno pese a que pudiera realizar dos por llevar dos armas ligeras, o cualquier otra razón.</li></ul>",
    "El opsiófago es capaz de crear o lanzar fuego desde sus manos. Dependiendo de los PS que gaste podrá crear desde una pequeña llama y usar una mano como si fuera una antorcha durante un tiempo determinado o hasta convertirse en un lanzallamas humano para achicharrar a sus enemigos. En caso de usar este poder como arma será igual que usar un lanzallamas, por lo demás simplemente se requiere tener una mano libre y gastar una acción de ataque en ello. El daño será de 1d4 por cada PS gastado en el poder, pudiendo gastar hasta un máximo de 3.",
  ],
  coste: [
    // Estrellas Errantes
    1,
    1,
    1,
    4,
    1,
    1,
    1,
    3,
    4,
    2,
    3,
    1,
    1,
    3,
    2,
    2,
    2,
    1,
    1,
    1,
    4,
    14,
    1,
    2,
    2,
    2,
    // Más allá de las Errantes (Clérigo)
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    // Más allá de las Errantes (Skalding)
    2,
    "1-3",
  ],
  tipo: [
    // Estrellas Errantes
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    "Psiónica",
    // Más allá de las Errantes (Clérigo)
    "Clérigo",
    "Clérigo",
    "Clérigo",
    "Clérigo",
    "Clérigo",
    "Clérigo",
    "Clérigo",
    "Clérigo",
    "Clérigo",
    // Más allá de las Errantes (Skalding)
    "Skalding",
    "Skalding",
  ]
};
/* ------------------------------------------------------- */
/* Armas								                                   */
/* ------------------------------------------------------- */
var weaponsEe = {
  nombre: [
    "Sin armas",												// #000
    "Arma CaC ligera",									// #001
    "Arma CaC de una mano",							// #002
    "Arma CaC a dos manos",							// #003
    "Pistola",													// #004
    "Escopeta",													// #005
    "Rifle", 														// #006
    "Rifle de precisión",								// #007
    "Lanzallamas",											// #008
    "Cañón",														// #009
    "Granadas"													// #010
  ],
  info: [
    "El personaje va desarmado.",
    "Estas armas nunca pueden causar más de 5 puntos de daño. Si se tienen dos armas ligeras pueden realizarse dos ataques con cada acción de ataque, pero sus dados de daño no explotan.",
    "Estas armas son las más comunes.",
    "Cuando se ataca con una de estas armas se obtiene un penalizador de -2 a la prueba de BIO y un +2 al daño causado.",
    "Además de su uso normal, cuando se tienen dos de estas armas pueden realizarse dos ataques en lugar de uno, pero los dados de daño no explotan. Las pistolas pueden usarse también en alcance Inmediato.",
    "Sólo puede atacar a un objetivo Inmediato o Cercano. Si fallas la prueba de TEC de ataque, realizas igualmente tanto daño como tu nivel.",
    "Además de su uso normal, puede dispararse en ráfagas, en cuyo caso se realiza la prueba de TEC con ventaja. Sin embargo, se debe tirar dos veces el DU, en lugar de una.",
    "Además de su uso normal, puedes emplear un turno completo apuntando para superar automáticamente la prueba de TEC al próximo turno, causando 1d6 PS adicionales. Este arma no se puede utilizar sobre objetivos Inmediatos, pero sí sobre los Distantes.",
    "Este arma afecta a 1d4 enemigos Inmediatos o Cercanos. Superas automáticamente la prueba de TEC, pero reduces todo el daño causado a la mitad.",
    "Este arma impacta en un punto Lejano o Distante y afecta a 1d6 objetivos Cercanos a dicho punto. El daño de este armamento siempre es de 1d8 + 1d6, y no puede aumentar ni disminuir. Tampoco se puede disparar más de una vez por asalto.",
    "Las granadas se lanzan e impactan en un punto —Cercano o Lejano— si se supera una prueba de BIO. Afectan a 1d4 objetivos Cercanos. El daño que causa la explosión es 1d10 y no puede aumentar ni disminuir. Una vez usada, queda inservible."
  ],
  precio: [
    0,
    10,
    30,
    80,
    20,
    30,
    80,
    120,
    60,
    160,
    20
  ],
  du: [
    "",
    "",
    "",
    "",
    "1d8",
    "1d6",
    "1d10",
    "1d6",
    "1d6",
    "1d8",
    "",
  ]
};
/* ------------------------------------------------------- */
/* Protecciones					                                   */
/* ------------------------------------------------------- */
var armorsEe = {
  nombre: [
    "Ninguna",	// #000
    "Ligera",		// #001
    "Media",		// #002
    "Pesada"		// #003
  ],
  precio: [
    0,
    30,
    80,
    160
  ],
  defensa: [
    0,
    2,
    4,
    8
  ],
  mejoras: [
    0,
    0,
    2,
    4
  ],
};
/* ------------------------------------------------------- */
/* Mejoras de armadura	                                   */
/* ------------------------------------------------------- */
var upgradesEe = {
  nombre: [
    "Binoculares", 									// #000
    "Campo de fuerza", 							// #001
    "Dispositivo de comunicación", 	// #002
    "Dispositivo de iluminación", 	// #003
    "Escudo de fuerza", 						// #004
    "Propulsores", 									// #005
    "Refuerzo de seguridad", 				// #006
    "Sistema de puntería mejorada", // #007
    "Sistema médico" 								// #008
  ],
  info: [
    "Te permite ver con claridad objetivos Distantes y en la oscuridad.",
    "Se activa durante un intervalo sin requerir acción. Añade 4 a tu Defensa. Requiere célula de energía.",
    "Te permite comunicarte con otros dispositivos de comunicación cuya ID se conozca y que se encuentren en un radio de un megaklick.",
    "Se activa durante un intervalo sin requerir acción. Ilumina con luz blanquecina en un radio Cercano. Requiere célula de energía.",
    "Se activa durante un intervalo sin requerir acción. Añade 2 a tu Defensa. Requiere célula de energía.",
    "Se activa durante un intervalo sin requerir acción. Te permite volar en entornos con gravedad, o moverte con rapidez y precisión en entornos sin ella. Requiere célula de energía.",
    "Mientras tu Defensa no llegue a cero, las tiradas de daño de tus enemigos nunca pueden explotar.",
    "Te otorga +1 a tus pruebas de TEC para disparar con armas a distancia.",
    "Se activa automáticamente cuando recibes daño directo a la Salud, restableciendo automáticamente 1d4 PS. Requiere célula de energía."
  ],
  precio: [
    20,
    55,
    15,
    20,
    40,
    65,
    30,
    70,
    80
  ]
};
/* ------------------------------------------------------- */
/* Implantes						                                   */
/* ------------------------------------------------------- */
var implantsEe = {
  nombre: [
    "Ciberbrazo",										// #000
    "Ciberoídos",										// #001
    "Ciberojos",										// #002
    "Ciberpierna",									// #003
    "Conexión táctil",							// #004
    "Dispositivo de comunicación",	// #005
    "Interfaz neuronal",						// #006
    "Nervios sintéticos",						// #007
    "Piel sintética",								// #008
    "Puerto de entrada",						// #009
    "Traductor universal"						// #010
  ],
  info: [
    "Sustituye tu brazo por un elemento cibernético mejorado que te otorga +2 a las pruebas de BIO para atacar cuerpo a cuerpo o al aplicar fuerza para empujar, sujetar o romper algo.",
    "Te permite grabar, encriptar, amplificar, silenciar y analizar los sonidos concretos que percibes. Requiere interfaz neuronal.",
    "Te permite grabar, encriptar, ampliar y analizar las imágenes que percibes. Requiere interfaz neuronal.",
    "Sustituye tu pierna por un elemento cibernético mejorado que te otorga +2 a las pruebas de BIO cuando corres, saltas, nadas o realizas alguna otra tarea de atletismo.",
    "Prepara la palma de tu mano para conectar tu interfaz neuronal directamente a una terminal o dispositivo tecnológico, otorgándote +1 a las tiradas de TEC que tengan que ver con su empleo habitual. Requiere interfaz neuronal.",
    "Te permite comunicarte con otros dispositivos de comunicación cuya ID se conozca y que se encuentren en un radio de un megaklick. Requiere interfaz neuronal.",
    "Convierte tus impulsos cerebrales al lenguaje digital, permitiéndote gestionar otros implantes. Aumenta tu capacidad de cálculo y análisis hasta un nivel impresionante, otorgándote un +2 al PSI cuando quieres investigar o descubrir peligros.",
    "Obtienes un +2 a las pruebas de BIO cuando intentas evitar que te impacte un ataque o un peligro.",
    "Bajo tu piel hay una fina capa de armadura sintética que te ofrece +2 Defensa.",
    "Permite introducir en tu cuerpo dispositivos de almacenamiento portátiles con información. Requiere interfaz neuronal.",
    "Te permite traducir al vuelo cualquier idioma, lo que significa que eres capaz de entender y expresarte en dicha lengua como si fueras nativo. Requiere interfaz neuronal.",
  ],
  requisitos: [
    null,
    6,
    6,
    null,
    6,
    6,
    null,
    null,
    null,
    6,
    6
  ],
  precio: [
    200,
    70,
    80,
    200,
    20,
    10,
    50,
    90,
    60,
    5,
    40
  ]
};
/* ------------------------------------------------------- */
/* Equipo común					                                   */
/* ------------------------------------------------------- */
var itemsEe = {
  nombre: [
    "Alimento",															// #000
    "Célula de energía",										// #001
    "Credstick",														// #002
    "Cuerda",																// #003
    "Herramientas de trabajo",							// #004
    "Kit médico",														// #005
    "Linterna",															// #006
    "Nanomemoria",													// #007
    "Ordenador portátil",										// #008
    "Ropas comunes",												// #009
    "Ropas de lujo",												// #010
    "Saco de dormir",												// #011
    "Traje espacial",												// #012
    "Herramienta para reparar androides",		// #013
    "Vaina energética"											// #014
  ],
  info: [
    "El alimento necesario para subsistir. Si no se toma una vez al día, provoca desventaja en todas las pruebas.",
    "Sirve para potenciar elementos que necesitan recargarse.",
    "Es el dispositivo personal encriptado donde se guardan los Créditos.",
    "10 metros de cuerda.",
    "A escoger, según el trabajo para el que se destinen.",
    "Permite recuperar 1d6 PS cuando se aplica sobre un objetivo Inmediato.",
    "Para alumbrar en lugares Cercanos.",
    "Permite guardar y transmitir datos.",
    "Equipo informático pequeño y ligero que permite, entre otras cosas, comunicarse con otros dispositivos de comunicación cuya ID se conozca y que se encuentren en un radio de un megaklick. Requiere célula de energía.",
    "Con lo que vistes normalmente.",
    "Ropa impresionante que te otorga +1 a las pruebas de COM para tratar con otros.",
    "Objeto de conservación térmica que permite evitar el frío cuando se duerme.",
    "Traje que te permite subsistir en el vacío durante 24 horas.",
    "Un maletín repleto de micro-herramientas de alta tecnología que permiten reparar cualquier daño estructural de un autómata.",
    "Esta barra de plutonio liofilizado es combustible que los androides necesitan. Si no recargan sus baterías, sufrirán desventaja en todas las pruebas."
  ],
  precio: [
    2,
    5,
    5,
    2,
    15,
    50,
    5,
    20,
    80,
    20,
    200,
    40,
    120,
    100,
    5
  ],
  du: [
    "DU 1d8. ",
    "DU 1d8. ",
    "",
    "",
    "",
    "DU 1d6. ",
    "DU 1d6. ",
    "",
    "",
    "",
    "",
    "",
    "",
    "DU 1d6. ",
    "DU 1d8. "
  ]
};
/* ------------------------------------------------------- */
/* Módulos de expansión del Androide                       */
/* ------------------------------------------------------- */
var androidModules = {
  nombre: [
    "Arma retráctil",										// #000
    "Batería superflua",								// #001
    "Brazos hidráulicos",								// #002
    "Escudo auxiliar",									// #003
    "Estructura blindada",							// #004
    "Tejido sintético",									// #005
    "Matriz de análisis idiomático",		// #006
    "Placa de memoria reforzada",				// #007
    "Procesador bélico",								// #008
    "Radar calorífico",									// #009
    "Sensores capacitivos",							// #010
    "Sistema de autodestrucción",				// #011
    "Ultravisión"												// #012
  ],
  info: [
    "Posees un arma a una mano (cuerpo a cuerpo o a distancia) oculta en el interior de tu cuerpo, dónde prefieras. Puedes extraerla o guardarla sin gastar acción.",
    "Esta batería adicional te permite aguantar hasta 72 horas sin reiniciar tu sistema operativo.",
    "Tus extremidades superiores están potenciadas por un sistema de bombas hidráulicas. Tienes ventaja en las pruebas de BIO para cargar o mover pesos, y causas 1d10 de daño cuando atacas con ellos.",
    "Un campo de energía repulsora que te da +4 a Defensa cuando lo activas. Requiere una acción y dura tantos Intervalos como tu Nivel / 2.",
    "Tu valor de Defensa es igual a tu Nivel + 3, pero tienes Desventaja en las pruebas de BIO para correr, moverte sigilosamente o realizar tareas que requieran delicadeza.",
    "Estás recubierto por un pellejo que simula ser piel orgánica. También tienes cabello artificial, si así lo deseas. Este tejido te otorga un +1 a las pruebas de COM con miembros de la misma especie que representes.",
    "Eres capaz de hablar y entender cualquier idioma tras superar una prueba de PSI la primera vez que lo escuchas. No requiere acción.",
    "Tienes Ventaja en las pruebas de PSI para defenderte de ataques psiónicos.",
    "Puedes activar un procesador secundario preparado para el combate durante un Intervalo. Hacerlo te otorga Ventaja en las pruebas de TEC para disparar armas a distancia y en las de Artillería. Tras activarlo, no podrás volverlo a usar hasta que reinicies tu S.O. No requiere acción.",
    "Puedes gastar una acción y realizar una prueba de PSI para detectar a tantos organismos vivos Cercanos como tu nivel.",
    "Tienes Ventaja en todas las pruebas de PSI para detectar ruidos y movimientos.",
    "En tu interior escondes una poderosa bomba que puedes activar a voluntad. Necesitas 1 PS al menos para usar este Módulo. Requiere una acción; causa tantos d12 de daño como tu nivel a todas las criaturas Cercanas, aparte de la destrucción estructural.<br /><br />Después de activarlo, no podrás volver a ser reconstruido.",
    "Una lente mejorada tecnológicamente te permite ver en la completa oscuridad. Si superas una prueba de PSI con Desventaja, podrás ver (con ciertos límites) a través de las paredes."
  ]
};
/* ------------------------------------------------------- */
/* Contenido Homebrw 																			 */
/* ------------------------------------------------------- */
  // Clases no básicas.
  var homebrewClasses = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  // Razas que son Clases en realidad. Para no juntar un Gatónido Antrófito...
  var raceClasses = [6,7,9,10,20,21,22,23,24];
  // Objetos no básicos.
  var homebrewItems = [13,14];
  // Clases disponibles.
  var availableClasses = "ALL"; //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  // Añadir todas las Clases sin turra.
  if (availableClasses == "ALL") {
    availableClasses = [];
    for (var aC = 0; aC < playerClassEe.nombre.length; aC++) {
      availableClasses[aC] = aC;
    }
  };
  // Razas disponibles.
  var availableRaces = [4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  // Añadir todas las Razas sin turra.
  if (availableRaces == "ALL") {
    availableRaces = [];
    for (var aR = 0; aR < playerRacesEe.nombre.length; aR++) {
      availableRaces[aR] = aR;
    }
  };

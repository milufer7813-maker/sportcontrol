const isLocalPreview = location.protocol === "file:" || (["localhost", "127.0.0.1"].includes(location.hostname) && location.port !== "3000");
const API_BASE = isLocalPreview ? "http://localhost:3000/api" : "/api";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const members = [
  {id:1,name:"Camila Molina",email:"camila@example.com",routine:"Abdomen intermedio",progress:6,last:"Hace 2 días",status:"Atrasado",goal:"Mejorar resistencia",weight:70,target:65,age:30,height:1.68},
  {id:2,name:"Brayan Gonzales",email:"brayan@example.com",routine:"Brazo intermedio",progress:3,last:"Hace 3 días",status:"Atrasado",goal:"Tonificar brazos",weight:75,target:70,age:27,height:1.74},
  {id:3,name:"William Ramírez",email:"william@example.com",routine:"Pierna intermedio",progress:4,last:"Hace 6 días",status:"Atrasado",goal:"Ganar fuerza",weight:80,target:76,age:32,height:1.78},
  {id:4,name:"Daniela Álvarez",email:"daniela@example.com",routine:"Glúteo intermedio",progress:8,last:"Hace 1 día",status:"Atrasado",goal:"Fortalecer glúteos",weight:63,target:60,age:25,height:1.62},
  {id:5,name:"Patricia Hurtado",email:"patricia@example.com",routine:"Abdomen avanzado",progress:10,last:"Hace 1 día",status:"Atrasado",goal:"Mejorar resistencia",weight:68,target:64,age:29,height:1.65},
  {id:6,name:"Julián Díaz",email:"julian@example.com",routine:"Abdomen intermedio",progress:2,last:"Hace 4 días",status:"Al día",goal:"Crear hábito",weight:72,target:68,age:24,height:1.72},
  {id:7,name:"Marcos Pinzón",email:"marcos@example.com",routine:"Abdomen intermedio",progress:6,last:"Hace 5 días",status:"Al día",goal:"Ganar fuerza",weight:78,target:74,age:31,height:1.76},
  {id:8,name:"María Sánchez",email:"maria@example.com",routine:"Abdomen intermedio",progress:5,last:"Hace 2 días",status:"Al día",goal:"Tonificar brazos",weight:61,target:58,age:26,height:1.60},
  {id:9,name:"Laura Domínguez",email:"laura@example.com",routine:"Abdomen intermedio",progress:9,last:"Hace 1 día",status:"Al día",goal:"Mejorar resistencia",weight:64,target:60,age:28,height:1.66},
  {id:10,name:"Sara Rodríguez",email:"sara@example.com",routine:"Abdomen intermedio",progress:5,last:"Hace 1 día",status:"Al día",goal:"Crear hábito",weight:59,target:56,age:23,height:1.58}
];
const routines = [
  {id:1,name:"Glúteo intermedio",level:"Intermedio",duration:30,body:"Glúteos",days:0,exercises:[{id:1,name:"Squats",detail:"35 repeticiones"},{id:2,name:"Donkey kick",detail:"26 repeticiones (13 de cada lado)"},{id:3,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)"},{id:4,name:"Salto lateral",detail:"20 segundos"}],exerciseDays:{2:[{id:117,name:"Elevaciones traseras de pierna",detail:"36 repeticiones (18 de cada lado)",day:2},{id:118,name:"Zancada frontal",detail:"30 repeticiones (15 de cada lado)",day:2},{id:119,name:"Pile squat",detail:"35 repeticiones",day:2},{id:120,name:"Sentadilla en pared",detail:"22 segundos",day:2}],3:[{id:121,name:"Donkey kick",detail:"30 repeticiones (15 de cada lado)",day:3},{id:122,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)",day:3},{id:123,name:"Butt bridge",detail:"30 repeticiones",day:3},{id:124,name:"Salto lateral",detail:"25 segundos",day:3}],4:[{id:125,name:"Squats",detail:"35 repeticiones",day:4},{id:126,name:"Elevaciones traseras de pierna",detail:"36 repeticiones (18 de cada lado)",day:4},{id:127,name:"Zancada frontal",detail:"36 repeticiones (18 de cada lado)",day:4},{id:128,name:"Sentadilla con salto",detail:"35 repeticiones",day:4},{id:129,name:"Sentadilla en pared",detail:"25 segundos",day:4}],6:[{id:130,name:"Squats",detail:"30 repeticiones",day:6},{id:131,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:6},{id:132,name:"Butt bridge",detail:"40 repeticiones",day:6},{id:133,name:"Salto lateral",detail:"25 segundos",day:6}],7:[{id:134,name:"Elevaciones traseras de pierna",detail:"38 repeticiones (19 de cada lado)",day:7},{id:135,name:"Fire hydrant",detail:"40 repeticiones (20 de cada lado)",day:7},{id:136,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)",day:7},{id:137,name:"Sentadilla en pared",detail:"28 segundos",day:7}],8:[{id:138,name:"Pile squat",detail:"40 repeticiones",day:8},{id:139,name:"Sentadillas con salto",detail:"30 repeticiones",day:8},{id:140,name:"Estocada hacia atrás",detail:"40 repeticiones (20 de cada lado)",day:8},{id:141,name:"Sumo squat calf",detail:"40 repeticiones",day:8},{id:142,name:"Salto lateral",detail:"30 segundos",day:8}]}},
  {id:2,name:"Brazo intermedio",level:"Intermedio",duration:30,body:"Brazos",days:0,exercises:[{id:6,name:"Flexiones",detail:"8 repeticiones"},{id:7,name:"Tríceps en silla",detail:"20 repeticiones"},{id:8,name:"Rotación de brazo",detail:"25 repeticiones"},{id:76,name:"Escalada de montaña",detail:"16 repeticiones (8 de cada lado)"}],exerciseDays:{2:[{id:77,name:"Tríceps en silla",detail:"20 repeticiones",day:2},{id:78,name:"Cobras",detail:"13 repeticiones",day:2},{id:79,name:"Tríceps en suelo",detail:"12 repeticiones",day:2}],3:[{id:80,name:"Flexiones",detail:"10 repeticiones",day:3},{id:81,name:"Escalada de montaña",detail:"20 repeticiones",day:3},{id:82,name:"Cobras",detail:"14 repeticiones",day:3},{id:83,name:"Puñetazos",detail:"50 segundos",day:3}],4:[{id:84,name:"Tríceps en silla",detail:"20 repeticiones",day:4},{id:85,name:"Rotación de brazos",detail:"25 repeticiones",day:4},{id:86,name:"Flexiones",detail:"12 repeticiones",day:4}],6:[{id:87,name:"Flexiones",detail:"14 repeticiones",day:6},{id:88,name:"Tríceps en silla",detail:"20 repeticiones",day:6},{id:89,name:"Rotaciones de brazos",detail:"30 repeticiones",day:6},{id:90,name:"Tríceps en suelo",detail:"18 repeticiones",day:6}],7:[{id:91,name:"Escalada de montaña",detail:"30 repeticiones",day:7},{id:92,name:"Cobras",detail:"18 repeticiones",day:7},{id:93,name:"Puñetazos",detail:"1 minuto",day:7},{id:94,name:"Tríceps en suelo",detail:"18 repeticiones",day:7}],8:[{id:95,name:"Flexiones",detail:"16 repeticiones",day:8},{id:96,name:"Tríceps en silla",detail:"22 repeticiones",day:8},{id:97,name:"Rotaciones de brazos",detail:"40 repeticiones",day:8}],9:[{id:114,name:"Tablón",detail:"1 minuto",day:9},{id:115,name:"Escalada de montaña",detail:"36 repeticiones (18 de cada lado)",day:9},{id:116,name:"Tríceps en suelo",detail:"20 repeticiones",day:9}]}},
  {id:3,name:"Pierna intermedio",level:"Intermedio",duration:30,body:"Piernas",days:0,exercises:[{id:9,name:"Zancada cruzada",detail:"30 repeticiones (15 de cada lado)"},{id:10,name:"Levantamiento de piernas",detail:"40 repeticiones (20 de cada lado)"},{id:11,name:"Sentadilla búlgara",detail:"40 repeticiones (20 de cada lado)"},{id:12,name:"Sentadilla en pared",detail:"28 segundos"}],exerciseDays:{2:[{id:61,name:"Pile squat",detail:"35 repeticiones",day:2},{id:62,name:"Levantamiento de pierna",detail:"40 repeticiones (20 de cada lado)",day:2},{id:63,name:"Sentadillas en cuclillas",detail:"35 repeticiones",day:2},{id:64,name:"Sentadilla en pared",detail:"30 segundos",day:2}],3:[{id:65,name:"Zancada lateral",detail:"40 repeticiones (20 de cada lado)",day:3},{id:66,name:"Split squat",detail:"40 repeticiones (20 de cada lado)",day:3},{id:67,name:"Sentadilla en pared",detail:"32 segundos",day:3}],4:[{id:68,name:"Zancada cruzada",detail:"40 repeticiones (20 de cada lado)",day:4},{id:69,name:"Levantamiento de pierna",detail:"50 repeticiones (25 de cada lado)",day:4},{id:70,name:"Zancada frontal",detail:"40 repeticiones",day:4},{id:71,name:"Sentadilla en pared",detail:"35 segundos",day:4}],6:[{id:72,name:"Pile squat",detail:"40 repeticiones",day:6},{id:73,name:"Levantamiento de pierna",detail:"60 repeticiones (30 de cada lado)",day:6},{id:74,name:"Círculos con las piernas",detail:"60 repeticiones (30 de cada lado)",day:6},{id:75,name:"Sentadilla en pared",detail:"35 segundos",day:6}],7:[{id:98,name:"Levantamiento lateral de pierna",detail:"60 repeticiones (30 de cada lado)",day:7},{id:99,name:"Saltos tijera",detail:"50 segundos",day:7},{id:100,name:"Sentadilla búlgara",detail:"60 repeticiones (30 de cada lado)",day:7},{id:101,name:"Sentadilla en pared",detail:"38 segundos",day:7}],8:[{id:102,name:"Pile squat",detail:"40 repeticiones",day:8},{id:103,name:"Zancada lateral",detail:"40 repeticiones (20 de cada lado)",day:8},{id:104,name:"Saltos tijera",detail:"1 minuto",day:8},{id:105,name:"Split squat",detail:"60 repeticiones (30 de cada lado)",day:8},{id:106,name:"Sentadilla en pared",detail:"40 segundos",day:8}]}},
  {id:4,name:"Abdomen intermedio",level:"Intermedio",duration:30,body:"Abdomen",days:0,exercises:[{id:15,name:"Tablón",detail:"40 segundos"},{id:16,name:"Crunch abdominal",detail:"24 repeticiones"},{id:17,name:"Escalada de montaña",detail:"16 repeticiones (8 por lado)"},{id:18,name:"Crunch inverso",detail:"22 repeticiones"},{id:19,name:"Butt bridge",detail:"18 repeticiones"},{id:20,name:"Plancha lateral izquierda",detail:"20 segundos"},{id:21,name:"Plancha lateral derecha",detail:"20 segundos"}],exerciseDays:{2:[{id:22,name:"Tablón",detail:"45 segundos",day:2},{id:23,name:"Escalada de montaña",detail:"20 repeticiones (10 de cada lado)",day:2},{id:24,name:"Elevaciones de piernas",detail:"25 repeticiones",day:2},{id:25,name:"Toque al talón",detail:"20 repeticiones (10 de cada lado)",day:2},{id:26,name:"Crunch de brazos estirados",detail:"22 repeticiones",day:2},{id:27,name:"Tablón (serie final)",detail:"40 segundos",day:2}],3:[{id:28,name:"Crunch abdominal",detail:"22 repeticiones",day:3},{id:29,name:"Escalada de montaña",detail:"16 repeticiones (8 de cada lado)",day:3},{id:30,name:"Abdominales",detail:"24 repeticiones",day:3},{id:31,name:"Butt bridge",detail:"20 repeticiones",day:3},{id:32,name:"Toque de talón",detail:"16 repeticiones",day:3},{id:33,name:"Crunch de brazos estirados",detail:"24 repeticiones",day:3},{id:34,name:"Plancha lateral izquierda",detail:"20 segundos",day:3},{id:35,name:"Plancha lateral derecha",detail:"20 segundos",day:3}],4:[{id:36,name:"Crunch abdominal",detail:"26 repeticiones",day:4},{id:37,name:"Escalada de montaña",detail:"20 repeticiones (10 de cada lado)",day:4},{id:38,name:"Crunch inverso",detail:"24 repeticiones",day:4},{id:39,name:"Butt bridge",detail:"20 repeticiones",day:4},{id:40,name:"Elevaciones de piernas",detail:"25 repeticiones",day:4},{id:41,name:"Toque de talón",detail:"20 repeticiones (10 de cada lado)",day:4},{id:42,name:"Tablón",detail:"45 segundos",day:4}],5:[],6:[{id:43,name:"Crunch abdominal",detail:"28 repeticiones",day:6},{id:44,name:"Tablón",detail:"55 segundos",day:6},{id:45,name:"Escalada de montaña",detail:"20 repeticiones (10 de cada lado)",day:6},{id:46,name:"Butt bridge",detail:"15 repeticiones",day:6},{id:47,name:"Elevaciones de piernas",detail:"25 repeticiones",day:6},{id:48,name:"Plancha lateral derecha",detail:"25 segundos",day:6},{id:49,name:"Plancha lateral izquierda",detail:"25 segundos",day:6}],7:[{id:50,name:"Escalada de montaña",detail:"26 repeticiones (13 de cada lado)",day:7},{id:51,name:"Crunch inverso",detail:"24 repeticiones",day:7},{id:52,name:"Butt bridge",detail:"22 repeticiones",day:7},{id:53,name:"Crunch de bicicleta",detail:"22 repeticiones",day:7},{id:54,name:"Crunch de brazos estirados",detail:"26 repeticiones",day:7},{id:55,name:"Tablón",detail:"50 segundos",day:7}],8:[{id:56,name:"Tablón",detail:"1 minuto",day:8},{id:57,name:"Escalada de montaña",detail:"24 repeticiones (12 de cada lado)",day:8},{id:58,name:"Crunch inverso",detail:"26 repeticiones",day:8},{id:59,name:"Toque de talón",detail:"24 repeticiones (12 de cada lado)",day:8},{id:60,name:"Tablón (serie final)",detail:"50 segundos",day:8}],9:[{id:107,name:"Crunch abdominal",detail:"30 repeticiones",day:9},{id:108,name:"Escalada de montaña",detail:"26 repeticiones (13 de cada lado)",day:9},{id:109,name:"Abdominales",detail:"26 repeticiones",day:9},{id:110,name:"Elevaciones de piernas",detail:"30 repeticiones",day:9},{id:111,name:"Toque de talón",detail:"24 repeticiones (12 de cada lado)",day:9},{id:112,name:"Plancha lateral izquierda",detail:"30 segundos",day:9},{id:113,name:"Plancha lateral derecha",detail:"30 segundos",day:9}]}},

  {id:5,name:"Glúteo avanzado",level:"Avanzado",duration:30,body:"Glúteos",days:0,exercises:[{id:143,name:"Squats",detail:"40 repeticiones"},{id:144,name:"Froggy glute lifts",detail:"80 repeticiones (40 de cada lado)"},{id:145,name:"Pile squat",detail:"40 repeticiones"},{id:146,name:"Butt bridge",detail:"40 repeticiones"},{id:147,name:"Sentadilla en pared",detail:"20 segundos"}],exerciseDays:{2:[{id:148,name:"Elevaciones traseras de pierna",detail:"40 repeticiones (20 de cada lado)",day:2},{id:149,name:"Donkey kick",detail:"56 repeticiones (28 de cada lado)",day:2},{id:150,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:2},{id:151,name:"Sumo squat calf",detail:"40 repeticiones",day:2},{id:152,name:"Salto lateral",detail:"23 segundos",day:2}],3:[{id:153,name:"Fire hydrant",detail:"50 repeticiones (25 de cada lado)",day:3},{id:154,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)",day:3},{id:155,name:"Butt bridge",detail:"25 repeticiones",day:3},{id:156,name:"Plancha con pierna elevada",detail:"30 repeticiones (15 de cada lado)",day:3},{id:157,name:"Squat",detail:"20 repeticiones",day:3},{id:158,name:"Butt bridge",detail:"30 repeticiones",day:3},{id:159,name:"Sentadilla en pared",detail:"30 segundos",day:3}],4:[{id:160,name:"Squats",detail:"25 repeticiones",day:4},{id:161,name:"Zancada frontal",detail:"26 repeticiones (13 de cada lado)",day:4},{id:162,name:"Salto lateral",detail:"25 segundos",day:4},{id:163,name:"Pile squat",detail:"30 repeticiones",day:4},{id:164,name:"Zancada cruzada",detail:"26 repeticiones (13 de cada lado)",day:4},{id:165,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:4},{id:166,name:"Levantamiento lateral de pierna",detail:"50 repeticiones (25 de cada lado)",day:4},{id:167,name:"Saltos laterales",detail:"25 repeticiones",day:4}],5:[{id:168,name:"Sentadillas con salto",detail:"30 repeticiones (15 de cada lado)",day:5},{id:169,name:"Estocada hacia atrás",detail:"30 repeticiones (15 de cada lado)",day:5},{id:170,name:"Split squat",detail:"60 repeticiones (30 de cada lado)",day:5},{id:171,name:"Puente de cadera con elevación de pierna",detail:"60 repeticiones (30 de cada lado)",day:5},{id:172,name:"Sentadilla en pared",detail:"28 segundos",day:5}],6:[{id:173,name:"Squat",detail:"60 repeticiones",day:6},{id:174,name:"Donkey kick",detail:"60 repeticiones (30 de cada lado)",day:6},{id:175,name:"Fire hydrant",detail:"60 repeticiones (30 de cada lado)",day:6},{id:176,name:"Butt bridge",detail:"30 repeticiones",day:6},{id:177,name:"Salto lateral",detail:"30 segundos",day:6}],7:[],8:[{id:178,name:"Donkey kick",detail:"40 repeticiones (20 de cada lado)",day:8},{id:179,name:"Estocada hacia atrás",detail:"28 repeticiones (14 de cada lado)",day:8},{id:180,name:"Froggy glute lifts",detail:"40 repeticiones (20 de cada lado)",day:8},{id:181,name:"Fire hydrant",detail:"56 repeticiones (28 de cada lado)",day:8},{id:182,name:"Butt bridge",detail:"40 repeticiones",day:8},{id:183,name:"Sentadilla en pared",detail:"30 segundos",day:8}],9:[{id:184,name:"Squats",detail:"30 repeticiones",day:9},{id:185,name:"Fire hydrant",detail:"56 repeticiones (28 de cada lado)",day:9},{id:186,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:9},{id:187,name:"Salto lateral",detail:"28 segundos",day:9},{id:188,name:"Pile squat",detail:"28 repeticiones",day:9},{id:189,name:"Plancha con pierna elevada",detail:"36 repeticiones (18 de cada lado)",day:9},{id:190,name:"Levantamiento lateral de pierna",detail:"56 repeticiones (28 de cada lado)",day:9},{id:191,name:"Salto lateral",detail:"30 segundos",day:9}],10:[{id:192,name:"Estocada hacia atrás",detail:"30 repeticiones (15 de cada lado)",day:10},{id:193,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)",day:10},{id:194,name:"Split squat",detail:"60 repeticiones (30 de cada lado)",day:10},{id:195,name:"Butt bridge",detail:"30 repeticiones",day:10},{id:196,name:"Saltos tijera",detail:"30 segundos",day:10},{id:197,name:"Sumo squat calf",detail:"30 repeticiones",day:10},{id:198,name:"Puente de cadera con elevación",detail:"60 repeticiones (30 de cada lado)",day:10},{id:199,name:"Sentadilla en pared",detail:"34 segundos",day:10}],11:[{id:200,name:"Squats",detail:"35 repeticiones",day:11},{id:201,name:"Donkey kick",detail:"60 repeticiones (30 de cada lado)",day:11},{id:202,name:"Sentadilla con salto",detail:"35 repeticiones",day:11},{id:203,name:"Fire hydrant",detail:"60 repeticiones (30 de cada lado)",day:11},{id:204,name:"Zancada frontal",detail:"36 repeticiones (18 de cada lado)",day:11},{id:205,name:"Elevaciones traseras de pierna",detail:"60 repeticiones (30 de cada lado)",day:11},{id:206,name:"Salto lateral",detail:"36 segundos",day:11}],12:[{id:207,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:12},{id:208,name:"Estocada hacia atrás",detail:"30 repeticiones (15 de cada lado)",day:12},{id:209,name:"Salto lateral",detail:"30 segundos",day:12},{id:210,name:"Sentadillas con elevación de pierna",detail:"30 repeticiones (15 de cada lado)",day:12},{id:211,name:"Sentadilla en pared",detail:"36 segundos",day:12}],13:[{id:212,name:"Sentadillas con salto",detail:"35 repeticiones",day:13},{id:213,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)",day:13},{id:214,name:"Zancada frontal",detail:"36 repeticiones (18 de cada lado)",day:13},{id:215,name:"Pile squat",detail:"35 repeticiones",day:13},{id:216,name:"Zancada cruzada",detail:"36 repeticiones (18 de cada lado)",day:13},{id:217,name:"Plancha con pierna elevada",detail:"36 repeticiones (18 de cada lado)",day:13},{id:218,name:"Sumo squat calf",detail:"35 repeticiones",day:13},{id:219,name:"Elevaciones traseras de pierna",detail:"60 repeticiones (30 de cada lado)",day:13},{id:220,name:"Salto lateral",detail:"36 segundos",day:13}],14:[],15:[{id:221,name:"Squats",detail:"35 repeticiones",day:15},{id:222,name:"Donkey kick",detail:"60 repeticiones (30 de cada lado)",day:15},{id:223,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:15},{id:224,name:"Split squat",detail:"40 repeticiones (20 de cada lado)",day:15},{id:225,name:"Butt bridge",detail:"25 repeticiones",day:15},{id:226,name:"Puente de cadera con elevación",detail:"80 repeticiones (40 de cada lado)",day:15},{id:227,name:"Sentadilla en pared",detail:"36 segundos",day:15}],16:[{id:228,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:16},{id:229,name:"Estocada hacia atrás",detail:"36 repeticiones (18 de cada lado)",day:16},{id:230,name:"Salto lateral",detail:"35 segundos",day:16},{id:231,name:"Pile squat",detail:"40 repeticiones",day:16},{id:232,name:"Plancha con pierna elevada",detail:"30 repeticiones (15 de cada lado)",day:16},{id:233,name:"Sumo squat calf",detail:"40 repeticiones",day:16},{id:234,name:"Sentadillas con salto",detail:"40 repeticiones",day:16},{id:235,name:"Sentadillas con elevación de pierna",detail:"40 repeticiones (20 de cada lado)",day:16},{id:236,name:"Salto lateral",detail:"38 segundos",day:16}],17:[{id:237,name:"Donkey kick",detail:"40 repeticiones (20 de cada lado)",day:17},{id:238,name:"Sentadillas con salto",detail:"40 repeticiones",day:17},{id:239,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:17},{id:240,name:"Split squat",detail:"36 repeticiones (18 de cada lado)",day:17},{id:241,name:"Zancada cruzada",detail:"40 repeticiones (20 de cada lado)",day:17},{id:242,name:"Butt bridge",detail:"35 repeticiones",day:17},{id:243,name:"Sentadilla en pared",detail:"40 segundos",day:17}],18:[{id:244,name:"Squats",detail:"35 repeticiones",day:18},{id:245,name:"Fire hydrant",detail:"60 repeticiones (30 de cada lado)",day:18},{id:246,name:"Froggy glute lifts",detail:"30 repeticiones (15 de cada lado)",day:18},{id:247,name:"Butt bridge",detail:"30 repeticiones",day:18},{id:248,name:"Plancha con pierna elevada",detail:"30 repeticiones (15 de cada lado)",day:18},{id:249,name:"Sumo squat calf",detail:"30 repeticiones",day:18},{id:250,name:"Elevaciones traseras de pierna",detail:"60 repeticiones (30 de cada lado)",day:18},{id:251,name:"Sentadilla con salto",detail:"30 repeticiones",day:18},{id:252,name:"Puente de cadera con elevación de pierna",detail:"60 repeticiones (30 de cada lado)",day:18},{id:253,name:"Sentadillas con elevación de pierna",detail:"30 repeticiones (15 de cada lado)",day:18},{id:254,name:"Salto lateral",detail:"42 segundos",day:18}],19:[{id:557,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:19},{id:558,name:"Donkey kick",detail:"60 repeticiones (30 de cada lado)",day:19},{id:559,name:"Fire hydrant",detail:"60 repeticiones (30 de cada lado)",day:19},{id:560,name:"Salto lateral",detail:"35 segundos",day:19},{id:561,name:"Levantamiento de pierna lateral",detail:"60 repeticiones (30 de cada lado)",day:19},{id:562,name:"Butt bridge",detail:"30 repeticiones",day:19},{id:563,name:"Sentadilla en pared",detail:"44 segundos",day:19}],20:[{id:564,name:"Squats",detail:"40 repeticiones",day:20},{id:565,name:"Froggy glutes",detail:"30 repeticiones (15 de cada lado)",day:20},{id:566,name:"Zancada frontal",detail:"40 repeticiones",day:20},{id:567,name:"Split squat",detail:"60 repeticiones (30 de cada lado)",day:20},{id:568,name:"Butt bridge",detail:"30 repeticiones",day:20},{id:569,name:"Pile squat",detail:"35 repeticiones",day:20},{id:570,name:"Zancada cruzada",detail:"36 repeticiones (18 de cada lado)",day:20},{id:571,name:"Saltos",detail:"30 segundos",day:20},{id:572,name:"Elevaciones traseras de pierna",detail:"60 repeticiones (30 de cada lado)",day:20},{id:573,name:"Salto lateral",detail:"46 segundos",day:20}],22:[{id:574,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:22},{id:575,name:"Squats",detail:"40 repeticiones",day:22},{id:576,name:"Donkey kick",detail:"60 repeticiones (30 de cada lado)",day:22},{id:577,name:"Fire hydrant",detail:"80 repeticiones (40 de cada lado)",day:22},{id:578,name:"Plancha con pierna elevada",detail:"40 repeticiones (20 de cada lado)",day:22},{id:579,name:"Sumo squat calf",detail:"40 repeticiones",day:22},{id:580,name:"Levantamiento de pierna lateral",detail:"60 repeticiones (30 de cada lado)",day:22},{id:581,name:"Sentadillas con elevaciones de pierna",detail:"60 repeticiones (30 de cada lado)",day:22},{id:582,name:"Butt bridge",detail:"35 repeticiones",day:22},{id:583,name:"Sentadilla en pared",detail:"40 segundos",day:22}],23:[{id:584,name:"Estocada hacia atrás",detail:"40 repeticiones (20 de cada lado)",day:23},{id:585,name:"Froggy glutes",detail:"40 repeticiones (20 de cada lado)",day:23},{id:586,name:"Pile squat",detail:"40 repeticiones",day:23},{id:587,name:"Salto lateral",detail:"40 segundos",day:23}],24:[{id:588,name:"Squats",detail:"40 repeticiones",day:24},{id:589,name:"Donkey kick",detail:"80 repeticiones (40 de cada lado)",day:24},{id:590,name:"Sentadilla con salto",detail:"40 repeticiones",day:24},{id:591,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:24},{id:592,name:"Salto lateral",detail:"40 segundos",day:24},{id:593,name:"Elevaciones traseras de pierna",detail:"60 repeticiones (30 de cada lado)",day:24},{id:594,name:"Butt bridge",detail:"40 repeticiones",day:24},{id:595,name:"Sentadilla en pared",detail:"40 segundos",day:24}],25:[{id:596,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:25},{id:597,name:"Fire hydrant",detail:"80 repeticiones (40 de cada lado)",day:25},{id:598,name:"Estocada hacia atrás",detail:"40 repeticiones (20 de cada lado)",day:25},{id:599,name:"Split squat",detail:"80 repeticiones (40 de cada lado)",day:25},{id:600,name:"Butt bridge",detail:"40 repeticiones",day:25},{id:601,name:"Squats",detail:"30 repeticiones",day:25},{id:602,name:"Levantamiento de pierna",detail:"60 repeticiones (30 de cada lado)",day:25},{id:603,name:"Sentadillas con elevaciones de pierna",detail:"40 repeticiones (20 de cada lado)",day:25},{id:604,name:"Salto lateral",detail:"40 segundos",day:25}],26:[{id:605,name:"Donkey kick",detail:"40 repeticiones (20 de cada lado)",day:26},{id:606,name:"Sentadillas con salto",detail:"30 repeticiones",day:26},{id:607,name:"Froggy glutes",detail:"40 repeticiones",day:26},{id:608,name:"Salto lateral",detail:"40 segundos",day:26},{id:609,name:"Pile squat",detail:"40 repeticiones",day:26},{id:610,name:"Zancada cruzada",detail:"40 repeticiones",day:26},{id:611,name:"Plancha con pierna",detail:"40 repeticiones (20 de cada lado)",day:26},{id:612,name:"Sentadillas con salto",detail:"35 repeticiones",day:26},{id:613,name:"Butt bridge",detail:"40 repeticiones",day:26},{id:614,name:"Sentadilla en pared",detail:"50 segundos",day:26}],27:[{id:615,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:27},{id:616,name:"Squats",detail:"40 repeticiones",day:27},{id:617,name:"Fire hydrant",detail:"60 repeticiones (30 de cada lado)",day:27},{id:618,name:"Zancada frontal",detail:"36 repeticiones (18 de cada lado)",day:27},{id:619,name:"Split squat",detail:"80 repeticiones (40 de cada lado)",day:27},{id:620,name:"Levantamiento de pierna lateral",detail:"60 repeticiones (30 de cada lado)",day:27},{id:621,name:"Salto lateral",detail:"50 segundos",day:27}],29:[{id:622,name:"Squats",detail:"29 repeticiones",day:29},{id:623,name:"Donkey kick",detail:"60 repeticiones (30 de cada lado)",day:29},{id:624,name:"Sentadillas con salto",detail:"40 repeticiones",day:29},{id:625,name:"Froggy glutes",detail:"40 repeticiones",day:29},{id:626,name:"Zancada frontal",detail:"40 repeticiones (20 de cada lado)",day:29},{id:627,name:"Salto lateral",detail:"40 segundos",day:29},{id:628,name:"Elevaciones traseras de pierna",detail:"60 repeticiones (30 de cada lado)",day:29},{id:629,name:"Sentadilla en pared",detail:"50 segundos",day:29}],30:[{id:630,name:"Elevaciones traseras de pierna",detail:"50 repeticiones (25 de cada lado)",day:30},{id:631,name:"Fire hydrant",detail:"80 repeticiones (40 de cada lado)",day:30},{id:632,name:"Estocada hacia atrás",detail:"40 repeticiones (20 de cada lado)",day:30},{id:633,name:"Salto lateral",detail:"40 segundos",day:30},{id:634,name:"Split squat",detail:"80 repeticiones (40 de cada lado)",day:30},{id:635,name:"Plancha con pierna elevada",detail:"40 repeticiones",day:30},{id:636,name:"Sentadilla con elevación de pierna",detail:"40 repeticiones (20 de cada lado)",day:30},{id:637,name:"Butt bridge",detail:"30 segundos",day:30}]},restDays:[7,14,21,28]},
  {id:6,name:"Abdomen avanzado",level:"Avanzado",duration:30,body:"Abdomen",days:0,exercises:[{"id":255,"name":"Crunch abdominal","detail":"40 repeticiones"},{"id":256,"name":"Crunch de brazos estirados","detail":"40 repeticiones"},{"id":257,"name":"Twist ruso","detail":"50 repeticiones"},{"id":258,"name":"Tablón","detail":"40 segundos"}],exerciseDays:{"2":[{"id":259,"name":"Toque al talón","detail":"54 repeticiones (27 de cada lado)","day":2},{"id":260,"name":"Puente","detail":"30 segundos","day":2},{"id":261,"name":"Crunch inverso","detail":"40 repeticiones","day":2},{"id":262,"name":"Plancha lateral izquierda","detail":"30 segundos","day":2},{"id":263,"name":"Plancha lateral derecha","detail":"30 segundos","day":2}],"3":[{"id":264,"name":"Tablón","detail":"1 minuto","day":3},{"id":265,"name":"Elevaciones de pierna","detail":"60 repeticiones","day":3},{"id":266,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":3},{"id":267,"name":"Tablón (serie final)","detail":"30 segundos","day":3}],"4":[{"id":268,"name":"Crunch abdominal","detail":"40 repeticiones","day":4},{"id":269,"name":"Escalada de montaña","detail":"65 repeticiones (32 de cada lado)","day":4},{"id":270,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":4},{"id":271,"name":"Plancha lateral izquierda","detail":"35 segundos","day":4},{"id":272,"name":"Plancha lateral derecha","detail":"35 segundos","day":4}],"5":[{"id":273,"name":"Escalada de montaña","detail":"70 repeticiones (35 de cada lado)","day":5},{"id":274,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":5},{"id":275,"name":"Crunch inverso","detail":"40 repeticiones","day":5},{"id":276,"name":"Tablón","detail":"1 minuto","day":5}],"6":[{"id":277,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":6},{"id":278,"name":"Twist ruso","detail":"70 repeticiones","day":6},{"id":279,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":6},{"id":280,"name":"Plancha lateral derecha","detail":"35 segundos","day":6},{"id":281,"name":"Plancha lateral izquierda","detail":"35 segundos","day":6}],"7":[],"8":[{"id":282,"name":"Crunch abdominal","detail":"40 repeticiones","day":8},{"id":283,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":8},{"id":284,"name":"Elevaciones de pierna","detail":"50 repeticiones","day":8},{"id":285,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":8},{"id":286,"name":"Tablón","detail":"1 minuto","day":8}],"9":[{"id":287,"name":"Toque al talón","detail":"55 repeticiones (27 de cada lado)","day":9},{"id":288,"name":"Escalada de montaña","detail":"54 repeticiones","day":9},{"id":289,"name":"Crunch inverso","detail":"40 repeticiones","day":9},{"id":290,"name":"Puente a una pierna","detail":"54 repeticiones","day":9},{"id":291,"name":"Plancha lateral derecha","detail":"40 segundos","day":9},{"id":292,"name":"Plancha lateral izquierda","detail":"40 segundos","day":9}],"10":[{"id":293,"name":"Crunch abdominal","detail":"40 repeticiones","day":10},{"id":294,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":10},{"id":295,"name":"Tablón","detail":"1 minuto","day":10},{"id":296,"name":"Puente","detail":"1 minuto","day":10},{"id":297,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":10}],"11":[{"id":298,"name":"Escalada de montaña","detail":"60 repeticiones","day":11},{"id":299,"name":"Crunch inverso","detail":"40 repeticiones","day":11},{"id":300,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":11},{"id":301,"name":"Puente a una pierna","detail":"60 repeticiones (30 de cada lado)","day":11},{"id":302,"name":"Plancha lateral derecha","detail":"45 segundos","day":11},{"id":303,"name":"Plancha lateral izquierda","detail":"45 segundos","day":11}],"12":[{"id":304,"name":"Twist ruso","detail":"60 repeticiones (30 de cada lado)","day":12},{"id":305,"name":"Tablón","detail":"1 minuto","day":12},{"id":306,"name":"Crunch abdominal","detail":"40 repeticiones","day":12}],"13":[{"id":307,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":13},{"id":308,"name":"Puente","detail":"1 minuto 25 segundos","day":13},{"id":309,"name":"Crunch inverso","detail":"40 repeticiones","day":13},{"id":310,"name":"Plancha lateral izquierda","detail":"50 segundos","day":13},{"id":311,"name":"Plancha lateral derecha","detail":"50 segundos","day":13}],"14":[],"15":[{"id":312,"name":"Crunch abdominal","detail":"40 repeticiones","day":15},{"id":313,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":15},{"id":314,"name":"Tablón","detail":"1 minuto","day":15},{"id":315,"name":"Elevaciones de pierna","detail":"60 repeticiones","day":15},{"id":316,"name":"Puente a una pierna","detail":"60 repeticiones (30 de cada lado)","day":15}],"16":[{"id":317,"name":"Escalada de montaña","detail":"80 repeticiones (40 de cada lado)","day":16},{"id":318,"name":"Puente","detail":"1 minuto 40 segundos","day":16},{"id":319,"name":"Elevaciones de pierna","detail":"60 repeticiones","day":16},{"id":320,"name":"Crunch abdominal","detail":"40 repeticiones","day":16},{"id":321,"name":"Plancha lateral derecha","detail":"50 segundos","day":16},{"id":322,"name":"Plancha lateral izquierda","detail":"50 segundos","day":16}],"17":[{"id":323,"name":"Crunch abdominal","detail":"40 repeticiones","day":17},{"id":324,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":17},{"id":325,"name":"Tablón","detail":"1 minuto","day":17},{"id":326,"name":"Escalada de montaña","detail":"50 repeticiones (25 de cada lado)","day":17},{"id":327,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":17},{"id":328,"name":"Puente a una pierna","detail":"50 repeticiones (25 de cada lado)","day":17}],"18":[{"id":329,"name":"Crunch abdominal","detail":"40 repeticiones","day":18},{"id":330,"name":"Toque al talón","detail":"60 repeticiones (30 de cada lado)","day":18},{"id":331,"name":"Elevaciones de pierna","detail":"60 repeticiones","day":18},{"id":332,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":18},{"id":333,"name":"Plancha lateral derecha","detail":"1 minuto","day":18},{"id":334,"name":"Plancha lateral izquierda","detail":"1 minuto","day":18}],"19":[{"id":335,"name":"Tablón","detail":"1 minuto","day":19},{"id":336,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":19},{"id":337,"name":"Twist ruso","detail":"60 repeticiones (30 de cada lado)","day":19},{"id":338,"name":"Crunch inverso","detail":"40 repeticiones","day":19},{"id":339,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":19},{"id":340,"name":"Puente a una pierna","detail":"60 repeticiones (30 de cada lado)","day":19}],"20":[{"id":341,"name":"Crunch abdominal","detail":"40 repeticiones","day":20},{"id":342,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":20},{"id":343,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":20},{"id":344,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":20},{"id":345,"name":"Plancha lateral derecha","detail":"1 minuto","day":20},{"id":346,"name":"Plancha lateral izquierda","detail":"1 minuto","day":20}],"21":[],"22":[{"id":347,"name":"Crunch abdominal","detail":"40 repeticiones","day":22},{"id":348,"name":"Escalada de montaña","detail":"60 repeticiones","day":22},{"id":349,"name":"Toque al talón","detail":"60 repeticiones","day":22},{"id":350,"name":"Elevaciones de pierna","detail":"60 repeticiones (30 de cada lado)","day":22},{"id":351,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":22},{"id":352,"name":"Plancha lateral derecha","detail":"1 minuto","day":22},{"id":353,"name":"Plancha lateral izquierda","detail":"1 minuto","day":22}],"23":[{"id":354,"name":"Tablón","detail":"1 minuto","day":23},{"id":355,"name":"Twist ruso","detail":"80 repeticiones","day":23},{"id":356,"name":"Crunch abdominal","detail":"40 repeticiones","day":23}],"24":[{"id":357,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":24},{"id":358,"name":"Tablón","detail":"1 minuto","day":24},{"id":359,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":24},{"id":360,"name":"Puente","detail":"2 minutos 30 segundos","day":24},{"id":361,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":24}],"25":[{"id":362,"name":"Crunch abdominal","detail":"40 repeticiones","day":25},{"id":363,"name":"Toque al talón","detail":"80 repeticiones (40 de cada lado)","day":25},{"id":364,"name":"Elevaciones de pierna","detail":"80 repeticiones","day":25},{"id":365,"name":"Crunch inverso","detail":"40 repeticiones","day":25},{"id":366,"name":"Puente a una pierna","detail":"40 repeticiones (20 de cada lado)","day":25},{"id":367,"name":"Plancha lateral derecha","detail":"1 minuto","day":25},{"id":368,"name":"Plancha lateral izquierda","detail":"1 minuto","day":25}],"26":[{"id":369,"name":"Tablón","detail":"1 minuto","day":26},{"id":370,"name":"Escalada de montaña","detail":"50 repeticiones","day":26},{"id":371,"name":"Puente","detail":"1 minuto 20 segundos","day":26},{"id":372,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":26},{"id":373,"name":"Crunch inverso","detail":"40 repeticiones","day":26},{"id":374,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":26}],"27":[{"id":375,"name":"Escalada de montaña","detail":"60 repeticiones","day":27},{"id":376,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":27},{"id":377,"name":"Toque al talón","detail":"60 repeticiones (30 de cada lado)","day":27},{"id":378,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":27},{"id":379,"name":"Twist ruso","detail":"60 repeticiones (30 de cada lado)","day":27},{"id":380,"name":"Puente a una pierna","detail":"60 repeticiones (30 de cada lado)","day":27},{"id":381,"name":"Plancha lateral derecha","detail":"1 minuto","day":27},{"id":382,"name":"Plancha lateral izquierda","detail":"1 minuto","day":27}],"28":[],"29":[{"id":383,"name":"Crunch abdominal","detail":"40 repeticiones","day":29},{"id":384,"name":"Tablón","detail":"1 minuto","day":29},{"id":385,"name":"Escalada de montaña","detail":"40 repeticiones (20 de cada lado)","day":29},{"id":386,"name":"Twist ruso","detail":"60 repeticiones","day":29},{"id":387,"name":"Crunch inverso","detail":"40 repeticiones","day":29},{"id":388,"name":"Crunch de bicicleta","detail":"40 repeticiones","day":29}],"30":[{"id":389,"name":"Toque al talón","detail":"60 repeticiones (30 de cada lado)","day":30},{"id":390,"name":"Crunch de brazos estirados","detail":"40 repeticiones","day":30},{"id":391,"name":"Escalada de montaña","detail":"60 repeticiones (30 de cada lado)","day":30},{"id":392,"name":"Crunch de brazos cruzados","detail":"40 repeticiones","day":30},{"id":393,"name":"Twist ruso","detail":"60 repeticiones (30 de cada lado)","day":30},{"id":394,"name":"Puente a una pierna","detail":"60 repeticiones (30 de cada lado)","day":30},{"id":395,"name":"Plancha lateral derecha","detail":"1 minuto","day":30},{"id":396,"name":"Plancha lateral izquierda","detail":"1 minuto","day":30}]},restDays:[7,14,21,28]},
  {id:7,name:"Pierna avanzado",level:"Avanzado",duration:30,body:"Piernas",days:0,exercises:[{"id":397,"name":"Salto con rodilla estocada derecha","detail":"25 repeticiones"},{"id":398,"name":"Salto con rodilla estocada izquierda","detail":"25 repeticiones"},{"id":399,"name":"Sentadillas en cuclillas","detail":"40 repeticiones (20 por lado)"},{"id":400,"name":"Levantamiento de pierna lateral derecho","detail":"25 repeticiones"},{"id":401,"name":"Levantamiento de pierna lateral izquierdo","detail":"25 repeticiones"},{"id":402,"name":"Sentadilla en pared","detail":"25 segundos"}],exerciseDays:{"2":[{"id":403,"name":"Estocada con giro","detail":"40 repeticiones","day":2},{"id":404,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":2},{"id":405,"name":"Estocada inversa con patada derecha","detail":"30 repeticiones","day":2},{"id":406,"name":"Estocada inversa con patada izquierda","detail":"30 repeticiones","day":2},{"id":407,"name":"Círculos con la pierna derecha","detail":"30 repeticiones","day":2},{"id":408,"name":"Círculos con la pierna izquierda","detail":"30 repeticiones","day":2},{"id":409,"name":"Sentadilla en pared","detail":"30 segundos","day":2}],"3":[{"id":410,"name":"Sentadillas con giro","detail":"40 repeticiones","day":3},{"id":411,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":3},{"id":412,"name":"Zancada cruzada","detail":"40 repeticiones","day":3},{"id":413,"name":"Sentadilla búlgara derecha","detail":"35 repeticiones","day":3},{"id":414,"name":"Sentadilla búlgara izquierda","detail":"35 repeticiones","day":3},{"id":415,"name":"Sentadilla en pared","detail":"35 segundos","day":3}],"4":[{"id":416,"name":"Sumo squat calf","detail":"40 repeticiones","day":4},{"id":417,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":4},{"id":418,"name":"Levantamiento de pierna lateral derecho","detail":"40 repeticiones","day":4},{"id":419,"name":"Levantamiento de pierna lateral izquierdo","detail":"40 repeticiones","day":4},{"id":420,"name":"Levantamiento de pierna izquierda","detail":"35 repeticiones","day":4},{"id":421,"name":"Levantamiento de pierna derecha","detail":"35 repeticiones","day":4},{"id":422,"name":"Sentadilla en pared","detail":"40 segundos","day":4}],"5":[{"id":423,"name":"Salto con rodilla estocada","detail":"80 repeticiones (40 por lado)","day":5},{"id":424,"name":"Estocada con giro","detail":"40 repeticiones","day":5},{"id":425,"name":"Saltos tijera","detail":"1 minuto","day":5},{"id":426,"name":"Elevación de talón con una pierna","detail":"80 repeticiones (40 por lado)","day":5},{"id":427,"name":"Sentadilla en pared","detail":"45 segundos","day":5}],"6":[{"id":428,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":6},{"id":429,"name":"Sentadillas con giro","detail":"40 repeticiones","day":6},{"id":430,"name":"Estocada inversa con patada","detail":"80 repeticiones (40 por lado)","day":6},{"id":431,"name":"Pile squat","detail":"40 repeticiones","day":6},{"id":432,"name":"Sentadilla en pared","detail":"50 segundos","day":6}],"7":[],"8":[{"id":433,"name":"Sumo squat calf","detail":"40 repeticiones","day":8},{"id":434,"name":"Estocada con giro","detail":"40 repeticiones (20 por lado)","day":8},{"id":435,"name":"Split squat","detail":"50 repeticiones (25 por lado)","day":8},{"id":436,"name":"Levantamiento de pierna","detail":"50 repeticiones (25 por lado)","day":8},{"id":437,"name":"Sentadillas en cuclillas","detail":"40 repeticiones","day":8},{"id":438,"name":"Tablón","detail":"50 segundos","day":8}],"9":[{"id":439,"name":"Salto con rodilla estocada","detail":"60 repeticiones (30 por lado)","day":9},{"id":440,"name":"Zancada cruzada","detail":"40 repeticiones","day":9},{"id":441,"name":"Pile squat","detail":"40 repeticiones","day":9},{"id":442,"name":"Sentadilla búlgara","detail":"60 repeticiones (30 por lado)","day":9},{"id":443,"name":"Saltos tijera","detail":"50 segundos","day":9}],"10":[{"id":444,"name":"Sumo squat calf","detail":"40 repeticiones","day":10},{"id":445,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":10},{"id":446,"name":"Levantamiento de pierna","detail":"60 repeticiones (30 por lado)","day":10},{"id":447,"name":"Zancada frontal","detail":"40 repeticiones (20 por lado)","day":10},{"id":448,"name":"Sentadilla en pared","detail":"1 minuto","day":10}],"11":[{"id":449,"name":"Sentadillas con giro","detail":"40 repeticiones (20 por lado)","day":11},{"id":450,"name":"Sentadillas con elevación de pierna","detail":"80 repeticiones (40 por lado)","day":11},{"id":451,"name":"Círculos con las piernas","detail":"80 repeticiones (40 por lado)","day":11},{"id":452,"name":"Zancada lateral","detail":"40 repeticiones","day":11},{"id":453,"name":"Sentadilla en pared","detail":"1 minuto 10 segundos","day":11}],"12":[{"id":454,"name":"Levantamiento de pierna","detail":"80 repeticiones (40 por lado)","day":12},{"id":455,"name":"Sentadilla en pared","detail":"1 minuto 10 segundos","day":12}],"13":[{"id":456,"name":"Sumo squat calf","detail":"40 repeticiones","day":13},{"id":457,"name":"Pile squat","detail":"40 repeticiones","day":13},{"id":458,"name":"Círculos con las piernas","detail":"80 repeticiones (40 por lado)","day":13},{"id":459,"name":"Levantamiento de pierna","detail":"80 repeticiones (40 por lado)","day":13},{"id":460,"name":"Saltos tijera","detail":"1 minuto 10 segundos","day":13},{"id":461,"name":"Sentadilla en pared","detail":"1 minuto 15 segundos","day":13}],"14":[],"15":[{"id":462,"name":"Estocada con giro","detail":"40 repeticiones","day":15},{"id":463,"name":"Sentadillas con giro","detail":"40 repeticiones","day":15},{"id":464,"name":"Estocada inversa con patada","detail":"80 repeticiones (40 por lado)","day":15},{"id":465,"name":"Split squat","detail":"80 repeticiones (40 por lado)","day":15},{"id":466,"name":"Zancada lateral","detail":"40 repeticiones","day":15},{"id":467,"name":"Sentadilla en pared","detail":"1 minuto 15 segundos","day":15}],"16":[{"id":468,"name":"Salto con rodilla estocada","detail":"80 repeticiones (40 por lado)","day":16},{"id":469,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":16},{"id":470,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":16},{"id":471,"name":"Pile squat","detail":"40 repeticiones","day":16},{"id":472,"name":"Sentadilla búlgara","detail":"80 repeticiones (40 por lado)","day":16},{"id":473,"name":"Sentadilla en pared","detail":"1 minuto 20 segundos","day":16}],"17":[{"id":474,"name":"Estocada con giro","detail":"40 repeticiones (20 por lado)","day":17},{"id":475,"name":"Zancada cruzada","detail":"40 repeticiones (20 por lado)","day":17},{"id":476,"name":"Círculos con las piernas","detail":"60 repeticiones (30 por lado)","day":17},{"id":477,"name":"Levantamiento de pierna","detail":"60 repeticiones (30 por lado)","day":17},{"id":478,"name":"Zancada frontal","detail":"40 repeticiones","day":17},{"id":479,"name":"Sentadillas en cuclillas","detail":"40 repeticiones","day":17},{"id":480,"name":"Sentadilla en pared","detail":"1 minuto 22 segundos","day":17}],"18":[{"id":481,"name":"Sumo squat calf","detail":"40 repeticiones","day":18},{"id":482,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":18},{"id":483,"name":"Estocada inversa con patada","detail":"60 repeticiones (30 por lado)","day":18},{"id":484,"name":"Levantamiento de pierna lateral","detail":"60 repeticiones (30 por lado)","day":18},{"id":485,"name":"Split squat","detail":"60 repeticiones (30 por lado)","day":18},{"id":486,"name":"Saltos tijera","detail":"50 segundos","day":18},{"id":487,"name":"Sentadilla en pared","detail":"1 minuto 25 segundos","day":18}],"19":[{"id":488,"name":"Salto con rodilla estocada","detail":"60 repeticiones (30 por lado)","day":19},{"id":489,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":19},{"id":490,"name":"Sentadillas con giro","detail":"40 repeticiones (20 por lado)","day":19},{"id":491,"name":"Círculos con la pierna","detail":"60 repeticiones (30 por lado)","day":19},{"id":492,"name":"Levantamiento de pierna","detail":"60 repeticiones (30 por lado)","day":19},{"id":493,"name":"Zancada frontal","detail":"40 repeticiones (20 por lado)","day":19},{"id":494,"name":"Sentadilla en pared","detail":"1 minuto 35 segundos","day":19}],"20":[{"id":495,"name":"Estocada con giro","detail":"40 repeticiones (20 por lado)","day":20},{"id":496,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":20},{"id":497,"name":"Zancada cruzada","detail":"40 repeticiones (20 por lado)","day":20},{"id":498,"name":"Levantamiento de pierna lateral","detail":"40 repeticiones (20 por lado)","day":20},{"id":499,"name":"Sentadilla búlgara","detail":"40 repeticiones (20 por lado)","day":20},{"id":500,"name":"Saltos tijera","detail":"1 minuto","day":20},{"id":501,"name":"Sentadilla en pared","detail":"1 minuto 30 segundos","day":20}],"21":[],"22":[{"id":502,"name":"Sumo squat calf","detail":"40 repeticiones","day":22},{"id":503,"name":"Sentadillas con patada lateral","detail":"40 repeticiones (20 por lado)","day":22},{"id":504,"name":"Estocada inversa con patada","detail":"40 repeticiones (20 por lado)","day":22},{"id":505,"name":"Pile squat","detail":"40 repeticiones","day":22},{"id":506,"name":"Levantamiento de pierna","detail":"80 repeticiones (40 por lado)","day":22},{"id":507,"name":"Zancada frontal","detail":"40 repeticiones","day":22},{"id":508,"name":"Sentadilla en pared","detail":"1 minuto 35 segundos","day":22}],"23":[{"id":509,"name":"Levantamiento de pierna lateral","detail":"50 repeticiones (25 por lado)","day":23},{"id":510,"name":"Sentadillas traseras","detail":"50 repeticiones (25 por lado)","day":23},{"id":511,"name":"Sentadilla en pared","detail":"1 minuto 30 segundos","day":23}],"24":[{"id":512,"name":"Salto con rodilla estocada","detail":"80 repeticiones (40 por lado)","day":24},{"id":513,"name":"Estocada con giro","detail":"40 repeticiones (20 por lado)","day":24},{"id":514,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":24},{"id":515,"name":"Zancada cruzada","detail":"40 repeticiones","day":24},{"id":516,"name":"Split squat","detail":"80 repeticiones (40 por lado)","day":24},{"id":517,"name":"Zancada lateral","detail":"40 repeticiones","day":24},{"id":518,"name":"Sentadilla en pared","detail":"1 minuto 40 segundos","day":24}],"25":[{"id":519,"name":"Sumo squat calf","detail":"40 repeticiones","day":25},{"id":520,"name":"Sentadillas con patada lateral","detail":"40 repeticiones","day":25},{"id":521,"name":"Estocada inversa con patada","detail":"80 repeticiones (40 por lado)","day":25},{"id":522,"name":"Círculos con la pierna","detail":"50 repeticiones (25 por lado)","day":25},{"id":523,"name":"Sentadilla búlgara","detail":"80 repeticiones (40 por lado)","day":25},{"id":524,"name":"Zancada lateral","detail":"40 repeticiones","day":25},{"id":525,"name":"Sentadilla en pared","detail":"1 minuto 42 segundos","day":25}],"26":[{"id":526,"name":"Estocada con giro","detail":"40 repeticiones (20 por lado)","day":26},{"id":527,"name":"Sentadillas con giro","detail":"40 repeticiones (20 por lado)","day":26},{"id":528,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":26},{"id":529,"name":"Pile squat","detail":"40 repeticiones","day":26},{"id":530,"name":"Círculos con la pierna","detail":"60 repeticiones (30 por lado)","day":26},{"id":531,"name":"Levantamiento de pierna","detail":"60 repeticiones (30 por lado)","day":26},{"id":532,"name":"Saltos tijera","detail":"50 segundos","day":26},{"id":533,"name":"Elevación de talón con una pierna","detail":"30 repeticiones (15 por lado)","day":26},{"id":534,"name":"Sentadilla en pared","detail":"1 minuto 45 segundos","day":26}],"27":[{"id":535,"name":"Salto con rodilla estocada","detail":"40 repeticiones (20 por lado)","day":27},{"id":536,"name":"Sumo squat calf","detail":"40 repeticiones","day":27},{"id":537,"name":"Sentadillas con giro","detail":"40 repeticiones (20 por lado)","day":27},{"id":538,"name":"Levantamiento de pierna lateral","detail":"60 repeticiones (30 por lado)","day":27},{"id":539,"name":"Split squat","detail":"60 repeticiones (30 por lado)","day":27},{"id":540,"name":"Zancada lateral","detail":"40 repeticiones","day":27},{"id":541,"name":"Elevación de talón con una pierna","detail":"60 repeticiones (30 por lado)","day":27},{"id":542,"name":"Sentadilla en pared","detail":"1 minuto 48 segundos","day":27}],"28":[],"29":[{"id":543,"name":"Sumo squat calf","detail":"40 repeticiones","day":29},{"id":544,"name":"Sentadillas con elevación de pierna","detail":"40 repeticiones (20 por lado)","day":29},{"id":545,"name":"Levantamiento de pierna lateral","detail":"80 repeticiones (40 por lado)","day":29},{"id":546,"name":"Sentadilla búlgara","detail":"80 repeticiones (40 por lado)","day":29},{"id":547,"name":"Saltos tijera","detail":"1 minuto","day":29},{"id":548,"name":"Sentadillas en cuclillas","detail":"40 repeticiones","day":29},{"id":549,"name":"Sentadilla en pared","detail":"1 minuto 30 segundos","day":29}],"30":[{"id":550,"name":"Salto con rodilla estocada","detail":"80 repeticiones (40 por lado)","day":30},{"id":551,"name":"Estocada con giro","detail":"40 repeticiones (20 por lado)","day":30},{"id":552,"name":"Sentadillas con giro","detail":"40 repeticiones","day":30},{"id":553,"name":"Zancada cruzada","detail":"40 repeticiones","day":30},{"id":554,"name":"Pile squat","detail":"40 repeticiones","day":30},{"id":555,"name":"Levantamiento de pierna","detail":"80 repeticiones (40 por lado)","day":30},{"id":556,"name":"Sentadilla en pared","detail":"1 minuto 50 segundos","day":30}]},restDays:[7,14,21,28]},
  {id:8,name:"Brazo avanzado",level:"Avanzado",duration:30,body:"Brazos",days:0,exercises:[{id:638,name:"Rotación de brazos",detail:"30 repeticiones"},{id:639,name:"Escalada de montaña",detail:"36 repeticiones (18 de cada lado)"},{id:640,name:"Flexiones",detail:"20 repeticiones"},{id:641,name:"Tríceps en silla",detail:"20 repeticiones"},{id:642,name:"Tablón",detail:"50 segundos"}],exerciseDays:{2:[{id:643,name:"Elevaciones de brazo",detail:"35 segundos",day:2},{id:644,name:"Puñetazos",detail:"1 minuto",day:2},{id:645,name:"Cobras",detail:"30 repeticiones",day:2},{id:646,name:"Tablón",detail:"50 segundos",day:2}]},restDays:[]}
];
routines.forEach(routine => {
  if (routine.exercises?.length) routine.exerciseDays = { ...(routine.exerciseDays || {}), 1: routine.exercises.map(exercise => ({ ...exercise, day: 1 })) };
});
let currentView = "inicio";
let selectedMemberId = null;
let nextMemberId = 11;
let currentRole = "entrenador";
let toastTimer;
let workoutRecords = [];
let meals = [];
let timerId = null;
let timerRemaining = 30;
let timerElapsed = 0;
let activeTimerMode = null;
let activeTimerKey = null;
let editingExerciseId = null;
let selectedExerciseRoutineId = 1;
let selectedExerciseDay = 1;
let selectedRoutineDay = 1;

function notify(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}
function setRole(role) {
  currentRole = role;
  const isTrainer = role === "entrenador";
  $$(".trainer-only").forEach(el => el.classList.toggle("hidden", !isTrainer));
  $$(".personal-only").forEach(el => el.classList.toggle("hidden", isTrainer));
  $("#sidebarRole").textContent = isTrainer ? "Entrenador · Demo" : "Cuenta personal · Demo";
  $("#sidebarName").textContent = isTrainer ? "Andrés Rojas" : "Cuenta personal";
  $("#sidebarName").previousElementSibling.textContent = isTrainer ? "AR" : "SC";
  showView("inicio");
  renderAll();
}

function enterApp(role, name) {
  currentRole = role;
  $("#authScreen").classList.add("hidden");
  $(".app-shell").classList.remove("hidden");
  setRole(role);
  if (name && role === "personal") $("#sidebarName").textContent = name;
  loadAPIData();
}
function showView(view) {
  if (view === "miembros" || view === "nuevo-miembro" || view === "ficha" || view === "ejercicios") {
    if (currentRole !== "entrenador") { notify("Esta sección es para el área del entrenador."); return; }
  }
  if (["rutinas", "objetivos", "historial", "alimentacion"].includes(view)) {
    if (currentRole !== "personal") { notify("Cambia al área personal para ver esta sección."); return; }
  }
  currentView = view;
  $$(".view").forEach(section => section.classList.add("hidden"));
  const target = $(`#view-${view}`);
  if (target) target.classList.remove("hidden");
  $$(".nav-link").forEach(btn => {
    const active = btn.dataset.view === view || (view === "ficha" && btn.dataset.view === "miembros");
    btn.classList.toggle("active", active);
    if (active) btn.setAttribute("aria-current", "page"); else btn.removeAttribute("aria-current");
  });
  const titles = {inicio:"",miembros:"Miembros", "nuevo-miembro":"Registrar miembro",ficha:"Ficha del miembro",rutinas:"Mis rutinas",ejercicios:"Gestionar ejercicios",historial:"Entrenamientos",alimentacion:"Mi alimentación",objetivos:"Mis objetivos"};
  $("#pageTitle").textContent = titles[view] || "SPORT CONTROL";
  $("#sidebar").classList.remove("open");
  $("#menuBtn").setAttribute("aria-expanded", "false");
  if (view === "miembros") renderMembers();
  if (view === "inicio") renderDashboard();
  if (view === "historial") renderWorkoutHistory();
  if (view === "alimentacion") renderMeals();
  if (view === "ejercicios") renderExerciseManager();
}
function renderDashboard() {
  $("#statMembers").textContent = members.length;
  $("#statLate").textContent = members.filter(m => m.status === "Atrasado").length;
  $("#statToday").textContent = 3;
  $("#lateList").innerHTML = members.filter(m => m.status === "Atrasado").slice(0,4).map(m => `<div class="list-row"><div><strong>${escapeHTML(m.name)}</strong><small>${escapeHTML(m.routine)}</small></div><span class="status late">${m.last}</span></div>`).join("");
  $("#todayList").innerHTML = [
    {name:"Julián Díaz",routine:"Abdomen intermedio",progress:"4/30"},
    {name:"Marcos Pinzón",routine:"Abdomen intermedio",progress:"2/30"},
    {name:"María Sánchez",routine:"Abdomen intermedio",progress:"6/30"}
  ].map(m => `<div class="list-row"><div><strong>${escapeHTML(m.name)}</strong><small>${escapeHTML(m.routine)}</small></div><span class="pill pill-green">${m.progress}</span></div>`).join("");
}
function renderMembers() {
  const search = ($("#memberSearch")?.value || "").trim().toLocaleLowerCase("es");
  const status = $("#statusFilter")?.value || "todos";
  const filtered = members.filter(m => m.name.toLocaleLowerCase("es").includes(search) && (status === "todos" || m.status === status));
  $("#membersTable").innerHTML = filtered.map(m => `<tr><td><strong>${escapeHTML(m.name)}</strong><br><small>${escapeHTML(m.email)}</small></td><td>${escapeHTML(m.routine)}</td><td>${m.progress}/30</td><td>${escapeHTML(m.last)}</td><td><span class="status ${m.status === "Atrasado" ? "late" : "ok"}">${m.status === "Atrasado" ? "⚠ " : "✓ "}${m.status}</span></td><td><button class="text-button" data-member="${m.id}">Ver ficha</button></td></tr>`).join("");
  if (!filtered.length) $("#membersTable").innerHTML = '<tr><td colspan="6">No se encontraron miembros.</td></tr>';
}
function openMember(id) {
  const m = members.find(item => item.id === Number(id));
  if (!m) return;
  selectedMemberId = m.id;
  $("#memberDetail").innerHTML = `<div class="detail-grid">
    <article class="panel card-panel z-depth-1"><div class="detail-header"><div><p class="eyebrow">FICHA DE MIEMBRO</p><h2>${escapeHTML(m.name)}</h2><p>${escapeHTML(m.email)}</p></div><span class="status ${m.status === "Atrasado" ? "late" : "ok"}">${m.status}</span></div>
    <p class="eyebrow" style="margin-top:24px">RUTINA ACTUAL</p><h3>${escapeHTML(m.routine)} · 30 días</h3><p>Reto personal de entrenamiento</p>
    <div class="progress-track"><span style="width:${Math.min(m.progress/30*100,100)}%"></span></div><strong>Completado ${m.progress}/30 días</strong>
    <div class="detail-stat-grid"><div class="detail-stat"><small>Peso actual</small><strong>${m.weight} kg</strong></div><div class="detail-stat"><small>Peso deseado</small><strong>${m.target} kg</strong></div><div class="detail-stat"><small>Edad</small><strong>${m.age} años</strong></div><div class="detail-stat"><small>Estatura</small><strong>${m.height} m</strong></div></div></article>
    <article class="panel card-panel z-depth-1"><p class="eyebrow">OBJETIVOS</p><h3>${escapeHTML(m.goal || "Sin objetivo definido")}</h3><p style="color:var(--muted)">Último entrenamiento: ${escapeHTML(m.last)}</p><hr style="border:0;border-top:1px solid var(--line);margin:22px 0"><label class="form-grid" style="display:grid;grid-template-columns:1fr;gap:8px;font-weight:700">Asignar rutina<select id="assignRoutine">${routines.map(r=>`<option ${r.name.toLowerCase()===m.routine.toLowerCase()?"selected":""}>${escapeHTML(r.name)}</option>`).join("")}</select></label><button class="btn btn-primary" style="margin-top:14px" id="saveRoutine">Guardar rutina</button><p class="helper">Esta ficha usa datos de demostración en memoria.</p></article>
    </div>`;
  showView("ficha");
  $("#saveRoutine").addEventListener("click", () => {
    m.routine = $("#assignRoutine").value;
    renderAll(); openMember(m.id); notify("Rutina actualizada en la demostración.");
  });
}
function exerciseSeconds(detail) {
  const text = String(detail);
  const minutes = Number(text.match(/(\d+)\s*minutos?/i)?.[1] || 0);
  const seconds = Number(text.match(/(\d+)\s*segundos?/i)?.[1] || 0);
  const total = minutes * 60 + seconds;
  return total || null;
}
function formatTimer(seconds) {
  const safeSeconds = Math.max(0, seconds);
  return `${String(Math.floor(safeSeconds / 60)).padStart(2, "0")}:${String(safeSeconds % 60).padStart(2, "0")}`;
}
function isRestDayForRoutine(routine, day) {
  return (routine.restDays || [5]).includes(day);
}
function exercisesForDay(routine, day) {
  if (isRestDayForRoutine(routine, day)) return [];
  return routine.exerciseDays?.[day] || [];
}
function renderRoutines() {
  $("#routineCards").innerHTML = routines.map(r => {
    r.completedDays ||= Array.from({ length: r.days || 0 }, (_, index) => index + 1);
    const currentDay = selectedRoutineDay;
    r.exercises = exercisesForDay(r, currentDay);
    const exerciseRows = r.exercises.map((exercise, index) => `<div class="exercise-row"><span>${escapeHTML(exercise.name)} · ${escapeHTML(exercise.detail)}</span><output id="timer-${r.id}-${index}" aria-label="Temporizador">${formatTimer(exerciseSeconds(exercise.detail) || 0)}</output><button type="button" class="text-button" data-timer="${r.id}-${index}">${exerciseSeconds(exercise.detail) ? "Iniciar" : "Iniciar cronómetro"}</button></div>`).join("");
    const isRestDay = isRestDayForRoutine(r, currentDay);
    const isConfigured = isRestDay || Boolean(r.exerciseDays?.[currentDay]);
    const emptyMessage = isRestDay
      ? '<p class="helper rest-day" role="status">Día de descanso. Recupérate e hidrátate.</p>'
      : `<p class="helper">La rutina del día ${currentDay} todavía no está configurada.</p>`;
    const calendar = Array.from({ length: 30 }, (_, index) => {
      const day = index + 1;
      const completed = r.completedDays.includes(day);
      const stateLabel = completed ? "completado" : day === currentDay ? "seleccionado" : isRestDayForRoutine(r, day) ? "descanso" : "pendiente";
      return `<button type="button" class="calendar-day${completed ? " is-complete" : ""}${day === currentDay ? " is-selected" : ""}${isRestDayForRoutine(r, day) ? " is-rest" : ""}" data-day="${day}" aria-label="Día ${day}, ${stateLabel}" aria-pressed="${day === currentDay}">${day}</button>`;
    }).join("");
    return `<section class="routine-calendar panel" aria-label="Calendario de 30 días"><div class="calendar-heading"><div><p class="eyebrow">RETO DE 30 DÍAS</p><h3>Calendario ${escapeHTML(r.name)}</h3><p>Selecciona un día para consultar la rutina.</p></div><span class="pill pill-green">${r.completedDays.length}/30 completados</span></div><div class="calendar-grid">${calendar}</div><p class="helper calendar-legend"><span>Verde: completado</span><span>Contorno: día seleccionado</span><span>R: descanso</span></p></section><article class="routine-card card-panel z-depth-1"><p class="eyebrow">${escapeHTML(r.body.toUpperCase())}</p><h3>${escapeHTML(r.name)} · Día ${currentDay}${isRestDay ? " · Descanso" : ""}</h3><div class="routine-meta"><span class="pill pill-green">${escapeHTML(r.level)}</span><span class="pill">${r.completedDays.length}/30 completados</span></div><div class="exercise-list">${exerciseRows || emptyMessage}</div>${isConfigured ? `<button class="btn btn-primary" data-complete="${r.id}">${isRestDay ? "Registrar día de descanso" : r.completedDays.includes(currentDay) ? "Día completado" : "Marcar día como completado"}</button>` : ""}<button type="button" class="btn btn-ghost trainer-only" data-edit-routine="${r.id}" ${isConfigured ? "" : "disabled"}>Editar ejercicios</button></article>`;
  }).join("");
  $$(".calendar-day").forEach(button => button.addEventListener("click", () => {
    selectedRoutineDay = Number(button.dataset.day);
    renderRoutines();
  }));
  $$(".routine-card .trainer-only").forEach(button => button.classList.toggle("hidden", currentRole !== "entrenador"));
}
function renderExerciseManager() {
  const select = $("#exerciseRoutine");
  select.innerHTML = routines.map(r => `<option value="${r.id}">${escapeHTML(r.name)}</option>`).join("");
  if (routines.some(r => r.id === selectedExerciseRoutineId)) select.value = String(selectedExerciseRoutineId);
  else select.value = String(routines[0]?.id || "");
  selectedExerciseRoutineId = Number(select.value);
  const routine = routines.find(r => r.id === Number(select.value));
  $("#exerciseForm [name=day]").value = selectedExerciseDay;
  const dayExercises = routine?.exerciseDays?.[selectedExerciseDay] || [];
  $("#exerciseList").innerHTML = dayExercises.length
    ? dayExercises.map(exercise => `<div class="list-row"><div><strong>${escapeHTML(exercise.name)}</strong><small>${escapeHTML(exercise.detail)}</small></div><button type="button" class="text-button" data-edit-exercise="${exercise.id}">Editar</button></div>`).join("")
    : '<p class="helper">Esta rutina todavía no tiene ejercicios.</p>';
}
function resetExerciseForm() {
  editingExerciseId = null;
  $("#exerciseForm").reset();
  $("#exerciseForm [name=day]").value = selectedExerciseDay;
  $("#exerciseMessage").textContent = "";
  $("#saveExerciseButton").textContent = "Agregar ejercicio";
  $("#cancelExerciseEdit").classList.add("hidden");
}
function renderWorkoutHistory() {
  $("#workoutHistory").innerHTML = workoutRecords.length
    ? workoutRecords.map(item => `<div class="list-row"><div><strong>${escapeHTML(item.exercise)}</strong><small>${escapeHTML(item.userName || "Cuenta personal")}</small></div><span class="pill pill-green">${item.repetitions} repeticiones</span></div>`).join("")
    : '<p class="helper">Aún no tienes entrenamientos registrados.</p>';
}
function renderMeals() {
  $("#mealList").innerHTML = meals.length
    ? meals.map(item => `<div class="list-row"><strong>${escapeHTML(item.meal)}</strong><span>${escapeHTML(item.description)}</span></div>`).join("")
    : '<p class="helper">Todavía no registras comidas.</p>';
}
async function loadAPIData() {
  try {
    const [routineResponse, workoutResponse, exerciseResponse] = await Promise.all([
      fetch(`${API_BASE}/rutinas`), fetch(`${API_BASE}/entrenamientos`), fetch(`${API_BASE}/ejercicios`)
    ]);
    if (!routineResponse.ok || !workoutResponse.ok || !exerciseResponse.ok) throw new Error("API no disponible");
    const apiRoutines = await routineResponse.json();
    workoutRecords = await workoutResponse.json();
    const apiExercises = await exerciseResponse.json();
    apiRoutines.forEach(apiRoutine => {
      const routine = routines.find(item => item.id === apiRoutine.id);
      if (routine) Object.assign(routine, {
        name: apiRoutine.name || apiRoutine.nombre || routine.name,
        level: apiRoutine.level || routine.level,
        duration: apiRoutine.duration || apiRoutine.duracion || routine.duration,
        body: apiRoutine.body || routine.body
      });
    });
    routines.forEach(routine => {
      const listed = apiExercises.filter(exercise => Number(exercise.routineId) === routine.id);
      const exerciseDays = {};
      listed.forEach(exercise => {
        const day = Number(exercise.day) || 1;
        exerciseDays[day] ||= [];
        exerciseDays[day].push({ ...exercise, day });
      });
      routine.exerciseDays = { ...routine.exerciseDays, ...exerciseDays };
      routine.exercises = exercisesForDay(routine, routine.days + 1);
    });
    renderRoutines();
    renderWorkoutHistory();
    return true;
  } catch {
    notify("No se pudo conectar con la API. Inicia el servidor para cargar rutinas e historial.");
    return false;
  }
}
function renderAll() { renderDashboard(); renderMembers(); renderRoutines(); }
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
$$("[data-view]").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const role = data.get("role");
  const name = role === "entrenador" ? "Andrés Rojas" : String(data.get("email")).split("@")[0];
  enterApp(role, name);
});
$("#showRegister").addEventListener("click", () => {
  $("#loginForm").closest(".auth-card").classList.add("hidden");
  $("#registerCard").classList.remove("hidden");
  $("#registerCard input").item(0).focus();
});
$("#showLogin").addEventListener("click", () => {
  $("#registerCard").classList.add("hidden");
  $("#loginForm").closest(".auth-card").classList.remove("hidden");
  $("#loginForm input").item(0).focus();
});
$("#registerForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  $("#loginForm [name=email]").value = data.get("email");
  $("#loginForm [name=password]").value = data.get("password");
  $("#loginForm [name=role]").value = "personal";
  $("#registerCard").classList.add("hidden");
  $("#loginForm").closest(".auth-card").classList.remove("hidden");
  notify("Cuenta creada en el prototipo. Inicia sesión para continuar.");
});
$("#memberSearch").addEventListener("input", renderMembers);
$("#statusFilter").addEventListener("change", renderMembers);
$("#membersTable").addEventListener("click", event => {
  const button = event.target.closest("[data-member]");
  if (button) openMember(button.dataset.member);
});
$("#memberForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name")).trim();
  const email = String(data.get("email")).trim();
  if (name.length < 3 || !email.includes("@")) { notify("Revisa el nombre y el correo."); return; }
  members.unshift({id:nextMemberId++,name,email,routine:data.get("routine"),progress:0,last:"Sin entrenamientos",status:"Al día",goal:data.get("goal") || "Sin objetivo definido",weight:0,target:0,age:0,height:0});
  event.currentTarget.reset();
  renderAll(); showView("miembros"); notify("Miembro agregado a la demostración.");
});
$("#routineCards").addEventListener("click", event => {
  const editRoutineButton = event.target.closest("[data-edit-routine]");
  if (editRoutineButton) {
    selectedExerciseRoutineId = Number(editRoutineButton.dataset.editRoutine);
    const routineToEdit = routines.find(item => item.id === selectedExerciseRoutineId);
    selectedExerciseDay = selectedRoutineDay;
    resetExerciseForm();
    showView("ejercicios");
    return;
  }
  const timerButton = event.target.closest("[data-timer]");
  if (timerButton) {
    const timerKey = timerButton.dataset.timer;
    if (timerId && activeTimerKey === timerKey) {
      clearInterval(timerId);
      timerId = null;
      timerButton.textContent = "Continuar";
      return;
    }
    if (timerId) {
      clearInterval(timerId);
      const previousButton = $(`[data-timer="${activeTimerKey}"]`);
      if (previousButton) previousButton.textContent = "Continuar";
      timerId = null;
    }
    const [routineId, exerciseIndex] = timerKey.split("-").map(Number);
    const exercise = routines.find(item => item.id === routineId)?.exercises[exerciseIndex];
    const duration = exercise ? exerciseSeconds(exercise.detail) : null;
    if (activeTimerKey !== timerKey) {
      activeTimerMode = duration ? "countdown" : "stopwatch";
      timerRemaining = duration || 0;
      timerElapsed = 0;
    }
    activeTimerKey = timerKey;
    const output = $(`#timer-${timerButton.dataset.timer}`);
    output.textContent = formatTimer(activeTimerMode === "countdown" ? timerRemaining : timerElapsed);
    timerButton.textContent = "Pausar";
    timerId = setInterval(() => {
      if (activeTimerMode === "countdown") {
        timerRemaining--;
        output.textContent = formatTimer(timerRemaining);
        if (timerRemaining <= 0) {
          clearInterval(timerId); timerId = null; activeTimerKey = null; activeTimerMode = null;
          timerButton.textContent = "Iniciar";
          notify("Tiempo terminado. ¡Buen trabajo!");
        }
      } else {
        timerElapsed++;
        output.textContent = formatTimer(timerElapsed);
      }
    }, 1000);
    return;
  }
  const button = event.target.closest("[data-complete]");
  if (!button) return;
  const r = routines.find(item => item.id === Number(button.dataset.complete));
  r.completedDays ||= [];
  if (r.completedDays.includes(selectedRoutineDay)) { notify(`El día ${selectedRoutineDay} ya está completado.`); return; }
  if (timerId) clearInterval(timerId);
  timerId = null; activeTimerKey = null; activeTimerMode = null;
  r.completedDays.push(selectedRoutineDay);
  r.days = r.completedDays.length;
  renderRoutines();
  notify(`¡Buen trabajo! Día ${selectedRoutineDay}/30 registrado en esta sesión.`);
});
$("#exerciseRoutine").addEventListener("change", () => {
  selectedExerciseRoutineId = Number($("#exerciseRoutine").value);
  resetExerciseForm();
  renderExerciseManager();
});
$("#exerciseForm [name=day]").addEventListener("change", event => {
  selectedExerciseDay = Number(event.currentTarget.value) || 1;
  resetExerciseForm();
  renderExerciseManager();
});
$("#exerciseList").addEventListener("click", event => {
  const button = event.target.closest("[data-edit-exercise]");
  if (!button) return;
  const routine = routines.find(item => item.id === Number($("#exerciseRoutine").value));
  const exercise = routine?.exerciseDays?.[selectedExerciseDay]?.find(item => item.id === Number(button.dataset.editExercise));
  if (!exercise) return;
  editingExerciseId = exercise.id;
  $("#exerciseForm [name=name]").value = exercise.name;
  $("#exerciseForm [name=detail]").value = exercise.detail;
  $("#saveExerciseButton").textContent = "Guardar cambios";
  $("#cancelExerciseEdit").classList.remove("hidden");
  $("#exerciseMessage").textContent = `Editando ${exercise.name}.`;
  $("#exerciseForm [name=name]").focus();
});
$("#cancelExerciseEdit").addEventListener("click", resetExerciseForm);
$("#exerciseForm").addEventListener("submit", async event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const payload = { routineId: Number(data.get("routineId")), day: Number(data.get("day")), name: data.get("name"), detail: data.get("detail") };
  const wasEditing = editingExerciseId !== null;
  const previousEntry = routines.flatMap(item => Object.entries(item.exerciseDays || {}).flatMap(([day, list]) => list.map(exercise => ({ routine: item, day: Number(day), exercise }))))
    .find(entry => entry.exercise.id === editingExerciseId);
  const endpoint = editingExerciseId ? `${API_BASE}/ejercicios/${editingExerciseId}` : `${API_BASE}/ejercicios`;
  const response = await fetch(endpoint, {
    method: editingExerciseId ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(() => null);
  if (!response?.ok) { notify("No se pudo guardar el ejercicio. Comprueba que la API esté encendida."); return; }
  const savedExercise = await response.json();
  const routine = routines.find(item => item.id === savedExercise.routineId);
  const savedDay = Number(savedExercise.day) || payload.day;
  savedExercise.day = savedDay;
  if (wasEditing && previousEntry && (previousEntry.routine.id !== savedExercise.routineId || previousEntry.day !== savedDay)) {
    previousEntry.routine.exerciseDays[previousEntry.day] = previousEntry.routine.exerciseDays[previousEntry.day].filter(item => item.id !== savedExercise.id);
  }
  if (routine) {
    routine.exerciseDays[savedDay] ||= [];
    const existingIndex = routine.exerciseDays[savedDay].findIndex(item => item.id === savedExercise.id);
    if (existingIndex >= 0) routine.exerciseDays[savedDay][existingIndex] = savedExercise;
    else routine.exerciseDays[savedDay].push(savedExercise);
  }
  const savedMessage = wasEditing ? "Cambios guardados." : "Ejercicio agregado.";
  resetExerciseForm();
  $("#exerciseMessage").textContent = savedMessage;
  renderExerciseManager();
  renderRoutines();
  notify(wasEditing ? "Ejercicio actualizado." : "Ejercicio agregado a la rutina.");
});
$("#mealForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  meals.unshift({ meal: data.get("meal"), description: data.get("description") });
  event.currentTarget.reset();
  renderMeals();
  notify("Comida agregada al registro de hoy.");
});
$("#goalForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  if (Number(data.get("weight")) <= 0 || Number(data.get("target")) <= 0) { notify("El peso debe ser mayor que cero."); return; }
  $("#goalMessage").textContent = "Cambios guardados en esta demostración. Para conservarlos, conectaremos una API y una base de datos.";
  notify("Objetivos actualizados en la demostración.");
});
$("#logoutBtn").addEventListener("click", () => {
  if (confirm("¿Deseas cerrar la sesión de demostración?")) {
    $(".app-shell").classList.add("hidden");
    $("#authScreen").classList.remove("hidden");
    $("#loginForm").reset();
  }
});
$("#menuBtn").addEventListener("click", event => {
  const open = $("#sidebar").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
function updateLocalDateTime() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("es-CO", { weekday: "short", day: "numeric", month: "short" }).format(now);
  const time = new Intl.DateTimeFormat("es-CO", { hour: "2-digit", minute: "2-digit", hourCycle: "h12" }).format(now);
  $("#todayLabel").textContent = date;
  $("#todayTime").textContent = time;
}
updateLocalDateTime();
setInterval(updateLocalDateTime, 30_000);

async function checkAPI() {
  try {
    const response = await fetch(`${API_BASE}`);
    if (response.ok) console.info("API SPORT CONTROL conectada.");
  } catch {
    console.info("Modo demostración: inicia el backend para habilitar las pruebas de API.");
  }
}
renderAll();
// Para revisar la otra vista durante el desarrollo, ejecuta en la consola:
// setRole("personal") o setRole("entrenador")

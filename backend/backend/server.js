
const express = require("express");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Datos de prueba para la API
const rutinas = [
  { id: 1, nombre: "Glúteo intermedio", duracion: 30 },
  { id: 2, nombre: "Brazo intermedio", duracion: 30 },
  { id: 3, nombre: "Pierna intermedio", duracion: 30 },
  { id: 4, nombre: "Abdomen intermedio", duracion: 30 }
];

const entrenamientos = [];
const ejercicios = [
  { id: 1, routineId: 1, name: "Elevación trasera de pierna", detail: "26 repeticiones" },
  { id: 2, routineId: 1, name: "Squats", detail: "25 repeticiones" },
  { id: 3, routineId: 1, name: "Levantamiento lateral de pierna", detail: "32 repeticiones" },
  { id: 4, routineId: 1, name: "Butt bridge", detail: "28 repeticiones" },
  { id: 5, routineId: 1, name: "Salto lateral", detail: "16 segundos" },
  { id: 6, routineId: 2, name: "Flexiones", detail: "8 repeticiones" },
  { id: 7, routineId: 2, name: "Tríceps en silla", detail: "20 repeticiones" },
  { id: 8, routineId: 2, name: "Rotación de brazo", detail: "25 repeticiones" },
  { id: 76, routineId: 2, name: "Escalada de montaña", detail: "16 repeticiones (8 de cada lado)" },
  { id: 77, routineId: 2, day: 2, name: "Tríceps en silla", detail: "20 repeticiones" },
  { id: 78, routineId: 2, day: 2, name: "Cobras", detail: "13 repeticiones" },
  { id: 79, routineId: 2, day: 2, name: "Tríceps en suelo", detail: "12 repeticiones" },
  { id: 80, routineId: 2, day: 3, name: "Flexiones", detail: "10 repeticiones" },
  { id: 81, routineId: 2, day: 3, name: "Escalada de montaña", detail: "20 repeticiones" },
  { id: 82, routineId: 2, day: 3, name: "Cobras", detail: "14 repeticiones" },
  { id: 83, routineId: 2, day: 3, name: "Puñetazos", detail: "50 segundos" },
  { id: 84, routineId: 2, day: 4, name: "Tríceps en silla", detail: "20 repeticiones" },
  { id: 85, routineId: 2, day: 4, name: "Rotación de brazos", detail: "25 repeticiones" },
  { id: 86, routineId: 2, day: 4, name: "Flexiones", detail: "12 repeticiones" },
  { id: 87, routineId: 2, day: 6, name: "Flexiones", detail: "14 repeticiones" },
  { id: 88, routineId: 2, day: 6, name: "Tríceps en silla", detail: "20 repeticiones" },
  { id: 89, routineId: 2, day: 6, name: "Rotaciones de brazos", detail: "30 repeticiones" },
  { id: 90, routineId: 2, day: 6, name: "Tríceps en suelo", detail: "18 repeticiones" },
  { id: 91, routineId: 2, day: 7, name: "Escalada de montaña", detail: "30 repeticiones" },
  { id: 92, routineId: 2, day: 7, name: "Cobras", detail: "18 repeticiones" },
  { id: 93, routineId: 2, day: 7, name: "Puñetazos", detail: "1 minuto" },
  { id: 94, routineId: 2, day: 7, name: "Tríceps en suelo", detail: "18 repeticiones" },
  { id: 95, routineId: 2, day: 8, name: "Flexiones", detail: "16 repeticiones" },
  { id: 96, routineId: 2, day: 8, name: "Tríceps en silla", detail: "22 repeticiones" },
  { id: 97, routineId: 2, day: 8, name: "Rotaciones de brazos", detail: "40 repeticiones" },
  { id: 9, routineId: 3, name: "Zancada cruzada", detail: "30 repeticiones (15 de cada lado)" },
  { id: 10, routineId: 3, name: "Levantamiento de piernas", detail: "40 repeticiones (20 de cada lado)" },
  { id: 11, routineId: 3, name: "Sentadilla búlgara", detail: "40 repeticiones (20 de cada lado)" },
  { id: 12, routineId: 3, name: "Sentadilla en pared", detail: "28 segundos" },
  { id: 15, routineId: 4, name: "Tablón", detail: "40 segundos" },
  { id: 16, routineId: 4, name: "Crunch abdominal", detail: "24 repeticiones" },
  { id: 17, routineId: 4, name: "Escalada de montaña", detail: "16 repeticiones (8 por lado)" },
  { id: 18, routineId: 4, name: "Crunch inverso", detail: "22 repeticiones" },
  { id: 19, routineId: 4, name: "Butt bridge", detail: "18 repeticiones" },
  { id: 20, routineId: 4, name: "Plancha lateral izquierda", detail: "20 segundos" },
  { id: 21, routineId: 4, name: "Plancha lateral derecha", detail: "20 segundos" },
  { id: 22, routineId: 4, day: 2, name: "Tablón", detail: "45 segundos" },
  { id: 23, routineId: 4, day: 2, name: "Escalada de montaña", detail: "20 repeticiones (10 de cada lado)" },
  { id: 24, routineId: 4, day: 2, name: "Elevaciones de piernas", detail: "25 repeticiones" },
  { id: 25, routineId: 4, day: 2, name: "Toque al talón", detail: "20 repeticiones (10 de cada lado)" },
  { id: 26, routineId: 4, day: 2, name: "Crunch de brazos estirados", detail: "22 repeticiones" },
  { id: 27, routineId: 4, day: 2, name: "Tablón (serie final)", detail: "40 segundos" },
  { id: 28, routineId: 4, day: 3, name: "Crunch abdominal", detail: "22 repeticiones" },
  { id: 29, routineId: 4, day: 3, name: "Escalada de montaña", detail: "16 repeticiones (8 de cada lado)" },
  { id: 30, routineId: 4, day: 3, name: "Abdominales", detail: "24 repeticiones" },
  { id: 31, routineId: 4, day: 3, name: "Butt bridge", detail: "20 repeticiones" },
  { id: 32, routineId: 4, day: 3, name: "Toque de talón", detail: "16 repeticiones" },
  { id: 33, routineId: 4, day: 3, name: "Crunch de brazos estirados", detail: "24 repeticiones" },
  { id: 34, routineId: 4, day: 3, name: "Plancha lateral izquierda", detail: "20 segundos" },
  { id: 35, routineId: 4, day: 3, name: "Plancha lateral derecha", detail: "20 segundos" },
  { id: 36, routineId: 4, day: 4, name: "Crunch abdominal", detail: "26 repeticiones" },
  { id: 37, routineId: 4, day: 4, name: "Escalada de montaña", detail: "20 repeticiones (10 de cada lado)" },
  { id: 38, routineId: 4, day: 4, name: "Crunch inverso", detail: "24 repeticiones" },
  { id: 39, routineId: 4, day: 4, name: "Butt bridge", detail: "20 repeticiones" },
  { id: 40, routineId: 4, day: 4, name: "Elevaciones de piernas", detail: "25 repeticiones" },
  { id: 41, routineId: 4, day: 4, name: "Toque de talón", detail: "20 repeticiones (10 de cada lado)" },
  { id: 42, routineId: 4, day: 4, name: "Tablón", detail: "45 segundos" },
  { id: 43, routineId: 4, day: 6, name: "Crunch abdominal", detail: "28 repeticiones" },
  { id: 44, routineId: 4, day: 6, name: "Tablón", detail: "55 segundos" },
  { id: 45, routineId: 4, day: 6, name: "Escalada de montaña", detail: "20 repeticiones (10 de cada lado)" },
  { id: 46, routineId: 4, day: 6, name: "Butt bridge", detail: "15 repeticiones" },
  { id: 47, routineId: 4, day: 6, name: "Elevaciones de piernas", detail: "25 repeticiones" },
  { id: 48, routineId: 4, day: 6, name: "Plancha lateral derecha", detail: "25 segundos" },
  { id: 49, routineId: 4, day: 6, name: "Plancha lateral izquierda", detail: "25 segundos" },
  { id: 50, routineId: 4, day: 7, name: "Escalada de montaña", detail: "26 repeticiones (13 de cada lado)" },
  { id: 51, routineId: 4, day: 7, name: "Crunch inverso", detail: "24 repeticiones" },
  { id: 52, routineId: 4, day: 7, name: "Butt bridge", detail: "22 repeticiones" },
  { id: 53, routineId: 4, day: 7, name: "Crunch de bicicleta", detail: "22 repeticiones" },
  { id: 54, routineId: 4, day: 7, name: "Crunch de brazos estirados", detail: "26 repeticiones" },
  { id: 55, routineId: 4, day: 7, name: "Tablón", detail: "50 segundos" },
  { id: 56, routineId: 4, day: 8, name: "Tablón", detail: "1 minuto" },
  { id: 57, routineId: 4, day: 8, name: "Escalada de montaña", detail: "24 repeticiones (12 de cada lado)" },
  { id: 58, routineId: 4, day: 8, name: "Crunch inverso", detail: "26 repeticiones" },
  { id: 59, routineId: 4, day: 8, name: "Toque de talón", detail: "24 repeticiones (12 de cada lado)" },
  { id: 60, routineId: 4, day: 8, name: "Tablón (serie final)", detail: "50 segundos" },
  { id: 61, routineId: 3, day: 2, name: "Pile squat", detail: "35 repeticiones" },
  { id: 62, routineId: 3, day: 2, name: "Levantamiento de pierna", detail: "40 repeticiones (20 de cada lado)" },
  { id: 63, routineId: 3, day: 2, name: "Sentadillas en cuclillas", detail: "35 repeticiones" },
  { id: 64, routineId: 3, day: 2, name: "Sentadilla en pared", detail: "30 segundos" },
  { id: 65, routineId: 3, day: 3, name: "Zancada lateral", detail: "40 repeticiones (20 de cada lado)" },
  { id: 66, routineId: 3, day: 3, name: "Split squat", detail: "40 repeticiones (20 de cada lado)" },
  { id: 67, routineId: 3, day: 3, name: "Sentadilla en pared", detail: "32 segundos" },
  { id: 68, routineId: 3, day: 4, name: "Zancada cruzada", detail: "40 repeticiones (20 de cada lado)" },
  { id: 69, routineId: 3, day: 4, name: "Levantamiento de pierna", detail: "50 repeticiones (25 de cada lado)" },
  { id: 70, routineId: 3, day: 4, name: "Zancada frontal", detail: "40 repeticiones" },
  { id: 71, routineId: 3, day: 4, name: "Sentadilla en pared", detail: "35 segundos" },
  { id: 72, routineId: 3, day: 6, name: "Pile squat", detail: "40 repeticiones" },
  { id: 73, routineId: 3, day: 6, name: "Levantamiento de pierna", detail: "60 repeticiones (30 de cada lado)" },
  { id: 74, routineId: 3, day: 6, name: "Círculos con las piernas", detail: "60 repeticiones (30 de cada lado)" },
  { id: 75, routineId: 3, day: 6, name: "Sentadilla en pared", detail: "35 segundos" }
];

// Permite abrir el prototipo web aunque se inicie este servidor duplicado.
const frontendDirectory = path.resolve(__dirname, "..", "..");
app.use("/css", express.static(path.join(frontendDirectory, "css")));
app.use("/js", express.static(path.join(frontendDirectory, "js")));
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendDirectory, "sport control.html"));
});

// Ruta principal
app.get("/api", (req, res) => {
  res.json({
    proyecto: "SPORT CONTROL",
    mensaje: "API funcionando correctamente",
    status: "ok"
  });
});

// Consultar rutinas
app.get("/api/rutinas", (req, res) => {
  res.json(rutinas);
});

// Crear una rutina
app.post("/api/rutinas", (req, res) => {
  const { name, level, duration, body } = req.body;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof level !== "string" || !["Intermedio", "Avanzado"].includes(level.trim()) ||
    typeof duration !== "number" || duration <= 0 ||
    typeof body !== "string" || !body.trim()
  ) {
    return res.status(400).json({
      mensaje: "Faltan datos o son incorrectos"
    });
  }

  const rutina = {
    id: rutinas.length + 1,
    name: name.trim(),
    level: level.trim(),
    duration,
    body: body.trim()
  };

  rutinas.push(rutina);
  res.status(201).json(rutina);
});

app.get("/api/ejercicios", (req, res) => {
  const routineId = req.query.routineId ? Number(req.query.routineId) : null;
  const day = req.query.day ? Number(req.query.day) : null;
  res.json(ejercicios.filter(item => (!routineId || item.routineId === routineId) && (!day || (item.day || 1) === day)));
});

app.post("/api/ejercicios", (req, res) => {
  const { routineId, name, detail } = req.body || {};
  const day = req.body?.day === undefined ? 1 : Number(req.body.day);
  if (!rutinas.some(item => item.id === Number(routineId)) || !Number.isInteger(day) || day < 1 || day > 30 || !String(name || "").trim() || !String(detail || "").trim()) {
    return res.status(400).json({ mensaje: "Envía una rutina, un día válido, el nombre y el detalle del ejercicio." });
  }
  const ejercicio = { id: ejercicios.length ? Math.max(...ejercicios.map(item => item.id)) + 1 : 1, routineId: Number(routineId), day, name: String(name).trim(), detail: String(detail).trim() };
  ejercicios.push(ejercicio);
  res.status(201).json(ejercicio);
});

app.put("/api/ejercicios/:id", (req, res) => {
  const ejercicio = ejercicios.find(item => item.id === Number(req.params.id));
  if (!ejercicio) return res.status(404).json({ mensaje: "Ejercicio no encontrado." });
  const { routineId, name, detail } = req.body || {};
  const day = req.body?.day === undefined ? 1 : Number(req.body.day);
  if (!rutinas.some(item => item.id === Number(routineId)) || !Number.isInteger(day) || day < 1 || day > 30 || !String(name || "").trim() || !String(detail || "").trim()) {
    return res.status(400).json({ mensaje: "Envía una rutina, un día válido, el nombre y el detalle del ejercicio." });
  }
  Object.assign(ejercicio, { routineId: Number(routineId), day, name: String(name).trim(), detail: String(detail).trim() });
  res.json(ejercicio);
});

// Consultar entrenamientos
app.get("/api/entrenamientos", (req, res) => {
  res.json(entrenamientos);
});

// Registrar un entrenamiento
app.post("/api/entrenamientos", (req, res) => {
  const { userName, exercise, repetitions } = req.body;

  if (
    typeof userName !== "string" || !userName.trim() ||
    typeof exercise !== "string" || !exercise.trim() ||
    !Number.isInteger(repetitions) || repetitions <= 0
  ) {
    return res.status(400).json({
      mensaje: "Los datos del entrenamiento son incorrectos"
    });
  }

  const entrenamiento = {
    id: entrenamientos.length + 1,
    userName: userName.trim(),
    exercise: exercise.trim(),
    repetitions
  };

  entrenamientos.push(entrenamiento);
  res.status(201).json(entrenamiento);
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    mensaje: "Ruta no encontrada"
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(400).json({
    mensaje: "No se pudo procesar la solicitud"
  });
});

// Iniciar servidor
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `SPORT CONTROL API disponible en http://localhost:${PORT}`
    );
  });
}

module.exports = app;

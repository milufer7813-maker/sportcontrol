const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("./server");

test("SPORT CONTROL API", async (t) => {
  await t.test("GET / sirve el prototipo web", async () => {
    const respuesta = await request(app).get("/");

    assert.equal(respuesta.statusCode, 200);
    assert.match(respuesta.text, /SPORT CONTROL/);
    assert.match(respuesta.text, /materialize\/1\.0\.0/);
    assert.match(respuesta.text, /id="workoutHistory"/);
    assert.doesNotMatch(respuesta.text, /id="workoutForm"/);
  });

  await t.test("GET /js/app.js sirve los controles de la interfaz", async () => {
    const respuesta = await request(app).get("/js/app.js");

    assert.equal(respuesta.statusCode, 200);
    assert.match(respuesta.text, /loginForm/);
  });

  await t.test("GET /api devuelve el estado correcto", async () => {
    const respuesta = await request(app).get("/api");

    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.proyecto, "SPORT CONTROL");
    assert.equal(respuesta.body.status, "ok");
  });

  await t.test("GET /api/rutinas devuelve las rutinas", async () => {
    const respuesta = await request(app).get("/api/rutinas");

    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 4);
    assert.ok(respuesta.body.every((rutina) => rutina.id && rutina.nombre));
    assert.deepEqual(respuesta.body.map((rutina) => rutina.nombre), ["Glúteo intermedio", "Brazo intermedio", "Pierna intermedio", "Abdomen intermedio"]);
  });

  await t.test("POST y PUT /api/ejercicios permiten agregar y editar ejercicios", async () => {
    const creada = await request(app).post("/api/ejercicios").send({
      routineId: 4, day: 30, name: "Prueba de ejercicio", detail: "8 repeticiones"
    });
    assert.equal(creada.statusCode, 201);

    const editada = await request(app).put(`/api/ejercicios/${creada.body.id}`).send({
      routineId: 4, day: 30, name: "Ejercicio editado", detail: "10 repeticiones"
    });
    assert.equal(editada.statusCode, 200);
    assert.equal(editada.body.name, "Ejercicio editado");
    assert.equal(editada.body.detail, "10 repeticiones");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=1 devuelve los siete ejercicios del día 1", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=1");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 7);
    assert.equal(respuesta.body[0].detail, "40 segundos");
    assert.equal(respuesta.body[6].detail, "20 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=2 devuelve los seis ejercicios del día 2", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=2");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 6);
    assert.equal(respuesta.body[0].detail, "45 segundos");
    assert.equal(respuesta.body[5].detail, "40 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=3 entrega los ejercicios del tercer día", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=3");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 8);
    assert.equal(respuesta.body[0].detail, "22 repeticiones");
    assert.equal(respuesta.body[1].detail, "16 repeticiones (8 de cada lado)");
    assert.equal(respuesta.body[6].detail, "20 segundos");
    assert.equal(respuesta.body[7].detail, "20 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=4 entrega los ejercicios del cuarto día", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=4");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 7);
    assert.equal(respuesta.body[0].detail, "26 repeticiones");
    assert.equal(respuesta.body[1].detail, "20 repeticiones (10 de cada lado)");
    assert.equal(respuesta.body[6].detail, "45 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=5 devuelve lista vacía para el descanso", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=5");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body, []);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=6 entrega los ejercicios del sexto día", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=6");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 7);
    assert.equal(respuesta.body[0].detail, "28 repeticiones");
    assert.equal(respuesta.body[1].detail, "55 segundos");
    assert.equal(respuesta.body[5].detail, "25 segundos");
    assert.equal(respuesta.body[6].detail, "25 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=7 entrega los ejercicios del séptimo día", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=7");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 6);
    assert.equal(respuesta.body[0].detail, "26 repeticiones (13 de cada lado)");
    assert.equal(respuesta.body[4].detail, "26 repeticiones");
    assert.equal(respuesta.body[5].detail, "50 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=4&day=8 entrega los ejercicios del octavo día", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=4&day=8");
    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 5);
    assert.equal(respuesta.body[0].detail, "1 minuto");
    assert.equal(respuesta.body[1].detail, "24 repeticiones (12 de cada lado)");
    assert.equal(respuesta.body[3].detail, "24 repeticiones (12 de cada lado)");
    assert.equal(respuesta.body[4].detail, "50 segundos");
  });

  await t.test("GET /api/ejercicios?routineId=3&day=1 devuelve el día 1 de pierna intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=3&day=1");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Zancada cruzada", "30 repeticiones (15 de cada lado)"],
      ["Levantamiento de piernas", "40 repeticiones (20 de cada lado)"],
      ["Sentadilla búlgara", "40 repeticiones (20 de cada lado)"],
      ["Sentadilla en pared", "28 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=2 devuelve el día 2 de pierna intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=3&day=2");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Pile squat", "35 repeticiones"],
      ["Levantamiento de pierna", "40 repeticiones (20 de cada lado)"],
      ["Sentadillas en cuclillas", "35 repeticiones"],
      ["Sentadilla en pared", "30 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=3 devuelve el día 3 de pierna intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=3&day=3");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Zancada lateral", "40 repeticiones (20 de cada lado)"],
      ["Split squat", "40 repeticiones (20 de cada lado)"],
      ["Sentadilla en pared", "32 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=4 devuelve el día 4 de pierna intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=3&day=4");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Zancada cruzada", "40 repeticiones (20 de cada lado)"],
      ["Levantamiento de pierna", "50 repeticiones (25 de cada lado)"],
      ["Zancada frontal", "40 repeticiones"],
      ["Sentadilla en pared", "35 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=5 devuelve lista vacía para el descanso de pierna", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=3&day=5");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body, []);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=6 devuelve el día 6 de pierna intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=3&day=6");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Pile squat", "40 repeticiones"],
      ["Levantamiento de pierna", "60 repeticiones (30 de cada lado)"],
      ["Círculos con las piernas", "60 repeticiones (30 de cada lado)"],
      ["Sentadilla en pared", "35 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=1 devuelve el día 1 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=1");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "8 repeticiones"], ["Tríceps en silla", "20 repeticiones"],
      ["Rotación de brazo", "25 repeticiones"],
      ["Escalada de montaña", "16 repeticiones (8 de cada lado)"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=2 devuelve el día 2 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=2");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Tríceps en silla", "20 repeticiones"],
      ["Cobras", "13 repeticiones"],
      ["Tríceps en suelo", "12 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=3 devuelve el día 3 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=3");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "10 repeticiones"], ["Escalada de montaña", "20 repeticiones"],
      ["Cobras", "14 repeticiones"], ["Puñetazos", "50 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=4 devuelve el día 4 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=4");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Tríceps en silla", "20 repeticiones"],
      ["Rotación de brazos", "25 repeticiones"],
      ["Flexiones", "12 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=5 devuelve lista vacía para descanso de brazo", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=5");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body, []);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=6 devuelve el día 6 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=6");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "14 repeticiones"], ["Tríceps en silla", "20 repeticiones"],
      ["Rotaciones de brazos", "30 repeticiones"], ["Tríceps en suelo", "18 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=7 devuelve el día 7 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=7");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Escalada de montaña", "30 repeticiones"], ["Cobras", "18 repeticiones"],
      ["Puñetazos", "1 minuto"], ["Tríceps en suelo", "18 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=8 devuelve el día 8 de brazo intermedio", async () => {
    const respuesta = await request(app).get("/api/ejercicios?routineId=2&day=8");
    assert.equal(respuesta.statusCode, 200);
    assert.deepEqual(respuesta.body.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "16 repeticiones"], ["Tríceps en silla", "22 repeticiones"],
      ["Rotaciones de brazos", "40 repeticiones"]
    ]);
  });

  await t.test("POST /api/rutinas crea una rutina", async () => {
    const respuesta = await request(app)
      .post("/api/rutinas")
      .send({ name: "Rutina de prueba", level: "Intermedio", duration: 30, body: "Brazos" });

    assert.equal(respuesta.statusCode, 201);
    assert.equal(respuesta.body.name, "Rutina de prueba");
    assert.equal(respuesta.body.duration, 30);
  });

  await t.test("POST /api/rutinas rechaza datos incompletos", async () => {
    const respuesta = await request(app)
      .post("/api/rutinas")
      .send({ name: "" });

    assert.equal(respuesta.statusCode, 400);
  });

  await t.test("POST /api/rutinas rechaza el nivel básico", async () => {
    const respuesta = await request(app).post("/api/rutinas").send({
      name: "Rutina básica", level: "Básico", duration: 30, body: "Abdomen"
    });
    assert.equal(respuesta.statusCode, 400);
  });

  await t.test("POST /api/entrenamientos crea un registro", async () => {
    const respuesta = await request(app)
      .post("/api/entrenamientos")
      .send({ userName: "Camila Molina", exercise: "Sentadillas", repetitions: 15 });

    assert.equal(respuesta.statusCode, 201);
    assert.equal(respuesta.body.userName, "Camila Molina");
    assert.equal(respuesta.body.exercise, "Sentadillas");
    assert.equal(respuesta.body.repetitions, 15);
  });

  await t.test("POST /api/entrenamientos rechaza repeticiones inválidas", async () => {
    const respuesta = await request(app)
      .post("/api/entrenamientos")
      .send({ userName: "Camila Molina", exercise: "Sentadillas", repetitions: 0 });

    assert.equal(respuesta.statusCode, 400);
  });

  await t.test("GET /api/entrenamientos devuelve los registros creados", async () => {
    const respuesta = await request(app).get("/api/entrenamientos");

    assert.equal(respuesta.statusCode, 200);
    assert.equal(respuesta.body.length, 1);
    assert.equal(respuesta.body[0].exercise, "Sentadillas");
  });

  await t.test("Ruta inexistente devuelve error 404", async () => {
    const respuesta = await request(app).get("/api/no-existe");

    assert.equal(respuesta.statusCode, 404);
  });
});

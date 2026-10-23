const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./server");

let server;
let baseUrl;

test("SPORT CONTROL API", async (t) => {
  await new Promise(resolve => {
    server = app.listen(0, "127.0.0.1", resolve);
  });
  baseUrl = `http://127.0.0.1:${server.address().port}`;

  t.after(() => new Promise(resolve => server.close(resolve)));

  await t.test("GET / sirve la interfaz del prototipo", async () => {
    const response = await fetch(`${baseUrl}/`);
    const html = await response.text();
    assert.equal(response.status, 200);
    assert.match(html, /SPORT CONTROL/);
    assert.match(html, /materialize\/1\.0\.0/);
    assert.match(html, /id="workoutHistory"/);
    assert.doesNotMatch(html, /id="workoutForm"/);
  });

  await t.test("GET /js/app.js sirve el cliente", async () => {
    const response = await fetch(`${baseUrl}/js/app.js`);
    const script = await response.text();
    assert.equal(response.status, 200);
    assert.match(script, /const API_BASE/);
  });

  await t.test("GET /api devuelve estado correcto", async () => {
    const response = await fetch(`${baseUrl}/api`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.equal(data.status, "ok");
  });

  await t.test("GET /api/rutinas devuelve una lista", async () => {
    const response = await fetch(`${baseUrl}/api/rutinas`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(data));
    assert.deepEqual(data.map(routine => routine.name), ["Glúteo intermedio", "Brazo intermedio", "Pierna intermedio", "Abdomen intermedio"]);
  });

  await t.test("POST /api/rutinas crea una rutina válida", async () => {
    const response = await fetch(`${baseUrl}/api/rutinas`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ name: "Rutina de prueba", level: "Intermedio", duration: 30, body: "Brazos" })
    });
    const data = await response.json();
    assert.equal(response.status, 201);
    assert.equal(data.name, "Rutina de prueba");
  });

  await t.test("POST /api/rutinas rechaza datos incompletos", async () => {
    const response = await fetch(`${baseUrl}/api/rutinas`, {
      method: "POST",
     headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ name: "" })
    });
    assert.equal(response.status, 400);
  });

  await t.test("POST /api/rutinas rechaza el nivel básico", async () => {
    const response = await fetch(`${baseUrl}/api/rutinas`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Rutina básica", level: "Básico", duration: 30, body: "Abdomen" })
    });
    assert.equal(response.status, 400);
  });

  await t.test("GET /api/ejercicios devuelve ejercicios con su rutina", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.ok(data.length > 0);
    assert.ok(data.every(exercise => exercise.routineId === 4));
  });

  await t.test("GET /api/ejercicios?routineId=3&day=1 devuelve el día 1 de pierna intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=3&day=1`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Zancada cruzada", "30 repeticiones (15 de cada lado)"],
      ["Levantamiento de piernas", "40 repeticiones (20 de cada lado)"],
      ["Sentadilla búlgara", "40 repeticiones (20 de cada lado)"],
      ["Sentadilla en pared", "28 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=1 devuelve el día 1 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=1`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "8 repeticiones"], ["Tríceps en silla", "20 repeticiones"],
      ["Rotación de brazo", "25 repeticiones"],
      ["Escalada de montaña", "16 repeticiones (8 de cada lado)"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=2 devuelve el día 2 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=2`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Tríceps en silla", "20 repeticiones"],
      ["Cobras", "13 repeticiones"],
      ["Tríceps en suelo", "12 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=3 devuelve el día 3 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=3`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "10 repeticiones"], ["Escalada de montaña", "20 repeticiones"],
      ["Cobras", "14 repeticiones"], ["Puñetazos", "50 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=4 devuelve el día 4 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=4`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Tríceps en silla", "20 repeticiones"],
      ["Rotación de brazos", "25 repeticiones"],
      ["Flexiones", "12 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=5 devuelve lista vacía para descanso de brazo", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=5`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), []);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=6 devuelve el día 6 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=6`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "14 repeticiones"], ["Tríceps en silla", "20 repeticiones"],
      ["Rotaciones de brazos", "30 repeticiones"], ["Tríceps en suelo", "18 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=7 devuelve el día 7 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=7`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Escalada de montaña", "30 repeticiones"], ["Cobras", "18 repeticiones"],
      ["Puñetazos", "1 minuto"], ["Tríceps en suelo", "18 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=2&day=8 devuelve el día 8 de brazo intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=2&day=8`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Flexiones", "16 repeticiones"], ["Tríceps en silla", "22 repeticiones"],
      ["Rotaciones de brazos", "40 repeticiones"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=2 devuelve el día 2 de pierna intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=3&day=2`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Pile squat", "35 repeticiones"],
      ["Levantamiento de pierna", "40 repeticiones (20 de cada lado)"],
      ["Sentadillas en cuclillas", "35 repeticiones"],
      ["Sentadilla en pared", "30 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=3 devuelve el día 3 de pierna intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=3&day=3`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Zancada lateral", "40 repeticiones (20 de cada lado)"],
      ["Split squat", "40 repeticiones (20 de cada lado)"],
      ["Sentadilla en pared", "32 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=4 devuelve el día 4 de pierna intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=3&day=4`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Zancada cruzada", "40 repeticiones (20 de cada lado)"],
      ["Levantamiento de pierna", "50 repeticiones (25 de cada lado)"],
      ["Zancada frontal", "40 repeticiones"],
      ["Sentadilla en pared", "35 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=5 devuelve lista vacía para el descanso de pierna", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=3&day=5`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), []);
  });

  await t.test("GET /api/ejercicios?routineId=3&day=6 devuelve el día 6 de pierna intermedio", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=3&day=6`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Pile squat", "40 repeticiones"],
      ["Levantamiento de pierna", "60 repeticiones (30 de cada lado)"],
      ["Círculos con las piernas", "60 repeticiones (30 de cada lado)"],
      ["Sentadilla en pared", "35 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=1 devuelve el día 1 de abdomen", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=1`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Tablón", "40 segundos"],
      ["Crunch abdominal", "24 repeticiones"],
      ["Escalada de montaña", "16 repeticiones (8 por lado)"],
      ["Crunch inverso", "22 repeticiones"],
      ["Butt bridge", "18 repeticiones"],
      ["Plancha lateral izquierda", "20 segundos"],
      ["Plancha lateral derecha", "20 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=2 devuelve el día 2 de abdomen", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=2`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Tablón", "45 segundos"],
      ["Escalada de montaña", "20 repeticiones (10 de cada lado)"],
      ["Elevaciones de piernas", "25 repeticiones"],
      ["Toque al talón", "20 repeticiones (10 de cada lado)"],
      ["Crunch de brazos estirados", "22 repeticiones"],
      ["Tablón (serie final)", "40 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=3 devuelve el día 3 de abdomen", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=3`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Crunch abdominal", "22 repeticiones"],
      ["Escalada de montaña", "16 repeticiones (8 de cada lado)"],
      ["Abdominales", "24 repeticiones"],
      ["Butt bridge", "20 repeticiones"],
      ["Toque de talón", "16 repeticiones"],
      ["Crunch de brazos estirados", "24 repeticiones"],
      ["Plancha lateral izquierda", "20 segundos"],
      ["Plancha lateral derecha", "20 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=4 devuelve el día 4 de abdomen", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=4`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Crunch abdominal", "26 repeticiones"],
      ["Escalada de montaña", "20 repeticiones (10 de cada lado)"],
      ["Crunch inverso", "24 repeticiones"],
      ["Butt bridge", "20 repeticiones"],
      ["Elevaciones de piernas", "25 repeticiones"],
      ["Toque de talón", "20 repeticiones (10 de cada lado)"],
      ["Tablón", "45 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=5 devuelve lista vacía para el descanso", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=5`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), []);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=6 devuelve los ejercicios del día 6", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=6`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Crunch abdominal", "28 repeticiones"], ["Tablón", "55 segundos"],
      ["Escalada de montaña", "20 repeticiones (10 de cada lado)"],
      ["Butt bridge", "15 repeticiones"], ["Elevaciones de piernas", "25 repeticiones"],
      ["Plancha lateral derecha", "25 segundos"], ["Plancha lateral izquierda", "25 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=7 devuelve los ejercicios del día 7", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=7`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Escalada de montaña", "26 repeticiones (13 de cada lado)"],
      ["Crunch inverso", "24 repeticiones"], ["Butt bridge", "22 repeticiones"],
      ["Crunch de bicicleta", "22 repeticiones"],
      ["Crunch de brazos estirados", "26 repeticiones"], ["Tablón", "50 segundos"]
    ]);
  });

  await t.test("GET /api/ejercicios?routineId=4&day=8 devuelve los ejercicios del día 8", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios?routineId=4&day=8`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.deepEqual(data.map(({ name, detail }) => [name, detail]), [
      ["Tablón", "1 minuto"],
      ["Escalada de montaña", "24 repeticiones (12 de cada lado)"],
      ["Crunch inverso", "26 repeticiones"],
      ["Toque de talón", "24 repeticiones (12 de cada lado)"],
      ["Tablón (serie final)", "50 segundos"]
    ]);
  });

  await t.test("POST y PUT /api/ejercicios crean y editan un ejercicio", async () => {
    const createdResponse = await fetch(`${baseUrl}/api/ejercicios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routineId: 4, name: "Prueba de ejercicio", detail: "8 repeticiones" })
    });
    const created = await createdResponse.json();
    assert.equal(createdResponse.status, 201);
    assert.equal(created.name, "Prueba de ejercicio");

    const updatedResponse = await fetch(`${baseUrl}/api/ejercicios/${created.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routineId: 4, name: "Ejercicio actualizado", detail: "10 repeticiones" })
    });
    const updated = await updatedResponse.json();
    assert.equal(updatedResponse.status, 200);
    assert.equal(updated.name, "Ejercicio actualizado");
    assert.equal(updated.detail, "10 repeticiones");
  });

  await t.test("POST /api/ejercicios rechaza datos incompletos", async () => {
    const response = await fetch(`${baseUrl}/api/ejercicios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routineId: 999, name: "" })
    });
    assert.equal(response.status, 400);
  });

  await t.test("POST /api/entrenamientos crea un registro válido", async () => {
    const response = await fetch(`${baseUrl}/api/entrenamientos`, {
      method: "POST",
     headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ userName: "Camila Molina", exercise: "Sentadillas", repetitions: 15 })
    });
    const data = await response.json();
    assert.equal(response.status, 201);
    assert.equal(data.exercise, "Sentadillas");
  });

  await t.test("GET /api/entrenamientos devuelve los registros", async () => {
    const response = await fetch(`${baseUrl}/api/entrenamientos`);
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(data));
    assert.ok(data.length > 0);
  });

  await t.test("Ruta inexistente devuelve 404", async () => {
    const response = await fetch(`${baseUrl}/api/no-existe`);
    assert.equal(response.status, 404);
  });
});

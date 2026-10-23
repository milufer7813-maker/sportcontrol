# Pruebas funcionales de SPORT CONTROL

## Cómo ejecutar la aplicación

1. Abre PowerShell en la carpeta del proyecto.
2. Ejecuta `npm.cmd install` (solo la primera vez).
3. Ejecuta `npm.cmd start` y espera el mensaje `SPORT CONTROL disponible en http://localhost:3000`.
4. Abre `http://localhost:3000` en Chrome o Edge.
5. Para cerrar el servidor, vuelve a PowerShell y presiona `Ctrl+C`.

## Pruebas automatizadas de API y entrega web

Desde otra terminal, en la carpeta del proyecto, ejecuta `npm.cmd test`. El conjunto de pruebas actual pasa **71 de 71 pruebas**. Incluye las rutas API de rutinas y entrenamientos, validación de datos, respuesta 404 y entrega de la página y el JavaScript del frontend.

## Lista de verificación funcional en navegador

Realiza esta demostración con el servidor encendido. Los datos personales, miembros, comidas y objetivos son simulados y se mantienen solo durante la sesión indicada.

| ID | Pantalla o componente | Acción | Resultado esperado |
| --- | --- | --- | --- |
| UI-01 | Acceso | Enviar el formulario vacío | El navegador marca los campos obligatorios. |
| UI-02 | Registro | Elegir “Crear cuenta”, llenar los campos y guardar | Aparece el aviso de cuenta de demostración y vuelve al acceso. |
| UI-03 | Inicio como entrenador | Ingresar con correo y contraseña de demostración, rol Entrenador | Se abre el panel con estadísticas y lista de miembros. |
| UI-04 | Buscar miembros | Abrir Miembros y buscar “Camila” | La tabla muestra solo las coincidencias. |
| UI-05 | Filtrar estado | Seleccionar “Atrasado” | La tabla muestra miembros con ese estado. |
| UI-06 | Registrar miembro | Abrir “Nuevo miembro”, completar nombre, correo y rutina; guardar | El miembro aparece en la tabla de la sesión. |
| UI-07 | Ficha y rutina | Abrir “Ver ficha”, cambiar rutina y guardar | La ficha muestra la rutina seleccionada. |
| UI-07a | Gestión de ejercicios | Entrar como entrenador, abrir “Gestionar ejercicios”, elegir rutina y agregar nombre y detalle | El ejercicio aparece en la lista y en la tarjeta de esa rutina. |
| UI-07b | Editar ejercicio | Pulsar “Editar” en un ejercicio, cambiar nombre o detalle y guardar | Se actualiza la lista y la tarjeta de la rutina. |
| UI-08 | Acceso de miembro | Cerrar sesión y entrar con rol Miembro | Se muestran los accesos personales y se ocultan los del entrenador. |
| UI-09 | Mis rutinas | Elegir un día del calendario, iniciar un temporizador y pausarlo | La cuenta regresiva o el cronómetro ascendente inicia según el ejercicio; el botón permite pausarlo y continuarlo. El día elegido puede marcarse como completado. |
| UI-09-calendar | Calendarios de rutinas | Abrir “Mis rutinas”, elegir abdomen, brazo, glúteo o pierna y seleccionar un día | Cada rutina muestra su calendario de 30 días. Al elegir un día configurado aparece su rutina; en abdomen, el día 5 indica descanso. Se puede marcar el día seleccionado como completado y el calendario refleja el avance. Los días aún sin rutina configurada lo indican. |
| UI-09-leg1 | Pierna intermedio, día 1 | En el calendario de Pierna intermedio, seleccionar el día 1 | Aparecen zancada cruzada 30 (15 por lado), levantamiento de piernas 40 (20 por lado), sentadilla búlgara 40 (20 por lado) y sentadilla en pared de 28 s con cuenta regresiva. |
| UI-09-leg2 | Pierna intermedio, día 2 | En el calendario de Pierna intermedio, seleccionar el día 2 | Aparecen pile squat 35, levantamiento de pierna 40 (20 por lado), sentadillas en cuclillas 35 y sentadilla en pared de 30 s con cuenta regresiva. |
| UI-09-leg3 | Pierna intermedio, día 3 | En el calendario de Pierna intermedio, seleccionar el día 3 | Aparecen zancada lateral 40 (20 por lado), split squat 40 (20 por lado) y sentadilla en pared de 32 s con cuenta regresiva. |
| UI-09-leg4 | Pierna intermedio, día 4 | En el calendario de Pierna intermedio, seleccionar el día 4 | Aparecen zancada cruzada 40 (20 por lado), levantamiento de pierna 50 (25 por lado), zancada frontal 40 y sentadilla en pared de 35 s con cuenta regresiva. |
| UI-09-leg5 | Pierna intermedio, día 5 | En el calendario de Pierna intermedio, seleccionar el día 5 | Aparece “Día de descanso” sin ejercicios ni temporizadores; se puede registrar como completado. |
| UI-09-leg6 | Pierna intermedio, día 6 | En el calendario de Pierna intermedio, seleccionar el día 6 | Aparecen pile squat 40, levantamiento de pierna 60 (30 por lado), círculos con las piernas 60 (30 por lado) y sentadilla en pared de 35 s con cuenta regresiva. |
| UI-09-arm1 | Brazo intermedio, día 1 | En el calendario de Brazo intermedio, seleccionar el día 1 | Aparecen flexiones 8, tríceps en silla 20, rotación de brazo 25 y escalada de montaña 16 (8 por lado). |
| UI-09-arm2 | Brazo intermedio, día 2 | En el calendario de Brazo intermedio, seleccionar el día 2 | Aparecen tríceps en silla 20, cobras 13 y tríceps en suelo 12. |
| UI-09-arm3 | Brazo intermedio, día 3 | En el calendario de Brazo intermedio, seleccionar el día 3 | Aparecen flexiones 10, escalada de montaña 20, cobras 14 y puñetazos de 50 s con cuenta regresiva. |
| UI-09-arm4 | Brazo intermedio, día 4 | En el calendario de Brazo intermedio, seleccionar el día 4 | Aparecen tríceps en silla 20, rotación de brazos 25 y flexiones 12. |
| UI-09-arm5 | Brazo intermedio, día 5 | En el calendario de Brazo intermedio, seleccionar el día 5 | Aparece “Día de descanso” sin ejercicios ni temporizadores; se puede registrar como completado. |
| UI-09-arm6 | Brazo intermedio, día 6 | En el calendario de Brazo intermedio, seleccionar el día 6 | Aparecen flexiones 14, tríceps en silla 20, rotaciones de brazos 30 y tríceps en suelo 18. |
| UI-09-arm7 | Brazo intermedio, día 7 | En el calendario de Brazo intermedio, seleccionar el día 7 | Aparecen escalada de montaña 30, cobras 18, puñetazos durante 1 min con cuenta regresiva y tríceps en suelo 18. |
| UI-09-arm8 | Brazo intermedio, día 8 | En el calendario de Brazo intermedio, seleccionar el día 8 | Aparecen flexiones 16, tríceps en silla 22 y rotaciones de brazos 40. |
| UI-09a | Rutina abdominal, día 1 | Abrir “Abdomen intermedio” | Aparecen tablón 40 s, crunch abdominal 24, escalada de montaña 16 (8 por lado), crunch inverso 22, butt bridge 18 y planchas laterales de 20 s por lado. Los ejercicios por tiempo cuentan hacia atrás; los ejercicios por repeticiones muestran el cronómetro ascendente. |
| UI-09b | Rutina abdominal, día 2 | En día 1, pulsar “Comenzar día 1” | La rutina pasa al día 2 y muestra tablón 45 s, escalada de montaña 20 (10 por lado), elevaciones de piernas 25, toque al talón 20 (10 por lado), crunch de brazos estirados 22 y tablón final 40 s. |
| UI-09c | Rutina abdominal, día 3 | En día 2, pulsar “Comenzar día 2” | La rutina pasa al día 3 y muestra crunch abdominal 22, escalada de montaña 16 (8 por lado), abdominales 24, butt bridge 20, toque de talón 16, crunch de brazos estirados 24 y planchas laterales de 20 s por lado. Las planchas cuentan hacia atrás; las repeticiones muestran el cronómetro ascendente. |
| UI-09d | Rutina abdominal, día 4 | En día 3, pulsar “Comenzar día 3” | La rutina pasa al día 4 y muestra crunch abdominal 26, escalada de montaña 20 (10 por lado), crunch inverso 24, butt bridge 20, elevaciones de piernas 25, toque de talón 20 (10 por lado) y tablón de 45 s. El tablón cuenta hacia atrás; las repeticiones muestran el cronómetro ascendente. |
| UI-09e | Rutina abdominal, día 5 | En día 4, pulsar “Registrar día completado” | Aparece “Día de descanso” sin ejercicios ni temporizadores. Se puede registrar el descanso para continuar el reto. |
| UI-09f | Rutina abdominal, día 6 | En día 5, pulsar “Registrar día de descanso” | La rutina pasa al día 6 y muestra crunch abdominal 28, tablón 55 s, escalada de montaña 20 (10 por lado), butt bridge 15, elevaciones de piernas 25 y planchas laterales de 25 s por lado. Los temporizadores de las tres planchas cuentan hacia atrás. |
| UI-09g | Rutina abdominal, día 7 | En día 6, pulsar “Registrar día completado” | La rutina pasa al día 7 y muestra escalada de montaña 26 (13 por lado), crunch inverso 24, butt bridge 22, crunch de bicicleta 22, crunch de brazos estirados 26 y tablón de 50 s. El tablón cuenta hacia atrás; las repeticiones muestran el cronómetro ascendente. |
| UI-09h | Rutina abdominal, día 8 | En el calendario, seleccionar el día 8 | Aparecen tablón de 1 minuto, escalada de montaña 24 (12 por lado), crunch inverso 26, toque de talón 24 (12 por lado) y tablón final de 50 s. Ambos tablones tienen cuenta regresiva. |
| UI-10 | Historial de entrenamientos | Abrir “Entrenamientos” desde el menú | La sección muestra solamente el historial reciente; no ofrece un formulario de registro manual. |
| UI-11 | Alimentación | Agregar una comida con descripción | La comida aparece en el registro del día mientras la página siga abierta. |
| UI-12 | Objetivos | Guardar un objetivo con pesos válidos | Aparece el mensaje de confirmación. |
| UI-13 | Validación de objetivos | Intentar usar peso vacío o menor que el mínimo | La validación del navegador impide enviar el formulario. |
| UI-14 | Menú móvil | Reducir el ancho de la ventana y abrir/cerrar el menú | El menú alterna su estado y actualiza `aria-expanded`. |
| UI-15 | Cerrar sesión | Presionar “Cerrar sesión” y confirmar | Regresa a la pantalla de acceso. |

## Accesibilidad observada

- Formularios etiquetados, campos con tipo adecuado y validaciones nativas.
- Navegación principal con etiqueta accesible; botones con texto y estado actual de sección.
- Avisos mediante regiones `role="status"`/`aria-live` y menú móvil con `aria-expanded`.
- Para revisión manual con teclado, se puede recorrer con `Tab`, activar con `Enter` o `Espacio`, y comprobar que el foco sea visible.

## Alcance de los resultados

Las 71 pruebas automatizadas cubren API y entrega de archivos. La tabla UI-01–UI-15 es una guía de verificación manual para la sustentación en navegador; no se presenta como una ejecución automatizada. La aplicación es un prototipo de demostración: acceso, miembros, comidas y objetivos no se guardan en una base de datos.

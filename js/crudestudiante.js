function insertar() {
    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    estudiante = new Estudiante(cedula.value, nombres.value, apellidos.value);

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    estudiantes.push(estudiante);

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    console.log(estudiantes);
    cedula.value = "";
    nombres.value = "";
    apellidos.value = "";
    cedula.focus()
    nombres.focus()
    apellidos.focus()
}


function consultar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i].cedula == cedula.value) {

            nombres.value = estudiantes[i].nombre
            apellidos.value = estudiantes[i].apellido
            encontrado = true

        }

    }

}

function actualizar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i].cedula == cedula.value) {

            estudiantes[i].nombre = nombres.value
            estudiantes[i].apellido = apellidos.value
            encontrado = true

            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));


        }

    }

}

function elminar() {

}

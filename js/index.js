/* 
Se tiene de varios estudiantes su nombre, semestre y nota. 
También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados. 
*/

let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Andres', semestre: 6, nota: 17},
    {nombre: 'Ana', semestre: 7, nota: 19},
    {nombre: 'Alejandro', semestre: 6, nota: 12},
    {nombre: 'Maria', semestre: 8, nota: 9},
];

let nombresDeAprobados = (estudiantes) => {
    let estudiantesFiltrados = [];
    estudiantes.forEach((estudiante) => {
        if (estudiante.nota >= 10) estudiantesFiltrados.push(estudiante.nombre);
    });
    return estudiantesFiltrados;
}

let salida = document.getElementById('salida');
let estudiantesAprobados = nombresDeAprobados(estudiantes);
salida.innerHTML = `Estudiantes aprobados: <br>`;
estudiantesAprobados.forEach((estudiante) => {
    salida.innerHTML += `${estudiante} <br>`;
});
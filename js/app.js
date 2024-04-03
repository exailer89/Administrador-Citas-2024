// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#formulario-cita');

// Eventos
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomas.addEventListener('change', datosCita);
formulario.addEventListener('submit', submitCita);

// Objeto de Cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

function datosCita(e) {
    citaObj[e.target.name] = e.target.value; // Con e.target.name tomamos el name del target donde nos encontramos.
    console.log(citaObj);
}

function submitCita(e) {
    e.preventDefault();
    console.log('Submit al formulario...');
}
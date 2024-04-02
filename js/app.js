// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

// Objeto de Cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

// Eventos
pacienteInput.addEventListener('change', (event) => {
    citaObj.paciente = e.target.value; // e = evento | tarjet = campo donde estamos escribiendo | value = valor del campo donde estamos escribiendo.
});
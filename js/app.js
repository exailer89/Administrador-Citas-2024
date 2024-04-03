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
    citaObj[event.target.name] = event.target.value; // Con event.target.name tomamos el name del target donde nos encontramos.
    console.log(citaObj);
});

propietarioInput.addEventListener('change', (event) => {
    citaObj[event.target.name] = event.target.value; // Con event.target.name tomamos el name del target donde nos encontramos.
    console.log(citaObj);
});

emailInput.addEventListener('change', (event) => {
    citaObj[event.target.name] = event.target.value; // Con event.target.name tomamos el name del target donde nos encontramos.
    console.log(citaObj);
});

fechaInput.addEventListener('change', (event) => {
    citaObj[event.target.name] = event.target.value; // Con event.target.name tomamos el name del target donde nos encontramos.
    console.log(citaObj);
});

sintomas.addEventListener('change', (event) => {
    citaObj[event.target.name] = event.target.value; // Con event.target.name tomamos el name del target donde nos encontramos.
    console.log(citaObj);
});
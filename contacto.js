const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando';

   const serviceID = 'default_service';
   const templateID = 'template_8f4adip';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Enviado!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});




// const btn = document.getElementById('button');
// const form = document.getElementById('form');

// // Función para validar el formulario
// function validarFormulario() {
//   const inputs = form.querySelectorAll('input');
//   let formValido = true;

//   inputs.forEach(input => {
//     if (input.value.trim() === '') {
//       formValido = false;
//       return;
//     }
//   });

//   return formValido;
// }

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   if (!validarFormulario()) {
//     alert('Por favor, complete todos los campos.');
//     return;
//   }

//   btn.value = 'Enviando';

//   const serviceID = 'default_service';
//   const templateID = 'template_8f4adip';

//   emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Enviar';
//       alert('¡Enviado!');
//       form.reset();
//     }, (err) => {
//       btn.value = 'Enviar';
//       alert(JSON.stringify(err));
//     });
// });

// // Agregar un event listener a todos los campos de entrada para quitar la alerta cuando se completen
// const inputs = form.querySelectorAll('input');
// inputs.forEach(input => {
//   input.addEventListener('input', function() {
//     if (validarFormulario()) {
//       alert('¡Campos completos!');
//     }
//   });
// });

const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
var passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

export function validate(inputs) {
  const error = {};
  if (!regexUser.test(inputs.username)) {
    error.username = "Usuario debe ser email";
  } else if (!inputs.username) {
    error.username = "El usuario no debe estar vacio";
  } else if (inputs.username.length>35) {
    error.username = "usuario no mas de 35 caracteres"
  } else if (!passwordRegex.test(inputs.password)) {
    error.password = "Contraseña Incorrecta";

  }else if(inputs.password<6&& inputs.password>10){
    error.password='debe tener entre 6 y 10'
    
  }
  return error
}

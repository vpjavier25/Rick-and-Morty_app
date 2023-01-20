export default function validation (inputs){
    let err = {};
    let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(inputs.username === ''){
        err.username = 'Ingrese un usuario'
    } else if(!regExpEmail.test(inputs.username)){
        err.username = 'Email invalido'
    } else if(inputs.username.length > 35){
        err.username = 'Su nombre de usuario no puede tener mas de 35 caracteres'
    }
    
    if(!regExpPass.test(inputs.password)) err.password = 'Su contraseña debe tener entre 7 y 14 caracteres'

    return err;
}
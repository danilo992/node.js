function validar(login, senha) {
    if(login == "joel" && senha == "1234")
        return true;
    return false;
}

exports.validarUsuario = validar;
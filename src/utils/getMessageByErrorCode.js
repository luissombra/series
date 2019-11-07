const getMessageByErrorCode = (errorCode) => { 
    switch (errorCode) { 
        case 'auth/invalid-email': 
            return 'email inválido!' 
        case 'auth/user-disabled': 
            return 'conta desabilitada!' 
        case 'auth/invalid-credential': 
            return 'email ou senha inválido!' 
        case 'auth/wrong-password': 
            return 'senha incorreta!' 
        case 'auth/user-not-found': 
            return 'usuário não cadastrado!' 
        default: 
            return 'Ops.. ocorreu um erro inesperado :(' 
    } 
} 
 
export default getMessageByErrorCode
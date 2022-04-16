export function createUser(phone, email, password) {
    return {
        phone,
        email,
        password
    }
}

export function checkNotEmptyUserData(user){
    return (user.phone.length !== 0 &&
        user.email.length !== 0 &&
        user.password.length !== 0)
}

export function getUserById(){
    return createUser(null, null, null) //TODO
}
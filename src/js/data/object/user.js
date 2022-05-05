export function checkNotEmptyUserData(user){
    return (user.phone.length !== 0 &&
        user.email.length !== 0 &&
        user.password.length !== 0)
}
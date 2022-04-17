import {checkNotEmptyUserData, createUser} from "../data/object/user";
import {register} from "../data/repo/security";
import {registrationEmailInput, registrationPasswordInput, registrationPhoneInput} from "../main/app";

export function tryRegisterUser(event) {
    event.preventDefault()

    const phone = registrationPhoneInput.value
    const email = registrationEmailInput.value
    const password = registrationPasswordInput.value

    console.log('Try register user with email = ' + email + " and password = " + password)

    const user = createUser(phone, email, password)

    if(!checkNotEmptyUserData(user)){
        window.alert("Заполните все поля!")
        console.log("registration rejected")
        return
    }

    register(user).then(result => {
        window.alert(result)
        console.log("registration ended. Result = " + result)
    })
}
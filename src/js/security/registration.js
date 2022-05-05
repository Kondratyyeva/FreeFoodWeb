import {checkNotEmptyUserData, createUser} from "../data/object/user";
import {register, saveOrUpdateUserData} from "../data/repo/security";
import {registrationEmailInput, registrationPasswordInput, registrationPhoneInput} from "../main/app";

export function tryRegisterUser(event) {
    event.preventDefault()

    const phone = registrationPhoneInput.value
    const email = registrationEmailInput.value
    const password = registrationPasswordInput.value

    console.log('Try register user with email = ' + email + " and password = " + password)

    if( phone.length === 0 ||
        email.length === 0 ||
        password.length === 0 ){
        window.alert("Заполните все поля!")
        console.log("registration rejected")
        return
    }

    register(email, password).then(auth => {
        let resultMessage
        if(auth===true){
            resultMessage = "Registration success"
            saveOrUpdateUserData(
                email,
                phone,
                "null address",
                "null username"
            ).then(r => {})
        }
        else{
            resultMessage = "Registration error"
        }
        window.alert(resultMessage)
        console.log("registration ended. Result = " + resultMessage)
    })
}
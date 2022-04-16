import {checkNotEmptyUserData, createUser} from "../data/object/user";
import {register} from "../data/repo/security";

const registrationForm = document.getElementById('form_registration')
const phoneInput = document.getElementById('registration_phone_input')
const emailInput = document.getElementById('registration_email_input')
const passwordInput = document.getElementById('registration_password_input')
// const registrationButton = document.getElementById('registration_button')

console.log(registrationForm)
console.log(phoneInput)
console.log(emailInput)
console.log(passwordInput)
// console.log(registrationButton)

registrationForm.addEventListener('submit', tryRegisterUser)
// registrationButton.addEventListener('submit', tryRegisterUser)

function tryRegisterUser(event) {
    event.preventDefault()
    console.log('Try register user')

    const phone = phoneInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const user = createUser(phone, email, password)

    console.log(user)

    if(!checkNotEmptyUserData(user)){
        window.alert("Заполните все поля!")
        return
    }

    let resultMessage = register(user)
    //output message if registrtion was successful or not

    window.alert(resultMessage)
}
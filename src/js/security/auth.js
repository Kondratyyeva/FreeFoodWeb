import {authorize} from "../data/repo/security";

const authForm = document.getElementById('auth_form')
const authEmail = document.getElementById('auth_email')
const authPassword = document.getElementById('auth_password')

authForm.addEventListener('submit', tryAuthorize)

function tryAuthorize(event){
    // event.preventDefault()
    //
    // const email = authEmail.value
    // const pass = authPassword.value
    //
    // if(email.length === 0 || pass.length === 0){
    //     window.alert("Заполните все поля!")
    //     return
    // }
    // const authRequest = {email: email, password: pass}
    //
    // const authResult = authorize(authRequest)
    // if(!authResult.isSuccessful){
    //     window.alert(authResult.message)
    //     return
    // }
    //write message success or not auth
    //set cookie
    //redirect on main page
    // document.cookie
}
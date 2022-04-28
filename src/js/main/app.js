import '../../css/authorization.css'
import '../../css/index.css'
import '../../css/registration.css'
import '../../css/error.css'
import '../../css/help.css'
import '../../css/main-catalog.css'
import '../../css/personal-account.css'
import '../../css/favourite.css'

import {tryAuthorize, userExit} from "../security/auth";
import {tryRegisterUser} from "../security/registration";

console.log("App started")

window.addEventListener('load', loadVariables)

function loadVariables() {
    if(window.location.pathname === "/authorization.html"){
        loadAuth()
    }
    if(window.location.pathname === "/registration.html"){
        loadRegistration()
    }
    if(window.location.pathname === "/main-catalog.html"){
        loadMainCatalog()
    }
    if(window.location.pathname === "/personal-account.html"){
        loadPersonalAccount()
    }
    if(window.location.pathname === "/favourite.html"){
        loadFavourite()
    }
}

export let authForm
export let authEmail
export let authPassword

function loadAuth(){
    console.log("started loading auth variables")

    authForm = document.getElementById('auth_form')
    authEmail = document.getElementById('auth_email')
    authPassword = document.getElementById('auth_password')
    authForm.addEventListener('submit', tryAuthorize)

    console.log("ended loading auth variables")
}


export let registrationForm
export let registrationPhoneInput
export let registrationEmailInput
export let registrationPasswordInput

function loadRegistration(){
    console.log("started loading registration variables")

    registrationForm = document.getElementById('form_registration')
    registrationPhoneInput = document.getElementById('registration_phone_input')
    registrationEmailInput = document.getElementById('registration_email_input')
    registrationPasswordInput = document.getElementById('registration_password_input')
    registrationForm.addEventListener('submit', tryRegisterUser)

    console.log("ended loading registration variables")
}

export let exitButton

function loadMainCatalog(){
    console.log("started loading main-catalog variables")

    exitButton = document.getElementById("exit_button")
    exitButton.addEventListener('click', userExit)

    console.log("ended loading main-catalog variables")
}

function loadPersonalAccount(){

}

function loadFavourite(){

}
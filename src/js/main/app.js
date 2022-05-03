import '../../css/authorization.css'
import '../../css/index.css'
import '../../css/registration.css'
import '../../css/error.css'
import '../../css/help.css'
import '../../css/main-catalog.css'
import '../../css/personal-account.css'
import '../../css/favourite.css'
import '../../css/edit-personal-data.css'
import '../../css/edit-product.css'

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {tryAuthorize, userExit} from "../security/auth";
import {tryRegisterUser} from "../security/registration";
import {addPost, submitNewPost} from "./postAdding";
import {editUserData, userEditSubmit} from "./editUserData";
import {showUserDataOnPersonalAccountPage} from "./functions";

console.log("App started")

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9Kc2fhCk-uUFWJswk-G4WFTdftTGoEY4",
    authDomain: "free-food-web.firebaseapp.com",
    databaseURL: "https://free-food-web-default-rtdb.firebaseio.com",
    projectId: "free-food-web",
    storageBucket: "free-food-web.appspot.com",
    messagingSenderId: "552656208277",
    appId: "1:552656208277:web:f46e9651f4696039e5369c"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(firebaseApp);

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
    if(window.location.pathname === "/edit-personal-data.html"){
        loadEditUserData()
    }
    if(window.location.pathname === "/edit-product.html"){
        loadAddProduct()
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

export let editAccountButton
export let addPostButton

function loadPersonalAccount(){
    console.log("started loading personal account variables")

    showUserDataOnPersonalAccountPage()

    exitButton = document.getElementById("exit_button")
    exitButton.addEventListener('click', userExit)

    editAccountButton = document.getElementById("edit_account_button")
    editAccountButton.addEventListener('click', editUserData)

    addPostButton = document.getElementById("add_post_button")
    addPostButton.addEventListener('click', addPost)

    console.log("ended loading personal account variables")
}

function loadFavourite(){

}

export let submitNewPostButton
export let newPostNameForm
export let newPostDescriptionForm
export let newPostCommunicationWayForm
export let newPostStatusForm
export let newPostCategoryForm

function loadAddProduct(){
    console.log("started loading adding post variables")

    //forms + buttons

    submitNewPostButton =  document.getElementById("submit_new_post_button")
    submitNewPostButton.addEventListener('click', submitNewPost)

    let addingForm = document.getElementById("adding_new_product")

    newPostNameForm = addingForm.querySelector("#name")
    newPostDescriptionForm = addingForm.querySelector("#description")
    newPostCommunicationWayForm = addingForm.querySelector("#communication_way")
    newPostStatusForm = addingForm.querySelector("#status")
    newPostCategoryForm = addingForm.querySelector("#category")

    console.log("ended loading adding post variables")
}

export let userEditSubmitButton

function loadEditUserData(){
    console.log("started loading variables for editing user data")

    userEditSubmitButton = document.getElementById("submit_user_new_data")
    userEditSubmitButton.addEventListener('click', userEditSubmit)

    console.log("ended loading variables for editing user data")
}
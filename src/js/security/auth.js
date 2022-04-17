import {authorize, deleteUserEmailCookie, getUserEmailCookie, setUserEmailCookie} from "../data/repo/security";
import {authEmail, authPassword} from "../main/app";


export function tryAuthorize(event){
    event.preventDefault()

    const email = authEmail.value
    const pass = authPassword.value

    console.log("Trying authorize user with email = " + email + " and password = " + pass)

    if(email.length === 0 || pass.length === 0){
        window.alert("Заполните все поля!")
        console.log("auth rejected")
        return
    }
    const authRequest = {email: email, password: pass}

    authorize(authRequest)
        .then(authResult => {
            if(!authResult.isSuccessful){
                window.alert(authResult.message)
                console.log("auth rejected")
                return
            }
            console.log("auth was successful")
            setUserEmailCookie(authResult.email)
            window.location.href = 'main-catalog.html'
        })
}

export function userExit(event){
    console.log("user exit started")

    event.preventDefault()
    deleteUserEmailCookie()
    window.location.href = 'index.html'

    console.log("user exit ended")

}
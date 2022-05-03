import {getUserEmailCookie, saveOrUpdateUserData} from "../data/repo/security";

export function editUserData(event){
    event.preventDefault()
    window.location.href = 'edit-personal-data.html'
}

export function userEditSubmit(event){
    event.preventDefault()
    console.log("started editing user data")

    //getting data from forms
    let userDataForm = document.getElementById("editUserForm")
    let phoneField = userDataForm.querySelector("#phone")
    let addressField = userDataForm.querySelector("#address")
    let usernameField = userDataForm.querySelector("#username")

    //saving
    saveOrUpdateUserData(
        getUserEmailCookie(),
        phoneField.value,
        addressField.value,
        usernameField.value
    ).then(r => {
        //redirecting back
        console.log("end editing user data")
        window.location.href  = 'personal-account.html'
    })
}
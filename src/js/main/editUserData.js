import {getUserEmailCookie, saveOrUpdateUserData} from "../data/repo/security";
import {saveUserImage} from "../data/repo/userRepo";

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

    let userImage = document.getElementById("user_profile_image_loader")
    //console.log(userImage)
    //console.log(userImage.files)
    //console.log(userImage.files[0])

    //saving

    if(phoneField.value.length == 0 ||
        addressField.value.length == 0 ||
        usernameField.value.length == 0 ||
        userImage.files.length == 0){
        window.alert("ЗАПОЛНИТЕ ВСЕ ПОЛЯ!")
        return
    }

    saveUserImage(getUserEmailCookie(), userImage.files[0])

    saveOrUpdateUserData(
        getUserEmailCookie(),
        phoneField.value,
        addressField.value,
        usernameField.value
    ).then(r => {
        //redirecting back
        console.log("end editing user data")
        window.alert("Данные успешно изменены!")
        window.location.href  = 'personal-account.html'
    })
}
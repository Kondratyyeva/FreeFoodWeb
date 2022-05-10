import {getUserDataByEmail, getUserEmailCookie} from "../data/repo/security";
import {getUserImageURL} from "../data/repo/userRepo";

export function showUserDataOnPersonalAccountPage(){
    console.log("started changing user profile data")
    let name = document.getElementById("user_name")
    let phone = document.getElementById("user_phone")
    let email = document.getElementById("user_email")
    let address = document.getElementById("user_address")
    // let rate = document.getElementById("user_rate")

    let photo = document.getElementById("user_page_photo")
    getUserImageURL(getUserEmailCookie())
        .then(url => {
            console.log("user photo url: " + url)
            photo.style.backgroundImage = `url(${url})`
        })

    getUserDataByEmail(getUserEmailCookie())
        .then(userData => {
            console.log("got user data: ")
            console.log(userData)
            name.innerText = userData.username
            phone.innerText = userData.phone
            email.innerText = userData.email
            address.innerText = userData.address
            // rate.innerText = "rating undefined"
            console.log("ended changing user profile data")
        })
}
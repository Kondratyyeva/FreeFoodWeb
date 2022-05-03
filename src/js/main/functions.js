import {getUserDataByEmail, getUserEmailCookie} from "../data/repo/security";

export function showUserDataOnPersonalAccountPage(){
    console.log("started changing user profile data")
    let name = document.getElementById("user_name")
    let phone = document.getElementById("user_phone")
    let email = document.getElementById("user_email")
    let address = document.getElementById("user_address")
    let rate = document.getElementById("user_rate")
    getUserDataByEmail(getUserEmailCookie())
        .then(userData => {
            console.log("got user data: " + userData)
            name.innerText = userData.username
            phone.innerText = userData.phone
            email.innerText = userData.email
            address.innerText = userData.address
            rate.innerText = "rating undefined"
            console.log("ended changing user profile data")
        })
}
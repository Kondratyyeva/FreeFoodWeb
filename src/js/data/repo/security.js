const API_KEY = 'AIzaSyB9Kc2fhCk-uUFWJswk-G4WFTdftTGoEY4'

export function register(user){
    console.log("registration user with email: " + user.email)
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if('error' in data) return data.error.message
            else return "Registration was successful!"
        })
    //todo save (email -> phone)
}

export function authorize(authRequest){
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            email: authRequest.email,
            password: authRequest.password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if('error' in data){
                return {
                    isSuccessful: false,
                    message: data.error.message,
                    email: null
                }
            } else{
                return {
                    isSuccessful: true,
                    message: "authorized successful",
                    email: authRequest.email
                }
            }
        })
}

export function setUserEmailCookie(userEmail){
    document.cookie = `email=${userEmail}`
}

export function getUserEmailCookie(){
    let cookie = getCookie('email')
    return cookie === '0' ? undefined : cookie
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? matches[1] : undefined;
}

export function deleteUserEmailCookie(){
    document.cookie = 'email=0'
}


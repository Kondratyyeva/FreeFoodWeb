const API_KEY = 'AIzaSyB9Kc2fhCk-uUFWJswk-G4WFTdftTGoEY4'

export function register(
    email,
    password
){
    console.log("registration user with email: " + email)
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if('error' in data) return false
            else return true
        })
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

export function saveOrUpdateUserData(
    email,
    phone,
    address,
    username
){
    return deleteIfExistUser(email)
        .finally(result => {
            let userData = {
                email,
                phone,
                address,
                username
            }
            return fetch('https://free-food-web-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    )

}

function deleteIfExistUser(email){
    console.log("trying deleting user data with email = " + email)
    return getUserDataByEmail(email)
        .then(result => {
            if(result) {
                console.log("Got user data: " + JSON.stringify(result))
                return fetch('https://free-food-web-default-rtdb.firebaseio.com/users/'+result.id+".json", {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            else {
                console.log("such user data not presented yet")
            }
        })
}

function getAllUsers(){
    console.log("getting all users")
    return fetch('https://free-food-web-default-rtdb.firebaseio.com/users.json')
        .then(response => response.json())
        .then(response => {
            if (response && response.error) {
                null
            }
            let result = response ? Object.keys(response).map(key => ({
                ...response[key],
                id: key
            })) : []
            console.log(result)
            return result
        })
}

export function getUserDataByEmail(email){
    console.log("getting user data with email = " + email)
    return getAllUsers()
        .then(users =>{
            let result = users.filter(user => {
                return user.email === email
            })
            return result[0]
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


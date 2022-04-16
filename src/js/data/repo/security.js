export function register(user){
    console.log("registration user with email: " + user.email)
    return 'Registration rejected!'
}

export function authorize(authRequest){
    return {
        isSuccessful: true,
        message: "authorized successful",
        id: "123"
    }
    // return {  //todo if authorize was unseccessful
 //        isSuccessful: false,
    //     message: "wrond pass...",
    //     id: null
    // }
}


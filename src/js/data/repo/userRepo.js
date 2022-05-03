import {firebaseStorage} from "../../main/app";
import 'firebase/firestore';
import 'firebase/auth';
import {ref, uploadBytes, getDownloadURL  } from "firebase/storage";

export function saveUserImage(email, file){
    const metadata = {
        contentType: 'image/jpeg',
    };
    const storageRef = ref(firebaseStorage, `user/${email}.jpg`);
    uploadBytes(storageRef, file, metadata).then((snapshot) => {
        console.log('Uploaded an image for user with email: ' + email);
    });
}

export function getUserImageURL(email){
    return getDownloadURL(ref(firebaseStorage, `user/${email}.jpg`))
        .then((url) => {
            return url
        })
}
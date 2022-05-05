import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {firebaseStorage} from "../../main/app";

export function saveNewPost(
    ownerEmail,
    postName,
    description,
    status,
    address,
    communicationWay,
    category,
    file
){
    let post = {
        owner_email: ownerEmail,
        post_name: postName,
        description,
        status,
        address,
        communication_way: communicationWay,
        category,
        file
    }
    console.log(post)

    return fetch('https://free-food-web-default-rtdb.firebaseio.com/posts.json', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log("111")
            if('error' in result) return "couldn't upload new post"
            console.log(result)
            savePostImage(ownerEmail + "-" + postName, file)
        })
}

export function getAllPosts(){
    console.log("getting all posts")
    return fetch('https://free-food-web-default-rtdb.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(response => {
            if (response && response.error) {
                return null
            }
            let result = response ? Object.keys(response).map(key => ({
                ...response[key],
                id: key
            })) : []
            result.forEach(post => {
                post["image"] = getPostImageURL(post.owner_email + "-" + post.post_name)
            })
            console.log(result)
            return result
        })
}

export function getAllUsersPosts(email){
    return getAllPosts()
        .then(all => {
            let result = all.filter(post => {
                return post.owner_email === email
            })
            return result
        })
}

function savePostImage(postId, file){
    const metadata = {
        contentType: 'image/jpeg',
    };
    const storageRef = ref(firebaseStorage, `post/${postId}.jpg`);
    uploadBytes(storageRef, file, metadata).then((snapshot) => {
        console.log('Uploaded an image for post: ' + postId);
    });
}


function getPostImageURL(postId){
    return getDownloadURL(ref(firebaseStorage, `post/${postId}.jpg`))
        .then((url) => {
            return url
        })
}

//todo getting post by id, updating, deleting, getting by category
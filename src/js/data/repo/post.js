import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {firebaseStorage} from "../../main/app";
import {getUserDataByEmail} from "./security";

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
            if('error' in result) return "couldn't upload new post"
            return result.json()
        })
        .then(result => {
            console.log("saved new post with id: " + result.name)
            return savePostImage(result.name, file)
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
            return result
        })
        .then(posts => {
            console.log("trying to set images for posts:")
            console.log(posts)
            return Promise.all(
                posts.map(post => {
                    return getPostImageURL(post.id)
                        .then(url => {
                            let res = post
                            console.log("got url image for post: " + url)
                            res["image"] = url
                            return res
                        })
                })
            ).then(res => {
                console.log("ended setting image:")
                console.log(res)
                return res
            })
        })

}

export function deletePostById(postId){
    console.log("trying deleting post with id" + postId)
    return fetch('https://free-food-web-default-rtdb.firebaseio.com/posts/'+postId+".json", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function getAllUsersPosts(email){
    return getAllPosts()
        .then(all => {
            console.log(typeof all)
            console.log(all)
            console.log("GOT PROMISE ALL: " + all)
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
    return uploadBytes(storageRef, file, metadata).then((snapshot) => {
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
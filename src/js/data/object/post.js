import {savePostToRepo} from "../repo/post";

export function saveNewPost(
    ownerEmail,
    postName,
    description,
    status,
    address,
    communicationWay,
    category
){
    let post = {
        owner_email: ownerEmail,
        post_name: postName,
        description,
        status,
        address,
        communication_way: communicationWay,
        category
    }
    savePostToRepo(post)
}
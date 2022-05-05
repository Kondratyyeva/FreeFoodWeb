import {saveNewPost} from "../data/repo/post";
import {getUserEmailCookie} from "../data/repo/security";

export function addPost(event) {
    event.preventDefault()
    window.location.href = 'edit-product.html'
}

export function submitNewPost(event) {
    event.preventDefault()

    console.log("started saving new post")

    let newPostNameForm
    let newPostDescriptionForm
    let newPostCommunicationWayForm
    let newPostStatusForm
    let newPostCategoryForm
    let postAddress
    let postPhotoForm

    //getting forms

    let addingForm = document.getElementById("adding_new_product")

    newPostNameForm = addingForm.querySelector("#name")
    newPostDescriptionForm = addingForm.querySelector("#description")
    newPostCommunicationWayForm = addingForm.querySelector("#communication_way")
    newPostStatusForm = addingForm.querySelector("#status")
    newPostCategoryForm = addingForm.querySelector("#category")
    postAddress = addingForm.querySelector("#address")
    postPhotoForm = document.getElementById("new_post_photo_form")

    //saving post

    saveNewPost(
        getUserEmailCookie(),
        newPostNameForm.value,
        newPostDescriptionForm.value,
        newPostStatusForm.value,
        postAddress.value,
        newPostCommunicationWayForm.value,
        newPostCategoryForm.value,
        postPhotoForm.files[0]
    ).then( result => {
        console.log("ended saving new post result: " + result)
    })

    //redirecting back
    //window.location.href = 'personal-account.html'
}
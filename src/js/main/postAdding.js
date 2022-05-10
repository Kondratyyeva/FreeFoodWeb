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
    newPostCategoryForm = document.getElementById("product_form_category")
    postAddress = addingForm.querySelector("#address")
    postPhotoForm = document.getElementById("new_post_photo_form")

    //console.log(newPostCategoryForm.options[newPostCategoryForm.selectedIndex].value)

    if(newPostNameForm.value.length == 0 ||
        newPostDescriptionForm.value.length == 0 ||
        postAddress.value.length == 0 ||
        newPostCommunicationWayForm.value.length == 0 ||
        postPhotoForm.files.length == 0){
        window.alert("ЗАПОЛНИТЕ ВСЕ ПОЛЯ!")
        return
    }

    //saving post

    saveNewPost(
        getUserEmailCookie(),
        newPostNameForm.value,
        newPostDescriptionForm.value,
        "active",
        postAddress.value,
        newPostCommunicationWayForm.value,
        newPostCategoryForm.options[newPostCategoryForm.selectedIndex].value,
        postPhotoForm.files[0]
    ).then( result => {
        console.log("ended saving new post result:")
        console.log(result)
        window.alert("Объявление сохранено!")
        window.location.href = "personal-account.html"
    })

    //redirecting back
    //window.location.href = 'personal-account.html'
}
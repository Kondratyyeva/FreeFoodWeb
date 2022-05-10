import {deletePostById, getAllPosts, getAllUsersPosts} from "../data/repo/post";
import {getUserEmailCookie} from "../data/repo/security";
import {showUserDataOnPersonalAccountPage} from "./functions";

export function loadAllPostsOnMainPage(){
    console.log("started loading all users posts on main page")

    let posts = getAllPosts()
        .then(posts => {
            let html = posts.map(convertPostToHTMLForMain).join("\n")
            let mainCatalog = document.getElementById("main_catalog")
            mainCatalog.innerHTML = html



            console.log("ended loading all users posts on main page")
        })
}

export function loadAllPostsOnPersonalPage(){
    console.log("started loading all users posts on his page")

    let posts = getAllUsersPosts(getUserEmailCookie())
        .then(posts => {
            console.log(posts)
            let html = posts.map(convertPostToHTMLForPersonal).join("\n")
            console.log(html)
            let mainCatalog = document.getElementById("personal_catalog")
            mainCatalog.innerHTML = html

            let deleteBtns = document.querySelectorAll(".delete_post_button")
            console.log("got delete btns:")
            console.log(deleteBtns)
            deleteBtns.forEach(btn => {
                console.log("setted listener")
                btn.addEventListener('click', deletePost)
            })
            console.log("ended loading all users posts on his page")
        })
}

function deletePost(event){
    event.preventDefault()

    let ans = confirm("Удалить это объявление?")
    if(!ans) return

    console.log("got request to delete post with id: " + this.id)

    let postId = this.id

    deletePostById(postId)
        .then(result => {
            console.log("post deleted")
            loadAllPostsOnPersonalPage()
        })
}

function convertPostToHTMLForPersonal(post){
    return `
            <div class="catalog_container_item">

                    <div class="catalog_container_item_photo">
                        <img
                            class="catalog_container_item_photo"
                            src="${post.image}"
                            owner="${post.owner_email}"
                            post_name="${post.post_name}"
                        >
                    </div>
                    
                    <div class="item_data" >
                        <div class="item_data_name">Название: ${post.post_name}</div>
                        <div class="item_data_date">Описание: ${post.description}</div>
                        <div class="item_data_date">Категория: ${post.category}</div>
                        <div class="item_data_date">Адрес: ${post.address}</div>
                        <div class="item_data_date">Как связаться: ${post.communication_way}</div>
                    </div>
                    
                    <button class="delete_post_button" type="submit" id="${post.id}">Удалить</button>
            </div>`
}

function convertPostToHTMLForMain(post){
    return `
            <div class="catalog_container_item">

                    <div class="catalog_container_item_photo">
                        <img
                            class="catalog_container_item_photo"
                            src="${post.image}"
                            owner="${post.owner_email}"
                            post_name="${post.post_name}"
                        >
                    </div>
                    
                    <div class="item_data" >
                        <div class="item_data_name">Название: ${post.post_name}</div>
                        <div class="item_data_date">Описание: ${post.description}</div>
                        <div class="item_data_date">Категория: ${post.category}</div>
                        <div class="item_data_date">Адрес: ${post.address}</div>
                        <div class="item_data_date">Как связаться: ${post.communication_way}</div>
                    </div>
            </div>`
}

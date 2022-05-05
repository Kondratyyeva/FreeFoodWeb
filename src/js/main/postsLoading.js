import {getAllPosts, getAllUsersPosts} from "../data/repo/post";
import {getUserEmailCookie} from "../data/repo/security";

export function loadAllPostsOnMainPage(){
    // let posts = getAllPosts()
    // let html = posts.map(convertPostToHTML).join
    // let mainCatalog = document.getElementById("main_catalog")
    // mainCatalog.innerHTML = html
}

export function loadAllPostsOnPersonalPage(){
    console.log("started loading all users posts on his page")

    let posts = getAllUsersPosts(getUserEmailCookie())
        .then(posts => {
            console.log(posts)
            let html = posts.map(convertPostToHTML).join("\n")
            console.log(html)
            let mainCatalog = document.getElementById("personal_catalog")
            mainCatalog.innerHTML = html

            console.log("ended loading all users posts on his page")
        })
}

function convertPostToHTML(post){
    // return `<div class="catalog_container_item">
    //             <div class="catalog_container_item_photo"></div>
    //             <div class="catalog_container_item_data item_data">
    //              <style>
    //                  body {
    //                     background-image: url(${post.image}); /* Путь к фоновому изображению */
    //                  }
    //                 </style>
    //                 <div class="item_data_name">Название: ${post.post_name}</div>
    //                 <div class="item_data_date">Адресс: ${post.address}</div>
    //             </div>
    //         </div>`
    return `<div class="catalog_container_item">
                <div class="catalog_container_item_photo"></div>
                <div class="catalog_container_item_data item_data">
                    <div class="item_data_name">Название: ${post.post_name}</div>
                    <div class="item_data_date">Адресс: ${post.address}</div>
                </div>
            </div>`
}
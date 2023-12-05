// =====> Get Only User Posts <===
let myId;
function active(ele) {
    let selected = document.getElementsByClassName("active");
    for (element of selected) {
        element.classList.remove("active");
    }
    ele.classList.add("active");
}

// =====> Get All Posts <=====
function getPosts(myId) {
    let request = new XMLHttpRequest();
    request.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts?userId=" + myId
    );
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            // Remove Old Posts
            document.querySelector(".posts ").innerHTML = "";

            // Creat New Posts
            for (post of posts) {
                document.querySelector(".posts ").innerHTML += `
            <div class="post">
                <h2 class="title">${post.title}</h2>
                <hr class="post-hr" />
                <p class="body">${post.body}</p>
            </div>`;
            }
        } else {
            document.querySelector(
                ".posts "
            ).innerHTML = `<div class="post"> NotFound
            </div>`;
        }
    };
}

getPosts(myId);

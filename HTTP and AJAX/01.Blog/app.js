function attachEvents() {
    let buttonLoad = document.getElementById("btnLoadPosts");
    buttonLoad.addEventListener("click", loadInfo);

    let postsInfo = {};

    async function loadInfo(){

        let response = await fetch("http://localhost:3030/jsonstore/blog/posts");
        postsInfo = await response.json();

        Object.entries(postsInfo).forEach(postObj => {
            let option = document.createElement("option");
            option.value = postObj[0];
            option.textContent = postObj[1].title;

            document.getElementById("posts").appendChild(option);
        });
    }

    let buttonView = document.getElementById("btnViewPost");
    buttonView.addEventListener("click", loadComments);

    const postTitleH1 = document.getElementById("post-title");
    const postBodyP = document.getElementById("post-body");    
    const postCommentsUl = document.getElementById("post-comments");
    const postsSelect = document.getElementById("posts");

    async function loadComments(){
        postBodyP.innerHTML = "";
        postCommentsUl.innerHTML = "";
        
        const postId = postsSelect.value;        
        postBodyP.textContent = postsInfo[postId].body;
        postTitleH1.textContent = postsInfo[postId].title;      

        const response = await fetch("http://localhost:3030/jsonstore/blog/" + "comments");
        const allCommentsInfo = await response.json();
        
        const filteredComments = Object.values(allCommentsInfo).filter(x => x.postId === postId);                       
        filteredComments.forEach(comment => {
            const li = document.createElement("li");
            li.id = comment.id;
            li.textContent = comment.text;
            postCommentsUl.appendChild(li);
        })

    }
}

attachEvents();
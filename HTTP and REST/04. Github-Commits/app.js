function loadCommits() {
    let username = document.getElementById("username").value;
    let repository = document.getElementById("repo").value;
    let baseURL = `https://api.github.com/repos/${username}/${repository}/commits`;
    let unorderedList = document.getElementById("commits");
    
    unorderedList.innerHTML = "";

    fetch(baseURL)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Unexpected Error!`);
        }
        return response.json();
    })
    .then(data =>{
        data.forEach(commit => {
            let newLi = document.createElement("li");
            newLi.id = "commits";
            newLi.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;

            unorderedList.appendChild(newLi);
        });
    })
    .catch(error =>{
        let errorLi = document.createElement("li");
        errorLi.textContent = `Error: ${error.status} (Not Found)`
    });
}
function loadRepos() {
	let username = document.getElementById("username").value;
	let reposList = document.getElementById("repos");

	reposList.innerHTML = '';
	
	fetch(`https://api.github.com/users/${username}/repos`)
	.then(response =>{
		if(!response.ok){
			throw new Error("User not found or request failed!")
		}
		return response.json();
	})
	.then(data =>{
		data.forEach(repo => {
			let listItem = document.createElement("li");
			let repoLink = document.createElement("a");
			
			repoLink.textContent = repo.full_name;
			repoLink.href = repo.html_url;
			repoLink.target = "_blank"

			listItem.appendChild(repoLink);
			reposList.appendChild(listItem);
		});
	})
	.catch(error =>{
		let errorItem = document.createElement("li");
		errorItem.textContent = `Error: ${error.message}`;
		reposList.appendChild(errorItem);
	});
}
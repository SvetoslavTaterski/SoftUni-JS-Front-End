function loadRepos() {
   let baseURL = `https://api.github.com/users/testnakov/repos`

   fetch(baseURL)
   .then(response =>{
      if(!response.ok){
         throw new Error(`Network response was not OK!`)
      }
      return response.text();
   })
   .then(data =>{
      let result = document.getElementById("res");
      result.textContent = data;
   });
}
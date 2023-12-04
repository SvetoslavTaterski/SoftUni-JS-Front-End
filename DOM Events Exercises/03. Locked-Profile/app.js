function lockedProfile() {
    let profiles = document.getElementsByClassName("profile");

    Array.from(profiles).forEach(profile => {
        let button = profile.querySelector("button");
        button.addEventListener("click", showInfo);
    });

    function showInfo(event){
        let currentButton = event.target;
        let divProfile = currentButton.parentNode;
        
        if(divProfile.querySelectorAll("input")[1].checked){

            if(currentButton.textContent == "Show more"){
                divProfile.querySelector("div").style.display = "block";
                currentButton.textContent = "Hide it";
            }
            else if(currentButton.textContent == "Hide it"){
                divProfile.querySelector("div").style.display = "none";
                currentButton.textContent = "Show more";
            }

        }
    }
}
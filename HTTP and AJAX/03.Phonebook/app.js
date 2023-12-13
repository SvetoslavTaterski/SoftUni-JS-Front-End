function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/phonebook/";
    const buttonLoad = document.getElementById("btnLoad");
    const unorderedList = document.getElementById("phonebook");
    const inputPerson = document.getElementById("person");
    const inputPhone = document.getElementById("phone");
    const createButton = document.getElementById("btnCreate");

    buttonLoad.addEventListener("click", OnLoad);

    async function OnLoad(){
        let response = await fetch(baseURL);
        let phoneInfo = await response.json();

        unorderedList.innerHTML = "";
        
        Object.entries(phoneInfo).forEach(phone => {
            let newLi = document.createElement("li");
            newLi.textContent = `${phone[1].person}: ${phone[1].phone}`;
            newLi.id = phone[0];
            
            let newDeleteButton = document.createElement("button");
            newDeleteButton.textContent = "Delete";
            newDeleteButton.value = phone[1]._id;

            newDeleteButton.addEventListener("click", async(e) =>{
                let currentElementId = e.currentTarget.value;
                let currentElementParent = e.currentTarget.parentNode;
                unorderedList.removeChild(currentElementParent);
                
                let response = await fetch(baseURL + currentElementId, {
                    method : "DELETE",
                })
            })

            newLi.appendChild(newDeleteButton);
            
            unorderedList.appendChild(newLi);
        });
    }

    createButton.addEventListener("click", async() => {

        let newPhoneObj = {
            "person" : inputPerson.value,
            "phone" : inputPhone.value
        }

        inputPerson.value = "";
        inputPhone.value = "";

        let response = fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(newPhoneObj)
        })

        OnLoad();

    })

}

attachEvents();
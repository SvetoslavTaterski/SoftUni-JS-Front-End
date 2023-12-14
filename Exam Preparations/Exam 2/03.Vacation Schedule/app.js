window.addEventListener("load", solve);

async function solve(){
    const baseURL = "http://localhost:3030/jsonstore/tasks/";
    const loadButton = document.getElementById("load-vacations");
    const addButton = document.getElementById("add-vacation");
    const editButton = document.getElementById("edit-vacation");
    const divList = document.getElementById("list");
    const [nameInput,daysInput,dateInput] = document.getElementsByTagName("input");

    loadButton.addEventListener("click", loadData);

    addButton.addEventListener("click", addData);

    async function loadData(){

        let response = await fetch(baseURL);
        let vacantionData = await response.json();

        divList.innerHTML = "";

        for (const vacantion of Object.entries(vacantionData)) {
            let newDiv = document.createElement("div");
            newDiv.className = "container";

            let h2Name = document.createElement("h2");
            h2Name.textContent = vacantion[1].name;
            newDiv.appendChild(h2Name);

            let h3Date = document.createElement("h3");
            h3Date.textContent = vacantion[1].date;
            newDiv.appendChild(h3Date);

            let h3Days = document.createElement("h3");
            h3Days.textContent = vacantion[1].days;
            newDiv.appendChild(h3Days);

            let changeButton = document.createElement("button");
            changeButton.addEventListener("click", async(e) =>{
                let element = e.currentTarget.parentNode;
                element.remove();

                nameInput.value = vacantion[1].name;
                daysInput.value = vacantion[1].days;
                dateInput.value = vacantion[1].date;

                editButton.disabled = false;
                addButton.disabled = true;

                editButton.addEventListener("click", editInfo);

                async function editInfo(){
                    if(nameInput.value != "" && daysInput.value != "" && dateInput.value != ""){

                        let newObj = {
                            name : nameInput.value,
                            days : daysInput.value,
                            date : dateInput.value
                        }
    
                        fetch(baseURL + vacantion[1]._id, {
                            method : "PUT",
                            body : JSON.stringify(newObj)
                        });
    
                        nameInput.value = "";
                        daysInput.value = "";
                        dateInput.value = "";
    
                        loadData();
    
                        editButton.disabled = true;
                        addButton.disabled = false;
                    }
                }
                
            })
            changeButton.textContent = "Change";
            changeButton.className = "change-btn";
            newDiv.appendChild(changeButton);

            let doneButton = document.createElement("button");
            doneButton.addEventListener("click", async () => {
                await fetch(baseURL + vacantion[1]._id, {
                    method : "DELETE"
                });

                loadData();
            })
            doneButton.textContent = "Done";
            doneButton.className = "done-btn";
            newDiv.appendChild(doneButton);

            divList.appendChild(newDiv);
        }
    }

    async function addData(){

        if(nameInput.value != "" && daysInput.value != "" && dateInput.value != ""){

            let newObj = {
                name : nameInput.value,
                days : daysInput.value,
                date : dateInput.value
            }
    
            fetch(baseURL, {
                method : "POST",
                body : JSON.stringify(newObj)
            });

            loadData();
    
            nameInput.value = "";
            daysInput.value = "";
            dateInput.value = "";
    
        }
        
    }

}
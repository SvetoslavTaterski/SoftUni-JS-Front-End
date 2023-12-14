window.addEventListener("load", solve);

async function solve() {
    const baseURL = "http://localhost:3030/jsonstore/tasks/";
    const divList = document.getElementById("list");
    const loadButton = document.getElementById("load-history");
    const addButton = document.getElementById("add-weather");
    const editButton = document.getElementById("edit-weather");
    const [inputLocation,inputTemperature,inputDate] = 
    document.getElementsByTagName("input");

    
    loadButton.addEventListener("click", loadInfo);
    addButton.addEventListener("click",addInfo);
    
    async function loadInfo(){
        
        let response = await fetch(baseURL);
        let weatherInfos = await response.json();
        
        divList.innerHTML = "";
        
        for (const weatherInfo of Object.entries(weatherInfos)) 
        {
            let newDiv = document.createElement("div");
            newDiv.className = "container";
            
            let h2Name = document.createElement("h2");
            h2Name.textContent = weatherInfo[1].location;
            let h3Date = document.createElement("h3");
            h3Date.textContent = weatherInfo[1].date;
            let h3Temperature = document.createElement("h3");
            h3Temperature.textContent = weatherInfo[1].temperature;
            
            newDiv.appendChild(h2Name);
            newDiv.appendChild(h3Date);
            newDiv.appendChild(h3Temperature);
            
            let buttonsContainerDiv = document.createElement("div");
            buttonsContainerDiv.className = "buttons-container";
            
            let newChangeButton = document.createElement("button");
            newChangeButton.addEventListener("click", async(e) =>{
                let element = e.currentTarget.parentNode.parentNode;
                element.remove();
                
                inputLocation.value = weatherInfo[1].location;
                inputDate.value = weatherInfo[1].date;
                inputTemperature.value = weatherInfo[1].temperature;
                
                editButton.disabled = false;
                addButton.disabled = true;
                editButton.addEventListener("click", editInfo);

                async function editInfo(){

                    if(inputLocation.value != "" 
                        && inputDate.value != ""
                         && inputTemperature.value != "")
                    {
                        let newWeatherObj = {
                            location : inputLocation.value,
                            temperature : inputTemperature.value,
                            date : inputDate.value
                        }
            
                        fetch(baseURL + weatherInfo[1]._id, {
                            method : "PUT",
                            body : JSON.stringify(newWeatherObj)
                        })
            
                        inputLocation.value = '';
                        inputDate.value = '';
                        inputTemperature. value = '';
                
                        loadInfo();
            
                        editButton.disabled = true;
                        addButton.disabled = false;
                    }
                }

            })
            newChangeButton.textContent = "Change";
            newChangeButton.className = "change-btn";
            
            let newDeleteButton = document.createElement("button");
            newDeleteButton.addEventListener("click", async () => {
                
                await fetch(baseURL + weatherInfo[1]._id, {
                    method : "DELETE"
                })

                loadInfo();
            });
            newDeleteButton.textContent = "Delete";
            newDeleteButton.className = "delete-btn";
    
            buttonsContainerDiv.appendChild(newChangeButton);
            buttonsContainerDiv.appendChild(newDeleteButton);
    
            newDiv.appendChild(buttonsContainerDiv);
    
            divList.appendChild(newDiv);
        };
    }

    async function addInfo(){

        if(inputLocation.value != "" 
            && inputDate.value != ""
             && inputTemperature.value != "")
        {
            let weatherObj = {
                location : inputLocation.value,
                temperature : inputTemperature.value,
                date : inputDate.value
            }
    
            fetch(baseURL, {
                method : "POST",
                body : JSON.stringify(weatherObj)
            })
    
            inputLocation.value = '';
            inputDate.value = '';
            inputTemperature. value = '';
    
            loadInfo();
    
        }
        
    }

}
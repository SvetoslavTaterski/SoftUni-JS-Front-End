window.addEventListener("load", solve);

async function solve() {
    const loadButton = document.getElementById("load-meals");
    const addButton = document.getElementById("add-meal");
    const editButton = document.getElementById("edit-meal");
    const foodList = document.getElementById("list");
    const baseURL = "http://localhost:3030/jsonstore/tasks/";
    const [foodInput, timeInput, caloriesInput] =
    document.getElementsByTagName("input");

    loadButton.addEventListener("click", loadData);
    addButton.addEventListener("click", addData);

    async function loadData(){
        let response = await fetch(baseURL);
        let foodInfo = await response.json();

        foodList.innerHTML = "";

        for (const foodObj of Object.entries(foodInfo)) {
            let newDiv = document.createElement("div");
            newDiv.className = "meal";

            let h2FoodName = document.createElement("h2");
            h2FoodName.textContent = foodObj[1].food;
            newDiv.appendChild(h2FoodName);

            let h3Time = document.createElement("h3");
            h3Time.textContent = foodObj[1].time;
            newDiv.appendChild(h3Time);

            let h3Calories = document.createElement("h3");
            h3Calories.textContent = foodObj[1].calories;
            newDiv.appendChild(h3Calories);

            let newDivForButtons = document.createElement("div");
            newDivForButtons.id = "meal-buttons";
            newDiv.appendChild(newDivForButtons);

            let changeButton = document.createElement("button");
            changeButton.addEventListener("click", async (e) => {
                let element = e.currentTarget.parentNode.parentNode;
                element.remove();

                foodInput.value = h2FoodName.textContent;
                timeInput.value = h3Time.textContent;
                caloriesInput.value = h3Calories.textContent;

                addButton.disabled = true;
                editButton.disabled = false;

                editButton.addEventListener("click", async () =>{
                    let editedObj = {
                        food : foodInput.value,
                        time : timeInput.value,
                        calories : caloriesInput.value
                    };

                    await fetch(baseURL + foodObj[1]._id, {
                        method : "PUT",
                        body : JSON.stringify(editedObj)
                    });

                    loadData();

                    foodInput.value = "";
                    timeInput.value = "";
                    caloriesInput.value = "";

                    editButton.disabled = true;
                    addButton.disabled = false;
                });
            });
            changeButton.className = "change-meal";
            changeButton.textContent = "Change";
            newDivForButtons.appendChild(changeButton);

            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", async () => {

                await fetch(baseURL + foodObj[1]._id, {
                    method : "DELETE"
                })

                loadData();
            });
            deleteButton.className = "delete-meal";
            deleteButton.textContent = "Delete";
            newDivForButtons.appendChild(deleteButton);

            foodList.appendChild(newDiv);
        }
    }

    async function addData(){

        if(foodInput.value != "" && timeInput.value != "" && caloriesInput.value != ""){

            let newFoodObj = {
                food : foodInput.value,
                time : timeInput.value,
                calories : caloriesInput.value
            }
    
            await fetch(baseURL, {
                method : "POST",
                body : JSON.stringify(newFoodObj)
            })
    
            loadData();
    
            foodInput.value = "";
            timeInput.value = "";
            caloriesInput.value = "";
        }
        
    }
}
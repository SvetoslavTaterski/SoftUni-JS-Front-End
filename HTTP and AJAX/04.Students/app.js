async function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/collections/students/";
  const tableBody = document.getElementsByTagName("tbody")[0];
  const submitButton = document.getElementById("submit");
  const [firstNameInput,lastNameInput,facultyNumInput,gradeInput] =
   document.getElementsByTagName("input");

  let response = await fetch(baseURL);
  let studentInfo = await response.json();

  tableBody.innerHTML ="";

  LoadStudents();

  function LoadStudents(){
    Object.entries(studentInfo).forEach(student => {
      let newTr = document.createElement("tr");
  
      let newTdFirstName = document.createElement("td");
      newTdFirstName.textContent = student[1].firstName;
      newTr.appendChild(newTdFirstName);
  
      let newTdLastName = document.createElement("td");
      newTdLastName.textContent = student[1].lastName;
      newTr.appendChild(newTdLastName);
  
      let newTdFacultyNum = document.createElement("td");
      newTdFacultyNum.textContent = student[1].facultyNumber;
      newTr.appendChild(newTdFacultyNum);
  
      let newTdGrade = document.createElement("td");
      newTdGrade.textContent =student[1].grade;
      newTr.appendChild(newTdGrade);
  
      tableBody.appendChild(newTr);
    });
  }

  submitButton.addEventListener("click", async() =>{

    if(firstNameInput.value != "" && lastNameInput.value != ""
    && facultyNumInput.value != "" && gradeInput.value != ""){
      
      let newStudentObj = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        facultyNumber: facultyNumInput.value,
        grade: gradeInput.value
      }

      

      firstNameInput.value = "";
      lastNameInput.value = "";
      facultyNumInput.value = "";
      gradeInput.value = "";
  
      await fetch(baseURL,{
        method: "POST",
        body: JSON.stringify(newStudentObj)
      })


  
      LoadStudents();
    }

  });
}

attachEvents();
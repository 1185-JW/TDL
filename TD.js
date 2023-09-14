function taskAdd()
{
    const taskInput = document.getElementById("Inp");
    const taskText = taskInput.value.trim();

    if(taskText=="")
    {
        return ;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="sp1" id="sx1">${taskText}</span>
    <span class="delete-btn" onclick="deleteTask(this)">Delete</span> 
    <span class="edit-btn" onclick="ken(this)">Edit</span>
    `;

    taskList.appendChild(li);
        taskInput.value = "";
}



function deleteTask(deleteBtn)
 {
    //  const listItem = deleteBtn.parentElement;
    //  listItem.remove();  
     
       deleteBtn.parentElement.remove();
 }



 function ken(editBtn)
 {
    const CT = editBtn.parentElement.querySelector("span");
    const  newText = prompt("Edit the task: ");

    if(newText!==null && newText.trim()!=="")
    { CT.textContent = newText;}
 }




 function editTask(editBtn) {
        const listItem = editBtn.parentElement;
        const taskTextElement = listItem.querySelector("span");
        const currentText = taskTextElement.textContent;
    
        const newText = prompt("Edit the task:", currentText);
    
        if (newText !== null && newText.trim() !== "") {
            taskTextElement.textContent = newText;
        }
    }


    function E1(editBtn)
    {
        const L1 = editBtn.parentElement;
        const L2 = L1.querySelector("span");
        const L3 = L2.textContent;

        const NT = prompt("Enter new task :", L3);

        if(NT!==null && NT.trim()!=="")
        {
            L2.textContent = NT;
        }
    }
    
    
   
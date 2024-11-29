let todoInput = document.querySelector('#todoinput')
let addButton = document.querySelector('#addbtn')
let todoList = document.querySelector('#todolist')

addButton.addEventListener('click',()=>{
   const task = todoInput.value.trim()  // // Get input value and trim whitespace
   if(task){
   const li =  document.createElement('li')
   const span = document.createElement('span')
   span.textContent  = task;     //set task text
    li.appendChild(span)

// add adelete button
   const deleteBtn =  document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener('click', ()=>{
        todoList.removeChild(li)     // remove task
    })
    li.appendChild(deleteBtn)

    todoList.appendChild(li)
    todoInput.value = ""
   } else{
    alert('Please entre a task...')
   }
})


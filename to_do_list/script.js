const todo_lists = document.getElementById("todo-lists")

function AddTodo() {
    const input = document.querySelector("input")
    const new_todo = document.createElement("li")
    todo_lists.appendChild(new_todo)
    new_todo.innerHTML = input.value
    
    input.value = ""


    new_todo.addEventListener("click", () => {
        new_todo.style.textDecoration = "line-through"
    })
   
}
function getData(){
    axios.get("https://api.vschool.io/duc/todo/").then(function(response){
        console.log(response);
        listTodos(response.data);
    })
}

function listTodos(data){
    for(let i = 0; i < data.length; i++){
        var container = document.createElement("div");
        container.classList.add("todo");
        var title = document.createElement("h1");
        var description = document.createElement("h3")
        var status = document.createElement("p")
        
        title.textContent = data[i].title;
        description.textContent = data[i].description;
        status.textContent = data[i].completed;

        container.appendChild(title)
        container.appendChild(description)
        container.appendChild(status)

        document.getElementById("container").appendChild(container);
    }
}

var todoForm = document.toDoListForm;
todoForm.addEventListener("submit", function(event){
    event.prevenDefault();
    var newTitle = todoForm.addMore.value;
    var newTodoList = {}
    newTodoList.title = newTitle;
    axios.post("https://api.vschool.io/duc/todo/", newTodoList).then(function(response){
        console.log(response.data);
    })
})

getData()
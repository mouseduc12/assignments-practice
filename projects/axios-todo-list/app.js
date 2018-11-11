function getData(){
    axios.get("https://api.vschool.io/duc/todo/").then(function(response){
        console.log(response.data);
        listTodos(response.data);
    })
}

function listTodos(data){
    var container;
    var title;
    var description;
    var status;
    var deleteButton;
    var priceTag;
    var images;
    var checkBox;
    var editedButton;
    var formInput
    for(let i = 0; i < data.length; i++){
        todoId = data[i]._id
        container = document.createElement("div");
        container.classList.add("todo");
        title = document.createElement("h1");
        description = document.createElement("h3")
        status = document.createElement("p")
        deleteButton = document.createElement("button");
        priceTag = document.createElement("p")
        images = document.createElement("img");
        checkBox = document.createElement("input");
        editedButton = document.createElement("button")
        editedButton.classList.add("edited-button");
        editedButton.todoId = data[i]._id

        formInput = document.createElement("form");
        formInput.setAttribute("name", `${data[i]._id}`);
        formInput.setAttribute("id", "changeIt");
        editInputType = document.createElement("input")
        editInputType.setAttribute("type", "text")
        editInputType.setAttribute("name", "editInput")
        editDescription = document.createElement("textarea");
        editDescription.setAttribute("name", "newDescription")
        editPrice = document.createElement("input");
        editPrice.setAttribute("type", "number")
        editPrice.setAttribute("name", "newPrice")
        editImage = document.createElement("input")
        editImage.setAttribute("name", "newUrl")
        submitButton = document.createElement("button");
        submitButton.textContent = "Save"

        title.textContent = data[i].title;
        description.textContent = data[i].description;
        status.textContent = data[i].completed;
        priceTag.textContent = data[i].price;
        container.setAttribute("id", data[i]._id)
        images.setAttribute("src", data[i].imgUrl);
        checkBox.setAttribute("type", "checkbox")
        editedButton.textContent = "Edit";
        
        // editedButton.onclick = () => editContent(data[i]._id);
        deleteButton.addEventListener("click", function(){
            deleteBoxes(data[i]._id)
        })

        editedButton.addEventListener("click", function(){
            editContent(this)
        })
        deleteButton.textContent = "Delete";
    
        if(data[i].completed === true){
            container.classList.add("done")
        }

        checkBox.addEventListener("change", function(){
            checkboxes(data[i]._id)
        })
        
        formInput.appendChild(editInputType)
        formInput.appendChild(editDescription)
        formInput.appendChild(editPrice)
        formInput.appendChild(editImage)
        formInput.appendChild(submitButton)
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(priceTag)
        if(data[i].imgUrl){
            container.appendChild(images);        
        } else {
            console.log('Nothing here')
        }
        container.appendChild(status);
        container.appendChild(checkBox);
        container.appendChild(editedButton);
        container.appendChild(deleteButton);
        container.appendChild(formInput);
        document.getElementById("container").appendChild(container);

        formInput.addEventListener("submit", function(e){
            e.preventDefault();
            console.log(this.name)
            updateInput(this.name, this)
        })
    }
    
    function editContent(editBtn){
        for(let i = 0; i < editBtn.parentNode.children.length-1; i++){
            editBtn.parentNode.children[i].style.display = "none";
        }
        editBtn.parentNode.children[editBtn.parentNode.children.length-1].style.display = "block";
    }

}

var todoForm = document.toDoListForm;
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    var newTitle = todoForm.addMore.value;
    var newDescription = todoForm.description.value;
    var priceItem = todoForm.price.value;
    var newImg = todoForm.newImg.value;
    var newTodoList = {}
    newTodoList.title = newTitle;
    newTodoList.description = newDescription;
    newTodoList.price = priceItem;
    newTodoList.imgUrl = newImg;
    axios.post("https://api.vschool.io/duc/todo/", newTodoList).then(function(response){
        console.log(response.data);
    })
})

function updateInput(id, form){
    var newObj = {}
    if(form.editInput.value === ""){
    } else {
        newObj.title = form.editInput.value;
    }
    if(form.newDescription.value === ""){     
    } else {
        newObj.description = form.newDescription.value;
    }
    if(form.newPrice.value === ""){   
    } else {
        newObj.price = form.newPrice.value
    }
    if(form.newUrl.value  === ""){      
    } else {
        newObj.imgUrl= form.newUrl.value 
    }
    axios.put("https://api.vschool.io/duc/todo/"+id, newObj).then(function(res){
        console.log(res.data)
    })
}

function checkboxes(id){
    console.log(id);
         axios.get("https://api.vschool.io/duc/todo/"+ id).then(function(res){
            var complete = res.data.completed
            axios.put("https://api.vschool.io/duc/todo/"+ id, {completed: !complete})
    })
}

function deleteBoxes(id){
    console.log(id);
    axios.delete("https://api.vschool.io/duc/todo/"+ id).then(function(res){
        console.log("Delete successfully")
    })
}

getData()
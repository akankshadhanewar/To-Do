var tasks = []

function addTask(){
    t = document.getElementById("title").value
    d = document.getElementById("desc").value
    if(title == "" || desc == ""){
        alert("Please fill the title/description")
        return;
    }
    task = {title:t, desc:d}
    tasks.push(task)
    displayTask()
}

function displayTask(){
    tbody_data = "";
    for(i=0;i<tasks.length;i++){
        tbody_data = tbody_data+"<tr class='td_class'>";
        tbody_data = tbody_data+"<td>"+tasks[i].title+"</td>";
        tbody_data = tbody_data+"<td>"+tasks[i].desciption+"</td>";
        tbody_data = tbody_data+'<td><button onclick="Delete('+i+')">Delete</button>&nbsp; <button onclick="mark('+i+')">Mark</button>&nbsp; <button onclick="unmark('+i+')">Unmark</button></td>';
        tbody_data = tbody_data+"</tr>";
    }
    document.getElementById("tbody").innerHTML = tbody_data;
}

function Delete(task){
    tasks.splice(task,1)
    displayTask();
}

function mark(task){
    t = document.getElementsByClassName("td_class")
    t[task].style.backgroundColor = "red"
}

function unmark(task){
    t = document.getElementsByClassName("td_class")
    t[task].style.backgroundColor = "#f5f5dc"
}


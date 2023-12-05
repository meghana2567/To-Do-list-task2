const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item and span
        const li = document.createElement("li");
        li.textContent = inputBox.value;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";

        
        li.appendChild(span);
        listContainer.appendChild(li);
    }

    
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function (e) {
    
    if (e.target.tagName === "LI") {
        
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
       
        e.target.parentElement.remove();
    }

    // Save data to local storage
    saveData();
}, false);

// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Initial call to show tasks when the page loads
showTask();

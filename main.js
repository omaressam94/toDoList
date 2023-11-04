let theInput = document.querySelector(".add-task input");
let theAddBtn = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".task-content");
let noTaskMsg = document.querySelector(".no-task-message");
let taskCounts = document.querySelector(".task-counts span");
let taskCompleted = document.querySelector(".task-completed span");

window.onload = function () {
    theInput.focus();
};

theAddBtn.onclick = function () {

    if (theInput.value == "") {
        console.log("no value");
    } else {

        noTaskMsg.remove();

        // create span elemnt
        let mainSpan = document.createElement("span");

        // create delete elemnt
        let deleteElement = document.createElement("span");

        // creat text for span
        let text = document.createTextNode(theInput.value);
        // create text for delete
        let deleteText = document.createTextNode("Delete");

        // add text to span
        mainSpan.appendChild(text);
        // add className to span
        mainSpan.className = "task-box"

        // add delete text to delete elemnt

        deleteElement.appendChild(deleteText);
        //add delete class to delete elemnt
        deleteElement.className = "delete";

        // add delete button to main span

        mainSpan.appendChild(deleteElement);
        // add main span to task container

        taskContainer.appendChild(mainSpan);

        // empty the input value

        theInput.value = " ";
        // focus on field
        theInput.focus();
    }
};

document.addEventListener("click", function (e) {

    if (e.target.className == "delete") {
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains("task-box")) {

        e.target.classList.toggle("finished");
    }

})

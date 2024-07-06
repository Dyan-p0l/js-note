const del_icon = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#ffffff" width="20" height="40" viewBox="0 0 30 30"> <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path></svg>';

const input_el = document.getElementById("input-add");

input_el.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        document.getElementById("add-button").click();
    }
});

let notesCounter = 0;
const maxNote = 5;


function makeNote() {
    if (input_el.value == "") {
        return;
    }
    
    const note = input_el.value;

    const newdiv = document.createElement("div");

    const check  = document.createElement("input");
    check.type = "checkbox";
    check.addEventListener("change", function(){
        if (check.checked) {
            newNote.style.textDecoration = "line-through";
        }
        else {
            newNote.style.textDecoration  = "none";
        }
    })


    const del = document.createElement("button");
    del.textContent = "Delete";
    del.innerHTML = del_icon;
    del.className = "button-del";
    del.onclick = function() {
        newdiv.remove();
        notesCounter--;
        updateAddButtonState();
    }

    var newNote = document.createElement("p");
    newNote.textContent = note;

    document.getElementById("notes").appendChild(newdiv);

    newdiv.appendChild(check);
    newdiv.appendChild(newNote);
    newdiv.appendChild(del);
    
    input_el.value = "";
    notesCounter++;

    updateAddButtonState();
    console.log(notesCounter);
}

function updateAddButtonState() {
    if (notesCounter >= maxNote) {
        document.getElementById("add-button").disabled = true;
    }
    else {
        document.getElementById("add-button").disabled = false;
    }
}

function checkingCheck(check) {
    if (check.checked) {
        return true;
    }
    else{
        return false;
    }
}


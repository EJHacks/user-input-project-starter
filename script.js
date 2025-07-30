let displayTitle = document.querySelector("#main_title");
let title = document.querySelector("#title_input");
let button = document.querySelector("button");
let result = document.querySelector("#story_result");
let fields = document.querySelectorAll(".adlib input");
let container = document.querySelector(".form_container");

title.oninput = function() {
    displayTitle.innerHTML = title.value;
};

button.onclick = function(event) {
    event.preventDefault();  

    
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            alert("Please enter all the fields!");
            return false; 
        }
    }

    
    container.style.display = "none";

    
    let resultHTML = "<h2>Your Story</h2><p>";

    fields.forEach(field => {
        resultHTML += field.value + " ";
    });
    resultHTML += "</p>";

    result.innerHTML = resultHTML;

    return true;
};



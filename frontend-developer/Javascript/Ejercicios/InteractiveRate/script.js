var buttons = document.getElementsByClassName("button");
const form = document.querySelector('.submit-button');
let userValue = 0;


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', saveValue, false);
}

if (form){
    form.addEventListener('submit', submitResponse, false);
}


function saveValue() {
    switch(this.id){
        case "feedback-rate1":
            userValue = 1;
            break;
        case "feedback-rate2":
            userValue = 2;
            break;
        case "feedback-rate3":
            userValue = 3;
            break;
        case "feedback-rate4":
            userValue = 4;
            break;
        case "feedback-rate5":
            userValue = 5;
            break;
    }
    console.log(userValue);
    return userValue;
}

function submitResponse(event){
    event.preventDefault();
    location.href = "response.html";
}
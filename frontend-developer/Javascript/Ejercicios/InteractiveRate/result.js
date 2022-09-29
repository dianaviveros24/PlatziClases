let response = document.getElementById('response');

window.onload = function showResult(){
    console.log(userValue);

    switch(userValue){
        case 1:
            response.innerText = 'You select ' + userValue + ' out of 5';
            break;
        case 2:
            response.innerText = 'You select ' + userValue + ' out of 5';
            break;
        case 3:
            response.innerText = 'You select ' + userValue + ' out of 5';
            break;
        case 4:
            response.innerText = 'You select ' + userValue + ' out of 5';
            break;
        case 5:
            response.innerText = 'You select ' + userValue + ' out of 5';
            break;
    }
    console.log(userValue);

}


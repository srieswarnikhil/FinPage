let element = document.querySelector(".bar-item");
let menuEl = document.querySelector(".menu");

element.onclick = function() {
    menuEl.classList.toggle("active");

}

let customerInformationEl = document.getElementById("customerInformation");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let messageEl = document.getElementById("message");
let messageErrMsgEl = document.getElementById("messageErrMsg");


nameEl.addEventListener('blur', function(event) {
    if (event.target.value === "" || event.target.value === null) {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});

messageEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        messageErrMsgEl.textContent = "Required*";
    } else {
        messageErrMsgEl.textContent = "";
    }
});

customerInformationEl.addEventListener("submit", function(event) {
    event.preventDefault();

});
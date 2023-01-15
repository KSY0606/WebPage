const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const hidden_classname = "hidden";
const username_key = "username";


function loginBtnClick(info) {
    info.preventDefault();
    loginForm.classList.add(hidden_classname);
    const usernameWrite = loginInput.value;
    localStorage.setItem(username_key, usernameWrite);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(username_key);
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(hidden_classname);
}

const savedUsername = localStorage.getItem(username_key);

if(savedUsername === null) {
    // show form
    loginForm.classList.remove(hidden_classname);
    loginForm.addEventListener("submit", loginBtnClick);
} else {
    // show greeting
    paintGreetings();
}
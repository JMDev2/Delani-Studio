let form = document.querySelector(".form");
let userName = document.querySelector("#username");
let userEmail = document.querySelector("#email");
let userDate = document.querySelector("#date");
let userPassword = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userGender = form.gender.value;
    console.log(` 
        ${userName.value}
        ${userEmail.value}
        ${userGender}
        ${userDate.value}
        ${userPassword.value}
    `);
});

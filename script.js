let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formsection = document.querySelector(".form-section");

signup.addEventListener("click", () =>{
    slider.classList.add("moveslider");
    formsection.classList.add("form-section-move");
})

login.addEventListener("click", () =>{
    slider.classList.remove("moveslider");
    formsection.classList.remove("form-section-move");
})

window.addEventListener("load", function () {
    const input = document.querySelectorAll(".contact-form-input");
    const inputNumber = document.querySelectorAll(".contact-form-number");

    input.forEach(element => {
        element.addEventListener("focus", function(){
            inputNumber[element.dataset.index].classList.add("contact-form-number--active");
        })
        element.addEventListener("focusout", function(){
            inputNumber[element.dataset.index].classList.remove("contact-form-number--active");
        })
    })

})
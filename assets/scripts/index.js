window.addEventListener("load", function () {
    const input = document.querySelectorAll(".contact-form-input");
    const inputNumber = document.querySelectorAll(".contact-form-number");

    input.forEach(element => {
        element.addEventListener("focus", function () {
            inputNumber[element.dataset.index].classList.add("contact-form-number--active");
        })
        element.addEventListener("focusout", function () {
            inputNumber[element.dataset.index].classList.remove("contact-form-number--active");
        })
    })

    // ANIMATION ON SCROLL
    gsap.registerPlugin(ScrollTrigger);



    // Competence title
    const animationCompetenceSlash0 = document.querySelector(".gsap-competence-slash-0");
    const animationCompetenceTitleContent0 = document.querySelector(".gsap-competence-title-content-0");

    gsap.to(".gsap-competence-slash-0", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-0",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceSlash0.classList.add("reset-transform")
            },

        },
    })
    gsap.to(".gsap-competence-title-content-0", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-0",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceTitleContent0.classList.add("reset-transform--delay")
            },

        },
    })


    const animationCompetenceSlash1 = document.querySelector(".gsap-competence-slash-1");
    const animationCompetenceTitleContent1 = document.querySelector(".gsap-competence-title-content-1");
    gsap.to(".gsap-competence-slash-1", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-1",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceSlash1.classList.add("reset-transform")
            },

        },
    })
    gsap.to(".gsap-competence-title-content-1", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-1",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceTitleContent1.classList.add("reset-transform--delay")
            },

        },
    })

    const animationCompetenceSlash2 = document.querySelector(".gsap-competence-slash-2");
    const animationCompetenceTitleContent2 = document.querySelector(".gsap-competence-title-content-2");
    gsap.to(".gsap-competence-slash-2", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-2",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceSlash2.classList.add("reset-transform")
            },

        },
    })
    gsap.to(".gsap-competence-title-content-2", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-2",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceTitleContent2.classList.add("reset-transform--delay")
            },

        },
    })

    const animationCompetenceSlash3 = document.querySelector(".gsap-competence-slash-3");
    const animationCompetenceTitleContent3 = document.querySelector(".gsap-competence-title-content-3");
    gsap.to(".gsap-competence-slash-3", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-3",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceSlash3.classList.add("reset-transform")
            },

        },
    })
    gsap.to(".gsap-competence-title-content-3", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-3",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceTitleContent3.classList.add("reset-transform--delay");
            },

        },
    })


    const animationCompetenceSlash4 = document.querySelector(".gsap-competence-slash-4");
    const animationCompetenceTitleContent4 = document.querySelector(".gsap-competence-title-content-4");
    gsap.to(".gsap-competence-slash-4", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-4",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceSlash4.classList.add("reset-transform")
            },
            

        },
    })
    gsap.to(".gsap-competence-title-content-4", {
        scrollTrigger: {
            trigger: ".gsap-competence-title-4",
            start: "100% 70%",
            markers: false,
            onEnter: () => {
                animationCompetenceTitleContent4.classList.add("reset-transform--delay")
            },

        },
    })



    // WHITE MODE
    const whiteMode = gsap.utils.toArray(".white-mode")
    const body = document.querySelector("body");

    whiteMode.forEach(element =>{
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 30%",
                end:"bottom 30%",
                markers: false,
                onEnter: () => { //Add white mode
                    body.classList.add("white-mode--var");

                },
                onEnterBack: () => { //Add white mode
                    body.classList.add("white-mode--var");
                
                },
                onLeave: () => { //Add dark mode
                    body.classList.remove("white-mode--var");
                },
                onLeaveBack: () => { //Add dark mode
                    body.classList.remove("white-mode--var");
        
                }
            }
        })
    })

    // Competence paragraphe

    



})
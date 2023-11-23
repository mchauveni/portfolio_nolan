window.addEventListener('load', () => {
  const competenceContent = document.querySelectorAll(".text-line");

  competenceContent.forEach(element => {

    let words = element.innerText.split(" ");

    element.innerHTML = "";

    words.forEach(word => {
      let characters = word.split("");
      characters.forEach(character => {
        element.innerHTML += '<span class="character-split">' + character + "</span>";
      })

      element.innerHTML += " ";
    })
  })

  // ANIMATION ON SCROLL
  gsap.registerPlugin(ScrollTrigger);

  let characters = gsap.utils.toArray(".character-split")

    gsap.to(".character-split", {
      yPercent: "100%",
      opacity: 0.2,
      stragger: 0.2,
      delay: 0.5
    })
})
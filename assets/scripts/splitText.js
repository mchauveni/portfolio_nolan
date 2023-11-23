function diviserEnLignes(paragrapheId) {
    var paragraphe = document.getElementById(paragrapheId);
    var texte = paragraphe.innerHTML;
    var largeurParagraphe = paragraphe.offsetWidth;
    var mots = texte.split(' ');
    var ligneCourante = '';
    var lignes = [];
  
    for (var i = 0; i < mots.length; i++) {
      var mot = mots[i];
      var ligneTest = ligneCourante + ' ' + mot;
      var largeurTest = getWidth(ligneTest);
  
      if (largeurTest <= largeurParagraphe) {
        ligneCourante = ligneTest.trim();
      } else {
        lignes.push(ligneCourante);
        ligneCourante = mot;
      }
    }
  
    // Ajouter la dernière ligne
    lignes.push(ligneCourante);
  
    // Mettre à jour le paragraphe avec les lignes
    paragraphe.innerHTML = lignes.join('<br>');
    
    let arr = paragraphe.innerHTML.split("<br>");
  
  paragraphe.innerHTML = null;
  
  arr.forEach((e, k) => {
     paragraphe.innerHTML += `<span class="line-container"><span class="line-content">${e}</span></span>`
  });
  }
  
  // Fonction pour obtenir la largeur du texte
  function getWidth(texte) {
    var canvas = document.createElement('canvas');
    var contexte = canvas.getContext('2d');
    contexte.font = getComputedStyle(document.body).font;
    var largeur = contexte.measureText(texte).width;
    return largeur;
  }
  
  // Utilisation

  const competenceContent = document.querySelectorAll(".competence-text");

  competenceContent.forEach( element => {
    diviserEnLignes(element);
  })
  
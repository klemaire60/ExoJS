var txt = "Nouveau texte";

function modifText(txt) {
    alert("Je vais modifier les div");
    
    document.getElementsByClassName("nom").innerText = txt;

}

modifText(txt);
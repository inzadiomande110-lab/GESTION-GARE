// LES VARIABLE


// pour le bouton
const btn = document.getElementById("reserver");
const restaurerBtn = document.getElementById("restaurer");

// retaure la page lorsqu'on clique sur restaurer 
if (restaurerBtn) {
  restaurerBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

if (btn) {
// pour le depart et la destination
const depart = document.getElementById("depart");
const destination = document.getElementById("destination");
// pour le nombre de places
const nombrePlacesInput = document.getElementById("nbr-place");
// pour le message d'erreur
const message = document.querySelector(".message");
// pour le message de réservation
const reserve = document.querySelector(".reserve");
// pour le tarif et le nombre de places restantes
const tarifElement = document.getElementById("tarif");
const placesElement = document.getElementById("place-rest");

// initialisation des variables pour le nombre de places restantes et le tarif total
let placesRestantes = 100;
let tarifTotal = 0;


// événement lorsque le bouton est cliqué
btn.addEventListener("click", () => {
  const nombrePlaces = Number(nombrePlacesInput.value);
  message.style.visibility = "hidden";
  // si le départ et la destination sont identiques, afficher un message d'erreur
  if (depart.value === destination.value) {
    message.textContent = "Le départ et la destination ne peuvent pas être identiques.";
    message.style.visibility = "visible";
    return;
  }
 
  // si le nombre de places demandé est supérieur au nombre de places restantes, afficher un message d'erreur
  if (nombrePlaces > placesRestantes) {
    message.textContent = `Il ne reste que ${placesRestantes} place(s).`;
    message.style.visibility = "visible";
    return;
  }
  
  // les tarifUnitaire en fonction du départ et de la destination
  let tarifUnitaire;
  if (depart.value === "abidjan" && destination.value === "bouake") {
    tarifUnitaire = 6000;
  } else if (depart.value === "abidjan" && destination.value === "korhogo") {
    tarifUnitaire = 13000;
  } else if (depart.value === "abidjan" && destination.value === "bamako") {
    tarifUnitaire = 30000;
  } else if (depart.value === "bouake" && destination.value === "korhogo") {
    tarifUnitaire = 7000;
  } else if (depart.value === "bouake" && destination.value === "bamako") {
    tarifUnitaire = 25000;
  } else if (depart.value === "korhogo" && destination.value === "bamako") {
    tarifUnitaire = 17000;
  } else {
    // le message de trajet non disponible
    message.textContent = "Ce trajet n'est pas encore disponible à la réservation.";
    message.style.visibility = "visible";
    return;
  }
  
  // décremente le nombre de places restantes et mettre à jour le tarif total en fonction du nombre de places réservées
  placesRestantes = 100 - nombrePlaces;
  tarifTotal = tarifUnitaire * nombrePlaces;

  // afficher le tarif total et le nombre de places restantes
  tarifElement.textContent = `${tarifTotal.toLocaleString("fr-FR")} FCFA`;
  placesElement.textContent = placesRestantes;
  nombrePlacesInput.max = placesRestantes;
  reserve.style.visibility = "visible";
});
}

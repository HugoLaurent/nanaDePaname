document.addEventListener("wheel", function(event) {
    // Empêche le comportement par défaut de l'événement de la molette de la souris

  
    // Récupère la quantité de défilement horizontal de la souris
    var delta = event.deltaX || event.deltaY;
  
    // Sélectionne l'élément principal de la page (body ou html)
    var element = document.scrollingElement || document.documentElement;
  
    // Fait défiler horizontalement la page en utilisant la propriété scrollLeft de l'élément sélectionné
    element.scrollLeft -= delta;
  });
  
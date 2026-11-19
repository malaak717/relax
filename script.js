function filterCards(category) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        if (card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    document.getElementById("discover").scrollIntoView({
        behavior: "smooth"
    });
}


function showAll() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.style.display = "block";
    });

    document.getElementById("discover").scrollIntoView({
        behavior: "smooth"
    });
}
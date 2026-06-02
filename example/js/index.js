const coffeeMenuElem = document.querySelector("#coffee-menu");

async function getCoffeeMenu() {
  const response = await fetch(
    "https://airbean-9pcyw.ondigitalocean.app/api/beans",
  ); // Anropar API:et och väntar på ett svar, svaret hamnar i variabeln response
  const coffeeMenu = await response.json(); // Gör om svaret till ett Javascript-objekt och sparar i variabeln data
  console.log("Svar: ", coffeeMenu);

  for (let i = 0; i < coffeeMenu.menu.length; i++) {
    const coffeeItem = coffeeMenu.menu[i];
    const coffeeItemElem = document.createElement("p");
    coffeeItemElem.textContent =
      "Titel: " + coffeeItem.title + " Pris: " + coffeeItem.price + " kr";

    console.log(coffeeItemElem);
    coffeeMenuElem.appendChild(coffeeItemElem); // Lägger till vår skapade p-tagg (coffeeItemElem) och lägger till den i vår section som finns redan i HTML-dokumentet
  }
}

getCoffeeMenu();

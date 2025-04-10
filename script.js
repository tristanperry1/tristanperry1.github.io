let data =
[
  {"title":  "Escape from Tarkov", "developer":  "Battlestate games", "price": 39.99, "image":  "images/game1.jpg"},
  {"title":  "Rust", "developer":  "Facepunch", "price": 39.99, "image":  "images/game2.jpg"},
  {"title":  "Dark Souls", "developer":  "From Software", "price": 39.99, "image":  "images/game3.jpg"}
];

window.onload = function() {
    console.log(data)
    const container = document.getElementById("media-container-1");
    const objects = data.map(object => new Media(object.title, object.developer, object.price, object.image));

    objects.forEach(object => {
        const game = object.displayImage();
        container.appendChild(game);
    });
}

console.log(data[1]["title"])

class Media {
    #price;

    constructor(title, developer, price, image) {
        this.title = title;
        this.developer = developer;
        this.price = price;
        this.image = image;

    }

    toString() {
        return `${this. title} costs ${this.price} and is made by ${this.developer}`
    }

    displayImage() {
        const container = document.createElement("div");
        container.className = "game-container";

        const image = document.createElement("img");
        image.src = this.image;

        const price = document.createElement("p");
        price.textContent = this.price;


        const title = document.createElement("h2");
        title.textContent = this.title;

        const developer = document.createElement("p");
        developer.textContent = this.developer;



        container.appendChild(image);
        container.appendChild(title);
        container.appendChild(developer);
        container.appendChild(price);
        console.log("displayImage()")
        return container;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price < 0 ? 0: price;
    }
}
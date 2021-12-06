const data = {
  mainTitle: "My Favourite Footballers",
  cardContents: [
    {
      name: "Cristiano Ronaldo",
      imageLink:
        "https://res.cloudinary.com/dpdltezhg/image/upload/v1638807797/cr7_yaoqft.jpg",
    },
    {
      name: "Marcus Rashford",
      imageLink:
        "https://res.cloudinary.com/dpdltezhg/image/upload/v1638807797/mr10_bxe3cb.jpg",
    },
    {
      name: "David De Gea",
      imageLink:
        "https://res.cloudinary.com/dpdltezhg/image/upload/v1638807795/d1_f279rj.jpg",
    },
    {
      name: "Alex Morgan",
      imageLink:
        "https://res.cloudinary.com/dpdltezhg/image/upload/v1638807795/am13_ofprvz.jpg",
    },
  ],
  userData: { name: "Shivam Bale", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);

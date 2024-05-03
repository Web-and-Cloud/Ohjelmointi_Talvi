//Taulukko joka sisältää muistikortit
const cardArray = [
    {
    name: "fries",
    img: "img/fries.png"
    },
    {
    name: "cheeseburger",
    img: "img/cheeseburger.png"
    },

    {
    name: "hotdog",
    img: "img/hotdog.png"
    },
    
    {
    name: "ice-cream",
    img: "img/ice-cream.png"
    },
    {
    name: "milkshake",
    img: "img/milkshake.png"
    },
    {
    name: "pizza",
    img: "img/pizza.png"
    }
               
];

console.log(cardArray);

cardArray.push(...cardArray);

console.log(cardArray)

//Sekoitetaan kortit

// cardArray.sort(function(){return 0.5-Math.random()});
cardArray.sort(() => 0.5-Math.random());

console.log(cardArray);

const grid = document.querySelector(".grid");
const result = document.querySelector("#result");
const imgs = document.querySelectorAll("img");

let cardChochen = [];
let cardChochenId = [];
let cardsWon = [];

//Tarkistetaan osumat

function checkForMatch(){

    alert("Käänsit kaksi kortia");
    return;

    const optionOneId = cardChochenId[0];
    const optionTwoId = cardChochenId[1];

    if(cardChochenId[0] == cardChochenId[1]){
        imgs[optionOneId].setAttribute('src', 'img/blank.png');
        alert("Klikkasit samaa kuvaa kahdesti");  
    } else if (cardChochen[0] === cardChochen[1]){
        alert("Loysi Partit")
        imgs[optionOneId].setAttribute('src', 'img/white.png');
        imgs[optionTwoId].setAttribute('src', 'img/white.png');

        imgs[optionOneId].onclick = null;
        imgs[optionTwoId].onclick = null;


        cardsWon.push[cardChochen]
    } else {
        imgs[optionOneId].setAttribute('src', 'img/blank.png');
        imgs[optionTwoId].setAttribute('src', 'img/blank.png');
        alert("Et löytänyt paria")
    }

    cardChochen = [];
    cardChochenId = [];
    result.innerHTML = cardsWon.length;

    if(cardsWon.length === cardArray.length/2){
        result.innerHTML = "onneksi";
    }
}

for(let i = 0; i< imgs.length; i++){
    imgs[i].onclick = () => {
       imgs[i].setAttribute("src",cardArray[i].img);
       //console.log(img[i]);
       cardChochen.push(cardArray[i].name);
       cardChochenId.push(imgs[i].getAttribute('data-id'));
       console.log(cardChochen);
       console.log(cardChochenId);
       if(cardChochen.length === 2){
       setTimeout(checkForMatch(), 500);
       }
    }
}


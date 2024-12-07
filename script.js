// Mockade bildata
const cars = [
  {
    id: "1",
    name: "Toyota Yaris",
    image: "./assets/images/yaris.jpg",
    description: "Manuell - Vinterdäck ingår - Sportstolar, kolfiberpaneler, rallyanpassat chassi.",
    price: "150000",
    year: "2022"
  },
  {
    id: "2",
    name: "Bugatti Chiron",
    image: "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg",
    description: "Automat - Vinterdäck ingår inte - Läderklädsel, kolfiberdetaljer, avancerad aerodynamik.",
    price: "30000000",
    year: "2022"
  },
  {
      id: "3",
      name: "Bugatti Veyron",
      image: "https://hips.hearstapps.com/hmg-prod/images/bugatti-chiron-sport-mid-engined-w16-engine-exclusive-news-photo-1600704674.jpg?crop=1xw:0.99951xh;center,top&resize=980:*",
      description: "Automat - Vinterdäck ingår inte - Exklusiv interiör, aktiv spoiler, fyrhjulsdrift.",
      price: "25000000",
      year: "2023"
    },
  {
    id: "4",
    name: "Lamborghini Huracan",
    image: "./assets/images/lambo.jpg",
    description: "Automat - Vinterdäck ingår - Sportavgassystem, Alcantara-klädsel, keramiska bromsar.",
    price: "25000000",
    year: "2019"
  },
  {
      id: "5",
      name: "Koenigsegg Agera RS",
      image: "https://www.europeanprestige.co.uk/blobs/stock/579/images/b16d88a1-ab4f-4c16-b0b5-a224aa6986ac/hi4a9713.jpg",
      description: "Manuell - Vinterdäck ingår inte - Luftfjädring, kolfiberkaross, specialanpassad spoiler.",
      price: "25000000",
      year: "2020"
    },
  {
      id: "6",
      name: "Aston Martin",
      image: "https://hips.hearstapps.com/hmg-prod/images/mac01637-1659386919.jpg?crop=0.794xw:0.795xh;0.157xw,0.0751xh&resize=980:*",
      description: "Automat - Vinterdäck ingår - Träpaneler, Bang & Olufsen ljudsystem, adaptiv fjädring.",
      price: "20000000",
      year: "2021"
    },
    {
      id: "7",
      name: "Lamborghini Aventador",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg",
      description: "Automat - Vinterdäck ingår inte - Gullwing-dörrar, keramiska bromsar, aerodynamisk diffuser.",
      price: "25000000",
      year: "2023"
    },
    {
      id: "8",
      name: "Ford Mustang",
      image: "assets/images/mustang.jpg",
      description: "Eleanor - Manuell - Vinterdäck ingår - Klassiska sportstolar, LED-ljuspaket, ljudsystem från Bang & Olufsen.",
      price: "25000000",
      year: "1976"
    },
    {
      id: "9",
      name: "Tesla Cybertruck",
      image: "https://www.greendrive-accessories.com/blog/wp-content/uploads/2024/01/Tesla-Cybertruck-Towing-Prowess-and-Range-Revelations.png",
      description: "Minecraft car - Automat - Vinterdäck ingår - Heltäckande LED-strålkastare, glaspansardäck, autopilot.",
      price: "25000000",
      year: "2021"
    },
];

const getCarIdFromUrl = () => {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get("id");
};

const displayCarInfo = () => {
const carId = getCarIdFromUrl();
const car = cars.find((c) => c.id === carId);

if (car) {
  document.getElementById("car-info").innerHTML = `
    <h1>${car.name}</h1>
    <img src="${car.image}" alt="${car.name}" style="max-width: 100%; height: auto;">
    <p>${car.description}</p>
    <p><strong>Pris:</strong> ${car.price.toLocaleString()} SEK</p>
    <p><strong>År:</strong> ${car.year}</p>
  `;

  document.getElementById("principle").value = car.price;
} else {
  document.getElementById("car-info").innerHTML = `<p>Car not found.</p>`;
}
};

displayCarInfo();
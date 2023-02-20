const url = "https://randomuser.me/api/";

const fetchUser = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.results[0];
};

const person = fetchUser(url); // Guardar la promesa en una variable

// Manipular la promesa más adelante
person
  .then((user) => {
    const name = document.querySelector("#name");
    name.innerHTML = `${user.name.first} ${user.name.last}`;

    const image = document.querySelector("#profile-image");
    image.src = user.picture.large;

    const age = document.querySelector("#age");
    age.innerHTML = `${user.dob.date.slice(0, 10)} (Edad:  ${user.dob.age})`;

    const email = document.querySelector("#email");
    email.innerHTML = user.email;

    const address = document.querySelector("#address");
    address.innerHTML = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

    const phone = document.querySelector("#phone");
    phone.innerHTML = user.phone + " - " + user.cell;
  })
  .catch((error) => console.error(error));

const showText = (text, button) => {
  // si el evento está visible, ocultarlo y cambiar la variable de estado

  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block";
    button.textContent = "^";
  } else {
    text.style.display = "none";
    button.textContent = "˅";
  }
};

const button1 = document.getElementById("button-animation1");
const text1 = document.getElementById("texto1");

const button2 = document.getElementById("button-animation2");
const text2 = document.getElementById("texto2");

const button3 = document.getElementById("button-animation3");
const text3 = document.getElementById("texto3");

const button4 = document.getElementById("button-animation4");
const text4 = document.getElementById("texto4");

// agregar controlador de eventos de clic al botón
button1.addEventListener("click", () => showText(text1, button1));
button2.addEventListener("click", () => showText(text2, button2));
button3.addEventListener("click", () => showText(text3, button3));
button4.addEventListener("click", () => showText(text4, button4));

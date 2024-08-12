// Back to top button
let mybtn = document.getElementById("mybtn");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    mybtn.style.opacity = 1;
  } else {
    mybtn.style.opacity = 0;
  }
};
function goTop() {
  document.documentElement.scrollTop = 0;
}

//First slider

const blocs = document.querySelector(".blocs");
const ssblocs = document.querySelectorAll(".sblocs");
const blocSize = document.querySelectorAll(".sblocs").length;
const blocWidth = document.querySelector(".sblocs").offsetWidth;
const prevbtn = document.getElementById("precedent");
const svtbtn = document.getElementById("suivant");

let indice = 0;

prevbtn.addEventListener("click", () => {
  indice--;
  if (indice < 0) {
    indice = blocSize - 1;
  }
  updateBloc();
});
svtbtn.addEventListener("click", () => {
  indice++;
  if (indice > blocSize - 1) {
    indice = 0;
  }
  updateBloc();
});

function updateBloc() {
  const translateX = indice * blocWidth;
  ssblocs.forEach((sblocs) => {
    sblocs.style.transform = `translateX(${translateX}px)`;
   
  });
   const currentBloc = ssblocs[indice];
    currentBloc.style.display = `flex`;
  blocdisplay = blocs[indice];
}
updateBloc();

// let indice = 0;
// function changeSlide(sens) {

//   const blocs = document.querySelector(".blocs");
//   const bloc = document.querySelectorAll(".sblocs");
//   const blocSize = document.querySelectorAll(".sblocs").length;
//   const blocWidth = document.querySelector(".sblocs").offsetWidth;

//   indice = indice + sens;
//    if (indice >  bloc.length - 1) indice = 0;
//    if (indice < 0) indice = bloc.length - 1;

//   blocs.style.transform = `translateX(${indice * blocWidth}px)`;

// }

//second slider
let index = 0;
function changeSlided(sens) {
  const blocsd = document.querySelector(".blocsd");
  const blocd = document.querySelector(".blocd");
  const blocdSize = document.querySelectorAll(".blocd").length;
  const blocdWidth = document.querySelector(".blocd").offsetWidth;

  index = index + sens;
  if (index < 0) index = blocdSize - 4;

  if (index > blocdSize - 4) index = 0;
  blocsd.style.transform = `translateX(${4 * (index * blocdWidth)}px)`;
}

//form
const form = document.getElementById("contact");
const input1 = document.getElementById("email");
const input2 = document.getElementById("tel");
const input3 = document.getElementById("message");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form_verify();
});

//form verify
function form_verify() {
  const input1Value = input1.value.trim();
  const input2Value = input2.value.trim();
  const input3Value = input3.value.trim();

  //verify input1 field
  if (input1Value === "") {
    let message = "Veuillez remplir le champ";
    set_Error(input1, message);
  } else if (!input1Value.match(/^[a-zA-Z0-9_+&-]+@gmail+\.com$/)) {
    let message = "Votre addresse email n'est pas valide";
    set_Error(input1, message);
  } else {
    set_Success(input1);
  }

  //verify input2 field

  if (input2Value === "") {
    let message = "Veuillez remplir le champ";
    set_Error(input2, message);
  } else if (!input2Value.match(/^\+[0-9]{3,20}$/)) {
    let message = "Ce champ n'est pas valide";
    set_Error(input2, message);
  } else {
    set_Success(input2);
  }
  if (input3Value === "") {
    let message = "Veuillez remplir le champ";
    set_Error(input3, message);
  } else {
    let letterNum = input3Value.length;
    if (letterNum < 10) {
      let message = "Le message doit contenir au moins 10 lettres";
      set_Error(input3, message);
    } else {
      set_Success(input3);
    }
  }
}
//function to show error in the form
function set_Error(input, message) {
  const pinput = input.parentElement;
  const small = pinput.querySelector("small");

  //classes which we style
  pinput.className = "pinput error";

  //attribute the necessely message
  small.innerText = message;
}
//function to show success in the form
function set_Success(input) {
  pinput = input.parentElement;

  //classes which we style
  pinput.className = "pinput success";
}

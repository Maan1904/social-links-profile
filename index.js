const buttonsDiv = document.querySelector(".buttons");

const personImg = document.querySelector(".img");
const personName = document.querySelector(".name");
const personAdress = document.querySelector(".london");
const personJob = document.querySelector(".job");
//arrays
const buttons = [
  "github",
  "Frontend mentor",
  "Linkedln",
  "Twitter",
  "Instagram",
  "yusuf",
];
//object
const personInfo = {
  name: "Jessica Randall",
  address: "London, united kingdom",
  job: "Front-end developer and avid reader.",
  img: "./images/avatar-jessica.jpeg",
};

buttons.forEach((cuurentBtn) => {
  //   console.log(cuurentBtn);
  displayButtons(cuurentBtn);
});

//functions
function displayButtons(cuurentBtn) {
  buttonsDiv.innerHTML += `
          <button class="btn">${cuurentBtn}</button>
  `;
}
const Randall = document.querySelectorAll(".btn");

//html kood ku qoran la soo qabtay waxaana lagu shubay object js yaalo
function displayPersonInfo() {
  personName.textContent = personInfo.name;
  personAdress.textContent = personInfo.address;
  personJob.textContent = personInfo.job;
  personImg.src = personInfo.img;
}
displayPersonInfo();

function clickBtn() {
  console.log("clicked");
}

Randall.forEach((current) => {
  current.addEventListener("click", clickBtn);
});

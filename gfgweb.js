
let heada = document.querySelectorAll(".ha");

let changeheada = (event) => {
    event.target.style.backgroundColor = "#b5b1b1";
    
};

let resetheada = (event) => {
    event.target.style.backgroundColor = "#FFFFFF";
    event.target.style.color = "black";
};


heada.forEach((element) => {
    element.addEventListener("mouseover", changeheada);
    element.addEventListener("mouseout", resetheada);
});



let button1 = document.querySelector(".but1");
let changeButton1 = (event) => {
    event.target.setAttribute("class", "jsbut1");
};
button1.addEventListener("click", changeButton1);

let sec1a = document.querySelector(".sec1a");
let changeSec1a = (event) => {
    event.target.setAttribute("class", "jssec1a");
};
let resetSec1a = (event) => {
    event.target.setAttribute("class", "sec1a");
};
sec1a.addEventListener("mouseover", changeSec1a);
sec1a.addEventListener("mouseout", resetSec1a);

let button2 = document.querySelector(".but2");
let changeButton2 = (event) => {
    event.target.setAttribute("class", "jsbut2");
};
button2.addEventListener("click", changeButton2);

let div1 = document.querySelectorAll(".d1");

let changediv1 = (event) => {
    event.target.classList.add("jsd1");
};

let resetdiv1 = (event) => {
    event.target.classList.remove("jsd1");
};


div1.forEach((element) => {
    element.addEventListener("mouseover", changediv1);
    element.addEventListener("mouseout", resetdiv1);
});
let sec3ank = document.querySelectorAll(".ank");

let changesec3ank = (event) => {
    event.target.setAttribute("class", "jsank");
};

let resetsec3ank = (event) => {
    event.target.setAttribute("class", "ank");
};


sec3ank.forEach((element) => {
    element.addEventListener("mouseover", changesec3ank);
    element.addEventListener("mouseout", resetsec3ank);
});
let sec4ank2 = document.querySelectorAll(".ank2");

let changesec4ank2 = (event) => {
    event.target.setAttribute("class", "jsank2");
};

let resetsec4ank2 = (event) => {
    event.target.setAttribute("class", "ank2");
};


sec4ank2.forEach((element) => {
    element.addEventListener("mouseover", changesec4ank2);
    element.addEventListener("mouseout", resetsec4ank2);
});

let footh6 = document.querySelectorAll("h6");

let changefooth6 = (event) => {
    event.target.style.backgroundColor="#d1d2d2";
};

let resetfooth6 = (event) => {
    event.target.style.backgroundColor="white";
};


footh6.forEach((element) => {
    element.addEventListener("mouseover", changefooth6);
    element.addEventListener("mouseout", resetfooth6);
});

let sec4di1= document.querySelectorAll(".di1");

let changesec4di1 = (event) => {
    event.target.setAttribute("class", "jsdi1");
};

let resetsec4di1 = (event) => {
    event.target.setAttribute("class", "di1");
};


sec4di1.forEach((element) => {
    element.addEventListener("mouseover", changesec4di1);
    element.addEventListener("mouseout", resetsec4di1);
});
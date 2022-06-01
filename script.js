var sectionOneCounter = 0;

var navOpen = "none";

let bannerButtonOne = document.getElementById("banner-button-1");

let bannerButtonTwo = document.getElementById("banner-button-2");

let bannerButtonThree = document.getElementById("banner-button-3");

let mainBanner = document.getElementById("main-banner");

let sectionOne = document.getElementById("section-one");

let body = document.body;

let navbar = document.getElementById("navbar");

let model = document.getElementById("models-menu");

let custom = document.getElementById("custom-menu");

let own = document.getElementById("own-menu");

let motor = document.getElementById("motor-menu");

let navButtonOne = document.getElementById("nav-button-1");

let navButtonTwo = document.getElementById("nav-button-2");

let navButtonThree = document.getElementById("nav-button-3");

let navButtonFour = document.getElementById("nav-button-4");

function changeBackground1() {
  
  mainBanner.innerText = "UNLOCK ANY ROAD";
  
  if (sectionOneCounter == 0) {
  
  document.getElementById("banner-button-1").classList.remove("banner-button-on");
  
  document.getElementById("banner-button-1").classList.add("banner-button-off");
  
  document.getElementById("banner-button-2").classList.remove("banner-button-off");
  
  document.getElementById("banner-button-2").classList.add("banner-button-on");
    
    sectionOneCounter = 1;
    
  } else if (sectionOneCounter == 2) {
    
    document.getElementById("banner-button-3").classList.remove("banner-button-on");
  
  document.getElementById("banner-button-3").classList.add("banner-button-off");
  
  document.getElementById("banner-button-2").classList.remove("banner-button-off");
  
  document.getElementById("banner-button-2").classList.add("banner-button-on");
    
    sectionOneCounter = 1;
    
  };
  
};

function changeBackground2() {
  
  
  
  mainBanner.innerText = "TAKE ALL YOUR SOULS TO DRIVE";
  
  if (sectionOneCounter == 1) {
  
  document.getElementById("banner-button-2").classList.remove("banner-button-on");
  
  document.getElementById("banner-button-2").classList.add("banner-button-off");
  
  document.getElementById("banner-button-3").classList.remove("banner-button-off");
  
  document.getElementById("banner-button-3").classList.add("banner-button-on");
    
    sectionOneCounter = 2;
    
  } else if (sectionOneCounter == 0) {
    
    document.getElementById("banner-button-1").classList.remove("banner-button-on");
  
  document.getElementById("banner-button-1").classList.add("banner-button-off");
  
  document.getElementById("banner-button-3").classList.remove("banner-button-off");
  
  document.getElementById("banner-button-3").classList.add("banner-button-on");
    
    sectionOneCounter = 2;
    
  };
  
};

function changeBackground3() {
  
  
  
  mainBanner.innerText = "IT TAKES TIME TO BECOME TIMELESS";
  
  if (sectionOneCounter == 2) {
  
  document.getElementById("banner-button-3").classList.remove("banner-button-on");
  
  document.getElementById("banner-button-3").classList.add("banner-button-off");
  
  document.getElementById("banner-button-1").classList.remove("banner-button-off");
  
  document.getElementById("banner-button-1").classList.add("banner-button-on");
    
    sectionOneCounter = 0;
    
  } else if (sectionOneCounter == 1) {
    
    document.getElementById("banner-button-2").classList.remove("banner-button-on");
  
  document.getElementById("banner-button-2").classList.add("banner-button-off");
  
  document.getElementById("banner-button-1").classList.remove("banner-button-off");
  
  document.getElementById("banner-button-1").classList.add("banner-button-on");
    
    sectionOneCounter = 0;
    
  };
  
};

function bannerAnimation1() {
  
  mainBanner.style.animationName = "slide-one-banner";
  
  mainBanner.style.animationDuration = "1000ms";
  
  mainBanner.style.animationIterationCount = 1;
  
  mainBanner.style.animationDelay = "1000ms";
  
  mainBanner.style.animationFillMode = "forwards";
  
  mainBanner.style.animationTimingFunction = "cubic-bezier(0.2, 0.9, 0.3, 0.99)";
  
  sectionOne.style.animationName = "section-white-1";
  
  sectionOne.style.animationDuration = "1000ms";
  
  sectionOne.style.animationIterationCount = 1;
  
  sectionOne.style.animationFillMode = "forwards";
  
}

function bannerAnimation2() {
  
  mainBanner.style.animationName = "slide-two-banner";
  
  mainBanner.style.animationDuration = "1000ms";
  
  mainBanner.style.animationIterationCount = 1;
  
  mainBanner.style.animationDelay = "1000ms";
  
  mainBanner.style.animationFillMode = "forwards";
  
  mainBanner.style.animationTimingFunction = "cubic-bezier(0.2, 0.9, 0.3, 0.99)";
  
  sectionOne.style.animationName = "section-white-2";
  
  sectionOne.style.animationDuration = "1000ms";
  
  sectionOne.style.animationIterationCount = 1;
  
  sectionOne.style.animationFillMode = "forwards";
  
}

function bannerAnimation3() {
  
  mainBanner.style.animationName = "slide-three-banner";
  
  mainBanner.style.animationDuration = "1000ms";
  
  mainBanner.style.animationIterationCount = 1;
  
  mainBanner.style.animationDelay = "1000ms";
  
  mainBanner.style.animationFillMode = "forwards";
  
  mainBanner.style.animationTimingFunction = "cubic-bezier(0.2, 0.9, 0.3, 0.99)";
  
  sectionOne.style.animationName = "section-white-3";
  
  sectionOne.style.animationDuration = "1000ms";
  
  sectionOne.style.animationIterationCount = 1;
  
  sectionOne.style.animationFillMode = "forwards";
  
}

function modelDrop() {
  
  if (navOpen == "motor") {
  
  navbar.style.animationName = "nav-butt-1-fromMotor";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 1;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
  
  navOpen = "models";
    
    console.log(navOpen);
    
  } else if (navOpen == "own") {
    
  navbar.style.animationName = "nav-butt-1-fromOwn";
    
    navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 1;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
  
  navOpen = "models";
    
    console.log(navOpen);
    
       
  } else if (navOpen == "custom") {
    
    navbar.style.animationName = "nav-butt-1-fromCustom";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 1;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
  
  navOpen = "models";
    
    console.log(navOpen);
    
    
  } else if ( navOpen == "models") {
    
    console.log("BOOBSZ!");
    
  } else {
    
    navbar.style.animationName = "nav-butt-1";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 1;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
  
  navOpen = "models";
    
    console.log(navOpen);
    
     
  };
  
};

function customDrop() {
  
  if (navOpen == "models") {
  
  navbar.style.animationName = "nav-butt-2-fromModel";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 1;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
    
    navOpen = "custom"; 
    
    console.log(navOpen);
    
    
  } else if (navOpen == "own") {
    
    navbar.style.animationName = "nav-butt-2-fromOwn";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 1;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
    
    navOpen = "custom"; 
    
    console.log(navOpen);
    
    
  } else if (navOpen == "motor") {
    
    navbar.style.animationName = "nav-butt-2-fromMotor";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 1;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
    
    navOpen = "custom"; 
    
    console.log(navOpen);
    
    
  } else if ( navOpen == "custom") {
    
    console.log("BOOBSZ!");
    
  } else {
    
    navbar.style.animationName = "nav-butt-2";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 1;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 0;
    
    navOpen = "custom"; 
    
    console.log(navOpen);
    
    
  };
  
};

function ownDrop() {
  
  if (navOpen == "models") {
    
    navbar.style.animationName = "nav-butt-3-fromModel";
    
    navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
  own.style.opacity = 1; 
    
    motor.style.opacity = 0;
    
    navOpen = "own"; 
    
    console.log(navOpen);
    
    
  } else if (navOpen == "custom") {
    
    navbar.style.animationName = "nav-butt-3-fromCustom";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 1;
    
    motor.style.opacity = 0;
    
    navOpen = "own"; 
    
    console.log(navOpen);
    
    
  } else if (navOpen == "motor") {
     
    navbar.style.animationName = "nav-butt-3-fromMotor";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 1;
    
    motor.style.opacity = 0;
    
    navOpen = "own";
    
    console.log(navOpen);
    
    
  } else if ( navOpen == "own") {
    
    console.log("BOOBSZ!");
    
  } else {
    
    navbar.style.animationName = "nav-butt-3";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 1;
    
    motor.style.opacity = 0;
    
    navOpen = "own";
    
    console.log(navOpen);
    
    
  };
  
};

function motorDrop() {
  
  if (navOpen == "models") {
    
    navbar.style.animationName = "nav-butt-4-fromModel";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
  own.style.opacity = 0;  
   
    motor.style.opacity = 1;
    
    navOpen = "motor"; 
    
    console.log(navOpen);
    
    
  } else if (navOpen == "custom") {
    
    navbar.style.animationName = "nav-butt-4-fromCustom";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 1;
    
    navOpen = "motor"; 
    
    console.log(navOpen);
    
    
  } else if (navOpen == "own") {
     
    navbar.style.animationName = "nav-butt-4-fromOwn";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 1;
    
    navOpen = "motor";
    
    console.log(navOpen);
    
    
  } else if ( navOpen == "motor") {
    
    console.log("BOOBSZ!");
    
  } else {
    
    navbar.style.animationName = "nav-butt-4";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  model.style.opacity = 0;
  
  custom.style.opacity = 0;
    
    own.style.opacity = 0;
    
    motor.style.opacity = 1;
    
    navOpen = "motor";
    
    console.log(navOpen);
    
    
  }
  
};

function closeMenu() {
  
  if (navOpen == "models") {
  
  navbar.style.animationName = "close-fromModel";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  navOpen = "none";
    
  } else if (navOpen == "custom") {
    
    navbar.style.animationName = "close-fromCustom";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  navOpen = "none";
    
  } else if (navOpen == "own") {
    
    navbar.style.animationName = "close-fromOwn";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  navOpen = "none";
    
  } else if (navOpen == "motor") {
    
    navbar.style.animationName = "close-fromMotor";
  
  navbar.style.animationDuration = "400ms";
  
  navbar.style.animationFillMode = "forwards";
  
  navbar.style.animationIterationCount = 1;
  
  navOpen = "none";
    
    
  };
  
};

bannerButtonOne.addEventListener('click', bannerAnimation1);

bannerButtonOne.addEventListener('click', changeBackground3);

bannerButtonTwo.addEventListener('click', bannerAnimation2);

bannerButtonTwo.addEventListener('click', changeBackground1);

bannerButtonThree.addEventListener('click', bannerAnimation3);

bannerButtonThree.addEventListener('click', changeBackground2);

navButtonOne.addEventListener("mouseover", modelDrop);

navButtonTwo.addEventListener("mouseover", customDrop);

navButtonThree.addEventListener("mouseover", ownDrop);

navButtonFour.addEventListener("mouseover", motorDrop);

navbar.addEventListener("mouseleave", closeMenu);

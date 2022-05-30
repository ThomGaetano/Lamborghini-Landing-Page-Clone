var sectionOneCounter = 0;

let bannerButtonOne = document.getElementById("banner-button-1");

let bannerButtonTwo = document.getElementById("banner-button-2");

let bannerButtonThree = document.getElementById("banner-button-3");

let mainBanner = document.getElementById("main-banner");

let sectionOne = document.getElementById("section-one");

let body = document.body;

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
  
};



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
  
};



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
  
};


bannerButtonOne.addEventListener('click', bannerAnimation1);

bannerButtonOne.addEventListener('click', changeBackground3);

bannerButtonTwo.addEventListener('click', bannerAnimation2);

bannerButtonTwo.addEventListener('click', changeBackground1);

bannerButtonThree.addEventListener('click', bannerAnimation3);

bannerButtonThree.addEventListener('click', changeBackground2);

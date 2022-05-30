

var sectionOneCounter = 0;

function changeBackground1() {
  
  document.getElementById("section-one").style.backgroundImage = "url('https://www.99images.com/download-image/825758/4300x2867')";
  
  document.getElementById("main-banner").innerText = "UNLOCK ANY ROAD";
  
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
  
  document.getElementById("section-one").style.backgroundImage = "url('https://www.hdcarwallpapers.com/walls/matt_balck_lamborghini-HD.jpg')";
  
  document.getElementById("main-banner").innerText = "TAKE ALL YOUR SOULS TO DRIVE";
  
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
  
  document.getElementById("section-one").style.backgroundImage = "url('https://www.hdwallpapers.in/download/lamborghini_huracan_evo_2019_4k_2-HD.jpg')";
  
  document.getElementById("main-banner").innerText = "IT TAKES TIME TO BECOME TIMELESS";
  
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


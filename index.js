/* eslint-disable no-unused-vars */
function menuPopup(){
    document.getElementById("navigationList").classList.toggle("active");
    document.getElementById("nav-button2").classList.toggle("active");
    document.getElementById("closeButton").classList.toggle("active");
  
    if(window.innerWidth<768){
      document.getElementById("navigationList").classList.toggle("active");
      return false;
    }
  }
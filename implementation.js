var footballBtn = document.getElementById("footballBtn");
var basketballBtn = document.getElementById("basketballBtn");
var volleyballBtn = document.getElementById("volleyballBtn");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");

function openFootball() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    footballBtn.style.color = "#12cdfc";
    basketballBtn.style.color = "#000";
    volleyballBtn.style.color = "#000";
    content1.style.transitionDelay = "0.3";
    content2.style.transitionDelay = "0";
    content3.style.transitionDelay = "0";
}
function openBasketball() {
    content1.style.transform = "translateX(-100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    footballBtn.style.color = "#000";
    basketballBtn.style.color = "#12cdfc";
    volleyballBtn.style.color = "#000";
    content1.style.transitionDelay = "0";
    content2.style.transitionDelay = "0.3";
    content3.style.transitionDelay = "0";
}
function openVolleyball() {
    content1.style.transform = "translateX(-100%)";
    content2.style.transform = "translateX(-100%)";
    content3.style.transform = "translateX(0)";
    footballBtn.style.color = "#000";
    basketballBtn.style.color = "#000";
    volleyballBtn.style.color = "#12cdfc";
    content1.style.transitionDelay = "0";
    content2.style.transitionDelay = "0";
    content3.style.transitionDelay = "0.3";
}
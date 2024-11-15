const buttons = document.querySelectorAll("[id^='memberBtn']");
const contents = document.querySelectorAll("[id^='content']");

function openMember(index) {
    contents.forEach((content, i) => {
        if (i < index) {
            content.style.transform = "translateX(-100%)"; // Move left
        } else if (i === index) {
            content.style.transform = "translateX(0)"; // Stay in view
        } else {
            content.style.transform = "translateX(100%)"; // Move right
        }
        content.style.transitionDelay = i === index ? "0.3s" : "0";
    });

    buttons.forEach((btn, i) => {
        btn.style.color = i === index ? "#12cdfc" : "#000"; // Highlight active button
    });
}

buttons.forEach((button, i) => {
    button.addEventListener("click", () => openMember(i));
});

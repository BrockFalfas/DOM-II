// Your code goes here

// How to change image (words) in the top left to red

const headingLogo = document.querySelector(".logo-heading")
console.log(headingLogo);
function changecolor(){
    headingLogo.style.color = "red";
}
headingLogo.addEventListener("mouseover", changecolor);


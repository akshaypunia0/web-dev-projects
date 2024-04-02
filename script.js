let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typeEffect = new Typed("#text",{
    strings: ["Akshay chaudhary", "a Developer", "learning MERN stack"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,

})
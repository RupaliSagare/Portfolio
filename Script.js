let typed=new Typed("#changing-text",{
    strings: ["Fullstack Developer","Front-end Developer","Software Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay:1000,
    loop: true,
});

// Skill circle
const circles=document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100);
    var points="";
    var rotate= 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;

    const pointsMarked=elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++)
    {
        pointsMarked[i].classList.add('marked')
    }

})

var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
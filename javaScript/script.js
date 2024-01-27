
var tabs = document.querySelectorAll('.nav-bar-index li a');
var logo = document.createElement('div');
var isAbout=false, isProject=false;
var navP = document.querySelector('.nav-phone');
var about =document.querySelector('.about');
var projects  =document.querySelector('.projects');

const phoneNav = ((e)=>{

    e.addEventListener('click',()=>{
        console.log("clicked");
        document.querySelector(".navigation").classList.toggle("show-phone-nav");
        e.classList.toggle("nav-active");
        
    });

});

const navigation = tabs.forEach(element =>{
    element.addEventListener('click', e=>{

        var prevActive = document.querySelector('.nav-bar-index li a.nav-activated').classList.remove('nav-activated');
        element.classList.add('nav-activated');
        goDownNav(element);
        
    });
});

//changed the display when nav clicked
const changeDisplay = (e => {

    //if the display is not index
    if(e.dataset.index !== "true" && isHome === false){
        isHome = true;

        navToTop.classList.add("top");
        navP.classList.remove("hide-nav-phone");
        
        var navTop = document.querySelector(".nav-bar-index.top");
        
        logo.setAttribute("class","logo");
        logo.innerText = "PioloJuanillo";
        navTop.prepend(logo);

    }
    //if navbar is index

    if(e.dataset.index === "true"){
        
        
        displayHome();
    }


});

const displayHome = () =>{
    

    about.classList.remove('show');
    projects.classList.remove('show-projects');
    console.log("it is home");
};
// const pageSlider = ()=>{

    

//     carousel.addEventListener("mousemove", e=>{

//         carousel.scrollLeft = e.pageX;
//         console.log(e.pageX);
//     });
// }
// pageSlider();

const goDownNav = (e => {
    var navToTop = document.querySelector(".nav-bar-index");
    
    var isHome = false;
    


    var topIndex = document.querySelector("header");
    if(e.dataset.index !== "true" && isHome === false){
        navToTop.classList.add("top");
        navP.classList.remove("hide-nav-phone");
        var navToTop2 = document.querySelector(".nav-bar-index.top");

        isHome = true;
        logo.setAttribute("class","logo");
        logo.innerText = "PioloJuanillo";
        navToTop2.prepend(logo);
        
        
     }
     if(e.dataset.index === "true"){
        isHome = false;
        navToTop.classList.remove("top");
        navP.classList.add("hide-nav-phone");
        navToTop.removeChild(logo);
        displayHome();
        
    }

     if(e.dataset.index === "about" && isAbout===false){
        projects.classList.remove('show-projects');
        about.classList.add('show');

        isAbout= true;
        console.log(isAbout);

     }else{
        if(isAbout)isAbout= false; 
        
     }
    
     
     if(e.dataset.index === "projects" && isProject===false){
        about.classList.remove('show');
        projects.classList.add('show-projects');

        console.log("clicked" +isProject);
        isProject= true;

     }else{
        if(isProject)isProject= false; 

     }
    

});

phoneNav(navP);

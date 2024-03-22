
let library = document.querySelector(".lib-icon");
let nav = document.querySelector(".nav");
let boxs = document.querySelector(".boxes");
let sidebar = document.querySelector(".sidebar");
let links = document.querySelectorAll(".sidebar-link");
let arrow = document.querySelector(".right-arrow");
let options = document.querySelector(".options");
let icons = document.querySelector(".icons");
let topIcons = document.querySelectorAll(".nav-ml");
let plusIcon = document.querySelector(".fa-plus");
let counter = 1;
library.addEventListener("click",()=>{

     if(counter == 1){
        icons.classList.add("mr");
        options.classList.add("column");    
        boxs.classList.add("lib-hide");
        sidebar.classList.add("side-width");
        library.classList.add("img-ml");
        arrow.classList.add("lib-hide");
        for(link of links){
            link.classList.add("lib-hide");
        }
        for(topIcon of topIcons){
            topIcon.classList.add("ml");
        }
        counter = 0;
    }
    else if(counter == 0){
        icons.classList.remove("mr");

        options.classList.remove("column");    
        boxs.classList.remove("lib-hide");
        sidebar.classList.remove("side-width");
        libSpan.classList.remove("active");
        arrow.classList.remove("lib-hide");
        library.classList.remove("img-ml");
        for(link of links){
            link.classList.remove("lib-hide");
        }
        for(topIcon of topIcons){
            topIcon.classList.remove("ml");
        }
        counter = 1;
    } 
    
});

let home = document.querySelector(".home");
let activeHome = document.querySelector(".active-home");
home.addEventListener("mouseenter",()=>{
    if(sidebar.classList.contains("side-width")){
        activeHome.classList.add("active");

    }
})
home.addEventListener("mouseleave",()=>{
    activeHome.classList.remove("active");

})


let libraryLink = document.querySelector(".library-link");
let libSpan = document.querySelector(".lib-span");
let libSpanSecond = document.querySelector(".lib-span-second");
library.addEventListener("mouseenter",()=>{
    libSpanSecond.classList.add("active");
    if(sidebar.classList.contains("side-width")){
        libSpan.classList.add("active"); 
        plusIcon.classList.add("plus");
        libSpanSecond.classList.remove("active");

    }
})
library.addEventListener("mouseleave",()=>{
    libSpan.classList.remove("active");
    plusIcon.classList.remove("plus");
    libSpanSecond.classList.remove("active");
})
library.addEventListener("click",()=>{
    libSpanSecond.classList.remove("active");
})
let search = document.querySelector(".search");
let activeSearch = document.querySelector(".active-search");
search.addEventListener("mouseenter",()=>{
    if(sidebar.classList.contains("side-width")){
        activeSearch.classList.add("active");

    }
})
search.addEventListener("mouseleave",()=>{
    activeSearch.classList.remove("active");
})

let plusBox = document.querySelector(".plus-box");
let plusLink = document.querySelector(".plus-link");
plusBox.addEventListener("mouseenter",()=>{
   if(sidebar.classList.contains("side-width")) {
      plusLink.classList.add("plus-ml");
   }
   plusLink.classList.add("active");
})
plusBox.addEventListener("mouseleave",()=>{
    plusLink.classList.remove("active");
    plusLink.classList.remove("plus-ml");
})

let arrowBox = document.querySelector(".arrow-box");
let arrowLink = document.querySelector(".arrow-link");
arrowBox.addEventListener("mouseenter",()=>{
    arrowLink.classList.add("active");
})
arrowBox.addEventListener("mouseleave",()=>{
    arrowLink.classList.remove("active");
})

const heartIcon = document.querySelector(".fa-heart");
let heart = document.querySelector(".red-heart");
heartIcon.addEventListener("click",()=>{
    console.log("clickde");
    heart.classList.add("active");
})
function dislike(){
    if(heart.classList.contains("active")){
        heart.classList.remove("active");
         console.log("clickde");

    }
}





let hovIcon = document.querySelector(".first-icon");
hovIcon.addEventListener("mouseenter",()=>{
    let hov = document.querySelector(".active-first");
    hov.classList.add("active");
    
})
hovIcon.addEventListener("mouseleave",()=>{
    let hov = document.querySelector(".active-first");
    hov.classList.remove("active");   
})

let hovIconSecond = document.querySelector(".second-icon");
hovIconSecond.addEventListener("mouseenter",()=>{
    let hov = document.querySelector(".active-second");
    hov.classList.add("active");
})
hovIconSecond.addEventListener("mouseleave",()=>{
    let hov = document.querySelector(".active-second");
    hov.classList.remove("active");
});

let hovIconThird = document.querySelector(".third-icon");
hovIconThird.addEventListener("mouseenter",()=>{
    let hov = document.querySelector(".active-third");
    hov.classList.add("active");
});
hovIconThird.addEventListener("mouseleave",()=>{
    let hov = document.querySelector(".active-third");
    hov.classList.remove("active");
});

let hovIconForth = document.querySelector(".forth-icon");
hovIconForth.addEventListener("mouseenter",()=>{
    let hov = document.querySelector(".active-forth");
    hov.classList.add("active");
});
hovIconForth.addEventListener("mouseleave",()=>{
    let hov = document.querySelector(".active-forth");
    hov.classList.remove("active");
});

let hovIconFifth = document.querySelector(".fifth-icon");
hovIconFifth.addEventListener("mouseenter",()=>{
    let hov = document.querySelector(".active-fifth");
    hov.classList.add("active");
});
hovIconFifth.addEventListener("mouseleave",()=>{
    let hov = document.querySelector(".active-fifth");
    hov.classList.remove("active");
});

let hovIconSix = document.querySelector(".six-icon");
hovIconSix.addEventListener("mouseenter",()=>{
    let hov = document.querySelector(".active-six");
    hov.classList.add("active");
});
hovIconSix.addEventListener("mouseleave",()=>{
    let hov = document.querySelector(".active-six");
    hov.classList.remove("active");
});



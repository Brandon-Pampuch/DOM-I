const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Example: Update the img src for the logo




let nav = document.querySelector("header nav")

let appendA = document.createElement("a")
appendA.style.color = "green"
appendA.textContent = "Help"
appendA.setAttribute("href", "#")
nav.append(appendA)



let prependB = document.createElement("p")
prependB.textContent = "WAT"
prependB.style.color = "green"
prependB.setAttribute("href", "#")
nav.prepend(prependB) 



// const blahImage = document.createElement("img")
// blahImage.src = "https://media0.giphy.com/media/3o7TKNPAmBQGXgEZpu/giphy.gif?cid=790b76115cab88a5506d4f64637ff410"

// const paragraph = document.querySelector(".jumbotron .lead")

// paragraph.prepend(blahImage) 






// var parent = document.createElement("div");
// var p = document.createElement("p");
// parent.prepend("Some text", p);




//header//************************** 

let navbar = document.querySelectorAll('nav a')

// navbar.forEach(function(aElem, i){
//  return aElem[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]
// })

navbar[0].textContent = siteContent["nav"]["nav-item-1"]
navbar[1].textContent = siteContent["nav"]["nav-item-2"]
navbar[2].textContent = siteContent["nav"]["nav-item-3"]
navbar[3].textContent = siteContent["nav"]["nav-item-4"]

//change color

navbar[0].style.color = "green"
navbar[1].style.color = "green"
navbar[2].style.color = "green"
navbar[3].style.color = "green"

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//cta//****************************

let ctaHeader = document.querySelector('.cta-text h1')
ctaHeader.textContent = siteContent["cta"]["h1"]

let ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = siteContent["cta"]["button"]

let ctaImage = document.querySelector(".cta img")
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

//main-content//******************** 

//top//

let topCopyHeader = document.querySelectorAll(".top-content h4")

topCopyHeader[0].textContent = siteContent["main-content"]["features-h4"]
topCopyHeader[1].textContent = siteContent["main-content"]["about-h4"]

let topCopyContent = document.querySelectorAll(".top-content p")

topCopyContent[0].textContent = siteContent["main-content"]["features-content"]
topCopyContent[1].textContent = siteContent["main-content"]["about-content"]

let bannerImage = document.querySelector(".main-content img")
bannerImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//bottom//

let bottomCopyHeader = document.querySelectorAll(".bottom-content h4")

bottomCopyHeader[0].textContent = siteContent["main-content"]["services-h4"]
bottomCopyHeader[1].textContent = siteContent["main-content"]["product-h4"]

let bottomCopyContent = document.querySelectorAll(".bottom-content p")

bottomCopyContent[0].textContent = siteContent["main-content"]["services-content"]
bottomCopyContent[1].textContent = siteContent["main-content"]["product-content"]

//footer//****************************** 

let footerHeader = document.querySelector(".contact h4")
footerHeader.textContent = siteContent["contact"]["contact-h4"]

let footerPar = document.querySelectorAll(".contact p")
footerPar[0].textContent = siteContent["contact"]["address"]
footerPar[1].textContent = siteContent["contact"]["phone"]
footerPar[2].textContent = siteContent["contact"]["email"]

let footerProper = document.querySelector("footer p")
footerProper.textContent = siteContent["footer"]["copyright"]


const titleSlide = document.querySelector(".logo")

titleSlide.addEventListener("click",(event)=>{
  event.target.classList.toggle("come-right")
})















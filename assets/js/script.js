var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

// функція для створення одного слайду, зверніть увагу на контекст this
function Slide(title, subtitle, background, link ) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}

// ви можете зробити скільки завгодно слайдів

var slide1 = new Slide(
    "Google",
    "browser 1",
    "https://via.placeholder.com/500x150",
    "http://google.com"
);

var slide2 = new Slide(
    "Yahoo",
    "browser 2",
    "https://via.placeholder.com/500x150",
    "https://yahoo.com"
);

var slide3 = new Slide(
    "Ecology",
    "photo 1",
    "assets/img/1.jpg",
    "https://cdn1.byjus.com/wp-content/uploads/2017/10/1-min-1.jpg"
);

var slide4 = new Slide(
    "Being eco-friendly",
    "photo 2",
    "assets/img/2.jpg",
    "https://cdn4.vectorstock.com/i/1000x1000/57/98/eco-friendly-ecology-concept-vector-5515798.jpg"
);

var slide5 = new Slide(
    "Ecology organizations",
    "photo 3",
    "assets/img/3.jpg",
    "https://enviroinc.com/wp-content/uploads/2020/09/Eco-Communities.jpg"
);

function buildSlider(){
    var myHTML;
    for(var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }

    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide(){
    var nextSlideIndex;
    if (currentSlideIndex === 0 ) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

    currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
    var nextSlideIndex;
    if (currentSlideIndex === (slideArray.length - 1) ) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

    currentSlideIndex = nextSlideIndex;
}

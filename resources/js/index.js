const imageElements = document.querySelectorAll('.auto-change-image');
const imageUrls = [ '/public/image/demon1.png', '/public/image/haikyu.png', '/public/image/narotu1.png', '/public/image/dragon1.png'];
let currentIndex = 0;

function changeImages() {
  imageElements.forEach((image) => {
    image.src = imageUrls[currentIndex];
    image.style.transition = 'opacity 0.5s ease-in-out';
  });
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(changeImages, 2000);

// Auto-type with libery <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

var type = new Typed(".Auto-type", {
  strings : ["KAI ANIME" , "ខៃ​ អេនីមេ","凯 ANIME","KAI ANIME"],
  typeSpeed : 150,
  backSpeed : 150,
  looped    : true
})

// nav bar scroll

let lastScroll = 0;
let navbar = document.querySelector('#scroll-hidden'); 

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScroll) {
        navbar.style.top = "-80px"; 
    } else {
        navbar.style.top = "0"; 
    }
    lastScroll = scrollTop;
});


let lastScrollFooter = 0; 
let footer = document.querySelector('#scroll-hiddenF');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollFooter) {
       
        footer.style.bottom = "-80px"; 
    } else {
       
        footer.style.bottom = "0";
    }

    lastScrollFooter = scrollTop; 
});


// dark theme

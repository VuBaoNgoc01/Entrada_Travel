$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.box-navbar').addClass("scrollMenu")
        } else {
            $('.box-navbar').removeClass("scrollMenu")
        }

        if (this.scrollY > 500) {
            $('.scroll-to-top').addClass("active")
        } else {
            $('.scroll-to-top').removeClass("active")
        }
    });

    $("#scroll-to-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })


    // Slider-partner

    $(document).ready(function () {
        $('.slider-partner-1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        })
    });

    $(document).ready(function () {
        $('.slider-partner-2').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        })
    });

    $(document).ready(function () {
        $('.slide-img-blog').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            prevArrow: '<button type="button" class="slick-prev pull-left"><i class="fa-solid fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next pull-right"><i class="fa-solid fa-angle-right"></i></button>',
        })
    });

    //typing animation script
    var type = new Typed(".typing", {
        strings: ["adventures", "Wourld Tours", "Jungle Safaris"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});



//Active menu

const menuChild = document.getElementById("menu-child");
const boxNavbar = document.getElementById("box-navbar");
const boxMenu = document.getElementById("box-menu");

menuChild.addEventListener("click", () => {
    menuChild.classList.toggle("active");
    boxMenu.classList.toggle("active");
    boxNavbar.classList.toggle("active");
});


// const dropChild = document.getElementsByClassName("drop-child");

// dropChild.addEventListener("click", () => {
//     dropChild.classList.toggle("active");
// });

// var myButton = document.getElementsByClassName(('drop-child')[0]);

// // If you care about all of the elements, you'll need to loop through the elements:
// var myButtons = document.getElementsByClassName('drop-child');

// for (var i = 0; i < myButtons.length; ++i) {
//     myButtons[i].addEventListener('click', function () {
//         // Using an if statement to check the class
//         if (this.classList.contains('open')) {
//             // The box that we clicked has a class of bad so let's remove it and add the good class
//             this.classList.remove('open');
//         } else {
//             // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//             this.classList.add('open');
//         }
//     });
// }

const menuShow = document.querySelectorAll.bind(document)('.drop-child')

menuShow.forEach((ms, index) => {
    ms.onclick = function () {
        document.querySelector.bind(document)('.drop-child.open').classList.remove('open');

        this.classList.add('open');
    }
});


//hover menu

const containers = document.querySelectorAll('#hover');

containers.forEach(f => f.addEventListener('mouseenter', function () {
    containers.forEach(e => {
        var item = e.querySelector('.item-right');
        item.classList.add('hidden');
        item.classList.remove('show');
    })
    this.querySelector('.item-right').classList.add('show')
    this.querySelector('.item-right').classList.remove('hidden')
}))
////////////////////////////////////////////////////

let valueNum = document.querySelectorAll(".num");
let cd = 4000;

valueNum.forEach((valueNum) => {
    let valueStart = 0;
    let valueEnd = parseFloat(valueNum.getAttribute("data-val"));
    let duration = Math.floor(cd / valueEnd)
    let counter = setInterval(function () {
        valueStart += 1;
        valueNum.textContent = valueStart;
        if (valueStart == valueEnd) {
            clearInterval(counter);
        }
    }, duration);
});


AOS.init();

///////////


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

//////////////




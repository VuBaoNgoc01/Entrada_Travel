
w3.includeHTML(myCallback);
function myCallback() {

    $("#scroll-to-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    //Active menu

    const menuChild = document.getElementById("menu-child");
    const boxNavbar = document.getElementById("box-navbar");
    const boxMenu = document.getElementById("box-menu");

    menuChild.addEventListener("click", () => {
        menuChild.classList.toggle("active");
        boxMenu.classList.toggle("active");
        boxNavbar.classList.toggle("active");
    });

    //Active drop-menu

    var myButton = document.getElementsByClassName(('drop-child')[0]);

    // If you care about all of the elements, you'll need to loop through the elements:
    var myButtons = document.getElementsByClassName('drop-child');

    for (var i = 0; i < myButtons.length; ++i) {
        myButtons[i].addEventListener('click', function () {
            // Using an if statement to check the class
            if (this.classList.contains('open')) {
                // The box that we clicked has a class of bad so let's remove it and add the good class
                this.classList.remove('open');
            } else {
                // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
                this.classList.add('open');
            }
        });
    }

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



    //Active select-blog

    var btnBlog = document.getElementsByClassName(('show-select')[0]);

    // If you care about all of the elements, you'll need to loop through the elements:
    var btnBlog = document.getElementsByClassName('show-select');

    for (var i = 0; i < btnBlog.length; ++i) {
        btnBlog[i].addEventListener('click', function () {
            // Using an if statement to check the class
            if (this.classList.contains('open')) {
                // The box that we clicked has a class of bad so let's remove it and add the good class
                this.classList.remove('open');
            } else {
                // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
                this.classList.add('open');
            }
        });
    }


    ///AOS animation///

    AOS.init();

    //active icon-heart

    var myHeart = document.getElementsByClassName(('heart')[0]);

    // If you care about all of the elements, you'll need to loop through the elements:
    var myHeart = document.getElementsByClassName('heart');

    for (var i = 0; i < myHeart.length; ++i) {
        myHeart[i].addEventListener('click', function () {
            // Using an if statement to check the class
            if (this.classList.contains('love')) {
                // The box that we clicked has a class of bad so let's remove it and add the good class
                this.classList.remove('love');
            } else {
                // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
                this.classList.add('love');
            }
        });
    }



    //Import Include HTML//

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


}

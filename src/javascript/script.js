$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    
    const capa = document.getElementById("pdf");

    const capaHeight = capa.offsetHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY > capaHeight) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});

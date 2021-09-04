$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function () {
    $('.header__link, .header__link2, .header__link3').click(function (event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock')
    });
});

$(document).ready(function () {
    $('.header__link').on('click', function () {
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370,
        });
    });
});

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener("click", event => {

        accordionItem.classList.toggle("active");
    });
});

const animItems = $('._anim-items');

if (animItems.length > 0) {
    $(window).on('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                $(animItem).addClass('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
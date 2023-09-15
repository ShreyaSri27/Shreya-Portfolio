$(document).ready(function () {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
        $(".navbar-default a").removeClass("selected");
        $(this).addClass("selected");
    });
});
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime
    .timeline({ loop: false })
    .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 1400,
    })
    .add({
        targets: ".ml11 .line",
        translateX: [0, document.querySelector(".ml11 .letters").getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
    })
    .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
    })
    .add({
        targets: ".ml11",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    });

// Wrap every letter in a span
var textWrapper2 = document.querySelector(".ml3");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
    .timeline({ loop: false })
    .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 250,
        delay: (el, i) => 50 * (i + 1),
    })
    .add({
        targets: ".ml3",
        opacity: 1,
        duration: 250,
        easing: "easeOutExpo",
        delay: 250,
    });

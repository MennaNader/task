var animationContainer = document.getElementsByClassName("animation_playground")[0],
    main_page = document.getElementsByClassName("main")[0],
    logoAnimation = document.getElementById("logoAnimation"),
    logo = document.getElementById("logo"),
    cloud = document.getElementById("cloud"),
    house = document.getElementById("house"),
    red_bubble = document.getElementById("red-bubble"),
    green_bubble = document.getElementById("green-bubble"),
    title = document.getElementById("title"),
    slider = $("#slider").slider(),
    timeline = new TimelineLite({ onUpdate: updateSlider }).pause();

timeline
    .fromTo(green_bubble, 1, { y: -100, scale: 0 }, { y: 0, scale: 1 }, 0.01)
    .fromTo(red_bubble, 1, { y: 500, x: -100, scale: 0 }, { y: 0, x: 0, scale: 1 }, 0)
    .fromTo(house, 1, { y: 600 }, { y: 10 }, 0)
    .fromTo(cloud, 1, { x: -500 }, { x: -10 }, 0)
    .fromTo(title, 1, { x: -500 }, { x: 0 }, 1)
    .to(cloud, 3, { ease: Bounce.easeInOut, x: 0 }, 0.3)
    .to(house, 3, { ease: Bounce.easeInOut, y: 0 }, 0.3)
    .fromTo(green_bubble, 1, { x: 0, y: 0 }, { x: 500, y: 200, scale: 0 }, 4.5)
    .fromTo(red_bubble, 1, { x: 0, y: 0 }, { x: 500, y: 200, scale: 0 }, 4.5)
    .fromTo(house, 1, { x: 0, y: 0 }, { x: 500, y: 200, scale: 0 }, 4.5)
    .fromTo(cloud, 1, { x: 0, y: 0 }, { x: 500, y: 200, scale: 0 }, 4.5)
    .fromTo(title, 1, { x: 0, y: 0 }, { x: 500, y: 200, scale: 0 }, 4.5)
    .to(animationContainer, 1, { autoAlpha: 0 }, 5.5)
    .to(main_page, 1, { autoAlpha: 1 }, 5.5);


function updateSlider() {
    slider.slider("value", timeline.progress() * 100);
}


$("#logoAnimation").click(function() {
    timeline.play();
});

$("#slider").slider({
    range: false,
    min: 0,
    max: 100,
    step: .1,
    slide: function(event, ui) {
        timeline.pause();
        timeline.progress(ui.value / 100);
    }
});

$("#play_btn").click(function() {

    if (timeline.progress() == 1) {
        timeline.restart();
    } else {
        timeline.play();
    }
})
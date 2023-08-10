let slider = tns({
    container: ".my-slider",
    "slideBy": 1,
    "speed":400,
    "nav": false,
    controlsContainer:"#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1600: {
            items: 7,
            gutter: 10
        },
        1024: {
            items: 5,
            gutter: 10
        },
        768:{
            items: 3,
            gutter: 10
        },
        480: {
            items: 1,
            gutter:10
        }
    }
})

let slider2 = tns({
    container: ".my-slider-v",
    "slideBy": 1,
    "speed":400,
    "nav": false,
    "axis":'vertical',
    controlsContainer:"#controls-v",
    prevButton: ".previous-v",
    nextButton: ".next-v",
    responsive: {
        1600: {
            items: 7,
            gutter: 10
        },
        1024: {
            items: 7,
            gutter: 10
        },
        768:{
            items: 7,
            gutter: 10
        },
        480: {
            items: 3,
            gutter:10
        }
    }
})
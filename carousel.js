var carousel = document.getElementById('carouselExampleDark')

carousel.addEventListener('shown.bs.collapse', function (event) {
  // Action to execute once the collapsible area is expanded
})
var carousel = document.getElementById('carouselExampleDark')
var carousel = bootstrap.Carousel.getInstance(carousel) // Retrieve a Carousel instance

carousel.addEventListener('slid.bs.carousel', function (event) {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
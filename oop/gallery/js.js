let images = document.querySelectorAll('.images')
const modal = document.querySelector('.modal')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
let counter = 0;

images.forEach(x => {
    x.addEventListener('click', function () {
        const thumb_image = x.src
        modal.querySelector('.img').querySelector('img').src = thumb_image
        modal.classList.toggle('modal_show')

        prev.addEventListener('click', function () {
            modal.querySelector('.img').querySelector('img').src = [...images][counter].src
            counter = ++counter % images.length
        })

        next.addEventListener('click', function () {
            modal.querySelector('.img').querySelector('img').src = [...images][counter].src
            counter = ++counter % images.length
        })

    })
})

const close_modal = document.querySelector('.close')
close_modal.addEventListener('click', function () {
    modal.classList.toggle('modal_show')
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
}}
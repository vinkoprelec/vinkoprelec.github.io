// Initialize the Swiper carousel
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Function to open product gallery (You can customize this to show a detailed gallery)
function openGallery(productId) {
    alert('Open gallery for Product ' + productId); // Replace with your gallery logic
}

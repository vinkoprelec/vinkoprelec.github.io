// Check if the swiper container exists on the page before initializing Swiper
if (document.querySelector('.swiper-container')) {
    // Initialize Swiper for the carousel
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // Enable infinite looping of slides
        autoplay: {
            delay: 10000,  // 10 seconds for each slide
            disableOnInteraction: false,  // Ensure autoplay doesn't stop on user interaction
        },
        on: {
            slideChange: function () {
                var video = document.querySelector('.swiper-slide-active video');
                if (video) {
                    video.play(); // Play the video when the slide with video is active
                }
            }
        }
    });

    // Handle video auto slide to next after video ends
    var activeSlide = document.querySelector('.swiper-slide-active video');
    if (activeSlide) {
        activeSlide.onended = function () {
            swiper.slideNext(); // Slide to the next slide when video ends
        };
    }
}


const krovista = [
    "/images/Krovista/20201003_103310.jpg",
    "/images/Krovista/20210708_125721.jpg",
    "/images/Krovista/20220428_163840.jpg",
    "/images/Krovista/20220512_110517.jpg",
    "/images/Krovista/20220512_110853.jpg",
    "/images/Krovista/20220513_154820.jpg",
    "/images/Krovista/20220513_154841.jpg",
    "/images/Krovista/20230704_100007.jpg",
    "/images/Krovista/20230720_121749.jpg",
    "/images/Krovista/20241016_161133.jpg",
    "/images/Krovista/20241213_153703.jpg"
];

const montazne = [
    "/images/MontazneKuce/20211026_151105.webp",
    "/images/MontazneKuce/20211120_102939.webp",
    "/images/MontazneKuce/20211203_130936.webp",
    "/images/MontazneKuce/20211216_130144.webp",
    "/images/MontazneKuce/20220121_132057.webp",
    "/images/MontazneKuce/20220223_160645.webp",
    "/images/MontazneKuce/20230204_131610.webp",
    "/images/MontazneKuce/20241213_153703.webp",
    "/images/MontazneKuce/20241218_145314.webp",
    "/images/MontazneKuce/20241219_131644.webp",
    "/images/MontazneKuce/IMG-67df1c694dc0cae4d8402b83078fc71a-V.webp",
    "/images/MontazneKuce/IMG-20250616-WA0010.webp",
    "/images/MontazneKuce/WhatsApp Slika 2025-06-13 u 13.20.35_728a2b22.webp",
    "/images/MontazneKuce/WhatsApp Slika 2025-06-13 u 13.20.39_b8f054d8.webp"
];

const bistraImages = [
    "/images/TrupciKuce/bistra/20241016_161133.jpg",
    "/images/TrupciKuce/bistra/20241022_144423.jpg",
    "/images/TrupciKuce/bistra/20241108_160253.jpg",
    "/images/TrupciKuce/bistra/20241108_160326.jpg",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0001.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0002.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0003.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0004.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0005.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0006.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0007.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0008.webp",
    "/images/TrupciKuce/bistra/IMG-20250616-WA0009.webp"
];

const breznickiHumImages = [
    "/images/TrupciKuce/breznickiHum/20240318_145340.jpg",
    "/images/TrupciKuce/breznickiHum/20240320_100647.jpg",
    "/images/TrupciKuce/breznickiHum/20240424_084820.jpg",
    "/images/TrupciKuce/breznickiHum/20240424_084845.jpg",
    "/images/TrupciKuce/breznickiHum/20240621_133857.jpg",
    "/images/TrupciKuce/breznickiHum/20240624_152509.jpg",
    "/images/TrupciKuce/breznickiHum/20240828_160208.jpg",
    "/images/TrupciKuce/breznickiHum/IMG-20240522-WA0000.jpg",
    "/images/TrupciKuce/breznickiHum/IMG-20240624-WA0004.jpg"
];

const fuzineImages = [
    "/images/TrupciKuce/fuzine/20230506_115906.jpg",
    "/images/TrupciKuce/fuzine/20231220_133916.jpg",
    "/images/TrupciKuce/fuzine/20231220_134932.jpg",
    "/images/TrupciKuce/fuzine/20240413_140003.jpg",
    "/images/TrupciKuce/fuzine/20240413_140051.jpg",
    "/images/TrupciKuce/fuzine/20240413_140116.jpg",
    "/images/TrupciKuce/fuzine/20240413_140346.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0003.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0006.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0009.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0013.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0014.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0015.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0019.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0020.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0022.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0024.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0025.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0035.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0036.jpg",
    "/images/TrupciKuce/fuzine/IMG-20240422-WA0039.jpg"
];

const ravnaGoraImages = [
    "/images/TrupciKuce/ravnaGora/20190303_144600.jpg",
    "/images/TrupciKuce/ravnaGora/20190524_131503.jpg",
    "/images/TrupciKuce/ravnaGora/20190726_172347.jpg",
    "/images/TrupciKuce/ravnaGora/20190726_172357.jpg",
    "/images/TrupciKuce/ravnaGora/20190726_172418.jpg",
    "/images/TrupciKuce/ravnaGora/20190726_172437.jpg",
    "/images/TrupciKuce/ravnaGora/20190726_172504.jpg",
    "/images/TrupciKuce/ravnaGora/20190726_172711.jpg",
    "/images/TrupciKuce/ravnaGora/20200809_120741.jpg",
    "/images/TrupciKuce/ravnaGora/IMG-20210215-WA0016.jpg"
];

let currentImageIndex = 0;
let currentImageSet = "";

function openGallery(index, caller) {
    currentImageIndex = index;
    currentImageSet = caller;
    updateGalleryImage();
    document.getElementById("gallery-modal").style.display = "block";
}

function closeGallery() {
    document.getElementById("gallery-modal").style.display = "none";
    currentImageIndex = 0;
    currentImageSet = "";
}

function changeImage(direction) {
    currentImageIndex += direction;
    const length = getImageSet(currentImageSet).length;

    if (currentImageIndex < 0) {
        currentImageIndex = length - 1;
    } else if (currentImageIndex >= length) {
        currentImageIndex = 0;
    }

    updateGalleryImage();
}

function updateGalleryImage() {
    const imageArray = getImageSet(currentImageSet);
    if (!imageArray.length) return;
    document.getElementById("modal-image").src = imageArray[currentImageIndex];
}

function getImageSet(name) {
    switch (name) {
        case "krovista": return krovista;
        case "bistraImages": return bistraImages;
        case "fuzineImages": return fuzineImages;
        case "ravnaGoraImages": return ravnaGoraImages;
        case "breznickiHumImages": return breznickiHumImages;
        case "montazne": return montazne;
        default: return [];
    }
}
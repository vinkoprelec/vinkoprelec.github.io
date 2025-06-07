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
    "images/krovista/20201003_103310.jpg",
    "images/krovista/20210708_125721.jpg",
    "images/krovista/20220428_163840.jpg",
    "images/krovista/20220512_110517.jpg",
    "images/krovista/20220512_110853.jpg",
    "images/krovista/20220513_154820.jpg",
    "images/krovista/20220513_154841.jpg",
    "images/krovista/20230704_100007.jpg",
    "images/krovista/20230720_121749.jpg",
    "images/krovista/20241213_153703.jpg"
];

const montazne = [
    "images/MontazneKuce/20211026_151105.jpg",
    "images/MontazneKuce/20211120_102939.jpg",
    "images/MontazneKuce/20211203_130936.jpg",
    "images/MontazneKuce/20211216_130144.jpg",
    "images/MontazneKuce/20220121_132057.jpg",
    "images/MontazneKuce/20220223_160645.jpg",
    "images/MontazneKuce/20230204_131610.jpg",
    "images/MontazneKuce/20241213_153703.jpg",
    "images/MontazneKuce/20241218_145314.jpg",
    "images/MontazneKuce/20241219_131644.jpg",
    "images/MontazneKuce/IMG-67df1c694dc0cae4d8402b83078fc71a-V.jpg"
];

const bistraImages = [
    "images/TrupciKuce/bistra/20241016_161133.jpg",
    "images/TrupciKuce/bistra/20241022_144423.jpg",
    "images/TrupciKuce/bistra/20241108_160253.jpg",
    "images/TrupciKuce/bistra/20241108_160326.jpg"
];

const breznickiHumImages = [
    "images/TrupciKuce/breznickiHum/20240318_145340.jpg",
    "images/TrupciKuce/breznickiHum/20240320_100647.jpg",
    "images/TrupciKuce/breznickiHum/20240424_084820.jpg",
    "images/TrupciKuce/breznickiHum/20240424_084845.jpg",
    "images/TrupciKuce/breznickiHum/20240621_133857.jpg",
    "images/TrupciKuce/breznickiHum/20240624_152509.jpg",
    "images/TrupciKuce/breznickiHum/20240828_160208.jpg",
    "images/TrupciKuce/breznickiHum/IMG-20240522-WA0000.jpg",
    "images/TrupciKuce/breznickiHum/IMG-20240624-WA0004.jpg"
];

const fuzineImages = [
    "images/TrupciKuce/fuzine/20230506_115906.jpg",
    "images/TrupciKuce/fuzine/20231220_133916.jpg",
    "images/TrupciKuce/fuzine/20231220_134932.jpg",
    "images/TrupciKuce/fuzine/20240413_140003.jpg",
    "images/TrupciKuce/fuzine/20240413_140051.jpg",
    "images/TrupciKuce/fuzine/20240413_140116.jpg",
    "images/TrupciKuce/fuzine/20240413_140346.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0003.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0006.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0009.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0013.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0014.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0015.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0019.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0020.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0022.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0024.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0025.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0035.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0036.jpg",
    "images/TrupciKuce/fuzine/IMG-20240422-WA0039.jpg"
];

const ravnaGoraImages = [
    "images/TrupciKuce/ravnaGora/20190303_144600.jpg",
    "images/TrupciKuce/ravnaGora/20190524_131503.jpg",
    "images/TrupciKuce/ravnaGora/20190726_172347.jpg",
    "images/TrupciKuce/ravnaGora/20190726_172357.jpg",
    "images/TrupciKuce/ravnaGora/20190726_172418.jpg",
    "images/TrupciKuce/ravnaGora/20190726_172437.jpg",
    "images/TrupciKuce/ravnaGora/20190726_172504.jpg",
    "images/TrupciKuce/ravnaGora/20190726_172711.jpg",
    "images/TrupciKuce/ravnaGora/20200809_120741.jpg",
    "images/TrupciKuce/ravnaGora/IMG-20210215-WA0016.jpg"
];

// Open gallery modal and display the high-res image
function openGallery(index, caller) {
    currentImageIndex = index;
    images = caller;
    let highResImage = "";
    if (images == "krovista") {
        highResImage = krovista[currentImageIndex];
    } else if (images == "bistraImages") {
        highResImage = bistraImages[currentImageIndex];
    } else if (images == "fuzineImages") {
        highResImage = fuzineImages[currentImageIndex];
    } else if (images == "ravnaGoraImages") {
        highResImage = ravnaGoraImages[currentImageIndex];
    } else if (images == "breznickiHumImages") {
        highResImage = breznickiHumImages[currentImageIndex];
    } else if (images == "montazne") {
        highResImage = montazne[currentImageIndex];
    }
    document.getElementById("modal-image").src = highResImage;
    document.getElementById("gallery-modal").style.display = "block";
}

// Close the gallery modal
function closeGallery() {
    document.getElementById("gallery-modal").style.display = "none";
}

function changeImage(direction, caller) {
    currentImageIndex += direction;
    let length;

    if (caller == "krovista") {
        length = krovista.length;
    } else if (caller == "bistraImages") {
        length = bistraImages.length;
    } else if (caller == "fuzineImages") {
        length = fuzineImages.length;
    } else if (caller == "ravnaGoraImages") {
        length = ravnaGoraImages.length;
    } else if (caller == "breznickiHumImages") {
        length = breznickiHumImages.length;
    } else if (caller == "montazne") {
        length = montazne.length;
    }

    // Loop back to the beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = length - 1;
    } else if (currentImageIndex >= length) {
        currentImageIndex = 0;
    }

    if (caller == "krovista") {
        document.getElementById("modal-image").src = krovista[currentImageIndex];
    } else if (caller == "bistraImages") {
        document.getElementById("modal-image").src = bistraImages[currentImageIndex];
    } else if (caller == "fuzineImages") {
        document.getElementById("modal-image").src = fuzineImages[currentImageIndex];
    } else if (caller == "ravnaGoraImages") {
        document.getElementById("modal-image").src = ravnaGoraImages[currentImageIndex];
    } else if (caller == "breznickiHumImages") {
        document.getElementById("modal-image").src = breznickiHumImages[currentImageIndex];
    } else if (caller == "montazne") {
        document.getElementById("modal-image").src = montazne[currentImageIndex];
    }
}
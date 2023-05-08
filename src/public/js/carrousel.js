const images = document.querySelectorAll(".trending");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

prevBtn.addEventListener("click", (e) => {
	e.preventDefault();
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	updateCarousel();
});

nextBtn.addEventListener("click", (e) => {
	e.preventDefault();
	currentIndex = (currentIndex + 1) % images.length;
	updateCarousel();
});

function updateCarousel() {
	let maxImages = 3;
	if (window.innerWidth >= 461) {
		maxImages = 4;
	}
	if (window.innerWidth >= 769) {
		maxImages = 5;
	}
	
	for (let i = 0; i < images.length; i++) {
		if (i >= currentIndex && i < currentIndex + maxImages) {
			images[i].style.display = "block";
		} else {
			images[i].style.display = "none";
		 }
	}
}

updateCarousel();

// -----------------Segundo Carrousel Llamado  CarouselTwo

const imagesTwo = document.querySelectorAll(".trendingTwo");
const prevBtnTwo = document.getElementById("prev2");
const nextBtnTwo = document.getElementById("next2");
let currentIndexTwo = 0;

prevBtnTwo.addEventListener("click", (e) => {
	e.preventDefault();
	currentIndexTwo = (currentIndexTwo - 1 + imagesTwo.length) % imagesTwo.length;
	updateCarouselTwo();
});

nextBtnTwo.addEventListener("click", (e) => {
	e.preventDefault();
	currentIndexTwo = (currentIndexTwo + 1) % imagesTwo.length;
	updateCarouselTwo();
});

function updateCarouselTwo() {
	let maxImagesTwo = 3;
	if (window.innerWidth >= 461) {
		maxImagesTwo = 4;
	}
	if (window.innerWidth >= 769) {
		maxImagesTwo = 5;
	}
	
	for (let i = 0; i < imagesTwo.length; i++) {
		if (i >= currentIndexTwo && i < currentIndexTwo + maxImagesTwo) {
			imagesTwo[i].style.display = "block";
		} else {
			imagesTwo[i].style.display = "none";
		 }
	}
}

updateCarouselTwo();

//------------------------ Tercer Carrousel Llamado carouselThree

const imagesThree = document.querySelectorAll(".trendingThree");
const prevBtnThree = document.getElementById("prev3");
const nextBtnThree = document.getElementById("next3");
let currentIndexThree = 0;

prevBtnThree.addEventListener("click", (e) => {
	e.preventDefault();
	currentIndexThree = (currentIndexThree - 1 + imagesThree.length) % imagesThree.length;
	updateCarouselThree();
});

nextBtnThree.addEventListener("click", (e) => {
	e.preventDefault();
	currentIndexThree = (currentIndexThree + 1) % imagesThree.length;
	updateCarouselThree();
});

function updateCarouselThree() {
	let maxImagesThree = 3;
	if (window.innerWidth >= 461) {
		maxImagesThree = 4;
	}
	if (window.innerWidth >= 769) {
		maxImagesThree = 5;
	}
	
	for (let i = 0; i < imagesThree.length; i++) {
		if (i >= currentIndexThree && i < currentIndexThree + maxImagesThree) {
			imagesThree[i].style.display = "block";
		} else {
			imagesThree[i].style.display = "none";
		 }
	}
}

updateCarouselThree();
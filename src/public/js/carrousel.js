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
	for (let i = 0; i < images.length; i++) {
		if (i >= currentIndex && i < currentIndex + 3) {
			images[i].style.display = "block";
		} else {
			images[i].style.display = "none";
		 }
	}
}

updateCarousel();
document.addEventListener("DOMContentLoaded", () => {
	const imageDetails = [
			{ id: 1, description: "Foundation Laying – The process of laying the foundation for a building. This is a critical stage that requires high precision and adherence to engineering standards to ensure the strength and stability of the future structure." },
			{ id: 2, description: "Skyscraper Construction – The construction of a high-rise building, which requires complex equipment and highly skilled labor. From erecting the frame to installing glass panels, this is a large-scale process." },
			{ id: 3, description: "Scaffolding Setup – The installation of scaffolding for working at height. Scaffolding provides workers access to the upper parts of the building and is essential for safely carrying out construction operations." },
			{ id: 4, description: "Reinforcement Placement – The placement of reinforcement bars (rebar) that strengthen concrete structures. This process ensures the durability and strength of building elements such as walls, columns, and floors." },
			{ id: 5, description: "Precision Tools – The use of precision construction tools for material handling and measurement. These tools are necessary for performing work with minimal errors and ensuring high-quality construction." },
			{ id: 6, description: "Tower Crane Operation – Operating a tower crane, which is used to lift heavy construction materials to great heights. This crane is an essential element in the construction of large structures." }
	];

	const imageSources = [
			"src/assets/image/Projects/Project1.jpg",
			"src/assets/image/Projects/Project2.jpg",
			"src/assets/image/Projects/Project3.jpg",
			"src/assets/image/Projects/Project4.jpg",
			"src/assets/image/Projects/Project5.jpg",
			"src/assets/image/Projects/Project6.jpg",
	];

	const slidesContainer = document.querySelector(".projects__slides");
	const prevButton = document.querySelector(".projects__button--left");
	const nextButton = document.querySelector(".projects__button--right");
	let currentIndex = 0;
	let slideWidth;

	function setupSlides() {
			slidesContainer.innerHTML = "";
			const doubledImageSources = [...imageSources, ...imageSources];

			doubledImageSources.forEach((src, index) => {
					const imgElement = createImageElement(src, index % imageSources.length);
					slidesContainer.appendChild(imgElement);
			});

			slideWidth = document.querySelector(".projects__image").offsetWidth;
			slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
	}

	function createImageElement(src, index) {
			const imgElement = document.createElement("img");
			imgElement.src = src;
			imgElement.classList.add("projects__image");

			// Add hover effect for description
			const description = document.createElement("div");
			description.classList.add("projects__description");
			description.textContent = imageDetails[index].description;

			imgElement.addEventListener("mouseover", () => {
					description.style.display = "block";
			});
			imgElement.addEventListener("mouseout", () => {
					description.style.display = "none";
			});

			const wrapper = document.createElement("div");
			wrapper.classList.add("projects__image-wrapper");
			wrapper.appendChild(imgElement);
			wrapper.appendChild(description);

			return wrapper;
	}

	function updateSlidePosition() {
			slidesContainer.style.transition = "transform 0.5s ease";
			slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
			slidesContainer.addEventListener("transitionend", () => {
					if (currentIndex >= imageSources.length) {
							slidesContainer.style.transition = "none";
							currentIndex = 0;
							slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
					}
					if (currentIndex < 0) {
							slidesContainer.style.transition = "none";
							currentIndex = imageSources.length - 1;
							slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
					}
			});
	}

	nextButton.addEventListener("click", () => {
			currentIndex++;
			updateSlidePosition();
	});

	prevButton.addEventListener("click", () => {
			currentIndex--;
			updateSlidePosition();
	});

	setupSlides();
});

const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = () => {
		image.removeAttribute('data-src');
	};
};
 
const imgOptions = {
	root: document.querySelector('#scrollArea'),
	rootMargin: '0px',
	threshold: 0.5
};

if ('IntersectionObserver' in window) {

	const imgObserver = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				imgObserver.unobserve(item.target);
			}
		});
	}, imgOptions);

	imagesToLoad.forEach((img) => {
		imgObserver.observe(img);
	});
}
else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}
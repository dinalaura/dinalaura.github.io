const imagesToLoad = document.querySelectorAll('iframe[src]');

const loadImages = (iframe) => {
	iframe.setAttribute('src', iframe.getAttribute('src'));
	iframe.onload = () => {
		iframe.removeAttribute('src');
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

	imagesToLoad.forEach((iframe) => {
		imgObserver.observe(iframe);
	});
}
else {
	imagesToLoad.forEach((iframe) => {
		loadImages(iframe);
	});
}
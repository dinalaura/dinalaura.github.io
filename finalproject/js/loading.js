const imagesToLoad = document.querySelectorAll('iframe[src]');

const loadImages = (iframe) => {
	iframe.setAttribute('src', iframe.getAttribute('src'));
	iframe.onload = () => {
		iframe.setAttribute('src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.742790701428!2d-86.97723018507656!3d20.475754786300563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec697a2a774f7a00!2sTerminal%20Puerta%20Maya!5e0!3m2!1ses-419!2smx!4v1595029194319!5m2!1ses-419!2smx');
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
export function observe(element, dotnetReference) {
	var observer = new IntersectionObserver(function (entries) {
		if (entries[0]['isIntersecting'] === true) {
			observer.disconnect();
			dotnetReference.invokeMethodAsync('Intersected');
		}
	});
	observer.observe(element);
	return observer;
}
export function unobserve(observer) {
	observer.disconnect();
}
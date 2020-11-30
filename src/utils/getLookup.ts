function getIndex() {
	if (window.location.search) {
		if (/\?i=\d+/.test(window.location.search)) {
			return Number(window.location.search.substr(3));
		}
	}
	return null;
}

export default getIndex();

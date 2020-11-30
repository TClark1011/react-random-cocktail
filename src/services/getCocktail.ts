function getCocktail(
	setCocktailData: Function,
	lookupIndex: number | null = null
) {
	if (lookupIndex) {
		return fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + lookupIndex
		)
			.then((result) => result.json())
			.then((data) => setCocktailData(data.drinks[0]))
			.catch((error) => console.log(error));
	}
	return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
		.then((result) => result.json())
		.then((data) => setCocktailData(data.drinks[0]))
		.catch((error) => console.log(error));
}
export default getCocktail;

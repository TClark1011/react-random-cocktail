const getRandomCocktail = (setCocktailData: Function) =>
	fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
		.then((result) => result.json())
		.then((data) => setCocktailData(data.drinks[0]))
		.catch((error) => console.log(error));

export default getRandomCocktail;

import React, { useEffect, useState } from "react";

import getRandomCocktail from "../../services/getRandomCocktail";

import { sentenceCase } from "sentence-case";
import { titleCase } from "title-case";

import Skeleton from "react-loading-skeleton";

import {
	CocktailContainer,
	CocktailImage,
	CocktailContent,
	CocktailTitle,
	CocktailInstructions,
	CocktailIngredientList,
	CocktailIngredientItem,
	CocktailIngredientItemPlaceholder,
	CocktailIcon,
	CocktailImageSpacer,
} from "./Cocktail.styles";

const Cocktail = ({ ...props }) => {
	const [cocktailData, setCocktailData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<Boolean>(false);

	useEffect(() => {
		loadNewCocktail();
	}, []);

	useEffect(() => {
		if (cocktailData && cocktailData.strDrink === "410 Gone") {
			loadNewCocktail();
		}
	}, [cocktailData]);

	function loadNewCocktail() {
		setIsLoading(true);
		setCocktailData(null);
		getRandomCocktail(setCocktailData);
	}

	const hasLoaded = () => !isLoading && cocktailData;

	return (
		<CocktailContainer>
			{cocktailData ? (
				<CocktailImage
					src={cocktailData?.strDrinkThumb}
					alt={cocktailData?.strDrink}
					onLoad={() => setIsLoading(false)}
				/>
			) : (
				<CocktailImageSpacer />
			)}
			<CocktailContent>
				<CocktailTitle>
					{hasLoaded() ? titleCase(cocktailData.strDrink) : <Skeleton />}
				</CocktailTitle>
				<CocktailInstructions>
					{hasLoaded() ? cocktailData.strInstructions : <Skeleton count={2} />}
				</CocktailInstructions>
				<CocktailIngredientList>
					{hasLoaded() ? (
						[...Array(15)].map((_, item) => {
							const ingredient = cocktailData[`strIngredient${item + 1}`];
							const amount = cocktailData[`strMeasure${item + 1}`];
							return ingredient ? (
								<CocktailIngredientItem key={item}>
									{ingredient} {amount}
								</CocktailIngredientItem>
							) : null;
						})
					) : (
						<CocktailIngredientItemPlaceholder count={3} />
					)}
				</CocktailIngredientList>
			</CocktailContent>
			{hasLoaded() ? <CocktailIcon onClick={loadNewCocktail} /> : null}
		</CocktailContainer>
	);
};
export default Cocktail;

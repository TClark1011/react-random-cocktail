import React, { useEffect, useState } from "react";

import getCocktail from "../../services/getCocktail";

import Skeleton from "react-loading-skeleton";

import lookupIndex from "../../utils/getLookup";

import BookmarkPrompt from "../BookmarkPrompt";

import {
	VscRefresh as Refresh,
	VscBookmark as Bookmark,
} from "react-icons/vsc";

import {
	CocktailContainer,
	CocktailImage,
	CocktailImageSpacer,
	CocktailContent,
	CocktailTitle,
	CocktailInstructions,
	CocktailIngredientList,
	CocktailIngredientItem,
	CocktailIngredientItemPlaceholder,
	CocktailIconsContainer,
	CocktailIconWrapper,
} from "./Cocktail.styles";

const Cocktail = ({ ...props }) => {
	const [cocktailData, setCocktailData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<Boolean>(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		loadNewCocktail(lookupIndex);
	}, []);

	useEffect(() => {
		if (cocktailData && cocktailData.strDrink === "410 Gone") {
			loadNewCocktail();
		}
	}, [cocktailData]);

	function loadNewCocktail(lookup: number | null = null) {
		setIsLoading(true);
		setCocktailData(null);
		if (!lookup) {
			window.history.pushState("Random Cocktail", "/", "/");
		}
		getCocktail(setCocktailData, lookup);
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
					{hasLoaded() ? cocktailData.strDrink : <Skeleton />}
				</CocktailTitle>
				<CocktailInstructions>
					{hasLoaded() ? cocktailData.strInstructions : <Skeleton count={3} />}
				</CocktailInstructions>
				<CocktailIngredientList>
					{hasLoaded() ? (
						[...Array(15)].map((_, item) => {
							const ingredient = cocktailData[`strIngredient${item + 1}`];
							const amount = cocktailData[`strMeasure${item + 1}`];
							return ingredient ? (
								<CocktailIngredientItem key={item}>
									{amount} {ingredient}
								</CocktailIngredientItem>
							) : null;
						})
					) : (
						<CocktailIngredientItemPlaceholder count={3} />
					)}
				</CocktailIngredientList>
			</CocktailContent>
			{hasLoaded() && (
				<CocktailIconsContainer>
					<CocktailIconWrapper onClick={() => setShowModal(true)}>
						<Bookmark fill="" />
					</CocktailIconWrapper>
					<CocktailIconWrapper onClick={() => loadNewCocktail()}>
						<Refresh fill="" />
					</CocktailIconWrapper>
				</CocktailIconsContainer>
			)}
			{hasLoaded() && (
				<BookmarkPrompt
					show={showModal}
					setShow={setShowModal}
					index={cocktailData.idDrink}
				></BookmarkPrompt>
			)}
		</CocktailContainer>
	);
};
export default Cocktail;

import styled from "styled-components";

import Skeleton from "react-loading-skeleton";

const padding = 16;

const pseudoBlack = "#111";

const width = 300;

const spacing = 12;

export const CocktailContainer = styled.div`
	position: relative;
	box-sizing: border-box;
	width: ${width}px;
	min-height: 400px;
	max-width: 95vw;
	margin: 0;
	overflow: hidden;
	border-radius: 16px;
	background-color: white;
	color: ${pseudoBlack};
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

	font-family: "Jost", sans-serif;
	line-height: 1.1;
	font-size: 16px;
`;

export const CocktailImage = styled.img`
	width: 100%;
	min-height: ${width}px;
`;
export const CocktailImageSpacer = styled.div`
	height: ${width - padding + 2}px;
	margin-bottom: ${padding}px;
	border-radius: 16px;
	box-sizing: border-box;
`;

export const CocktailContent = styled.div`
	padding: ${padding}px;
	padding-top: 0;
`;

export const CocktailTitle = styled.h2`
	margin-top: 4px;
	margin-bottom: ${spacing}px;
	font-family: "Josefin Sans", sans-serif;
	font-family: 32px;
`;

export const CocktailInstructions = styled.p`
	margin: 0;
	margin-bottom: ${spacing}px;
`;

export const CocktailIngredientList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const CocktailIngredientItem = styled.li`
	margin: 0;
`;
export const CocktailIngredientItemPlaceholder = styled(Skeleton)`
	width: ${width / 2}px !important;
`;

export const CocktailIconsContainer = styled.div`
	position: absolute;
	bottom: ${padding}px;
	right: ${padding}px;
	line-height: 0;
	cursor: pointer;
	display: flex;
`;

export const CocktailIconWrapper = styled.div`
	fill: #888 !important;
	transition: fill 0.1s linear;

	&:hover {
		fill: ${pseudoBlack} !important;
	}
`;

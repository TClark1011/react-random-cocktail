import styled from "styled-components";
import { VscRefresh as Refresh } from "react-icons/vsc";

import Skeleton from "react-loading-skeleton";

const padding = 16;

const pseudoBlack = "#111";

const width = 300;

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

	font-family: sans-serif;
`;

export const CocktailImage = styled.img`
	width: 100%;
	min-height: ${width}px;
`;

export const CocktailImageSpacer = styled(Skeleton)`
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
	margin-top: 0;
	margin-bottom: 8px;
`;

export const CocktailInstructions = styled.p`
	margin-top: 0;
`;

export const CocktailIngredientList = styled.ul`
	list-style: none;
	padding: 0;
	margin-bottom: 0;
`;

export const CocktailIngredientItem = styled.li`
	margin: 0;
`;
export const CocktailIngredientItemPlaceholder = styled(Skeleton)`
	width: 150px !important;
`;

export const CocktailIcon = styled(Refresh)`
	position: absolute;
	bottom: ${padding}px;
	right: ${padding}px;
	line-height: 0;
	cursor: pointer;
	fill: #888;

	&:hover {
		fill: ${pseudoBlack};
	}
`;

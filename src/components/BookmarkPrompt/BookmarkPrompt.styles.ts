import styled from "styled-components";

const padding = 16;

const pseudoBlack = "#111";

const colorMain = "#49d6c9";

const spacing = 12;

export const BookmarkPromptTitle = styled.h2`
	margin: 0;
	margin-bottom: ${spacing}px;
	font-family: "Josefin Sans", sans-serif;
	font-family: 32px;
	text-align: center;
`;

export const BookmarkUrlContainer = styled.a`
	border-radius: 4px;
	width: 100%;
	padding: ${padding}px;
	box-sizing: border-box;
	outline: none !important;
	display: block;
	text-align: center;
	background-color: ${colorMain};
	color: white;
`;

export const BookmarkPromptBody = styled.p`
	margin: 0;
	margin-top: ${spacing}px;
	text-align: center;
`;

import styled from "styled-components";

const padding = 16;

const pseudoBlack = "#111";

export const ModalRoot = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${pseudoBlack};
`;

export const ModalCard = styled.div`
	width: 600px;
	max-width: 95vw;
	border-radius: 4px;
	background-color: white;
	padding: ${padding}px;
`;

import React from "react";

import styled from "styled-components";

import Cocktail from "./components/Cocktail";

const AppContainer = styled.div`
	min-width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<AppContainer className="App">
			<Cocktail />
		</AppContainer>
	);
}

export default App;

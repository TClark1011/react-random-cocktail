import React from "react";

import styled from "styled-components";

import Cocktail from "./components/Cocktail";
import GitButton from "./components/GitButton";

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
			<GitButton />
		</AppContainer>
	);
}

export default App;

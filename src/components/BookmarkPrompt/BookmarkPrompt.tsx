import React from "react";

import Modal from "../Modal";

import {
	BookmarkUrlContainer,
	BookmarkPromptBody,
	BookmarkPromptTitle,
} from "./BookmarkPrompt.styles";

interface Props {
	show: Boolean;
	setShow: Function;
	index: number;
}

const BookmarkPrompt: React.FC<Props> = ({
	show,
	index,
	children,
	setShow,
	...props
}) => {
	const url = `${window.location.href}?i=${index}`;
	return (
		<Modal show={show} setShow={setShow}>
			<BookmarkPromptTitle>Bookmark it for later!</BookmarkPromptTitle>
			<BookmarkUrlContainer href={url}>{url}</BookmarkUrlContainer>
			<BookmarkPromptBody>
				If you like this cocktail and want to save it for later, you can click
				on the link above and bookmark it!
			</BookmarkPromptBody>
		</Modal>
	);
};
export default BookmarkPrompt;

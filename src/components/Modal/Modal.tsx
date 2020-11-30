import React from "react";

import { ModalCard, ModalRoot } from "./Modal.styles";

interface Props {
	show: Boolean;
	setShow: Function;
}

const Modal: React.FC<Props> = ({ show, setShow, children, ...props }) => {
	if (!show) {
		return null;
	}
	return (
		<ModalRoot onClick={() => setShow(false)}>
			<ModalCard>{children}</ModalCard>
		</ModalRoot>
	);
};

export default Modal;

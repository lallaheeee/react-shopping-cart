import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PaginationItemProps {
	item: number;
	to: string;
	onClick: (page: number) => void;
	active?: boolean;
}

interface PaginationArrowProps {
	children: React.ReactNode;
	to: string;
	onClick: () => void;
	disabled?: boolean;
}

export const PaginationArrow = React.memo((props: PaginationArrowProps) => {
	const { children, onClick, disabled, to } = props;
	return (
		<S.Li onClick={onClick} className={disabled ? "disabled" : ""}>
			<Link to={to}>{children}</Link>
		</S.Li>
	);
});

export const PaginationItem = React.memo((props: PaginationItemProps) => {
	const { item, onClick, active, to } = props;
	const handleClick = useCallback(() => onClick(item), [item, onClick]);

	return (
		<S.Li className={active ? "active" : ""} onClick={handleClick}>
			<Link to={to}>{item}</Link>
		</S.Li>
	);
});

const S = {
	Li: styled.li`
		width: 3rem;
		height: 3rem;
		border-radius: 4px;
		position: relative;

		& > * {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		&:hover,
		&.active {
			border: 1px solid #a1a1a1;
		}

		&.disabled,
		&.disabled svg {
			cursor: not-allowed;
			color: #a1a1a1;
			border: none;
			pointer-events: none;
		}
	`,
};

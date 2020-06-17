import styled from "styled-components";
import entries from "~/utils/entires";

export type Props = {
	column?: boolean;
	justifyCenter?: boolean;
	justifyAround?: boolean;
	justifyBetween?: boolean;
	justifyEnd?: boolean;
	alignStart?: boolean;
	alignEnd?: boolean;
	alignCenter?: boolean;
	alignBaseline?: boolean;
	contentStart?: boolean;
	contentEnd?: boolean;
	contentCenter?: boolean;
	contentBetween?: boolean;
	contentAround?: boolean;
	wrap?: boolean;
	wrapReverse?: boolean;
};

const PROPERTIES = {
	justifyContent: {
		justifyCenter: "center",
		justifyAround: "space-around",
		justifyBetween: "space-between",
		justifyEnd: "flex-end",
	},
	alignItems: {
		alignStart: "flex-start",
		alignEnd: "flex-end",
		alignCenter: "center",
		alignBaseline: "baseline",
	},
	alignContent: {
		contentStart: "flex-start",
		contentEnd: "flex-end",
		contentCenter: "center",
		contentBetween: "space-between",
		contentAround: "space-around",
	},
	wrap: {
		wrap: "wrap",
		wrapReverse: "wrap-reverse",
	},
};

export const Flex = styled.div<Props>`
	display: flex;
	flex-direction: ${props => props.column && "column"};
	justify-content: ${props => {
		for (const [key, value] of entries(PROPERTIES.justifyContent)) {
			if (props[key]) return value;
		}
	}};
	align-items: ${props => {
		for (const [key, value] of entries(PROPERTIES.alignItems)) {
			if (props[key]) return value;
		}
	}};
	align-content: ${props => {
		for (const [key, value] of entries(PROPERTIES.alignContent)) {
			if (props[key]) return value;
		}
	}};
	flex-wrap: ${props => {
		for (const [key, value] of entries(PROPERTIES.wrap)) {
			if (props[key]) return value;
		}
	}};
`;

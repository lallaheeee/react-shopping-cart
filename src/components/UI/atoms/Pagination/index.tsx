import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import _ from "~/lib/_";
import { LeftArrow, RightArrow } from "~/lib/Icons";
import { PaginationArrow, PaginationItem } from "./Item";

export interface PaginationProps {
	page: number;
	totalPage: number;
	numOfPageView?: number;
	onChange: (page: number) => void;
}

const getPages = ({
	totalPage,
	page,
	numOfPageView = 5,
}: Omit<PaginationProps, "onChange">) => {
	totalPage++;
	if (totalPage <= numOfPageView) numOfPageView = totalPage - 1;
	const [prev, maxStart] = [
		page - Math.floor(numOfPageView / 2),
		totalPage - numOfPageView,
	];

	const start = prev < 1 ? 1 : Math.min(prev, maxStart);
	const end =
		start + numOfPageView > totalPage ? totalPage : start + numOfPageView;
	return [start, end];
};

const Pagination = (props: PaginationProps) => {
	const { page = 1, totalPage, numOfPageView = 5, onChange } = props;
	const { pathname } = useLocation();
	const [start, end] = getPages({ page, totalPage, numOfPageView });

	const initialPages = _.range(start, end);

	const handleClick = useCallback((item: number) => onChange(item), [
		onChange,
	]);

	const handleClickPrevious = useCallback(() => {
		if (page === 1) return;
		handleClick(page - 1);
	}, [handleClick, page]);

	const handleClickNext = useCallback(() => {
		if (page === totalPage) return;
		handleClick(page + 1);
	}, [handleClick, page, totalPage]);

	return (
		<S.Ul>
			<PaginationArrow
				onClick={handleClickPrevious}
				disabled={page === 1}
				to={`${pathname}?page=${props.page - 1}`}
			>
				<LeftArrow />
			</PaginationArrow>
			{_.map(
				(item: number) => (
					<PaginationItem
						key={item}
						item={item}
						active={item === page}
						onClick={() => handleClick(item)}
						to={`${pathname}?page=${item}`}
					/>
				),
				initialPages,
			)}
			<PaginationArrow
				onClick={handleClickNext}
				disabled={page === totalPage}
				to={`${pathname}?page=${props.page + 1}`}
			>
				<RightArrow />
			</PaginationArrow>
		</S.Ul>
	);
};

Pagination.defaultProps = {
	numOfPageView: 5,
};

const S = {
	Ul: styled.ul`
		display: flex;
		align-self: center;
		cursor: pointer;

		& svg {
			width: 3rem;
			height: 3rem;
		}
	`,
};

export default React.memo(Pagination);

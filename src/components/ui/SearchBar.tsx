"use client";

import { FC } from "react";
import { GoSearch } from "react-icons/go";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
	return (
		<div className="flex justify-between sm:relative">
			<input
				type="text"
				placeholder="Search ..."
				className="hidden h-8 w-[30vw] rounded-2xl bg-shade-blue px-5 pr-12 sm:block md:w-[20vw]"
			/>
			<div className="flex cursor-pointer items-center px-3 hover:bg-light-shade-blue sm:absolute sm:inset-y-0 sm:right-0 sm:rounded-r-2xl">
				<GoSearch className="h-5 w-5 fill-white" />
			</div>
		</div>
	);
};

export default SearchBar;

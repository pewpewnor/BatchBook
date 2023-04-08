"use client";

import { FC } from "react";
import { GoSearch } from "react-icons/go";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
	return (
		<div className="sm:relative flex justify-between">
			<input
				type="text"
				placeholder="Search ..."
				className="hidden sm:block bg-shade-blue rounded-2xl h-9 px-5 w-[30vw] md:w-[20vw]"
			/>
			<div className="sm:absolute sm:inset-y-0 sm:right-1 sm:rounded-r-2xl flex items-center px-3 cursor-pointer">
				<GoSearch className="w-5 h-5 fill-white" />
			</div>
		</div>
	);
};

export default SearchBar;

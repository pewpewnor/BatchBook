"use client";

import { FC } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
	return (
		<div className="relative flex justify-between">
			<input
				type="text"
				placeholder="Search ..."
				className="h-[1.8rem] w-[30vw] rounded-2xl bg-white/30 px-5 pr-12 backdrop-blur-lg md:w-[20vw]"
			/>
			<div className="absolute inset-y-0 right-0 flex items-center rounded-r-2xl px-3">
				<BsSearch className="h-4 w-4 fill-white" />
			</div>
		</div>
	);
};

export default SearchBar;

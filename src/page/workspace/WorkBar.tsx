import SearchBar from "@/components/ui/SearchBar";
import { FC } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

interface WorkBarProps {}

const WorkBar: FC<WorkBarProps> = (props: WorkBarProps) => {
	return (
		<div className="flex h-12 w-full items-center justify-around">
			<SearchBar />
			<BsFillPlusSquareFill className="mr-2 h-6 w-6 fill-slate-400" />
			<button className="rounded-lg bg-white/30 px-2 py-1 text-sm backdrop-blur-xl">
				Invite
			</button>
		</div>
	);
};

export default WorkBar;

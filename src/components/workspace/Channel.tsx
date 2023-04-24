import { ChannelData } from "@/lib/database/workspace-type";
import { FC } from "react";
import { CiSettings } from "react-icons/ci";
import { HiHashtag } from "react-icons/hi";

interface ChannelProps extends ChannelData {}

const Channel: FC<ChannelProps> = (props: ChannelProps) => {
	return (
		<div className="bg-shade-blue flex justify-between mx-2 pl-6 pr-2 py-1 mb-1 rounded-md hover:bg-light-shade-blue">
			{/* Left section */}
			<div className="flex items-center gap-x-2">
				<HiHashtag />
				{props.name}
			</div>
			{/* Right section */}
			<div className="flex items-center gap-x-2">
				<CiSettings />
			</div>
		</div>
	);
};

export default Channel;

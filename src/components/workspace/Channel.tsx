import { ChannelData } from "@/lib/database/workspace-type";
import { FC } from "react";
import { CiSettings } from "react-icons/ci";
import { HiHashtag } from "react-icons/hi";

interface ChannelProps extends ChannelData {}

const Channel: FC<ChannelProps> = (props: ChannelProps) => {
	return (
		<div className="mx-2 mb-1 flex justify-between rounded-md bg-shade-blue py-1 pl-6 pr-2 hover:bg-light-shade-blue">
			{/* Left section */}
			<div className="flex items-center gap-x-2 pr-2">
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

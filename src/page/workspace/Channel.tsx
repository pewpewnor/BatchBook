"use client";
import SwitchChannelContext from "@/contexts/SwitchChannelContext";
import { ChannelData } from "@/types/workspace-type";
import { FC, useContext } from "react";
import { CiSettings } from "react-icons/ci";
import { HiHashtag } from "react-icons/hi";

interface ChannelProps extends ChannelData {}

const Channel: FC<ChannelProps> = (props: ChannelProps) => {
	const [_, setCurrentChannel] = useContext(SwitchChannelContext);

	return (
		<div
			className="mx-2 mb-1 flex justify-between rounded-md py-1 pl-6 pr-2 hover:bg-light-shade-blue"
			onClick={() => {
				setCurrentChannel(props);
			}}
		>
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

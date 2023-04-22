"use client";
import { ChannelSectionData } from "@/lib/database/workspace-type";
import { FC } from "react";

interface ChannelSectionProps extends ChannelSectionData {}

const ChannelSection: FC<ChannelSectionProps> = (
	props: ChannelSectionProps
) => {
	return (
		<div className="bg-shade-blue flex justify-between">
			{/* Left section */}
			<div className="flex">{props.name}</div>
			{/* Right section */}
			<div className="flex">+</div>
		</div>
	);
};

export default ChannelSection;

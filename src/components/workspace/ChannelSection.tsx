"use client";
import { FC } from "react";

interface ChannelSectionProps {
	name: string;
}

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

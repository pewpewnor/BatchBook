"use client";
import Channel from "@/components/workspace/Channel";
import { ChannelSectionData } from "@/lib/database/workspace-type";
import { FC, useState } from "react";
import { BsCaretDown, BsCaretDownFill, BsPlusLg } from "react-icons/bs";

interface ChannelSectionProps extends ChannelSectionData {}

const ChannelSection: FC<ChannelSectionProps> = (
	props: ChannelSectionProps
) => {
	const [channelSectionDropdown, setChannelSectionDropdown] =
		useState<boolean>(true);

	function toggleChannelSectionDropdown() {
		setChannelSectionDropdown((prev) => !prev);
	}

	return (
		<>
			<div className="group my-2 flex justify-between bg-shade-blue py-1 pl-2 pr-4 hover:bg-light-shade-blue">
				{/* Left section */}
				<div
					className="flex items-center gap-x-2 pr-2"
					onClick={toggleChannelSectionDropdown}
				>
					{channelSectionDropdown ? (
						<BsCaretDownFill />
					) : (
						<BsCaretDown />
					)}
					<p className="text-sm text-slate-300 group-hover:font-bold">
						{props.name}
					</p>
				</div>
				{/* Right section */}
				<div className="flex items-center gap-x-2">
					<BsPlusLg />
				</div>
			</div>

			{/* Dropdown channels that belongs to this channel section */}
			{channelSectionDropdown && (
				<div className="flex flex-col">
					{props.channels.map((channel) => (
						<Channel key={channel.id} {...channel} />
					))}
				</div>
			)}
		</>
	);
};

export default ChannelSection;

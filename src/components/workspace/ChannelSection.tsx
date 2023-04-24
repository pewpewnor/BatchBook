"use client";
import Channel from "@/components/workspace/Channel";
import { ChannelSectionData } from "@/lib/database/workspace-type";
import { FC, useState } from "react";
import { BsCaretDown, BsCaretDownFill, BsPlusLg } from "react-icons/bs";

interface ChannelSectionProps extends ChannelSectionData {}

const ChannelSection: FC<ChannelSectionProps> = (
	props: ChannelSectionProps
) => {
	const [dropdown, setDropdown] = useState<boolean>(true);

	function handleDropdown() {
		setDropdown((prev) => !prev);
	}

	return (
		<>
			<div className="my-2 flex justify-between bg-shade-blue pl-2 pr-4">
				{/* Left section */}
				<div
					className="group flex items-center gap-x-2"
					onClick={handleDropdown}
				>
					{dropdown ? <BsCaretDownFill /> : <BsCaretDown />}
					<p className="text-sm group-hover:font-bold">
						{props.name}
					</p>
				</div>
				{/* Right section */}
				<div className="flex items-center gap-x-2">
					<BsPlusLg />
				</div>
			</div>

			{/* Dropdown channels that belongs to this channel section */}
			{dropdown && (
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

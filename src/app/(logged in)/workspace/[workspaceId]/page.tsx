"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import SwitchChannelContext from "@/contexts/SwitchChannelContext";
import ChannelSection from "@/page/workspace/ChannelSection";
import BoardView from "@/page/workspace/board/BoardView";
import ThreadView from "@/page/workspace/thread/ThreadView";
import { getWorkspaceData } from "@/server/workspace";
import { ChannelData, WorkspaceData } from "@/types/workspace-type";
import { notFound } from "next/navigation";
import { FC, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useQuery } from "react-query";

interface WorkspaceProps {
	params: {
		workspaceId: string;
	};
}

const Workspace: FC<WorkspaceProps> = (props: WorkspaceProps) => {
	const [isChannelSidebarOpen, setIsChannelSidebarOpen] = useState(true);
	const [currentChannel, setCurrentChannel] = useState<ChannelData | null>(
		null
	);

	const workspaceQuery = useQuery<WorkspaceData | null>(
		["workspace", props.params.workspaceId],
		async () => {
			console.log("fetching workspace...");
			return await getWorkspaceData(props.params.workspaceId);
		},
		{
			onError: (error: unknown) => {
				console.error(error);
			},
			cacheTime: 0,
			staleTime: 5000,
		}
	);

	const toggleChannelSidebarCollapse = () => {
		setIsChannelSidebarOpen((prev) => !prev);
	};

	if (workspaceQuery.isLoading || workspaceQuery.isFetching) {
		return (
			<div className="flex h-full items-center justify-center">
				<LoadingSpinner />
				<p className="text-xl">Loading...</p>
			</div>
		);
	}

	if (workspaceQuery.isError) {
		return (
			<div className="flex h-full items-center justify-center">
				<p className="text-xl">Error While Fetching Data</p>
			</div>
		);
	}

	if (!workspaceQuery.data) {
		notFound();
	}

	if (!currentChannel) {
		const firstChannel = workspaceQuery.data.channelSections[0].channels[0];
		if (firstChannel) {
			setCurrentChannel(firstChannel);
		}
	}

	return (
		<div className="relative flex h-full">
			{/* Channel Sidebar */}
			<div
				className={`relative h-full border-0 bg-shade-blue bg-opacity-75 pt-1 shadow-lg ${
					isChannelSidebarOpen ? "w-56" : "w-0"
				}`}
			>
				<div className={isChannelSidebarOpen ? "block" : "hidden"}>
					<SwitchChannelContext.Provider
						value={[currentChannel, setCurrentChannel]}
					>
						{workspaceQuery.data.channelSections.map(
							(channelSection) => {
								return (
									<ChannelSection
										key={channelSection.id}
										{...channelSection}
									/>
								);
							}
						)}
					</SwitchChannelContext.Provider>
				</div>

				{isChannelSidebarOpen ? (
					<div
						className="absolute right-[-1.25rem] block rounded-2xl bg-black p-2"
						style={{ top: "calc(50% - 2rem)" }}
						onClick={toggleChannelSidebarCollapse}
					>
						<AiOutlineDoubleLeft />
					</div>
				) : (
					<div
						className="absolute left-2 block rounded-2xl bg-black p-2"
						style={{ top: "calc(50% - 2rem)" }}
						onClick={toggleChannelSidebarCollapse}
					>
						<AiOutlineDoubleRight />
					</div>
				)}
			</div>

			{/* Main content */}
			<div className="h-full w-full">
				{!currentChannel ? (
					<div className="flex h-full items-center justify-center">
						<p className="text-lg">
							Let&apos;s pick a channel to open!
						</p>
					</div>
				) : currentChannel.boardChannel ? (
					<BoardView />
				) : currentChannel.threadChannel ? (
					<ThreadView />
				) : (
					<div className="flex h-full items-center justify-center">
						<p className="text-lg">
							This channel seems to not work properly
						</p>
					</div>
				)}
				{/* <pre>{JSON.stringify(workspaceQuery.data, null, 2)}</pre> */}
			</div>
		</div>
	);
};

export default Workspace;

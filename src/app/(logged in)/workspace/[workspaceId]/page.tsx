"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ChannelSection from "@/components/workspace/ChannelSection";
import { WorkspaceData } from "@/lib/database/workspace-type";
import createErrorMessage from "@/utils/error-message";
import { notFound } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { assert } from "ts-essentials";

interface WorkspaceProps {
	params: {
		workspaceId: string;
	};
}

const Workspace: FC<WorkspaceProps> = (props: WorkspaceProps) => {
	const [workspace, setWorkspace] = useState<WorkspaceData | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isChannelSidebarOpen, setIsChannelSidebarOpen] = useState(true);

	useEffect(() => {
		async function fetchWorkspace(workspaceId: string) {
			try {
				const response = await fetch(
					`/api/workspace?workspaceId=${workspaceId}`,
					{
						method: "GET",
						cache: "no-store",
						next: {
							revalidate: 5,
						},
					}
				);
				if (!response.ok) {
					throw new Error(
						createErrorMessage(
							"/workspace/[workspaceId]/page.tsx",
							"Workspace component > useEffect > fetchWorkspace",
							"Error while fetching API, probably caused by either:",
							"1. Server database is down",
							"2. Invalid API GET query parameters",
							"3. API error maybe due to failure connecting to database"
						)
					);
				}

				const data = await response.json();
				assert(
					data === null || (data as WorkspaceData),
					"returned data from API must be either be null or compatible with type WorkspaceData"
				);
				const workspace = data as WorkspaceData | null;

				setWorkspace(workspace);
				setIsLoading(false);
			} catch (error: unknown) {
				console.error(error);
			}
		}

		fetchWorkspace(props.params.workspaceId);
	}, [props.params.workspaceId]);

	const toggleChannelSidebarCollapse = () => {
		setIsChannelSidebarOpen((prev) => !prev);
	};

	if (isLoading) {
		return (
			<div className="flex h-full items-center justify-center">
				<LoadingSpinner />
				<p className="text-xl">Loading...</p>
			</div>
		);
	}

	if (!workspace) {
		notFound();
	}

	return (
		<div className="relative flex h-full flex-row">
			{/* Channel Sidebar */}
			<div
				className={`relative h-full border-0 bg-shade-blue bg-opacity-75 pt-1 shadow-lg ${
					isChannelSidebarOpen ? "w-56" : "w-0"
				}`}
			>
				<div className={isChannelSidebarOpen ? "block" : "hidden"}>
					{workspace.channelSections.map((channelSection) => {
						return (
							<ChannelSection
								key={channelSection.id}
								{...channelSection}
							/>
						);
					})}
				</div>
				{isChannelSidebarOpen && (
					<div
						className="absolute right-[-1.25rem] top-1/2 block rounded-2xl bg-black p-2 md:hidden"
						onClick={toggleChannelSidebarCollapse}
					>
						<AiOutlineDoubleLeft />
					</div>
				)}
				{!isChannelSidebarOpen && (
					<div
						className="absolute left-2 top-1/2 block rounded-2xl bg-black p-2 md:hidden"
						onClick={toggleChannelSidebarCollapse}
					>
						<AiOutlineDoubleRight />
					</div>
				)}
			</div>

			{/* Main content */}
			<div className="h-full">
				<pre>{JSON.stringify(workspace, null, 2)}</pre>
			</div>
		</div>
	);
};

export default Workspace;

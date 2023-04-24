"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ChannelSection from "@/components/workspace/ChannelSection";
import { WorkspaceData } from "@/lib/database/workspace-type";
import createErrorMessage from "@/utils/error-message";
import { notFound } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { assert } from "ts-essentials";

interface WorkspaceProps {
	params: {
		workspaceId: string;
	};
}

const Workspace: FC<WorkspaceProps> = (props: WorkspaceProps) => {
	const [workspace, setWorkspace] = useState<WorkspaceData | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

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
		<div className="flex h-full flex-row items-stretch">
			{/* Channel Sidebar */}
			<div className="h-full w-56 bg-shade-blue bg-opacity-75 shadow-lg backdrop-blur-lg">
				{workspace.channelSections.map((channelSection) => {
					return (
						<ChannelSection
							key={channelSection.id}
							{...channelSection}
						/>
					);
				})}
			</div>

			{/* Main content */}
			<div className="h-full">
				<pre>{JSON.stringify(workspace, null, 2)}</pre>
			</div>
		</div>
	);
};

export default Workspace;

"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ChannelSection from "@/components/workspace/ChannelSection";
import { WorkspaceData } from "@/lib/database/workspace-type";
import { notFound } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface WorkspaceProps {
	params: {
		workspaceId: string;
	};
}

const Workspace: FC<WorkspaceProps> = (props: WorkspaceProps) => {
	const [workspace, setWorkspace] = useState<WorkspaceData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

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
						"Error: Failed to fetch data, possibly invalid API URL\nLocation: /workspace/[workspaceId]/page.tsx"
					);
				}

				const data = (await response.json()) as WorkspaceData | null;
				if (data) {
					setWorkspace(data);
				}
				setIsLoading(false);
			} catch (error: unknown) {
				console.error(error);
			}
		}

		fetchWorkspace(props.params.workspaceId);
	}, [props.params.workspaceId]);

	if (isLoading) {
		return (
			<div className="h-full flex justify-center items-center">
				<LoadingSpinner />
				<p className="text-xl">Loading...</p>
			</div>
		);
	}

	if (!workspace) {
		notFound();
	}

	return (
		<div className="flex flex-row items-stretch">
			{/* Channel Sidebar */}
			<div className="min-h-screen bg-shade-blue bg-opacity-75 backdrop-blur-lg shadow-lg w-56">
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

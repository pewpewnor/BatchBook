import Navbar from "@/components/layouts/Navbar";
import ChannelSection from "@/components/workspace/ChannelSection";
import prisma from "@/lib/database/prisma";
import { Prisma } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import { resourceUsage } from "process";
import { FC } from "react";

type WorkspaceQuery = Prisma.WorkspaceGetPayload<{
	include: {
		members: true;
		channelSections: {
			select: {
				id: true;
				name: true;
				channels: {
					select: {
						id: true;
						name: true;
						type: true;
					};
				};
			};
		};
	};
}>;

async function getWorkspace(workspaceId: string): Promise<WorkspaceQuery> {
	try {
		const workspace = await prisma.workspace.findUnique({
			where: {
				id: workspaceId,
			},
			include: {
				members: true,
				channelSections: {
					select: {
						id: true,
						name: true,
						channels: {
							select: {
								id: true,
								name: true,
								type: true,
							},
						},
					},
				},
			},
		});
		if (!workspace) {
			notFound();
		}
		return workspace;
	} catch (e: unknown) {
		notFound();
	}
}

interface WorkspaceProps {
	params: Params;
}

/* @ts-expect-error Async Server Component */
const Workspace: FC<WorkspaceProps> = async (props: WorkspaceProps) => {
	const workspace = await getWorkspace(props.params.workspaceId);

	return (
		<div className="flex flex-row items-stretch">
			{/* Channel Sidebar */}
			<div className="min-h-screen bg-shade-blue bg-opacity-75 backdrop-blur-lg shadow-lg w-56">
				{workspace.channelSections.map((channelSection) => {
					return (
						<ChannelSection
							key={channelSection.id}
							name={channelSection.name}
						/>
					);
				})}
			</div>
			{/* Main conent */}
			<div className="h-full">
				<pre>{JSON.stringify(workspace, null, 2)}</pre>
			</div>
		</div>
	);
};

export default Workspace;

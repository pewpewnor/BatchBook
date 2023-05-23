import prisma from "@/lib/prisma";
import Workspace from "@/page/workspace/Workspace";
import { WorkspaceData } from "@/types/workspace-type";
import { FC } from "react";
import "server-only";
import { assert } from "ts-essentials";

async function getWorkspaceData(workspaceId: string) {
	"use server";
	assert(workspaceId, "workspaceId from params must not be null");

	const workspace = await prisma.workspace.findUnique({
		where: {
			id: workspaceId,
		},
		include: {
			members: true,
			channelSections: {
				include: {
					channels: {
						include: {
							boardChannel: true,
							threadChannel: true,
						},
					},
				},
			},
		},
	});

	assert(
		workspace === null || (workspace as WorkspaceData),
		"workspace to be returned must be either be null or compatible with type WorkspaceData"
	);

	return workspace;
}

interface WorkspacePageProps {
	params: {
		workspaceId: string;
	};
}

const WorkspacePage: FC<WorkspacePageProps> = (props: WorkspacePageProps) => {
	return (
		<Workspace
			workspaceId={props.params.workspaceId}
			getWorkspaceData={getWorkspaceData}
		/>
	);
};

export default WorkspacePage;

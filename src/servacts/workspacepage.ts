"use server";
import prisma from "@/lib/prisma";
import { WorkspaceData } from "@/types/workspace-type";
import { assert } from "ts-essentials";

async function getWorkspaceData(workspaceId: string) {
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

export { getWorkspaceData };

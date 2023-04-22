import Navbar from "@/components/layouts/Navbar";
import prisma from "@/lib/database/prisma";
import { Workspace } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import { FC } from "react";

async function getWorkspace(workspaceId: string): Promise<Workspace | null> {
	try {
		const workspace = await prisma.workspace.findUnique({
			where: {
				id: workspaceId,
			},
			include: {
				members: true,
				channelSections: true,
			},
		});
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
	if (!workspace) {
		notFound();
	}

	return (
		<div className="h-full">
			<pre>{JSON.stringify(workspace, null, 2)}</pre>
		</div>
	);
};

export default Workspace;

import prisma from "@/lib/database/prisma";
import { WorkspaceData } from "@/lib/database/workspace-type";
import createErrorMessage from "@/utils/error-message";
import { NextRequest, NextResponse } from "next/server";
import { assert } from "ts-essentials";

interface GetParams {
	workspaceId?: string;
}

export async function GET(request: NextRequest) {
	let params;
	try {
		params = Object.fromEntries(
			request.nextUrl.searchParams.entries()
		) as GetParams;
	} catch (error: unknown) {
		throw new Error(
			createErrorMessage(
				"Location: /api/workspace/route.ts",
				"GET method",
				"API GET query parameters are missing from a specific API caller"
			)
		);
	}

	assert(params.workspaceId, "workspaceId from params must not be null");

	const workspace = await prisma.workspace.findUnique({
		where: {
			id: params.workspaceId,
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

	return NextResponse.json(workspace);
}

interface PostData {}

export async function POST(request: NextRequest) {
	const data = (await request.json()) as PostData;

	return NextResponse.json(data);
}

interface UpdateData {}

export async function PUT(request: NextRequest) {
	const data = (await request.json()) as UpdateData;

	return NextResponse.json(data);
}

interface DeleteData {}

export async function DELETE(request: NextRequest) {
	const data = (await request.json()) as DeleteData;

	return NextResponse.json(data);
}

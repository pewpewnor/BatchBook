import prisma from "@/lib/prisma";
import { BoardChannelData } from "@/types/boardpage-type";
import createErrorMessage from "@/utils/error-message";
import { NextRequest, NextResponse } from "next/server";
import { assert } from "ts-essentials";

interface GetParams {
	boardChannelId?: string;
}

export async function GET(request: NextRequest) {
	let params;
	try {
		params = Object.fromEntries(
			request.nextUrl.searchParams.entries()
		) as GetParams;
	} catch (error: unknown) {
		if (process.env.NODE_ENV === "production") {
			return NextResponse.json(
				{
					error: createErrorMessage(
						"Location: /api/boardpage/route.ts",
						"GET method",
						"API GET query parameters are missing from a specific API caller"
					),
				},
				{
					status: 400,
				}
			);
		} else {
			throw new Error(
				createErrorMessage(
					"Location: /api/boardpage/route.ts",
					"GET method",
					"API GET query parameters are missing from a specific API caller"
				)
			);
		}
	}

	if (params.boardChannelId === undefined) {
		if (process.env.NODE_ENV === "production") {
			return NextResponse.json(
				{
					error: createErrorMessage(
						"Location: /api/boardpage/route.ts",
						"GET method",
						"API GET query parameters are missing from a specific API caller"
					),
				},
				{
					status: 400,
				}
			);
		} else {
			throw new Error(
				createErrorMessage(
					"Location: /api/boardpage/route.ts",
					"GET method",
					"API GET query parameters are missing from a specific API caller"
				)
			);
		}
	}

	assert(
		params.boardChannelId,
		"boardChannelId from params must not be null"
	);

	const boardChannel = await prisma.boardChannel.findUnique({
		where: {
			id: params.boardChannelId,
		},
		include: {
			pillars: {
				include: {
					cards: {
						include: {
							labels: true,
						},
					},
				},
			},
		},
	});

	assert(
		boardChannel === null || (boardChannel as BoardChannelData),
		"workspace to be returned must be either be null or compatible with type WorkspaceData"
	);

	return NextResponse.json(boardChannel);
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

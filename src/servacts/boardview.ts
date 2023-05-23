"use server";
import prisma from "@/lib/prisma";
import { BoardChannelData } from "@/types/boardpage-type";
import { assert } from "ts-essentials";

async function getBoardChannelData(boardChannelId: string) {
	assert(boardChannelId, "boardChannelId must not be null");

	const boardChannel = await prisma.boardChannel.findUnique({
		where: {
			id: boardChannelId,
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
		"boardChannel to be returned must be either be null or compatible with type BoardChannelData"
	);

	return boardChannel;
}

export { getBoardChannelData };

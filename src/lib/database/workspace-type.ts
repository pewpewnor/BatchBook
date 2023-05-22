import { Prisma } from "@prisma/client";

type WorkspaceData = Prisma.WorkspaceGetPayload<{
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
						boardChannel: true;
						threadChannel: true;
					};
				};
			};
		};
	};
}>;

type ChannelSectionData = Prisma.ChannelSectionGetPayload<{
	select: {
		id: true;
		name: true;
		channels: {
			select: {
				id: true;
				name: true;
				type: true;
				boardChannel: true;
				threadChannel: true;
			};
		};
	};
}>;

type ChannelData = Prisma.ChannelGetPayload<{
	select: {
		id: true;
		name: true;
		type: true;
		boardChannel: true;
		threadChannel: true;
	};
}>;

export type { WorkspaceData, ChannelSectionData, ChannelData };

import { Prisma } from "@prisma/client";

type WorkspaceData = Prisma.WorkspaceGetPayload<{
	include: {
		members: true;
		channelSections: {
			include: {
				channels: {
					include: {
						boardChannel: true;
						threadChannel: true;
					};
				};
			};
		};
	};
}>;

type ChannelSectionData = Prisma.ChannelSectionGetPayload<{
	include: {
		channels: {
			include: {
				boardChannel: true;
				threadChannel: true;
			};
		};
	};
}>;

type ChannelData = Prisma.ChannelGetPayload<{
	include: {
		boardChannel: true;
		threadChannel: true;
	};
}>;

export type { WorkspaceData, ChannelSectionData, ChannelData };

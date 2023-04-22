import { Prisma } from "@prisma/client";

type ChannelSectionData = Prisma.ChannelSectionGetPayload<{
	select: {
		id: true;
		name: true;
		channels: true;
	};
}>;

type WorkspaceData = Prisma.WorkspaceGetPayload<{
	include: {
		members: true;
		channelSections: {
			select: {
				id: true;
				name: true;
				channels: true;
			};
		};
	};
}>;

export type { WorkspaceData, ChannelSectionData };

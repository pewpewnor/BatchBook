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
						boardChannel: {
							select: {
								id: true;
							};
						};
						threadChannel: {
							select: {
								id: true;
							};
						};
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
				boardChannel: {
					select: {
						id: true;
					};
				};
				threadChannel: {
					select: {
						id: true;
					};
				};
			};
		};
	};
}>;

type ChannelData = Prisma.ChannelGetPayload<{
	select: {
		id: true;
		name: true;
		type: true;
		boardChannel: {
			select: {
				id: true;
			};
		};
		threadChannel: {
			select: {
				id: true;
			};
		};
	};
}>;

export type { WorkspaceData, ChannelSectionData, ChannelData };

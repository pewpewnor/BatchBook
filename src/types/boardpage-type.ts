import { Prisma } from "@prisma/client";

type BoardChannelData = Prisma.BoardChannelGetPayload<{
	include: {
		pillars: {
			include: {
				cards: {
					include: {
						labels: true;
					};
				};
			};
		};
	};
}>;

export type { BoardChannelData };

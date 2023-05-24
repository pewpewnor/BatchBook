import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { getBoardChannelData } from "@/servacts/boardview";
import { BoardChannelData } from "@/types/boardpage-type";
import { notFound } from "next/navigation";
import { FC } from "react";
import { useQuery } from "react-query";

interface BoardViewProps {
	boardChannelId: string;
}

const BoardView: FC<BoardViewProps> = (props: BoardViewProps) => {
	const boardViewQuery = useQuery<BoardChannelData | null>(
		["boardview", props.boardChannelId],
		async () => {
			console.log("fetching board view...");
			return await getBoardChannelData(props.boardChannelId);
		}
	);

	if (boardViewQuery.isLoading) {
		return (
			<div className="flex h-full items-center justify-center">
				<LoadingSpinner />
				<p className="text-xl">Loading...</p>
			</div>
		);
	}

	if (boardViewQuery.isError) {
		return (
			<div className="flex h-full items-center justify-center">
				<p className="text-xl">
					Error While Fetching Data
					<br />
					Is the channel we are looking for invalid?
				</p>
			</div>
		);
	}

	if (!boardViewQuery.data) {
		notFound();
	}

	return (
		<div>
			BoardView Data:
			<pre>{JSON.stringify(boardViewQuery.data, null, 2)}</pre>
		</div>
	);
};

export default BoardView;

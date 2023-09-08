import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { getBoardChannelData } from "@/servacts/boardview";
import { BoardChannelData } from "@/types/boardpage-type";
import { notFound } from "next/navigation";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import AddPillarModal from "../AddPillarModal";
import WorkBar from "../WorkBar";

interface BoardViewProps {
	boardChannelId: string;
}

const BoardView: FC<BoardViewProps> = (props: BoardViewProps) => {
	const [showAddModal, setShowAddModal] = useState(false);

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
		<>
			<WorkBar
				handleAddClicked={() => {
					setShowAddModal((prev) => !prev);
				}}
			/>
			<div className="px-4 py-2">
				BoardView Data:
				<pre>{JSON.stringify(boardViewQuery.data, null, 2)}</pre>
				{/* Create Pillar Modal */}
				{showAddModal && (
					<AddPillarModal
						handleCloseClicked={() => {
							setShowAddModal(false);
						}}
					/>
				)}
			</div>
		</>
	);
};

export default BoardView;

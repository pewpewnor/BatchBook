import { ChannelData } from "@/lib/database/workspace-type";
import { Dispatch, SetStateAction, createContext } from "react";

const SwitchChannelContext = createContext<
	[ChannelData | null, Dispatch<SetStateAction<ChannelData | null>> | null]
>([null, null]);

export default SwitchChannelContext;

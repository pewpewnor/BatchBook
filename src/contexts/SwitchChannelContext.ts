import { ChannelData } from "@/server/types/workspace-type";
import { Dispatch, SetStateAction, createContext } from "react";

const SwitchChannelContext = createContext<
	[ChannelData | null, Dispatch<SetStateAction<ChannelData | null>>]
>([null, () => {}]);

export default SwitchChannelContext;

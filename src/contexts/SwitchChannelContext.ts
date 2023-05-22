import { Channel } from "@prisma/client";
import { Dispatch, SetStateAction, createContext } from "react";

const SwitchChannelContext = createContext<
	[Channel | null, Dispatch<SetStateAction<Channel>> | null]
>([null, null]);

export default SwitchChannelContext;

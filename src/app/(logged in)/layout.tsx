import Navbar from "@/components/layouts/Navbar";
import { FC, ReactNode } from "react";

interface LoggedInLayoutProps {
	children: ReactNode;
}

const LoggedInLayout: FC<LoggedInLayoutProps> = (
	props: LoggedInLayoutProps
) => {
	return (
		<div className="h-screen bg-gradient-to-b from-shade-blue to-navy-blue pt-14">
			<Navbar />
			{props.children}
		</div>
	);
};

export default LoggedInLayout;

import Navbar from "@/components/layouts/Navbar";
import { FC, ReactNode } from "react";

interface LoggedInLayoutProps {
	children: ReactNode;
}

const LoggedInLayout: FC<LoggedInLayoutProps> = (
	props: LoggedInLayoutProps
) => {
	return (
		<div className="relative min-h-screen pt-14 bg-gradient-to-b from-shade-blue to-navy-blue">
			<Navbar />
			{props.children}
		</div>
	);
};

export default LoggedInLayout;

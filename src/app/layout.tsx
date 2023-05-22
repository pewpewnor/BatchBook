import { FC, ReactNode } from "react";
import "server-only";
import ContextProvider from "./ContextProvider";
import "./globals.css";

export const metadata = {
	title: "BatchBook",
	description:
		"Open-source collaboration tool for agile developer teams to work together efficiently with features like kanban board and chat discussion room",
};

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
	return (
		<html lang="en">
			<body>
				<ContextProvider>{props.children}</ContextProvider>
			</body>
		</html>
	);
};

export default RootLayout;

import { Children, FC, ReactNode } from "react";
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
			<body>{props.children}</body>
		</html>
	);
};

export default RootLayout;

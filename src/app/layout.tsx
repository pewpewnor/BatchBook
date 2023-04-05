import { Children, FC, ReactNode } from "react";
import "./globals.css";

export const metadata = {
	title: "NextJS Template Tab Title",
	description: "NextJS template description metadata",
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

import Navbar from "@/components/layouts/Navbar";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
import "./globals.css";

export const metadata = {
	title: "BatchBook",
	description:
		"Open-source collaboration tool for agile developer teams to work together efficiently with features like kanban board and chat discussion room",
};

interface RootLayoutProps {
	children: ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
	return (
		<html lang="en" className={inter.className}>
			<body className="h-screen">
				<Navbar />
				{props.children}
			</body>
		</html>
	);
};

export default RootLayout;

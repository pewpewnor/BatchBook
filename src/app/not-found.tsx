import Navbar from "@/components/layouts/Navbar";
import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = (props: NotFoundProps) => {
	return (
		<>
			<Navbar />
			<div className="x-4 flex h-screen flex-col items-center justify-center space-x-0 space-y-8 bg-shade-blue md:flex-row md:space-x-6 md:space-y-0">
				<h1 className="text-4xl font-bold">404</h1>
				<ol className="flex-row space-y-2 border-white text-left sm:border-l-4 sm:pl-6">
					<p className="text-md font-bold md:text-lg">
						Page not found, try another page!
					</p>
				</ol>
			</div>
		</>
	);
};

export default NotFound;

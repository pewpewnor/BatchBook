import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = (props: NotFoundProps) => {
	return (
		<div className="h-full bg-shade-blue x-4 flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6 space-y-8 md:space-y-0">
			<h1 className="text-6xl font-bold">404</h1>
			<ol className="text-left flex-row space-y-2 sm:pl-6 sm:border-l-4 border-black">
				<p className="font-bold text-md md:text-lg">
					Page not found, this means either:
				</p>
				<li className="text-md md:text-lg">
					1. This workspace does not exist, or
				</li>
				<li className="text-md md:text-lg">
					2. You don&apos;t have access to this workspace
				</li>
			</ol>
		</div>
	);
};

export default NotFound;

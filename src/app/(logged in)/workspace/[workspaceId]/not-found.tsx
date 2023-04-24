import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = (props: NotFoundProps) => {
	return (
		<div className="x-4 flex h-full flex-col items-center justify-center space-x-0 space-y-8 bg-shade-blue md:flex-row md:space-x-6 md:space-y-0">
			<h1 className="text-6xl font-bold">404</h1>
			<ol className="flex-row space-y-2 border-black text-left sm:border-l-4 sm:pl-6">
				<p className="text-md font-bold md:text-lg">
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

"use client";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface ContextProviderProps {
	children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = (
	props: ContextProviderProps
) => {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				{props.children}
			</QueryClientProvider>
		</div>
	);
};

export default ContextProvider;

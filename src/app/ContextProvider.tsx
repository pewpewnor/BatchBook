"use client";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

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
				<ReactQueryDevtools />
			</QueryClientProvider>
		</div>
	);
};

export default ContextProvider;

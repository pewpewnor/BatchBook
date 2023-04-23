export default function createErrorMessage(
	location: string,
	functionName: string,
	errorMessage: string,
	...causes: string[]
) {
	return `[location: ${location}]\n\t[function name: ${functionName}]\n\t\t${errorMessage}\n\t\t${causes.join(
		"\n\t\t"
	)}`;
}

export default function createErrorMessage(
	location: string,
	functionName: string,
	errorMessage: string
) {
	return `[${location}]\n\t[${functionName}]\n\t\t${errorMessage}`;
}

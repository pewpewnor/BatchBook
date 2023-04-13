import { twMerge } from "tailwind-merge";

interface VariantsParameter {
	[key: string]: {
		default: string;
		[key: string]: string;
	};
}

interface SelectedVariantParameter {
	[key: string]: string;
}

export default function createVariance(
	always: string,
	variants: VariantsParameter
): (
	selectedVariant: SelectedVariantParameter,
	customClassName?: string
) => string {
	return (
		selectedVariant: SelectedVariantParameter,
		customClassName?: string
	): string => {
		const result: string[] = [always];

		// catch error if any specified variant type does not exist
		for (const selectedVariantType in selectedVariant) {
			if (!variants[selectedVariantType]) {
				throw new Error(
					`From variance util -> Selected variant type "${selectedVariantType}" does not exist!`
				);
			}
		}

		// loop for each variants available
		for (const variantType in variants) {
			// if this variant type is specified in selected
			if (variantType in selectedVariant) {
				const variant =
					variants[variantType][selectedVariant[variantType]];
				// if specified value for this variant type is invalid, throw error
				if (!variant) {
					throw new Error(
						`From variance util -> Selected variant "${selectedVariant[variantType]}" does not exist in variant type "${variantType}"!`
					);
				}
				result.push(variant);
			}
			// if this variant type is not specified, use the default property value
			else {
				result.push(variants[variantType]["default"]);
			}
		}

		// if custom className is specified
		if (customClassName) {
			result.push(customClassName);
		}

		return twMerge(result.join(" "));
	};
}

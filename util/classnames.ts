/**
 * Collect values together into a coherent classname
 * @param classes Array/Object/String of classnames and boolean
 * @returns string
 */
export const classNames = (...classes: any[]): string => {
	return classes.filter(Boolean).join(' ');
};

export const textClassName =
	'shadow-sm border-pink-100 focus:ring-pink-200 focus:border-pink-200 block w-full sm:text-sm rounded-md disabled:bg-gray-200 disabled:border-pink-400 transition duration-200';
export const labelClassName = 'block text-sm mb-1 font-semibold text-gray-700';

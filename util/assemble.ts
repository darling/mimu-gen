import { join, map, pick, toString } from 'lodash';
import { headlessFunctions } from './functions';

export const assembleAR = (values: any) => {
	const ar = '.ar';

	const headless: { [key: string]: boolean } = pick(
		values,
		headlessFunctions
	);

	const headlessFunctionOutput = join(
		map(headless, (item, key) => {
			if (item) return `{${key}}`;
		}),
		''
	);

	const embed = values.embed
		? `{embed${values.embedColor == '' ? '' : ':'}${values.embedColor}}`
		: '';

	return `${ar} + ${values.trigger} |${headlessFunctionOutput}${embed}${values.content}`;
};

import { FC } from 'react';

export const HeaderLabel: FC = (props) => {
	return (
		<h2 className="text-base font-semibold text-gray-600">
			{props.children}
		</h2>
	);
};

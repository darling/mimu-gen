import React, { FC } from 'react';
import Head from 'next/head';

const title = 'Mimu AR Generator';

export const Layout: FC = (props) => {
	return (
		<div className="min-h-screen">
			<Head>
				<title>{title}</title>
			</Head>
			<div>{props.children}</div>
		</div>
	);
};

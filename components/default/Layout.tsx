import React, { FC } from 'react';
import Head from 'next/head';

const title = 'Mimu AR Generator';

export const Layout: FC = (props) => {
	return (
		<div className="min-h-screen">
			<Head>
				<title>{title}</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<div className="">{props.children}</div>
		</div>
	);
};

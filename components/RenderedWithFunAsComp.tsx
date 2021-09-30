import { includes, map, split } from 'lodash';
import { FC } from 'react';
import {
	dynamicFunctions,
	dynamicParentVars,
	dynamicVariables,
	valueFunctions,
} from '../util/functions';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import React from 'react';

const processor = unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypeRaw)
	.use(rehypeReact, {
		createElement: React.createElement,
	});

const parse = (str: string) => {
	return processor.processSync(str).result;
};

export const RenderedWithFunAsComp: FC<{ value: string }> = (props) => {
	const splitVal = props.value.split(/\{|\}/g);
	let result: any = [];

	const output = map(splitVal, (raw, i) => {
		if (includes(valueFunctions, raw) && i % 2 == 1) {
			return (
				<span className="text-gray-900 font-mono bg-pink-100 px-1 rounded border border-pink-200 border-b-2 border-r-2">
					{raw}
				</span>
			);
		}

		if (
			includes(
				[...dynamicFunctions, ...dynamicParentVars, 'embed'],
				raw.split(':')[0]
			) &&
			i % 2 == 1
		) {
			return (
				<span className="text-gray-900 bg-blue-200 px-1 rounded border border-blue-300 border-b-2 border-r-2">
					{raw.split(':')[0]}:
					<code className="text-blue-700">{raw.split(':')[1]}</code>
				</span>
			);
		}

		if (i % 2 == 1) {
			return `{${raw}}`;
		}

		const parseForVars = raw.split(/\[|\]/g);

		return map(parseForVars, (raw, i) => {
			if (includes(dynamicVariables, raw) && i % 2 == 1) {
				return (
					<span className="text-gray-900 font-mono bg-green-200 px-1 rounded border border-green-300 border-b-2 border-r-2">
						{raw}
					</span>
				);
			}

			return raw;
		});
	});

	return (
		<div className="bg-gray-900 text-gray-200 rounded-xl p-3 flex flex-row gap-4">
			<div className="w-14">
				<Image
					src="https://ferris.gg/img/placeholder-crystal.png"
					alt=""
					className="rounded-full"
					width="56"
					height="56"
				/>
			</div>
			<div>
				<h2 className="font-bold">Mimu</h2>
				<div>{result}</div>
				<div
					style={{ maxWidth: 520 }}
					className="bg-gray-700 rounded overflow-hidden"
				>
					<div
						style={{ borderColor: '#FFFFFF' }}
						className="border-0 border-l-4 p-2"
					>
						<p className="break-words whitespace-pre-wrap">
							{output}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

import { Field, Form, Formik } from 'formik';
import { forEach, get, map, set, startCase } from 'lodash';

import { Layout } from '../components/default/Layout';
import { assembleAR } from '../util/assemble';

import type { NextPage } from 'next';
import { headlessFunctions } from '../util/functions';
import { HeaderLabel } from '../components/form/header';
import { classNames, labelClassName, textClassName } from '../util/classnames';
import React from 'react';
import { RenderedWithFunAsComp } from '../components/RenderedWithFunAsComp';

const constraints = 'py-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';
const boxStyle = 'bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-400';

const Home: NextPage = () => {
	let initValues = {
		content: 'Write whatever you want here :)',
		trigger: '.hello!',
		embed: false,
		embedColor: '#FFFFFF',
	};

	forEach(headlessFunctions, (item) => {
		set(initValues, item, false);
	});

	return (
		<Layout>
			<div className={constraints}>
				<h1 className="text-xl">Mimu Gen</h1>
			</div>
			<div className={constraints}>
				<Formik
					initialValues={initValues}
					onSubmit={() => {}}
					enableReinitialize={false}
					validate={async (values) => {
						let errors = {};

						forEach(['content', 'trigger'], (item) => {
							if (get(values, item) == '') {
								set(errors, item, 'cannot be empty.');
							}
						});

						return errors;
					}}
				>
					{({ values, errors, isValid }) => {
						return (
							<div>
								<Form className="flex flex-col gap-4">
									<div
										className={classNames(
											boxStyle,
											'grid md:grid-cols-2 gap-4'
										)}
									>
										<div>
											<HeaderLabel>
												Standard Inputs
											</HeaderLabel>
											<p className="text-sm">
												The basic information needed for
												an ar
											</p>
										</div>
										<div>
											<label
												htmlFor="trigger"
												className={labelClassName}
											>
												Trigger
											</label>
											<Field
												as="input"
												className={textClassName}
												type="text"
												name="trigger"
												id="trigger"
												placeholder="Hello mimu!"
												required
											/>
										</div>
										<div className="col-span-full">
											<label
												htmlFor="content"
												className={labelClassName}
											>
												Content
											</label>
											<Field
												as="textarea"
												className={textClassName}
												type="text"
												name="content"
												required
											/>
											<label
												htmlFor="content"
												className={classNames(
													labelClassName,
													'mt-2'
												)}
											>
												baka
											</label>
											<RenderedWithFunAsComp
												value={values.content}
											/>
										</div>
									</div>
									<div
										className={classNames(
											boxStyle,
											'grid grid-cols-2 gap-4'
										)}
									>
										<div>
											<HeaderLabel>Functions</HeaderLabel>
											<p className="text-sm">
												Just some options
											</p>
										</div>
										<div className="flex flex-col gap-2">
											{map(headlessFunctions, (func) => {
												return (
													<div
														key={func}
														className="flex flex-row rounded-md items-center justify-between"
													>
														<label
															className={
																labelClassName
															}
															htmlFor={func}
														>
															{startCase(func)}
														</label>
														<Field
															key={func}
															className="focus:ring-pink-500 h-5 w-5 text-pink-600 border-none rounded "
															type="checkbox"
															name={func}
															id={func}
														/>
													</div>
												);
											})}
										</div>
									</div>

									<div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-400">
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<HeaderLabel>
													Embed Information
												</HeaderLabel>
												<p className="text-sm">
													If you do not want to have a
													custom embed color or
													prefab, please leave the
													field blank.
												</p>
											</div>
											<div>
												<div className="flex flex-row items-center justify-between">
													<label
														className={
															labelClassName
														}
														htmlFor="embed"
													>
														Enable
													</label>
													<Field
														className="focus:ring-pink-500 h-5 w-5 text-pink-600 border-none rounded "
														type="checkbox"
														name="embed"
														id="embed"
													/>
												</div>
												<label
													className={labelClassName}
													htmlFor="embedColor"
												>
													Embed Color or Prefab
												</label>
												<Field
													className={classNames(
														textClassName,
														!values.embed
															? 'bg-gray-200 border-gray-400'
															: ''
													)}
													type="text"
													name="embedColor"
													id="embedColor"
													disabled={!values.embed}
												/>
											</div>
										</div>
									</div>
									<div
										hidden={isValid}
										className="bg-red-300 rounded-md border border-pink-400 p-4 text-pink-800"
									>
										<h2 className="font-bold">Error:</h2>
										{map(errors, (error, key) => (
											<p key={key}>
												{startCase(key)} {error}
											</p>
										))}
									</div>
								</Form>
								<div
									className={classNames(
										'my-4 p-4 flex flex-col gap-4 rounded-md border',
										isValid
											? 'border-green-400'
											: 'border-red-400',
										isValid ? 'bg-green-100' : 'bg-red-100',
										'transition duration-200'
									)}
								>
									<pre>
										<code
											className={classNames(
												isValid ? '' : 'text-red-400',
												'select-all'
											)}
										>
											{assembleAR(values)}
										</code>
									</pre>
									<pre>
										<code>
											{JSON.stringify(values, null, 2)}
										</code>
									</pre>
								</div>
							</div>
						);
					}}
				</Formik>
			</div>
		</Layout>
	);
};

export default Home;

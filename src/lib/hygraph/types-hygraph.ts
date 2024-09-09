/** @format */

import { RichTextContent } from '@graphcms/rich-text-types';

export type TNotFound = {
	notfounds: ErrorData[];
};

export type ErrorData = {
	headline: string;
	lottiedata: JSON;
};

export type TThanks = {
	thanksPages: ThanksData[];
};

export type ThanksData = {
	headline: string;
	subheadline: string;
	lottiedata: JSON;
};

export type TPolitics = {
	politics: PoliticsData[];
};

export type PoliticsData = {
	politic: HtmlType;
	term: HtmlType;
};

export type HtmlType = {
	raw: RichTextContent;
};

/** @format */

import { RichTextContent } from "@graphcms/rich-text-types";

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

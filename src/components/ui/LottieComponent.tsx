/** @format */
'use client';

import React from 'react';
import Lottie from 'lottie-react';

export default function LottieComponent(props: { lottie: unknown }) {
	return (
		<>
			<Lottie animationData={props.lottie}></Lottie>
		</>
	);
}

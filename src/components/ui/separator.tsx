/** @format */

import * as React from 'react';

import { cn } from '@/lib/utils';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: 'horizontal' | 'vertical';
	decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
	(
		{ className, orientation = 'horizontal', decorative = true, ...props },
		ref,
	) => {
		const accessibilityProps = decorative
			? { role: 'presentation' as const, 'aria-hidden': true as const }
			: ({
					role: 'separator' as const,
					'aria-orientation': orientation,
				} as const);

		return (
			<div
				ref={ref}
				data-orientation={orientation}
				className={cn(
					'shrink-0 bg-border',
					orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
					className,
				)}
				{...accessibilityProps}
				{...props}
			/>
		);
	},
);
Separator.displayName = 'Separator';

export { Separator };

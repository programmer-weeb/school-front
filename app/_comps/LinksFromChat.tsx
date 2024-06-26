'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface LinksProps {
	tabs: { label: string; href: string }[];
	setActiveTab?: (tab: string) => void;
	params?: any;
	studentId?: any;
}

export const TabNavigation = ({ tabs, studentId }: LinksProps) => {

	const pathname = usePathname();

	console.log({ pathname })
	return (
		<div className="hidden sm:block">
			<nav className="flex gap-6" aria-label="Tabs">
				{tabs.map(tab => {
					const isActive = pathname === `/students/${studentId}${tab.href}`;

					return (
						<Link
							href={`/students/${studentId}${tab.href}`}
							key={tab.label}
							className={`shrink-0 rounded-lg p-2 text-sm font-medium ${isActive ? 'bg-sky-100 text-sky-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
						>
							{tab.label}
						</Link>
					)
				})}
			</nav>
		</div>
	);
};

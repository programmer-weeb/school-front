'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface LinksProps {
  tabs: { label: string; href: string }[];
  activeTab: string;
  setActiveTab?: (tab: string) => void;
	params?: any;
	studentId?: any;
}

// export default function LinksFromChatgpt({ tabs, activeTab, setActiveTab }: LinksProps) {
	
//   return (
//     <div>
//       <TabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
//     </div>
//   );
// }

// const TabNavigation = ({ tabs, activeTab, setActiveTab }: {
//   tabs: { label: string; href: string }[];
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }) => {
export const TabNavigation = ({ tabs, activeTab, setActiveTab, params, studentId }: LinksProps) => {
	// get the current path
	const pathname = usePathname();
  // const { studentId } = params;
	// console.log(studentId)

	console.log({pathname})
  return (
    <div className="hidden sm:block">
      <nav className="flex gap-6" aria-label="Tabs">
        {tabs.map(tab => (
          <Link
            // href={tab.href}
            // href='google'
						// href={`${pathname}/${tab.href}`}
						// href={`/students/${studentId}${tab.href}`}
						href={`/students/${studentId}${tab.href}`}
            key={tab.label}
            // onClick={() => setActiveTab(tab.label)} // Set active tab on click
            className={`shrink-0 rounded-lg p-2 text-sm font-medium ${activeTab === tab.label ? 'bg-sky-100 text-sky-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

import Link from "next/link";

interface LinksProps {
	tabs: string[];
	activeTab: string;
}

export default function Links({ tabs, activeTab }: LinksProps) {
	return (
		<div>
			<TabNavigation
				tabs={[
					{ label: 'Settings', href: '#' },
					{ label: 'Messages', href: '#' },
					{ label: 'Archive', href: '#' },
					{ label: 'Notifications', href: '#' }
				]}
				activeTab="Notifications"
			/>
		</div>
	);
}

const TabNavigation = ({ tabs, activeTab }: {
	tabs: { label: string; href: string }[];
	activeTab: string;
}) => {
  return (
    <div className="hidden sm:block">
      <nav className="flex gap-6" aria-label="Tabs">
        {tabs.map(tab => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`shrink-0 rounded-lg p-2 text-sm font-medium ${activeTab === tab.label ? 'bg-sky-100 text-sky-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
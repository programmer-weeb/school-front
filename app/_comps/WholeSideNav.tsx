'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function WholeSideNav() {
	return (
		<div>
			<aside
				className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
				<Link href="/">
					<img
						className="w-auto h-7"
						src="https://merakiui.com/images/logo.svg"
						alt=""
					/>
				</Link>

				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav className="flex-1 -mx-3 space-y-3 ">
						{/* side bar search */}
						<SideNavSearch />
						{/* side bar links */}
						{/* <SideNavLinks linksNames={['📋 Dashboard', '🧑🏻‍🎓 Students', '🧑‍🏫 Teachers', '🕖 Events', '💰 Finance']} /> */}
						<SideNavLinks linksNames={['Dashboard', 'Students', 'Teachers', 'Events', 'Finance', 'Calender']} />
					</nav>

					<BottomPhotoOfSideNav />
				</div>
			</aside>
		</div>
	);
}


function SideNavLinks({ linksNames }: { linksNames: string[] }) {

	const pathname = usePathname();
	
	return (
		<>
			{linksNames.map(linkStingName => {
				const urlString = linkStingName.toLowerCase()
        const isActive = pathname.includes(urlString)				
				
				return (
					<Link
						className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 } ${isActive ? 'bg-gray-800 text-gray-200': ''}`}
						href={`/${urlString}`}
					>
						<span className="mx-2 text-sm font-medium">
							{linkStingName}
						</span>
					</Link>
				)
			})}
		</>
	)
}

function BottomPhotoOfSideNav() {
	return (
		<div className="mt-6">
			<div className="flex items-center justify-between mt-6">
				<a href="#" className="flex items-center gap-x-2">
					<img
						className="object-cover rounded-full h-7 w-7"
						src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
						alt="avatar"
					/>
					<span className="text-sm font-medium text-gray-700 dark:text-gray-200">
						John Doe
					</span>
				</a>

				<a
					href="#"
					className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
						/>
					</svg>
				</a>
			</div>
		</div>
	)
}

function SideNavSearch() {
	return (
		<div className="relative mx-3">
			<span className="absolute inset-y-0 left-0 flex items-center pl-3">
				<svg
					className="w-5 h-5 text-gray-400"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</span>

			<input
				type="text"
				className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
				placeholder="Search"
			/>
		</div>
	)
}
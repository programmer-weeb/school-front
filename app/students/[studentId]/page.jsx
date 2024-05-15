"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function Page({ params }) {
  const pathname = usePathname();
  const router = useRouter();
  const studentId = params.studentId;

  // Check if the current path matches the pattern and redirect if necessary
  if (pathname === `/students/${studentId}`) {
    const redirectPath = `/students/${studentId}/general`;
    router.push(redirectPath);
  }
  return (
    <div>
      {/* Your component content here */}
    </div>
  );
}



function UnderTheCenteredButtons() {
	return (
		<>
			<div className="sm:flex sm:justify-between sm:gap-4">
				<div>
					<h3 className="text-lg font-bold text-white sm:text-xl">
						Building a SaaS product as a software developer
					</h3>
					<p className="mt-1 text-xs font-medium text-gray-400">
						By John Doe
					</p>
				</div>
				<div className="hidden sm:block sm:shrink-0">
					<img
						alt=""
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
						className="size-16 rounded-lg object-cover shadow-sm"
					/>
				</div>
			</div>

			<div className="mt-4">
				<p className="text-pretty text-sm text-gray-300">
					Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. At velit illum provident a, ipsa maiores
					deleniti consectetur nobis et eaque.
				</p>
			</div>

			<dl className="mt-6 flex gap-4 sm:gap-6">
				<div className="flex flex-col-reverse">
					<dt className="text-sm font-medium text-gray-400">
						Published
					</dt>
					<dd className="text-xs text-gray-300">
						31st June, 2021
					</dd>
				</div>

				<div className="flex flex-col-reverse">
					<dt className="text-sm font-medium text-gray-400">
						Reading time
					</dt>
					<dd className="text-xs text-gray-300">3 minute</dd>
				</div>
			</dl></>
	)
}

function GradientLineBottomLine() {
	return (
		<>
			<span
				className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" ></span>
		</>
	)
}
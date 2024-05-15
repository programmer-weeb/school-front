// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div>
//       <aComp />
//       {children}
//     </div>
//   );
// }
'use client'

import { TabNavigation } from "@/app/_comps/LinksFromChat";
import { useParams } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {

	const { studentId } = useParams();

  return (
    <div>
			{/* الجزء الثابت فوق في صفحة  */}
			{/* student:id */}
      <div>
        <section className="container px-4 mx-auto">
          <div
            className="relative block overflow-hidden rounded-lg border border-gray-800 dark:border-gray-600 p-4 sm:p-6 lg:p-8 bg-grey-700 dark:bg-grey-500"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

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
            </dl>
          </div>
        </section>
        <br /> <br />
      </div>
			{/* middle buttons */}
			<div className="flex justify-center items-center mb-1">
				<TabNavigation activeTab="messages" tabs={[
					{ label: '📋 General', href: '/general' },
					{ label: '📋 Exam', href: '/exam' },
					{ label: '📋 Medical records', href: '/medical-records' },
					{ label: '📋 Bus location', href: '/bus-location' },
					{ label: '📋 Ai report', href: '/ai-report' },
				]} studentId={studentId}  />
			</div>
      {children}
    </div>
  );
}

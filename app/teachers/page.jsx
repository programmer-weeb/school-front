import Link from "next/link";

export async function Teachers() {
  let data = [];
  try {
    const response = await fetch(
      "https://atlas-backend-xw1x.onrender.com/api/v1/admin/teacher/"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    console.log(data.teachers)
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return <div>Failed to load data.</div>;
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              First Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              Last Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
              Phone
            </th>
          </tr>
        </thead>
				{console.log(data.teachers)}
        {data.teachers?.map((teacher) => (
					
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <Link key={teacher.id} href={`/teachers/${teacher._id}`}>
              <tr className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                  {teacher.firstName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                  {teacher.lastName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                  {teacher.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                  {teacher.phone}
                </td>
              </tr>
            </Link>
          </tbody>          
        ))}
      </table>
    </div>
  );
}

export default async function BetterTeachersTable() {
	const arrOfTeachers = await ((await fetch("https://jsonplaceholder.typicode.com/posts")).json())

	return (
		<div>
			<TeachersTable teachers={arrOfTeachers} />
		</div>
	)
}

function TeachersTable({teachers}) {
	return (
    <div className="container mx-auto mt-4">
      <table className="table-auto border-collapse text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Parent Name</th>
            <th className="px-3 py-2">City</th>
            <th className="px-3 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="border-b border-gray-700 hover:bg-gray-600">
              <td className="px-3 py-2">{teacher.id}</td>
              <Link href={`/teachers/${teacher.id}`}>
                <td className="px-3 py-2">{teacher.title}</td>
              </Link>
              <td className="px-3 py-2">{teacher.body}</td>
              <td className="px-3 py-2">Alex</td>
              <td className="px-3 py-2">NotAlex</td>
              {/* <td className="px-3 py-2">{teacher.grade}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


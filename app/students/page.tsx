import Link from "next/link";

export default async function Students() {
  const arrOfStudent = await ((await fetch("https://jsonplaceholder.typicode.com/posts")).json())
  return (
    <div>
      {/* {JSON.stringify(arrOfStudent)} */}
      <StudentTable students={arrOfStudent} />
    </div>
  )
}

function StudentTable({ students }: { students: { id: number, title: string, body: string }[] }) {
  return (
    <div className="overflow-x-auto dark:bg-gray-900">
      <table className="table-auto min-w-full divide-y divide-gray-700 dark:divide-gray-600">
        <thead className="bg-gray-800 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Body</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700 dark:bg-gray-800 dark:divide-gray-600">
          {students.map(student => (
            <Link key={student.id} href={`/students/${student.id}`}>
              <tr className="cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.body}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}

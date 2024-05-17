import Link from "next/link";

export default async function Students() {
  const arrOfStudent = await ((await fetch("https://jsonplaceholder.typicode.com/posts")).json())
  return (
    <div>
      {/* {JSON.stringify(arrOfStudent)} */}
      {/* <StudentTable students={arrOfStudent} /> */}
      <StudentTable2 students={arrOfStudent} />
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


const StudentTable2 = ({ students }: { students: { id: number, title: string, body: string }[] }) => {
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
          {students.map((student) => (
            <tr key={student.id} className="border-b border-gray-700 hover:bg-gray-600">
              <td className="px-3 py-2">{student.id}</td>
              <Link href={`/students/${student.id}`}>
                <td className="px-3 py-2">{student.title}</td>
              </Link>
              <td className="px-3 py-2">{student.body}</td>
              <td className="px-3 py-2">Alex</td>
              <td className="px-3 py-2">NotAlex</td>
              {/* <td className="px-3 py-2">{student.grade}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

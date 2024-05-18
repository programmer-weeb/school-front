import Link from "next/link";

const TableHeader = ({ headers }) => {
  return (
    <thead className="bg-gray-800">
      <tr>
        <th scope="col" className="px-6 py-3 text-left rtl:text-right text-gray-300">
          <input className="text-indigo-500 rounded-md focus:ring-indigo-500" type="checkbox" />
        </th>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-300 uppercase rtl:text-right whitespace-nowrap ${index === headers.length - 1 ? 'pr-16' : ''}`}
          >
            {header}
          </th>
        ))}
        <th scope="col" className="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-300 uppercase rtl:text-right whitespace-nowrap"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ data }) => {
  return data.map((row, index) => (
    <tr key={index} className="bg-gray-900 hover:bg-gray-700">
      <td className="px-6 py-4 whitespace-nowrap">
        <input className="text-indigo-500 rounded-md focus:ring-indigo-500" type="checkbox" />
      </td>
      <td className="flex-1 px-6 py-4 text-gray-300 whitespace-nowrap">
        <Link href={`students/studentId`}>
          <div className="flex items-center">
            <img className="object-cover w-12 h-12 rounded-full" src={row.imgSrc} alt="" />
            <div className="mx-3">
              <h2 className="font-medium text-gray-200">{row.name}</h2>
              <p className="text-gray-400">{row.email}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-6 py-4 text-gray-300 whitespace-nowrap">{row.title}</td>
      <td className="px-6 py-4 text-gray-300 whitespace-nowrap">
        <div className="flex items-center">
          <span className={`p-1.5 rounded-full ${row.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`} />
          <span className="mx-4">{row.status}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-300 whitespace-nowrap">{row.role}</td>
      {row.extra && <td className="px-6 py-4 text-gray-300 whitespace-nowrap">{row.extra}</td>}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <button className="mx-4 text-gray-500 focus:outline-none hover:text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button className="text-gray-500 focus:outline-none hover:text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  ));
};

// Main Table component
const Table = ({ headers, data }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none">
            Add
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-700">
        <TableHeader headers={headers} />
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          <TableRow data={data} />
        </tbody>
      </table>
    </div>
  );
};

// Usage Example
const App = () => {
  const headers = ["Name", "Title", "Status", "Role", "Extra"];
  const data = [
    {
      imgSrc: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "John Doe",
      email: "johndoe@example.com",
      title: "aTitle",
      status: "active",
      role: "aRole",
      extra: "Extra Info 1"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Esther Howard",
      email: "estherhoward@example.com",
      title: "aTitle",
      status: "inactive",
      role: "aRole",
      extra: "Extra Info 2"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "aTitle",
      status: "active",
      role: "aRole",
      extra: "Extra Info 3"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "aTitle",
      status: "active",
      role: "aRole",
      extra: "Extra Info 3"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "aTitle",
      status: "active",
      role: "aRole",
      extra: "Extra Info 3"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Jenny Wilson",
      email: "jennywilson@example.com",
      title: "aTitle",
      status: "inactive",
      role: "aRole",
      extra: "Extra Info 4"
    }
  ];

  return (
    <div className="bg-gray-900 flex items-center justify-center ">
      <Table headers={headers} data={data} />
    </div>
  );
};

export default App;

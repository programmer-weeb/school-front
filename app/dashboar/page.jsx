import React from 'react';

const TeacherDetails = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-10">
      <header className="w-full flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold text-white">Teacher Details</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here..."
            className="p-2 rounded bg-gray-800 text-gray-300"
          />
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-800 rounded">🔔</button>
            <div className="p-2 bg-gray-800 rounded flex items-center space-x-2">
              <span>Nabila A.</span>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow w-full">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-24 h-24 rounded-full bg-purple-400"></div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Maria Historia</h3>
              <p className="text-gray-400">History Teacher</p>
            </div>
          </div>
          <div className="flex items-center space-x-8 mb-6">
            <div className="flex items-center space-x-2 text-orange-500">
              <span className="material-icons">location_on</span>
              <p className="text-gray-400">Jakarta, Indonesia</p>
            </div>
            <div className="flex items-center space-x-2 text-orange-500">
              <span className="material-icons">phone</span>
              <p className="text-gray-400">+12 345 6789 0</p>
            </div>
            <div className="flex items-center space-x-2 text-orange-500">
              <span className="material-icons">email</span>
              <p className="text-gray-400">Historia@mail.com</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2 text-white">About:</h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2 text-white">Education:</h4>
            <ul className="text-gray-400 list-disc pl-5">
              <li>History Major, University Akademi Historia (2013-2017)</li>
              <li>Master of History, University Akademi Historia (2017-2020)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-white">Expertise:</h4>
            <p className="text-gray-400">World History, Philosophy, Prehistoric, Culture, Ancient</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow w-full">
          <h4 className="text-xl font-semibold mb-4 text-white">Schedule Details</h4>
          <div className="mb-4">
            <p className="text-gray-400">Thursday, 10th April, 2021</p>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-500 p-4 rounded-lg">
              <p className="text-purple-900">English</p>
              <p className="text-gray-300">Class VII-B</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
            <div className="bg-orange-500 p-4 rounded-lg">
              <p className="text-orange-900">Arabic</p>
              <p className="text-gray-300">Class VII-A</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-lg">
              <p className="text-yellow-900">Math</p>
              <p className="text-gray-300">Class VIII-A</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg">
              <p className="text-blue-900">Science</p>
              <p className="text-gray-300">Class VII-C</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
              View More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDetails;

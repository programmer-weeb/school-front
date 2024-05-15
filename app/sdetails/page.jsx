'use client'

import { useState } from "react";

const StudentDetails = () => {
  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <div>General Content</div>;
      case 'quiz':
        return <div>Quiz Content</div>;
      case 'exam':
        return <div>Exam Content</div>;
      case 'assignment':
        return <div>Assignment Content</div>;
      case 'classes':
        return <div>Classes Content</div>;
      case 'medicalRecords':
        return <div>Medical Records Content</div>;
      case 'busLocation':
        return <div>Bus Location Content</div>;
      default:
        return <div>General Content</div>;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white font-sans">
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <h1>Student Details</h1>
        <input type="search" placeholder="Search here..." className="p-2 rounded bg-gray-700 text-white" />
      </div>
      <div className="p-4">
        <div className="bg-gray-800 p-4 rounded">
          <div className="flex justify-between items-center mb-4">
            <h2>Karen Hope</h2>
            <button className="bg-blue-600 p-2 rounded">AI Report</button>
          </div>
          <div className="space-y-2">
            <p>Parents: Justin Hope</p>
            <p>Address: Jakarta, Indonesia</p>
            <p>Phone: +12 345 6789 0</p>
            <p>Email: Hope@mail.com</p>
          </div>
        </div>
        <div className="flex justify-around my-4">
          <button
            onClick={() => setActiveTab('general')}
            className={`p-2 border rounded ${activeTab === 'general' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`p-2 border rounded ${activeTab === 'quiz' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            Quiz
          </button>
          <button
            onClick={() => setActiveTab('exam')}
            className={`p-2 border rounded ${activeTab === 'exam' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            Exams
          </button>
          <button
            onClick={() => setActiveTab('assignment')}
            className={`p-2 border rounded ${activeTab === 'assignment' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            Assignment
          </button>
          <button
            onClick={() => setActiveTab('classes')}
            className={`p-2 border rounded ${activeTab === 'classes' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            Classes
          </button>
          <button
            onClick={() => setActiveTab('medicalRecords')}
            className={`p-2 border rounded ${activeTab === 'medicalRecords' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            Medical Records
          </button>
          <button
            onClick={() => setActiveTab('busLocation')}
            className={`p-2 border rounded ${activeTab === 'busLocation' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
          >
            Bus Location
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

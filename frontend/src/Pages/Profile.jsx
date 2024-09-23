import React from 'react'

function Profile() {
  return (
    <div className='lg: w-screen p-8 bg-gray-100 h-screen transition-all duration-300'>
        <div className="md:ml-96 mt-16 ml-4">
      <div className="min-[400px]:w-80 lg:ml-96 bg-white shadow-lg rounded-lg overflow-hidden md:w-2/5">
        <div className="bg-blue-600 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">Mithalesh Kumar</h1>
          <p className="text-sm">Computer Science & Engineering</p>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Year:</label>
            <p className="text-gray-600">4th Year</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Class Roll:</label>
            <p className="text-gray-600">21CSE080</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">University Roll:</label>
            <p className="text-gray-600">14800121122</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Section:</label>
            <p className="text-gray-600">CSE-2</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Contact Number:</label>
            <p className="text-gray-600">7047583179</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold">College Email Address: </label>
            <p className="text-gray-600 text-sm">mithalesh.kumar.bind.cse21@teamfuture.in</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile


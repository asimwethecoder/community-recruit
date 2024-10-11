'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ProfilePage() {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newGitHub, setNewGitHub] = useState('');
  const [newLinkedIn, setNewLinkedIn] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Profile updated (demo mode).');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <FaUser className="w-5 h-5 mr-2" />
            Username
          </label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <FaEnvelope className="w-5 h-5 mr-2" />
            Email
          </label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <FaGithub className="w-5 h-5 mr-2" />
            GitHub Account
          </label>
          <input
            type="url"
            value={newGitHub}
            onChange={(e) => setNewGitHub(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 flex items-center">
            <FaLinkedin className="w-5 h-5 mr-2" />
            LinkedIn Account
          </label>
          <input
            type="url"
            value={newLinkedIn}
            onChange={(e) => setNewLinkedIn(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {message && <p className="text-green-500 text-center">{message}</p>}

        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
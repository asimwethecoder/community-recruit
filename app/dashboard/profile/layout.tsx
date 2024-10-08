'use client';

import React, { useState } from 'react';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow transition-all duration-300 ease-in-out hover:shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center">
          <h1 
            className="text-3xl font-bold text-gray-900 transition-all duration-300 ease-in-out hover:text-blue-600 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            User Profile
            <span className={`ml-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              👤
            </span>
          </h1>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl px-4 py-6 sm:px-0 animate-fadeIn">
          {children}
        </div>
      </main>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        body {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23000000"><circle cx="8" cy="8" r="8"/></svg>') 8 8, auto;
        }
      `}</style>
    </div>
  );
}
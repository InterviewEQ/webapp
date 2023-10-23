"use client"

import { useRef, useState, useEffect, useCallback } from "react";
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import Navbar from '@/app/Navbar';
import useAuth from '@/utils/useAuth';
import { useRouter } from 'next/router';

const people = [
  {
    question: 'Tell me about yourself. Why don\'t you walk me through your resume?',
    description: 'To gauge your self-awareness and communication skills.',
    level: 'easy',
    pageLink: 'Tell-me-about-yourself',
  },
  {
    question: 'Why are you interested in this role?',
    description: 'To understand your motivation and whether you\'ve researched the role and the company.',
    level: 'easy',
    pageLink: 'why-are-you-interested',
  },
  {
    question: 'Where do you see yourself in 5 years?',
    description: 'To gauge your long-term planning and see if your career goals align with the company\'s objectives.',
    level: 'easy',
    pageLink: 'where-you-see-yourself',
  },
  {
    question: 'What are your strengths?',
    description: 'To identify your skills and competencies that align with the job requirements.',
    level: 'easy',
    pageLink: 'what-are-your-strengths',
  },
  {
    question: 'Tell me about a time you failed and what you learned from it.',
    description: 'To evaluate your resilience and willingness to learn from mistakes.',
    level: 'medium',
    pageLink: 'a-time-you-failed',
  },
  {
    question: 'How do you prioritize your work?',
    description: 'To discover your time-management and organizational skills.',
    level: 'medium',
    pageLink: 'how-you-prioritize',
  },
  {
    question: 'Why did you leave your last job?',
    description: 'To identify any potential red flags and understand your motivation for moving on.',
    level: 'medium',
    pageLink: 'why-did-you-leave',
  },

];



const Home: React.FC = () => {
  
  

  return (
      <div className="bg-gray-50">
      <Navbar />
      <main className="p-4">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.pageLink} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"> 
              
              <div className="flex w-full items-center justify-between p-6">  {/* Changed to items-center */}
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-lg font-medium text-gray-900">{person.question}</h3>
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-base font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {person.level}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-base text-gray-500">{person.description}</p>
                </div>
              </div>

              <div>
             <div className="-mt-px flex divide-x divide-gray-200">
             <div className="flex w-0 flex-1">
             <Link href={`/${person.pageLink}`}>
             <a className="relative -mr-px inline-flex items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 px-4 text-sm font-semibold text-gray-900 w-full h-full">
             <HiOutlinePencilAlt className="h-5 w-5 text-gray-400" aria-hidden="true" />
             Practice
             </a>
            </Link>
             </div>
            </div>
            </div>


            </li>
          ))}
        </ul>
      </main>
    </div>
    
  );
};

export default Home;

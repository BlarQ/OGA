'use client'
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { faq } from '../components/faq';
import Link from 'next/link';

const QuestionsAnswer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!question && !answer) {
    console.error('QuestionsAnswer received empty data');
    return null;
  }

  return (
    <div className="border rounded-lg p-4 h-full flex flex-col">
      <button
        className="text-left flex-grow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold mb-2">{question || 'No question'}</h2>
        {!isOpen && <p className="text-gray-500 text-sm">Click to see answer</p>}
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600">{answer || 'No answer'}</p>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  useEffect(() => {
    console.log('FAQ Data in Page component:', faq);
  }, []);

  if (!faq || !Array.isArray(faq) || faq.length === 0) {
    console.error('FAQ data is not an array or is empty');
    return <div>Error: No FAQ data available</div>;
  }

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const faqRows = chunkArray(faq, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className='flex flex-col md:flex-row justify-between px-4 md:px-40 mt-24'>
        <div className="p-6 md:p-8">
        <h1 className="text-xl font-semibold lg:text-5xl">
          <span className="text-gray-800">FAQs</span> - Find Answers to Your <br /> Pertinent Questions
        </h1>
        <p className="mt-4 text-gray-600 lg:text-lg">
          Whether you&apos;re a new customer or a longtime user, this resource is designed to provide you with the information you need.
        </p>
      </div>
        </div>
        <div>
          <hr className='mt-28' />
        </div>
        <div className="px-4 md:px-40 mt-8">
          {faqRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {row.map((item, colIndex) => (
                <QuestionsAnswer 
                  key={`${rowIndex}-${colIndex}`} 
                  question={item.question} 
                  answer={item.answer} 
                />
              ))}
            </div>
          ))}
        </div>
        <div>
          <hr className='mt-28' />
        </div>
        <div className='bg-slate-100 h-60 lg:h-44 py-10 w-[80%] md:w-[90%] max-w-md md:max-w-full rounded-lg px-10 md:px-5 mx-auto my-20 md:my-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left lg:py-14 md:py-8 lg:w-[80%] lg:px-10'>
        <h3 className='text-lg font-semibold mb-4 md:mb-0 lg:mb-0'>
          Still have Questions? 
          <br />
          <span className='font-normal'>
            Can&apos;t find the answer your&apos;e looking for? Please chat to our friendly team.
          </span>
        </h3>
        <div>
          <Link href='mailto:customerservice@03web.com'>
            <button className='bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-full py-3 px-8 text-white font-semibold shadow-lg'>
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
     </main>
      <Footer />
    </div>
  );
};

export default Page;
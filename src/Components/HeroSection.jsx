import React, { useState } from 'react';
import robertBroImg from '../assets/Robert.png'
import Johny from '../assets/Johny.png'
import Puneet from '../assets/Puneet.png'
import Chris from '../assets/Chris.png'


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const students = [
    {
      name: 'Johny Depp',
      image: Johny,
      subjects: [
        { name: 'Mathematics', progress: 80 },
        { name: 'Science', progress: 60 },
        { name: 'History', progress: 90 },
      ],
      additionalInfo: 'Johny is an excellent student with a strong grasp of theoretical concepts.',
    },
    {
      name: 'Robert bro',
      image: robertBroImg,
      subjects: [
        { name: 'Mathematics', progress: 90 },
        { name: 'English', progress: 70 },
        { name: 'Physics', progress: 85 },
      ],
      additionalInfo: 'Robert is very dedicated and consistently excels in mathematics and physics.',
    },
    {
      name: 'Chris',
      image: Chris,
      subjects: [
        { name: 'Mathematics', progress: 48 },
        { name: 'English', progress: 33 },
        { name: 'Physics', progress: 50 },
      ],
      additionalInfo: 'Chris is an excellent student with a strong grasp of theoretical concepts.',
    },
    {
      name: 'Puneet Superstar',
      image: Puneet,
      subjects: [
        { name: 'Mathematics', progress: 95 },
        { name: 'English', progress: 99 },
        { name: 'Physics', progress: 97 },
      ],
      additionalInfo: 'Puneet is very dedicated and consistently excels in mathematics and physics.',
    },
  ];

  const nextStudent = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const prevStudent = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const currentStudent = students[activeIndex];

  return (
    <div id="students" className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-8">
      <div className="w-full max-w-4xl bg-gray-200 rounded-lg shadow-lg p-8">
        <div className="relative">
          <div className="flex flex-col items-center">
            <img src={currentStudent.image} alt={currentStudent.name} className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">{currentStudent.name}</h2> 

            <div className="w-full max-w-md">
              {currentStudent.subjects.map((subject, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{subject.name}</span>
                    <span className="text-sm">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-green-400 h-2.5 rounded-full"
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <button className="bg-green-500 text-white p-2 rounded-full" onClick={prevStudent}>‹</button>
            <button className="bg-green-500 text-white p-2 rounded-full" onClick={nextStudent}>›</button>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-green-600 hover:bg-green-200 text-white px-4 py-2 rounded-md" onClick={toggleExpanded}>
            {isExpanded ? 'Hide Details' : 'Expand Details'}
          </button>
          {isExpanded && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <p>{currentStudent.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

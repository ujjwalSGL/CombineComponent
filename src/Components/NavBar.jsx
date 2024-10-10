import React, { useState } from 'react';

 const NavBar = () => {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleAdmissions = () => setIsAdmissionsOpen(!isAdmissionsOpen);
  const toggleContact = () => setIsContactOpen(!isContactOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="relative">
      {/* Navbar for Medium and Large Screens */}
      <div className="hidden md:flex justify-between items-center p-4 bg-black text-white shadow-lg">
        <div className="flex w-full space-x-8 justify-evenly">
          <a href="#students" className="flex-1 text-center hover:text-green-400 transition duration-300">Students</a>
          <div className="relative flex-1 text-center">
            <div onClick={toggleAdmissions} className="cursor-pointer hover:text-green-400 transition duration-300">Admissions
          </div>
            {isAdmissionsOpen && (
              <div className="absolute top-10 left-0 bg-gray-300 text-gray-800 p-4 shadow-lg rounded-lg z-50">
                <a href="#undergraduate" className="block hover:text-gray-500 p-2 rounded-md"> Undergraduate</a>
                <a href="#postgraduate" className="block hover:text-gray-500 p-2 rounded-md">Postgraduate</a>
              </div>
            )}
          </div>
          <a href="#programs" className="flex-1 text-center hover:text-green-400 transition duration-300">Programs</a>
          <div className="relative flex-1 text-center">
            <div onClick={toggleContact} className="cursor-pointer hover:text-green-400 transition duration-300">Contact Us</div>
            {isContactOpen && (
              <div className="absolute top-10 left-0 bg-gray-300 text-gray-800 p-4 shadow-lg rounded-lg z-50">
                <a href="mailto:info@example.com" className="block hover:text-gray-500 p-2 rounded-md">Email Us</a>
                <a href="tel:+123456789" className="block hover:text-gray-500 p-2 rounded-md">Call Us</a>
              </div>
            )}
          </div>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu}> ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white shadow-lg z-50 rounded-md p-4 space-y-4">
          <a href="#students" className="block hover:bg-gray-700 p-2 rounded-md"> Students</a>
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={toggleAdmissions}> Admissions
          </div>
          {isAdmissionsOpen && (
            <div className="bg-gray-900 text-gray-300 p-2 rounded-md space-y-2">
              <a href="#undergraduate" className="block hover:bg-gray-700 p-2 rounded-md"> Undergraduate</a>
              <a href="#postgraduate" className="block hover:bg-gray-700 p-2 rounded-md"> Postgraduate</a>
            </div>
          )}
          <a href="#programs" className="block hover:bg-gray-700 p-2 rounded-md"> Programs</a>
          <div className="cursor-pointer hover:bg-gray-700 p-2 rounded-md" onClick={toggleContact}>Contact Us
          </div>
          {isContactOpen && (
            <div className="bg-gray-900 text-gray-300 p-2 rounded-md space-y-2">
              <a href="mailto:info@example.com" className="block hover:bg-gray-700 p-2 rounded-md"> Email Us</a>
              <a href="tel:+123456789" className="block hover:bg-gray-700 p-2 rounded-md"> Call Us</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;

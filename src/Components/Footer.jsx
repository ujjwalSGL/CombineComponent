import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Start Date:', startDate, 'End Date:', endDate);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Subscribe for Updates</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mb-6">
          <textarea placeholder="Enter your message..." className="resize-none h-20 p-2 mb-2 rounded-md" required />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="p-2 rounded-md mb-2"
            required
          />
          <div className="flex space-x-4 mb-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 rounded-md"
              required
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
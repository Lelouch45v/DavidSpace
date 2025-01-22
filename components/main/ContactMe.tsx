"use client";
import { cp } from 'fs';
import React, { useState, FormEvent } from 'react';

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>(''); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailData = {
      to: 'david.fajardo26v@gmail.com',
      subject: `Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${Email}</p><p><strong>Message:</strong> ${message}</p>`,
    };
    
    try {
        const response = await fetch('/pages/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setStatus('Message sent successfully!');
        alert('Message sent successfully!');
      } else {
        setStatus('Error sending message.');
        alert('Error sending message.');
      }
    } catch (e) {
      setStatus('An error occurred. Please try again later.');
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-auto mx-auto p-12">
      <h1 className="text-[48px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 text-center">Contact Me</h1>

      <div className="relative p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-300">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 mt-2 bg-transparent border-2 border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-300">Your Email</label>
            <input
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mt-2 bg-transparent border-2 border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-300">Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 mt-2 bg-transparent border-2 border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your message"
              rows={6}
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-md hover:bg-gradient-to-l"
          >
            Send Message
          </button>
        </form>

        {/* Display status message */}
        {status && <p className="mt-4 text-center text-lg text-white">{status}</p>}
      </div>
    </div>
  );
}

export default ContactMe;

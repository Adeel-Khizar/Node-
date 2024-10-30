"use client"

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    companyName: '',
    email: '',
    reachingOutFor: '',
    seenOn: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://eo7kp9f7dgrdk3p.m.pipedream.net', { // Replace with your Pipedream webhook URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          throw new Error('Failed to parse error response');
        }
        throw new Error(errorData.message || 'Unknown error');
      }

      setSuccess('Email sent successfully!');
      setFormValues({
        name: '',
        companyName: '',
        email: '',
        reachingOutFor: '',
        seenOn: '',
        message: '',
      });
    } catch (error: any) {
      setError(`Error sending email: ${error.message}`);
    }
  };

  return (
    <div className="mt-[90px]">
      <div className="p-[5vw]">
        <h1 className="text-[5vw]">Hey Node,</h1>
      </div>
      <div className='px-[5vw]'>
        <form onSubmit={handleSubmit} className='bg-gray-100 contact_form flex flex-col gap-14 p-[3vw] border-2 border-gray-300'>
          <div className='flex gap-4 w-full'>
            <div className='lg:w-1/2 gap-4 w-full flex items-center justify-start'>
              <label className="text-5xl min-w-fit" htmlFor="name">My name is</label>
              <input 
                className="w-full px-2 text-2xl py-3 bg-transparent border-b-2 border-black" 
                type="text" 
                name="name" 
                placeholder='Enter your name *' 
                value={formValues.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className='lg:w-1/2 gap-4 w-full flex items-start justify-center'>
              <label className="text-5xl min-w-fit" htmlFor="companyName">from</label>
              <input 
                className="w-full px-2 text-2xl py-3 bg-transparent border-b-2 border-black" 
                type="text" 
                name="companyName" 
                placeholder='Enter company name' 
                value={formValues.companyName} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className='w-full flex gap-4'>
            <label className="text-5xl min-w-fit" htmlFor="email">Available at</label>
            <input 
              className="w-full px-2 text-2xl py-3 bg-transparent border-b-2 border-black" 
              type="email" 
              name="email" 
              placeholder='Enter your email *' 
              value={formValues.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='flex items-center justify-start w-full gap-2'>
            <label className="text-5xl min-w-fit" htmlFor="reachingOutFor">I am reaching out to</label>
            <div className='flex items-center justify-start flex-wrap'>
              {["Start a project", "Partner/Referral", "Work at Node"].map(option => (
                <div className='relative' key={option}>
                  <input 
                    className="absolute left-0 top-0 h-full w-full" 
                    type="radio" 
                    name="reachingOutFor" 
                    value={option} 
                    onChange={handleChange} 
                    required 
                  />
                  <label className="text-2xl px-8 py-2 rounded-full min-w-fit">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-full gap-2'>
            <label className="text-5xl min-w-fit" htmlFor="seenOn">I've seen you on</label>
            <div className='flex items-center justify-start flex-wrap'>
              {["Google", "Social media", "From a friend"].map(option => (
                <div className='relative' key={option}>
                  <input 
                    className="absolute left-0 top-0 h-full w-full" 
                    type="radio" 
                    name="seenOn" 
                    value={option} 
                    onChange={handleChange} 
                    required 
                  />
                  <label className="text-2xl px-8 py-2 rounded-full min-w-fit">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-4 items-center justify-start'>
            <label className="text-5xl min-w-fit" htmlFor="message">In short,</label>
            <textarea 
              className="w-full px-2 text-2xl py-3 bg-transparent border-b-2 border-black" 
              name="message" 
              placeholder='Enter Your message (optional)*' 
              value={formValues.message} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

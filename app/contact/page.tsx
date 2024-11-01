"use client";

import { Rancher, SedaN } from '@/fonts';
import React, { useState } from 'react';

export default function Contact() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Append your access key and company title
    formData.append("access_key", "bd7ffb83-e3d3-4b88-9b15-2a8d8fa9156d");
    formData.append("company_name", "Node"); // Adding the company title

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        setPopupMessage("Form submitted successfully!");
        setPopupVisible(true);
      } else {
        setPopupMessage("Form submission error. Please try again.");
        setPopupVisible(true);
      }
    } catch (error:any) {
      setPopupMessage("Error sending form: " + error.message);
      setPopupVisible(true);
    }
  }

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="mt-[90px] bg-black pb-32">
      <div className="p-[5vw]">
        <h1 style={{

        }} className={`text-[5vw] text-white ${Rancher} `}>Hey Node,</h1>
      </div>
      <div className='px-[5vw]'>
        <form onSubmit={handleSubmit} className='bg-gray-100  rounded-3xl contact_form flex flex-col gap-[4vw] p-[3vw] border-2 border-gray-300'>
          <div className='flex md:flex-row flex-col gap-4 w-full'>
            <div className='md:w-1/2 gap-4 w-full flex items-center justify-start'>
              <label className={` min-w-fit ${SedaN} `} htmlFor="name">My name is</label>
              <input 
                className="w-full  bg-transparent border-b-2 border-black" 
                type="text" 
                name="name" 
                placeholder='Enter your name *' 
                required 
              />
            </div>
            <div className='md:w-1/2 gap-4 w-full flex items-start justify-center'>
              <label className={`  min-w-fit ${SedaN} `} htmlFor="companyName">from</label>
              <input 
                className="w-full  bg-transparent border-b-2 border-black" 
                type="text" 
                name="companyName" 
                placeholder='Enter company name' 
              />
            </div>
          </div>
          <div className='w-full flex gap-4'>
            <label className={` min-w-fit ${SedaN} `} htmlFor="email">Available at</label>
            <input 
              className="w-full  bg-transparent border-b-2 border-black" 
              type="email" 
              name="email" 
              placeholder='Enter your email *' 
              required 
            />
          </div>
          <div className='flex  md:flex-row flex-col md:items-center justify-start w-full gap-2'>
            <label className={` min-w-fit ${SedaN} `} htmlFor="reachingOutFor">I am reaching out to:</label>
            <div className='flex items-center justify-start  options flex-wrap '>
              {["Start a project", "Partner/Referral", "Work at Node"].map(option => (
                <div className='relative min-w-fit' key={option}>
                  <input 
                    className="absolute left-0 top-0 h-full w-full" 
                    type="radio" 
                    name="reachingOutFor" 
                    value={option} 
                    required 
                  />
                  <label className="  rounded-full w-full  ">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='flex  md:flex-row flex-col md:items-center w-full gap-2 '>
            <label className={` min-w-fit ${SedaN} `} htmlFor="seenOn">I've seen you on:</label>
            <div className='flex items-center justify-start  options flex-wrap'>
              {["Google", "Social media", "From a friend"].map(option => (
                <div className='relative' key={option}>
                  <input 
                    className="absolute left-0 top-0 h-full w-full" 
                    type="radio" 
                    name="seenOn" 
                    value={option} 
                    required 
                  />
                  <label className="text-2xl  rounded-full min-w-fit">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-4 items-center justify-start'>
            <label className={` min-w-fit ${SedaN} `} htmlFor="message">In short,</label>
            <textarea 
              className="w-full  bg-transparent border-b-2 border-black" 
              name="message" 
              placeholder='Enter Your message (optional)*' 
            />
          </div>
          <button type="submit" className={` bg-black font-bold hover:shadow-lg hover:shadow-green-400 transition-shadow duration-500 text-lg my-6 md:text-2xl text-white py-2  rounded-full ${SedaN} `}>Submit</button>
        </form>
      </div>

      {/* {popupVisible && ( */}
        <div className="fixed inset-0 flex items-center justify-center bg-green bg-opacity-0 z-50">
          <div className="bg-white  flex items-center justify-center flex-col rounded-lg p-6 shadow-lg transform transition-all duration-300 scale-100">
            <h2 className="text-2xl mb-4">Thanks for submitting the form! We’ll get back to you soon.</h2>
            <button onClick={closePopup} className="bg-black hover:shadow-lg hover:shadow-white text-xl text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

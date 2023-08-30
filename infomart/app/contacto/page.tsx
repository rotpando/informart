"use client"
import React, { useState } from 'react';


const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event:any) => {
   
  };

  return (
    <main >
      <div className="flex items-center justify-center h-screen">
      <form 
        onSubmit={handleSubmit}
        className="items-center"
      >
        <label className="block">
          <h3>Email:</h3>
          <input 
            type="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="px-4 py-2 mt-2 border rounded-lg  focus:outline-none focus:ring-1 focus:ring-sky-500" 
            style={{ width: '450px'}}
          />
        </label>

        <label className="block mt-6">
          <p>Message: </p>
          <textarea
  value={message} 
  onChange={(event) => setMessage(event.target.value)} 
  className="px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none"
  style={{ width: '450px', height: '400px' }}
/>
        </label>

        <button 
          type="submit"
          className="px-8 py-2 mt-6 rounded-full bg-green-800 text-white hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-800" >
          Send
        </button>

      </form>
      </div>
    </main>
  );
};

export default EmailForm;
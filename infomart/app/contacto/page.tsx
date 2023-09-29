"use client"
import React, { useState } from 'react';


const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event:any) => {
   
  };
  function handleChange(e:any) {
   
  }
  return (
    <main >
      <div className="flex items-center justify-center">
      <h2>Contacto:
      <h2><a href="mailto:observatorioinformart@gmail.com">observatorioinformart@gmail.com</a></h2>
      </h2>
      
      </div>
    
      
    </main>
  );
};

export default EmailForm;
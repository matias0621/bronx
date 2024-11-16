"use client"
import { useRef, useState } from 'react';

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const number = numberRef.current?.value;

    if (!name || !number) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('/api/sends', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, number }),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
        if (nameRef.current) nameRef.current.value = '';
        if (numberRef.current) numberRef.current.value = '';
      } else {
        setMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <h1 className="text-center text-5xl mt-4 text-blueDesing font-semibold">
        Contacts
      </h1>

      <section className="bg-blueDesing text-white mt-4 text-center rounded-2xl mx-4 flex flex-col gap-y-4 p-4 sm:mx-12   
        lg:flex-row lg:gap-x-8 lg:justify-between lg:h-80 lg:rounded-[3rem] lg:p-10       
       ">
        <section className="flex flex-col gap-y-4 lg:w-[50%] lg:gap-y-14">
          <div className="text-2xl lg:text-start">
            <h3>VEHICLE</h3>
            <h3>ORDER FORM</h3>
          </div>

          <div className="lg:text-start">
            <p>Please fill out the vehicle order form.</p>
            <p>This will help us to speed up the search for your vehicle.</p>
            <p>We will process your request and contact you.</p>
          </div>
        </section>
        <section className="flex flex-col gap-y-4 lg:w-[50%] lg:gap-y-10">
          <div className="lg:text-start lg:w-[60%]">
            If you have already found a car and would like us to inspect it,
            simply contact us through <span className="underline">WhatsApp</span>.
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 lg:w-[80%]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref={nameRef}
              className="w-full bg-transparent border-solid
              border-white border-[1px] h-10 rounded-lg px-2 
              lg:h-14 lg:rounded-3xl lg:pl-8"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Contacts for communication"
              ref={numberRef}
              inputMode="numeric"
              className="w-full bg-transparent border-solid
              border-white border-[1px] h-10 rounded-lg px-2
              lg:h-14 lg:rounded-3xl lg:pl-8" 
              required
            />
            <button
              type="submit"
              className="bg-white text-blueDesing font-semibold py-2 rounded-lg lg:rounded-3xl"
            >
              Submit
            </button>
          </form>
          {message && <p>{message}</p>}
        </section>
      </section>
    </>
  );
}

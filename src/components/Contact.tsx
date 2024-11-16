"use client"
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente.
      if (formData.name && formData.number) {
        try {
          const response = await fetch("/api/sends", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            alert("Mensaje enviado exitosamente.");
            setFormData({ name: "", number: "" }); // Limpia el formulario.
          } else {
            alert("Error al enviar el mensaje.");
          }
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
        }
      } else {
        alert("Por favor, completa ambos campos.");
      }
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

          <form
            method="post"
            className="flex flex-col gap-y-4 lg:w-[80%]"
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border-solid border-white border-[1px] h-10 rounded-lg px-2 lg:h-14 lg:rounded-3xl lg:pl-8"
            />
            <input
              type="text"
              name="number"
              inputMode="numeric"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full bg-transparent border-solid border-white border-[1px] h-10 rounded-lg px-2 lg:h-14 lg:rounded-3xl lg:pl-8"
              placeholder="Contacts for communication"
            />
          </form>
        </section>
      </section>
    </>
  );
}

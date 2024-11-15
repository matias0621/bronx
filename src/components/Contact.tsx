export default function Contact() {
  return (
    <>
      <h1 className="text-center text-5xl mt-4 text-blueDesing font-semibold">
        Contacts
      </h1>

      <section className="bg-blueDesing text-white mt-4 text-center rounded-2xl mx-4 flex flex-col gap-y-4 p-4 sm:mx-12   
        lg:flex-row lg:gap-x-8 lg:justify-between       
       ">
        <section className="flex flex-col gap-y-4 lg:w-[50%] lg:items-start">
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
        <section className="flex flex-col gap-y-4 w-[50%]">
          <div className="lg:text-start">
            If you have already found a car and would like us to inspect it,
            simply contact us through <span className="underline">WhatsApp</span>.
          </div>

          <form method="post" className="flex flex-col gap-y-4">
            <input type="text" placeholder="Name" className="w-full bg-transparent border-solid border-white border-[1px] h-10 rounded-lg px-2" />
            <input type="text" inputMode="numeric" className="w-full bg-transparent border-solid border-white border-[1px] h-10 rounded-lg px-2" placeholder="Contacts for communication" />
          </form>
        </section>
      </section>
    </>
  );
}

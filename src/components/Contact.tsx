export default function Contact() {
  return (
    <>
      <h1 className="text-center text-5xl text-blueDesing font-semibold">
        Contacts
      </h1>

      <section className="bg-blueDesing text-white text-center rounded-2xl mx-4 flex flex-col gap-y-4 p-4">
        <section className="flex flex-col gap-y-4">
          <div className="text-2xl">
            <h3>VEHICLE</h3>
            <h3>ORDER FORM</h3>
          </div>

          <div>
            <p>Please fill out the vehicle order form.</p>
            <p>This will help us to speed up the search for your vehicle.</p>
            <p>We will process your request and contact you.</p>
          </div>
        </section>
        <section className="flex flex-col gap-y-4">
          <div>
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

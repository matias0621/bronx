import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <h1 className="text-blueDesing text-center text-5xl font-bold
        lg:text-6xl lg:font-semibold
        ">
          SELECTION
        </h1>

        <h1 className="text-blueDesing text-center text-5xl font-bold
        lg:text-6xl lg:font-semibold
        ">
          SERVICE CARS
        </h1>

        <h1 className="text-blueDesing text-center text-5xl font-bold
        lg:text-6xl lg:font-semibold
        ">
          IN GERMANY
        </h1>

        {/* Contenedor para la imagen con ajuste de posición */}
        <div className="relative mt-[-2.2rem] sm:mt-[-2.4rem] md:mt-[-2.5rem] lg:mt-[-3rem]">

          <Image
            src={"/Auto-Hero.png"}
            alt="Auto"
            width={500}
            height={400}
            className="
            lg:w-[65%]
            lg:h-64
            relative 
            left-1/2
            transform
            -translate-x-1/2

          "
          />
        </div>
      </section>
      <section className="text-blueDesing mt-5">
        <p className="text-center px-4 sm:px-16 md:px-40 lg:w-[70%] lg:block lg:mx-auto">
          We guarantee the selection of the best automobile offer on the German
          market, ensuring its technical and legal integrity. We also take care
          of preparing all the necessary export documents and arrange the
          delivery of the vehicle to your region.
        </p>

        <button className="block mt-5 mx-auto border-solid border-2
         border-blueDesing rounded-full w-[75%] h-16 sm:w-[50%]
         md:w-[38%] md:h-14 lg:w-[25%]
         ">
          MAKE AN APPLICATION
        </button>

        <h2 className="font-bold text-5xl text-center mt-10 text-black">
          Service
        </h2>
      </section>
    </>
  );
}

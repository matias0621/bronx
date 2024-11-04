import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <h1 className="text-blueDesing text-center text-5xl font-bold">
          SELECTION
        </h1>

        <h1 className="text-blueDesing text-center text-5xl font-bold">
          SERVICE CARS
        </h1>

        <h1 className="text-blueDesing text-center text-5xl font-bold">
          IN GERMANY
        </h1>

        {/* Contenedor para la imagen con ajuste de posición */}
        <div className="relative mt-[-8%]">
          {" "}
          {/* Ajusta el valor de mt-[-50px] para que la imagen suba */}
          <Image
            src={"/Auto-Hero.png"}
            alt="Auto"
            width={500}
            height={400}
            className="
            relative 
            left-1/2
            transform
            -translate-x-1/2
          "
          />
        </div>
      </section>
      <section className="text-blueDesing mt-5">
        <p className="text-center px-4">
          We guarantee the selection of the best automobile offer on the German
          market, ensuring its technical and legal integrity. We also take care
          of preparing all the necessary export documents and arrange the
          delivery of the vehicle to your region.
        </p>

        <button className="block mx-auto border-solid border-2 border-blueDesing rounded w-[75%] h-16">
          MAKE AN APPLICATION
        </button>
      </section>
    </>
  );
}

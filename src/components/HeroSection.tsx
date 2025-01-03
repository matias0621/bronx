"use client";

export default function HeroSection() {
  return (
    <>
      <section className="background-overlay text-white">
        <div className="relative flex flex-col justify-center items-center h-full gap-y-8 lg:block text-white text-center p-5 z-10 lg:pt-16 lg:pl-28">
          <h1 className="text-5xl mb-4 sm:text-start sm:text-5xl sm:w-[80%] lg:w-[60%] lg:text-[1.8rem] ">
            The team THE CAR is located directly in Germany, in the city of
            Berlin.
          </h1>
          <p className="text-xl sm:text-start sm:text-xl sm:w-[70%] lg:text-[1rem] sm:mt-8 lg:w-[50%]">
            This allows us to swiftly process your orders and locate the best
            cars in the shortest possible time. We simplify the complex process
            of buying a car in Germany to make it as convenient as possible for
            you.
          </p>
        </div>
      </section>
      <style jsx>
        {`
          .background-overlay {
            position: relative;
            width: 100%; /* Corrige el desbordamiento */
            height: 60vh; /* Mantiene la altura completa de la pantalla */
            background: url("car-dashboard.jpg") no-repeat center center/cover;
            object-fit: cover;
          }

          .background-overlay::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 43, 128, 0.8);
          }
        `}
      </style>
    </>
  );
}

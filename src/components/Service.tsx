import Image from "next/image";

interface ServiceProps {
  Title: string;
  Description: string;
  Photo: string;
}

export default function Service({ Title, Description, Photo }: ServiceProps) {
  return (
    <section
      className="flex flex-col items-center mx-auto bg-greyDesing w-4/5 rounded-xl my-4 sm:w-[90%] sm:h-60 sm:p-0 sm:flex-row"
    >
      <div className="relative w-4/5 h-56 aspect-w-16 aspect-h-9 sm:w-1/2 sm:h-4/5 sm:ml-4 sm:my-0">
        <Image
          src={Photo}
          alt={Title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center flex-col gap-y-4 sm:text-center sm:items-between sm:w-1/2 sm:gap-y-0 sm:h-4/5">
        <p className="text-2xl font-extrabold sm:text-xl">{Title}</p>
        <p className="w-4/5 sm:w-3/4">{Description}</p>
        
        <div className="sm:h-10 flex items-center justify-center w-full mt-2">
          <button
            className="bg-black text-white w-3/6 sm:w-1/2 h-full sm:text-xs flex items-center justify-center rounded-xl"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface ServiceProps {
  Title: string;
  Description: string;
  Photo: string;
}

export default function Service({ Title, Description, Photo }: ServiceProps) {
  return (
    <>
      <section className="flex flex-col items-center mx-auto
       bg-greyDesing w-4/5 rounded-xl my-4
       ">

        <Image src={Photo} 
        alt="Chauffeur service airport" 
        width={200} 
        height={200}
        className="my-4 rounded-xl w-4/5 h-1/4" 
        />
        <div className="flex items-center flex-col gap-y-4">
          <p className="text-2xl font-extrabold">{Title}</p>
          <p className="w-4/5">{Description}</p>
          <button className="bg-black text-white w-3/6 h-12 rounded-xl mb-4">Read More</button>
        </div>
      </section>
    </>
  );
}

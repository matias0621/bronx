import Image from "next/image";


export default function ImageCarPreFooter() {
    return(
        <>
            <Image src={"/prueba2.png"} 
            alt="" 
            width={400}
            height={400} 
            className="block mx-auto rounded-xl"
            />
        </>
    )
}
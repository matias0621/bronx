"use client"
import Image from "next/image";

export default function Slider() {
  return (
    <>

        <section className="slider">
            <section className="slide-track">
                <div className="slide">
                    <Image src={"/Bronx-negro.webp"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.webp"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.webp"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.webp"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.webp"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.webp"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.png"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.png"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.png"} alt="" width={350} height={350} />
                </div>

                <div className="slide">
                    <Image src={"/Bronx-negro.png"} alt="" width={350} height={350} />
                </div>
            </section>
        </section>

      <style jsx>
        {`
          .slider {
            width: 100vw;
            height: auto;
            margin: auto;
            overflow: hidden;
          }

          .slider .slide-track {
            display: flex;
            animation: scroll 40s linear infinite;
            -webkit-animation: scroll 40s linear infinite;
            width: calc(200px * 14);
          }

          .slider .slide {
            width: 350px;
          }

          .slider .slide img {
            width: 100%;
          }

          @keyframes scroll {
            0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
            100% {
              -webkit-transform: translateX(calc(-200px * 7));
              transform: translateX(calc(-200px * 7));
            }
          }
        `}
      </style>
    </>
  );
}

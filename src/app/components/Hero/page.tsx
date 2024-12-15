
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-[1100px] h-[500px] ">
      {/* Background Image */}
      <div className="w-full h-full lg:h-[500px] lg:w-[1340px] sm:w-[416px] sm:h-[753px] sm:left-[-1px]  md:w-[416px] md:h-[753px] md:left-[-1px]">
        <Image
          src="/hero.jpg"
          alt="hero image"
          width={1440}
          height={852}
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 gap-6 md:gap-8 lg:gap-10 z-10 ml-10"
      >
        <h5 className="font-Montserrat font-bold text-[14px] md:text-[16px] lg:text-[18px] text-white tracking-wide">
          SUMMER 2020
        </h5>

        <h1 className="font-Montserrat font-bold text-[32px] md:text-[48px] lg:text-[58px] leading-tight text-white max-w-[90%] md:max-w-[600px]">
          NEW COLLECTION
        </h1>

        <h4 className="font-Montserrat font-normal text-[14px] md:text-[18px] lg:text-[20px] leading-normal text-[#FAFAFA] max-w-[90%] md:max-w-[400px]">
          We know how large objects will act, but things on a small scale.
        </h4>

        <button className="w-[160px] md:w-[200px] lg:w-[221px] h-[50px] md:h-[56px] lg:h-[62px] rounded-[5px] bg-[#2DC071] text-white text-[16px] md:text-[20px] lg:text-[24px] font-Montserrat">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}


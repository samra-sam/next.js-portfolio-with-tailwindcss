import Image from "next/image";
import samra from "../app/public/images/samra.png"
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col ">

      <div className="flex flex-col lg:gap-5 gap-3 lg:w-1/2 lg:my-20 mt-32 mb-20 md:mb-20 lg:mx-28 mx-12">
      <h2 className="lg:text-4xl md:text-3xl text-2xl uppercase ">i am a professional</h2>
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#5500e9] uppercase">web designer</h1>
     <p className="text-[17px] text-white md:w-[80%]">Hey I am <span className="font-bold text-[#5500e9] ">Samra Sam</span> From Karachi Pakistan, Welcome to my web developer portfolio! I'm Samra, a skilled and
            creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites.I am Studing Cloud AI Artificial Intelligence , Metaverse & Web 3.0 At Sindh Govornor House Karachi... A dediated Web Developer passionate about crafting engaging and user-frindly digital experiences.With a strong foundation in HTML|CSS|JAVASCRIPT|TYPESCRIPT & currently exploring in NEXT.JS...</p>

     <button className="bg-[#0010e9] w-[150px] py-2 rounded-full">
      <Link href='/contact'>Hire Me</Link>
      </button>
     </div>

     <div className="md:w-1/2 self-center">
     <div className="relative bg-gradient-to-r from-[#5500e9] to-[#005288] md:my-5 my-2 md:mr-20 lg:w-[420px] md:w-[370px] w-[320px] lg:mx-0 mx-5  rounded-tr-[100px] rounded-tl-[50px] rounded-bl-[100px] overflow-hidden ">

      <Image className=" ml-1 transition-all duration-[3s]" src={samra} alt="samra sam"></Image>
    
     </div>
     </div>
    </div>
  );
}
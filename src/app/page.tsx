'use client'

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText)
/*
        <div className="absolute w-full h-full filter brightness-50">
          <Image alt="Background image" src={"/homeBackground.png"} fill={true}></Image>
        </div>
        <nav className="absolute top-0 left-0 h-16 w-full bg-[#141415d0] flex items-center justify-center">
          <div className="absolute left-10 w-32 h-6"><Image alt="Logo" src={"/logo.png"} fill={true}></Image></div>
          <button className="absolute right-10 text-xl font-sans text-[#D9A166] font-bold">CONTATTACI</button>
          <div className="flex flex-row gap-6">
          </div>
        </nav>
*/
export default function Home() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if(titleRef.current != null){
      let split = new SplitText(titleRef.current, {
          type: "words, chars",
          position: "relative"
        }
      )
      gsap.from(split.chars, {
        duration: 1, 
        y: 50,     
        autoAlpha: 0,  
        stagger: 0.05,  
      });
    }
  },[]);

  return (
    <> 
      <section className="relative bg-[#070808] w-[2042px] h-[788px] flex items-center justify-center">
        <div className="absolute left-0 top-0 w-full flex flex-row justify-center">
          <div className="absolute top-0 left-[127px] w-[455px]">
            <div className="relative w-full h-[10px] bg-[#FFFFFF0D] flex flex-row overflow-hidden rounded-b-[24px]">
              <div className="rounded-bl-[24px] absolute left-0 h-full w-[160px] bg-[linear-gradient(to_right,_#406E6D_0%,_#7BD4D3_75%)] "/>
              <div className="rounded-bl-[24px] absolute left-0 h-full w-[160px] bg-[linear-gradient(to_right,_#406E6D00_0%,_#7BD4D3_75%)] backdrop-blur-[40px] opacity-50"/>
            </div>
            <div className="relative mt-[12px] w-full flex flex-row">
              <p className="text-[#FFFFFF40] leading-[0.77] text-[24px] ">0*</p>
              <p className="ml-[112px] w-[52.5px] text-[#FFFFFF] leading-[0.77] text-[24px] ">41*</p>
              <p className="absolute right-0 text-[#FFFFFF40] leading-[0.77] text-[24px] ">120*</p>
            </div>
          </div>
          <p className="text-[#FFFFFF40] leading-[0.77] text-[24px] mt-[10.5px]">Via Giuseppe Campi 103, Modena MO</p>
          <div className="absolute top-0 right-[127px] w-[455px]">
            <div className="relative w-full h-[10px] bg-[#FFFFFF0D] flex flex-row overflow-hidden rounded-b-[24px]">
              <div className="rounded-bl-[24px] absolute left-0 h-full w-[332px] bg-[linear-gradient(to_right,_#406E6D_0%,_#7BD4D3_75%)] "/>
              <div className="rounded-bl-[24px] absolute left-0 h-full w-[332px] bg-[linear-gradient(to_right,_#406E6D00_0%,_#7BD4D3_75%)] backdrop-blur-[40px] opacity-50"/>
            </div>
            <div className="relative mt-[12px] w-full flex flex-row">
              <p className="text-[#FFFFFF40] leading-[0.77] text-[24px] ">E*</p>
              <p className="ml-[261px] w-[113px] text-[#FFFFFF] leading-[0.77] text-[24px] ">513km</p>
              <p className="absolute right-0 text-[#FFFFFF40] leading-[0.77] text-[24px] ">F</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex flex-row w-full h-full items-center justify-center">
          <div className="absolute z-10 w-[1000px] h-[1000px] bg-[#7BD4D3] -left-[545px] blur-[500px] opacity-5 -rotate-180"/>
          <div className="absolute z-10 w-[1000px] h-[1000px] bg-[#7BD4D3] -right-[545px] blur-[500px] opacity-5 -rotate-180"/>
          <div className="absolute z-10 w-[912px] h-[912px] bg-[#7BD4D3] -bottom-[674px] blur-[500px] opacity-10 -rotate-180"/>
          <div className="absolute left-0 w-[708px] h-[628px] flex justify-center ">
            <div className="rounded-[218px] absolute w-[625px] h-[625px] bg-[linear-gradient(to_bottom,_#7BD4D3_5%,_#7BD4D300)] rotate-90"/>
            <div className="rounded-[218px] absolute w-[625px] h-[625px] border-[1px] border-[#ffffff40] flex items-center justify-center">
              <div className=" rounded-[194px] w-[580px] h-[580px] bg-[#00000080] flex items-center justify-center">
                <div className="flex items-center justify-center rounded-[104px] w-[456px] h-[456px] ">
                  <div className="relative rounded-[64px] w-[284px] h-[284px] bg-[#00000080] border-[1.5px] border-[#FFFFFF40]">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[452px] h-[529px] flex flex-col items-center">
            
            <div className="relative w-[134px] h-[31px] bg-black rounded-[9px] p-[2px] bg-gradient-to-b from-white to-white/25">
              <div className="w-full h-full bg-[linear-gradient(to_bottom,_#FFFFFF_5%,_#FFFFFF1A)] rounded-[9px]"></div>
            </div>
            <div className="mt-[24px] relative h-[244px] w-full bg-red-500 flex justify-center items-center">
              <div className="rounded-[36px] absolute w-[194px] h-[194px] bg-green-400 -rotate-12 left-3"></div>
              <div className="z-10 rounded-[36px] w-[244px] h-[244px] bg-red-200"></div>
              <div className="rounded-[36px] absolute w-[194px] h-[194px] bg-blue-500 rotate-12 right-3"></div>
            </div>
            <div className="relative mt-[25px] w-[290px]">
              <div className="relative h-[25px] w-full ">
                <div className="absolute top-0 h-[11px]  w-full overflow-hidden">
                  <p className="absolute left-0 text-[14px] leading-[0.77] text-[#FFFFFF] opacity-75">0:49</p>
                  <p className="absolute right-0 text-[14px] leading-[0.77] text-[#FFFFFF] opacity-75">-3:21</p>
                </div>
                <div className="absolute bottom-0 w-full h-[6px]">
                  <div className="absolute rounded-2xl left-0 top-0 w-full h-full bg-[#FFFFFF] opacity-10"></div>
                  <div className="absolute rounded-2xl left-0 w-[113px] h-full bg-[#FFFFFF] opacity-50"></div>
                </div>
              </div>
              <p className="text-center mt-[32px] h-[20px] text-[26px] leading-[0.77] text-[#FFFFFF]">Smells like Teen Spirit</p>
              <p className="text-center mt-[18px] h-[14px] text-[18px] leading-[0.77] text-[#FFFFFF] opacity-50">Nirvana</p>
            </div>
            <nav className="h-[24px] w-[296px] bg-white mt-[61px]">

            </nav>
          </div>

          <div className="right-[41.5px] absolute w-[625px] h-[625px] bg-white"></div>
        </div>



        <div className="absolute left-0 bottom-0 w-full flex flex-row justify-center">
          <div className="absolute bottom-0 left-[174px] w-[359px] h-[42px] rounded-xl bg-[linear-gradient(to_bottom,_#FFFFFF,_#FFFFFF00)] p-[1px] custom-mask">
            <div className="relative z-10 h-full w-full rounded-xl bg-[#FFFFFF06]">
            </div>
          </div>
        </div>
      </section>
    </> 
  );
}

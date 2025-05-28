'use client'

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
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
        
        {/* Top elemets */}
        <div className="absolute left-0 top-0 w-full flex flex-row justify-center">

          {/* Oil temperature indicator */}
          <div className="absolute top-0 left-[127px] w-[455px]">
            <div className="relative w-full h-[10px] bg-[#FFFFFF0D] flex flex-row overflow-hidden rounded-b-[24px]">
              <div className="rounded-bl-[24px] absolute left-0 h-full w-[160px] bg-[linear-gradient(to_right,_#4B4F4F,_#8E9191)]"/>
              {/* Provato a replicare l'effetto su figma usando la dev mode ma per quanto avessi provato non funziona, ho fatto un linear gradient direttamente ^ */}
              {/*<div className="rounded-bl-[24px] absolute top-0 left-0 h-full w-[160px] bg-[linear-gradient(90deg,_rgba(64,110,109,0)_70.74%,_rgba(123,212,211,0.75)_100%)] "/>*/}
            </div>
            <div className="relative mt-[12px] w-full flex flex-row">
              <p className="text-[#FFFFFF40] leading-[0.77] text-[24px] font-medium">0°</p>
              <div className="relative ml-[112px] w-[52.5px] flex flex-row gap-[8px]">
                <Image src={"/temp.svg"} alt={"Left indicator up arrow svg"} width={16.5} height={18}/>
                <p className=" text-[#FFFFFFBF] leading-[0.77] text-[24px] font-medium">41°</p>
              </div>
              <p className="absolute right-0 text-[#FFFFFF40] leading-[0.77] text-[24px] font-medium ">120°</p>
            </div>
          </div>

          <div className="relative mt-[10.5px] flex flex-row gap-[12px]">
            <Image src={"/navigator.svg"} alt={"Navigator"} width={19} height={19}/>
            <p className="text-[#FFFFFF40] leading-[0.77] text-[24px] font-medium">Via Giuseppe Campi 103, Modena MO</p>
          </div>
          
          {/* Fuel indicator */}
          <div className="absolute top-0 right-[127px] w-[455px]">
            <div className="relative w-full h-[10px] bg-[#FFFFFF0D] flex flex-row overflow-hidden rounded-b-[24px]">
              <div className="rounded-bl-[24px] absolute left-0 h-full w-[332px] bg-[linear-gradient(to_right,_#4B4F4F,_#8E9191)] "/>
              {/* Linear gradient custom (Vedere commento in "Oil Temperature indicator") ^ */}
              {/*<div className="rounded-bl-[24px] absolute left-0 h-full w-[332px] bg-[linear-gradient(to_right,_#406E6D00_0%,_#7BD4D3_75%)] backdrop-blur-[40px] opacity-50"/>*/}
            </div>
            <div className="relative mt-[12px] w-full flex flex-row">
              <p className="font-medium text-[#FFFFFF40] leading-[0.77] text-[24px] ">E</p>
              <div className="relative ml-[261px] w-[113px] flex flex-row gap-[8px] ">
                <Image src={"/petrol.svg"} alt={"Petrolò"} width={28} height={18}/>
                <p className="font-medium text-[#FFFFFFBF] leading-[0.77] text-[24px] whitespace-nowrap">513 km</p>
              </div>
              <p className="font-medium absolute right-0 text-[#FFFFFF40] leading-[0.77] text-[24px] wrap-break-word">F</p>
            </div>
          </div>
        </div>

        {/* Center elements */}
        <div className="relative flex flex-row w-full h-full items-center justify-center">

          {/* Blurred circles */}
          <div className="absolute w-[1000px] h-[1000px] bg-[#7BD4D3] -left-[545px] blur-[500px] opacity-5 -rotate-180"/>
          <div className="absolute w-[1000px] h-[1000px] bg-[#7BD4D3] -right-[545px] blur-[500px] opacity-5 -rotate-180"/>
          <div className="absolute z-10 w-[912px] h-[912px] bg-[#7BD4D3] -bottom-[674px] blur-[500px] opacity-10 -rotate-180"/>
          
          {/* Left eco indicator */}
          <div className="absolute left-0 w-[708px] h-[628px] flex items-center justify-center">
            <div className="absolute w-[625px] h-[625px] -rotate-90 bg-gradient-to-b from-emerald-300/5 to-emerald-300/0 rounded-[216.5px]"></div>
            <div className="absolute min-w-[708px] w-[708px] min-h-[628px] h-[628px] z-10"><Image src={"/leftIndicatorLines.svg"} alt={"Left indicator lines"} fill={true}/></div>
            <div className="absolute min-w-[628px] w-[628px] min-h-[628px] h-[628px] z-20 flex items-center justify-center overflow-hidden"><Image src={"/leftIndicatorBorderFade.svg"} alt={"Left indicator border fade"} fill={true}/></div>

            {/*Qui la width e height è di un pixel più alta a causa di un piccolo distacco che ci sarebbe stato tra il bordo di confine e le linee ad X */}
            <div className="absolute min-w-[626px] w-[626px] min-h-[626px] h-[626px] z-20 flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-full"><Image src={"/leftIndicatorOuterXLines.svg"} alt={"Left indicator outer X lines"} fill={true}/></div>
            </div>
          
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="absolute ml-[314px] top-0 w-[314px] h-[314px]"> {/* Margin left the size of the intersection */}
                <Image src={"/leftIndicatorOuterIntersection.svg"} alt={"Left indicator border fade"} fill={true}/>
              </div>
              
              <div className="absolute ml-[228px] mb-[228px] w-[228px] h-[228px]"> {/* Margin bottom and left half the size of the intersection */}
                <Image src={"/leftIndicatorInnerIntersection.svg"} alt={"Left indicator border fade"} fill={true}/>
              </div>
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative mb-[24px] min-w-[34px] min-h-[35px] w-[34px] h-[35px]">
                <Image src={"/leftIndicatorUpArrow.svg"} alt={"Left indicator up arrow svg"} fill={true}/>
              </div>
              <div className="w-[94px] h-[120px] relative flex items-center justify-center">
                <div className="text-center justify-start text-white text-[156px] font-light leading-[0.77] tracking-[6.24px] font-display-variable text-outline">2</div>
                <div className="absolute opacity-50 text-center justify-start text-white text-[156px] font-light leading-[0.77] tracking-[6.24px] blur-[25px] font-display-variable text-outline">2</div>
              </div>
              <p className="mt-[24px] h-[18px] text-center justify-start text-cyan-100 text-2xl font-medium leading-[0.77]">ECO</p>

            </div>

            {/* Dashes (bottom negativo per non alzare l'elemento, calcolato aggiungendo alla height di un dash la height del margine: 12.5px + 4px = 16.5px) */}
            <div className="absolute -bottom-[16.5px] h-[4px] flex flex-row gap-[6px]">
              <div className="relative w-[18px] h-full filter ">
                <div className="absolute w-full h-full bg-[#FFFFFFBF] rounded-[10900px]"></div>
                <div className="absolute w-full h-full bg-[#FFFFFFBF] blur-[4px] rounded-[10900px]"></div>
              </div>
              <div className="relative w-[18px] h-full rounded-[10900px] bg-[#FFFFFF1A]"></div>
              <div className="relative w-[18px] h-full rounded-[10900px] bg-[#FFFFFF1A]"></div>
              <div className="relative w-[18px] h-full rounded-[10900px] bg-[#FFFFFF1A]"></div>

            </div>
          </div>

          {/* Center music player */}
          <div className="relative w-[452px] h-[529px] flex flex-col items-center">
            
            <div className="relative w-[134px] h-[31px] flex items-center justify-center gap-[10px]">
                <Image src={"/bluetoothDeviceButton.svg"} fill={true} alt="bluetooth button"></Image>
                {/*2 pixel più grande visto che Figma non conta i bordi nella width e height */}
                <Image src={"/bluetoothLogo.svg"} width={9} height={13} alt="bluetooth button"></Image>
                <p className="text-[#FFFFFFBF] leading-[0.77] text-[14px] font-medium device-player-text-outline">iPhone 16 Pro</p>
            </div>
            <div className="mt-[24px] relative h-[244px] w-full bg-red-500 flex justify-center items-center">
              <div className="rounded-[36px] absolute w-[194px] h-[194px] bg-green-400 -rotate-12 left-3 overflow-hidden">
                <Image src={"/duranImage.jpg"} fill={true} alt="Duran"></Image>
              </div>
              <div className="relative flex items-center justify-center w-[244px] h-[244px] rounded-[36px] shadow-[0px_24px_50px_16px_rgba(0,0,0,0.5)]">
                <div className="absolute z-10 inset-0 flex items-center justify-center overflow-hidden rounded-[36px]" >
                  <Image src={"/nirvanaImage.jpg"} className="object-cover w-full h-full" objectFit="cover" fill={true} alt="Nirvana"></Image>
                </div>
                <div className="absolute z-20 w-full h-full rounded-[36px] border-[rgba(255,255,255,0.05)] border-[2px]"></div>
              </div>
              <div className="rounded-[36px] absolute w-[194px] h-[194px] bg-blue-500 rotate-12 right-3 overflow-hidden">
                <Image src={"/dreamlandImage.jpg"} fill={true} alt="Dreamland"></Image>
              </div>
            </div>
            <div className="relative mt-[25px] w-[290px]">
              <div className="relative min-h-[25px] h-[25px] w-full ">
                <div className="absolute top-0 min-h-[11px] h-[11px] w-full overflow-hidden">
                  <p className="absolute top-0 left-0 text-[14px] leading-[0.77] font-medium text-[#FFFFFF] opacity-75">0:49</p>
                  <p className="absolute top-0 right-0 text-[14px] leading-[0.77] font-medium text-[#FFFFFF] opacity-75">-3:21</p>
                </div>
                <div className="absolute bottom-0 w-full h-[6px] min-h-[6px]">
                  <div className="absolute rounded-2xl left-0 top-0 w-full h-full bg-[#FFFFFF] opacity-10"></div>
                  <div className="absolute rounded-2xl left-0 w-[113px] h-full bg-[#FFFFFF] opacity-50"></div>
                </div>
              </div>
              <p className="text-center mt-[32px] h-[20px] text-[26px] leading-[0.77] text-[#FFFFFF] font-medium">Smells like Teen Spirit</p>
              <p className="text-center mt-[18px] h-[14px] text-[18px] leading-[0.77] text-[#FFFFFF] opacity-50 font-medium">Nirvana</p>
            </div>
            <nav className="h-[36px] w-[296px] mt-[61px] flex flex-row gap-[24px] items-center">
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/navigatorUp.svg"} fill={true} alt="Navigator up"></Image>
              </div>
              <div className="relative w-[36px] h-[36px] flex items-center justify-center">
                <div className="absolute w-full h-full">
                  <Image src={"/note.svg"} fill={true} alt="Note"></Image>
                </div>
                <div className="absolute w-full h-full blur-[10px] opacity-50">
                  <Image src={"/note.svg"} fill={true} alt="Note"></Image>
                </div>
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/computer.svg"} fill={true} alt="Computer"></Image>
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/bars.svg"} fill={true} alt="Bars"></Image>
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/moon.svg"} fill={true} alt="Moon"></Image>
              </div>
              <div className="relative w-[28px] h-[28px]">
                <Image src={"/signal.svg"} fill={true} alt="Signal"></Image>
              </div>
            </nav>
          </div>

          {/* Right speed indicator */}
          <div className="absolute right-0 w-[708px] h-[628px] flex items-center justify-center">
            <div className="absolute w-[625px] h-[625px] -rotate-90 bg-gradient-to-b from-emerald-300/5 to-emerald-300/0 rounded-[216.5px]"></div>
            <div className="absolute min-w-[708px] w-[708px] min-h-[628px] h-[628px] z-10"><Image src={"/rightIndicatorLines.svg"} alt={"Left indicator lines"} fill={true}/></div>
            <div className="absolute min-w-[628px] w-[628px] min-h-[628px] h-[628px] z-20 flex items-center justify-center overflow-hidden"><Image src={"/leftIndicatorBorderFade.svg"} alt={"Left indicator border fade"} fill={true}/></div>

            {/*Qui la width e height è di un pixel più alta a causa di un piccolo distacco che ci sarebbe stato tra il bordo di confine e le linee ad X */}
            <div className="absolute min-w-[626px] w-[626px] min-h-[626px] h-[626px] z-20 flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-full"><Image src={"/rightIndicatorOuterXLines.svg"} alt={"Left indicator outer X lines"} fill={true}/></div>
            </div>
          
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="absolute ml-[314px] top-0 w-[314px] h-[314px]"> {/* Margin left the size of the intersection */}
                <Image src={"/rightIndicatorOuterIntersection.svg"} alt={"Right indicator outer intersection"} fill={true}/>
              </div>
              
              <div className="absolute ml-[228px] mb-[228px] w-[228px] h-[228px]"> {/* Margin bottom and left half the size of the intersection */}
                <Image src={"/rightIndicatorInnerIntersection.svg"} alt={"Right indicator inner intersection"} fill={true}/>
              </div>
            </div>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative mb-[28px] min-w-[56px] min-h-[56px] w-[56px] h-[56px]">
                <Image src={"/speedLimit.png"} alt={"Speed limit"} fill={true}/>
              </div>
              <div className=" h-[120px] relative flex items-center justify-center">
                <div className="text-center justify-start text-white text-[156px] font-light leading-[0.77] tracking-[6.24px] font-display-variable text-outline">35</div>
                <div className="absolute opacity-50 text-center justify-start text-white text-[156px] font-light leading-[0.77] tracking-[6.24px] blur-[25px] font-display-variable text-outline">35</div>
              </div>
              <p className="mt-[28px] h-[18px] text-center justify-start text-[#FFFFFF80] text-[24px] font-medium leading-[0.77]">km/h</p>

            </div>

            {/* Dashes (bottom negativo per non alzare l'elemento, calcolato aggiungendo alla height di un dash la height del margine: 12.5px + 4px = 16.5px) */}
            <div className="absolute -bottom-[16.5px] h-[4px] flex flex-row gap-[6px]">
              <div className="relative w-[18px] h-full filter ">
                <div className="absolute w-full h-full bg-[#FFFFFFBF] rounded-[10900px]"></div>
                <div className="absolute w-full h-full bg-[#FFFFFFBF] blur-[4px] rounded-[10900px]"></div>
              </div>
              <div className="relative w-[18px] h-full rounded-[10900px] bg-[#FFFFFF1A]"></div>
              <div className="relative w-[18px] h-full rounded-[10900px] bg-[#FFFFFF1A]"></div>
              <div className="relative w-[18px] h-full rounded-[10900px] bg-[#FFFFFF1A]"></div>

            </div>
          </div>
        </div>


        <div className="absolute left-0 bottom-0 w-full flex flex-row justify-center ">
          {/* 3 pixel aggiunti visto che Figma non conta i bordi nella width e height */}
          <div className="absolute bottom-0 left-[174px] w-[361px] h-[46px] ">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image src={"/bottomLeftDistanceBackground.svg"} fill={true} alt="Background"></Image>
            </div>
            {/* left messo a 5.5px visto che Figma non conta i bordi nella width, viene quindi 4px + 1.5px = 5.5px */}
            <div className="absolute left-[5.5px] bottom-[4px] bg-[#FFFFFF0D] w-[245px] h-[35px] rounded-tl-[20px] rounded-b-[4px] rounded-tr-[4px]">
              <p className="absolute text-[18px] leading-[0.77] font-medium text-[#FFFFFF80] bottom-[11px] left-[16px]">ALTITUDE</p>
              <p className="absolute text-[18px] leading-[0.77] font-medium text-[#FFFFFFBF] bottom-[11px] right-[44px]">783 <span className="font-normal">m</span></p>
            </div>

            <div className="absolute h-[14px] right-[21.5px] bottom-[15px] flex flex-row">
              <p className="text-[18px] leading-[0.77] font-medium text-[#FFFFFF] opacity-25">1k <span className="font-normal">m</span></p>
            </div>

          </div>
          <p className="text-[24px] leading-[0.77] font-medium text-[#FFFFFF] opacity-25 mb-[10px]">105.302 <span className="font-normal">km</span></p>
        
          {/* 3 pixel aggiunti visto che Figma non conta i bordi nella width e height */}
          <div className="absolute bottom-0 right-[174px] w-[361px] h-[46px] ">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image src={"/bottomLeftDistanceBackground.svg"} fill={true} alt="Background"></Image>
            </div>
            {/* left messo a 5.5px visto che Figma non conta i bordi nella width, viene quindi 4px + 1.5px = 5.5px */}
            <div className="absolute left-[5.5px] bottom-[4px] bg-[#FFFFFF0D] w-[245px] h-[35px] rounded-tl-[20px] rounded-b-[4px] rounded-tr-[4px]">
              <p className="absolute text-[18px] leading-[0.77] font-medium text-[#FFFFFF80] bottom-[11px] left-[16px] whitespace-nowrap">PW LOAD</p>
              <p className="absolute text-[18px] leading-[0.77] font-medium text-[#FFFFFFBF] bottom-[11px] right-[44px] whitespace-nowrap">72 %</p>
            </div>

            <div className="absolute h-[14px] right-[21.5px] bottom-[15px] flex flex-row">
              <p className="text-[18px] leading-[0.77] font-medium text-[#FFFFFF] opacity-25 whitespace-nowrap">100 %</p>
            </div>

          </div>
        </div>
      </section>
    </> 
  );
}

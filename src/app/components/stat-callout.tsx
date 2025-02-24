import Image from "next/image"
import ForceButton from "./forceButton"

export default function StatCallout() {
  // const statBackground = 'bg-gray-200'
  const statBackground = ""
  // const iconHeight = "61" //75% = 61
  // const iconWidth = "65" //75% = 49
  return (
    <div className="flex flex-col gap-2 border border-gray-300 px-5 py-10 rounded-md">
      <div className="flex flex-col items-baseline font-inter gap-3">
        {/* <div className="flex h-[33px] w-[138px]">
          <Image 
            src="/force-logo.png"
            alt="small FORCE logo"
            height={161}
            width={651}
          />
        </div> */}
        <p className="text-4xl text-black/70 font-semibold">The Numbers Tell the Story</p>
        <p className="text-2xl leading-normal font-extralight text-black/70 w-[60%]">An ever-growing team of dedicated professionals committed to the betterment of our field.</p>
      </div>
    <div className={`flex  ${statBackground} justify-around items-center pt-10 pb-14`}>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-3 justify-center">
          <p className="text-[#096DCB] text-6xl font-semibold">8</p>
          <div className={`flex w-[49px] h-[61px]`}>
          <Image 
            src="/resident.png"
            alt="resident logo"
            height={390}
            width={346}
          />

          </div>
        </div>
          <p className="text-black font-roboto-mono text-xl pt-2">Years supporting academia</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-3 justify-center">
          <p className="text-[#096DCB] text-6xl font-semibold">50+</p>
          <div className={`flex w-[49px] h-[61px]`}>
          <Image 
            src="/fellow.png"
            alt="fellow logo"
            height={511}
            width={448}
          />

          </div>
        </div>
          <p className="text-black font-roboto-mono text-xl pt-2">Current Active Fellows</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-3 justify-center">
          <p className="text-[#096DCB] text-6xl font-semibold">15</p>
          <div className={`flex w-[49px] h-[61px]`}>
          <Image 
            src="/pin3.png"
            alt="map pin logo"
            height={434}
            width={386}
          />

          </div>
        </div>
          <p className="text-black font-roboto-mono text-xl pt-2">States Across the Country</p>
      </div>
    </div>
    <ForceButton align="center">become part of the team</ForceButton>
    </div>
  )
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Image from "next/image"
export default function Quote() {
  return (
    <div className="flex w-3/4 mx-auto gap-4">
    
    <div className="flex flex-col font-inter justify-center items-center text-3xl font-light gap text-black/70">
      <span className="text-center">
      &quot;We can serve as an example to the rest of dentistry for how a well-designed, practice-based research network can facilitate growth and foster innovation.&quot;
      </span>
      <div className="flex w-1/2 bg-blue-700 h-1 my-3">

      </div>
      <div className="flex flex-col items-center">
      <p className="text-xl font-semibold">Laurance Jerrold DDS, JD</p>
      <p className="text-base italic">Founder, FORCE</p>

      </div>
    </div>

    <div className="flex">

    <div className="relative w-60 h-60 bg-sky-100 rounded-full overflow-hidden
      before:content-[''] before:absolute before:bg-gradient-to-r
      before:from-transparent before:to-blue-500 before:-inset-y-4
      before:inset-x-20 before:transition-[.5s]
      hover:before:-inset-y-5 hover:before:inset-x-0 before:animate-[spin_8s_linear_infinite]
      after:content-[''] after:absolute after:inset-3 after:rounded-full
      after:z-10
      ">
      <div className="absolute inset-2 border-4 border-gray-50 z-30 rounded-full overflow-hidden flex justify-center items-center flex-col">
        <img src="/dr_jerroldv2.png" alt="picture" className="object-cover absolute t-0 l-0 w-full transition-[0.5s] z-30 hover:opacity-40" />
        <h2 className="relative text-2xl text-center font-extrabold text-black uppercase">Dr. Jerrold
        </h2>
      </div>

    </div>

    </div>
    
    </div>

    
  )
}
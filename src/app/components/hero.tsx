import Image from "next/image"
import ForceButton from "./forceButton"
export default function Hero() {
  return (
    <div className="heroContainer font-inter flex gap-10">
      <div className="heroText flex flex-col w-1/2 h-auto">
        <p className="hero-title text-[50px] text-black/70 mb-3 leading-[1.125]">Research & Education are Vital to Orthodontics</p>
        <p className="hero-body text-gray-900 font-light text-xl tracking-wide leading-normal">The <span className="font-semibold text-blue-900">Foundation</span> for <span className="font-semibold text-blue-900">Orthondontic Research</span> and <span className="font-semibold text-blue-900">Continuing Education</span> (FORCE) is a not-for-profit organization focused on cultivating these efforts to create a nationwide practice based network of CODA accredited Orthodontists.</p>
        <div className="flex mt-10">
        <ForceButton>
          join the force
        </ForceButton>

        </div>
        {/* <button className="bg-[#2E3091] text-white/90 w-fit px-4 py-2 uppercase font-inter font-semibold rounded-md mt-auto">Join the force</button> */}
      </div>
      <div className="heroImage flex w-1/2 h-fit">
        <Image 
          src="/doctors-with-jaw-x-ray.jpg"
          alt="doctors around a table"
          width={800}
          height={533}
        />
      </div>
    </div>
  )
}
import Image from "next/image"
export default function ValueProp() {
  return (
    <div className="border border-gray-300 px-5 py-10 rounded-md font-inter flex flex-col justify-center items-start">
      <p className="text-4xl text-black/70 mb-3 font-semibold">You Can Help</p>
      <p className="text-2xl leading-normal font-extralight text-black/70 w-[60%]">Be part of a diverse group of professionals committed to developing and strengthening the field of Orthodontics.</p>
      <div className="flex justify-between w-full mt-16 gap-8">

        {/* value prop item */}
        <div className="flex flex-col text-black/70 w-1/3">
          <div className="iconContainer rounded-md p-2 flex h-[64px] w-[64px] bg-blue-500">
          <Image 
            src="/research.png"
            alt="magnifying glass"
            height={489}
            width={489}
          />
          </div>
          <p className="font-semibold uppercase my-2">Research Assistance</p>
          <p className="font-light">Whether its procuring a survey platform, acquiring suitable mailing list data or hiring technicians to assist with research efforts, <span className="font-semibold">FORCE</span> can help defray the associated costs.</p>
        </div>
        <div className="flex flex-col text-black/70 w-1/3">
          <div className="iconContainer rounded-md p-2 flex h-[64px] w-[64px] bg-blue-500">
          <Image 
            src="/network3.png"
            alt="network symbol"
            height={512}
            width={512}
          />
          </div>
          <p className="font-semibold uppercase my-2">Diverse Network</p>
          <p className="font-light">A practice-based, nationwide body of Orthodontists serves as a data and support resource, ensuring residents&apos; access to usable and <span className="italic">accurate</span> information for their research efforts. </p>
        </div>

        <div className="flex flex-col text-black/70 w-1/3">
          <div className="iconContainer rounded-md p-2 flex h-[64px] w-[64px] bg-blue-500">
          <Image 
            src="/sustainability.png"
            alt="sustainability"
            height={512}
            width={512}
          />
          </div>
          <p className="font-semibold uppercase my-2">Sustainability</p>
          <p className="font-light">Joining <span className="font-semibold">FORCE</span> today allows you to leverage existing resources and create research findings that will in turn be available for tomorrow&apos;s residents.</p>
        </div>


      </div>
    </div>
  )
}
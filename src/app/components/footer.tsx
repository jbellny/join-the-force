import Image from "next/image"

export default function Footer() {
  return (
    <div className="flex mt-20 mb-10 justify-between">
      <span>
      &copy;2024 FORCE, Inc. All rights reserved.
      </span>
      <div className="flex gap-8 ">
        <div className="w-[96px]">
        <a href="https://jada.ada.org/" target="_blank">
        <Image
          style={{maxInlineSize: "100%"}}
          src="/jada.png"
          alt="journal of the american dental association"
          height={92}
          width={277}
        />
        </a>
        </div>
        <div className="w-[96px]">
        <a href="https://coda.ada.org/">
        <Image
          style={{maxInlineSize: "100%"}}
          src="/coda.png"
          alt="Commission on Dental Accreditation"
          height={111}
          width={304}
        />
        </a>

        </div>
      </div>
    </div>
  )
}
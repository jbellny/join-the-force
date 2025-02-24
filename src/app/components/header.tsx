import Image from "next/image"
import NavBar from "./nav"
export default function Header() {
  return (
    <header className="w-full py-10 flex bg-gray-50">
      <div className="w-auto">
        {/* height:64 width:268 */}
        <Image 
          src="/force-logo.png"
          alt="FORCE Logo"
          height={64}
          width={268}
        />

      </div>
      <NavBar />
    </header>
  )
}
export default function ForceButton({children, align = "start"}) {
  return (
    <button className={`bg-[#2E3091] text-white/90 w-fit px-4 py-2 uppercase font-inter font-semibold rounded-md mt-auto self-${align}`}>
      {children}
      </button>
  )
}
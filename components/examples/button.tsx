export default function Button() {
  return (
    <section className="w-full h-full flex justify-center items-center gap-10">
      <button className="relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#282828] to-[#10100F] flex justify-center items-center border-2 border-[#10100F] outline outline-2 outline-offset-2 outline-transparent focus:outline-[#282828]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#1e1e1c] to-[#10100F] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-white/80">Default</span>
      </button>
      <button className="relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#c7c7c7] to-[#F7F7F7] flex justify-center items-center border-2 border-[#F7F7F7] outline outline-2 outline-offset-2 outline-transparent focus:outline-[#c7c7c7]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#e4e4e4] to-[#F7F7F7] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-black/80">Secondary</span>
      </button>
      <button className="group relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#d4ffe5] to-[#4dff94] flex justify-center items-center border-2 border-[#4dff94]  outline outline-2 outline-offset-2 outline-transparent focus:outline-[#d4ffe5]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#9effc5] to-[#4dff94] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-[#0C5132]">Success</span>
      </button>
      <button className="group relative min-w-[5rem] px-4 py-2 rounded-[12px] bg-gradient-to-b from-[#FED3D1] to-[#ff9a97] flex justify-center items-center border-2 border-[#ff9a97]  outline outline-2 outline-offset-2 outline-transparent focus:outline-[#FED3D1]">
        <span className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] bg-gradient-to-b from-[#feb8b4] to-[#ff9a97] group-hover:opacity-60 transition-all duration-300 ease-in-out"></span>
        <span className="z-10 text-xs text-[#8D1F0B]">Destructive</span>
      </button>
    </section>
  );
}

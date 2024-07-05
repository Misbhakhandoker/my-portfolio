import { Meteors } from "./meteors";

export function MeteorsDemo({image, title, color}) {
  return (
    <div className="">
      <div className="relative w-full max-w-xs ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative flex flex-col items-center justify-center h-full px-8 py-4 overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-2xl">
         

          <h1 className={`relative z-10 mb-4  text-2xl md:text-5xl font-bold ${color}`}>
           {image}
          </h1>

          <p className="relative z-10 mb-4 text-sm font-normal text-white md:text-base">
            {title}
          </p>

         

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

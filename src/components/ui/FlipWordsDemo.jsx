import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["FullStake", "Web Developer"];

  return (
    <div className="flex items-center justify-center w-full px-4">
      <div className="flex flex-col items-center justify-center gap-2 mx-auto text-2xl font-normal leading-tight text-left md:text-4xl md:w-96 w-60 text-neutral-300">
        <h1 className="text-white">Hi There 👋</h1>
        <span>I am Mijbah</span> <span> as a </span> <FlipWords words={words} />
      </div>
    </div>
  );
}

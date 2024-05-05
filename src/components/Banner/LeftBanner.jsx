import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { github, download } from "../../assets";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "AI Developer.", "Research Assistant"],
    loop: true,
    typeSpeed: 35,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">
            Purushoth Velayuthan
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I&apos;m not adding
          motion just to spruce things up, but doing it in ways that.
        </p>
        <span>
          <button
            className="w-[40%] select-none rounded-lg bg-blue-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <img
              src={github}
              alt="GitHub"
              className="inline-block w-4 h-4 mr-2"
            />
            GitHub
          </button>{" "}
          &nbsp;
          <button
            className="w-[40%] select-none rounded-lg bg-blue-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Download
            <img
              src={download}
              alt="Download"
              className="inline-block w-4 h-4 mr-2"
            />
          </button>
        </span>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;

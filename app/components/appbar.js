import MediaQuery, { useMediaQuery } from "react-responsive";

export default function AppBar({ bar }) {
  return (
    <div className="flex flex-col gap-6 lg:gap-0 xl:flex-row justify-between object-center place-items-center mr-5 ml-5 pl-24 pr-24 pt-5 pb-5 w-full h-auto bg-transparent backdrop-blur-sm">
      <h1 className="font-bold text-xl lg:text-3xl ">{"{ Abhik Ghosh }"}</h1>
      <div>
        <a className="font-bold text-2xl lg:text-3xl" href="404">
          Blog
        </a>
      </div>
      <MediaQuery maxWidth={640}>
        {bar}
      </MediaQuery>
    </div>
  );
}

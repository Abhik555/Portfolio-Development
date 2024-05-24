import MediaQuery from "react-responsive";
import ProjectDisplayPane from "../projects/ProjectDisplayPane";

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center lg:justify-start lg:items-start">
      <div className="flex flex-col gap-8 justify-start">
        <h1 className="text-white font-extrabold text-4xl">Projects</h1>
      </div>

      <MediaQuery minWidth={1024}>
        <ProjectDisplayPane />
      </MediaQuery>

      <MediaQuery maxWidth={1024}>
        <div className="flex flex-col justify-center items-center">
          <ProjectDisplayPane />
        </div>
      </MediaQuery>
    </div>
  );
}

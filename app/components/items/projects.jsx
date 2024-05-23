import ProjectDisplayPane from "../projects/ProjectDisplayPane";

export default function Projects(){
    return(
        <div className="flex flex-col gap-8 justify-start">
            <h1 className="text-white font-extrabold text-4xl">Projects</h1>
            <ProjectDisplayPane />
        </div>
    );
}
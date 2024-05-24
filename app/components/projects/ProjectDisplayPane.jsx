import ProjectItem from "./ProjectItem";
import proj from "../../resources/projects.json"
import TestBox from "../general/testbox";

export default function ProjectDisplayPane(){

    const pro = proj;

    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                pro.map((proj , index) => {

                    let isImg = true;
                    if(proj["img"] == ""){
                        isImg = false;
                    }

                    return(
                        <ProjectItem key={index} Title={proj["title"]} lang={proj["lang"]} link={proj["link"]} isImage={isImg} Img={proj["img"]}/>
                    );
                })
            }
        </div>
    );
}
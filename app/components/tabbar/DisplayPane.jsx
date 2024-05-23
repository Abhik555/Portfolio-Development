import DisplayBox from "../general/DisplayBox";
import data2 from "../../resources/data.json"
import data from "../../resources/certificates.json";
import { IconContext } from "react-icons";
import { FaPython ,FaJava } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

export default function DisplayPane({ tab }) {

    const cert = data;
    const skills = data2[0]["skills"];


  if (tab === 1) {
    return (
      <div className="grid grid-cols-4 gap-4 mt-7">
        {
            cert.map((certificate , index) => {
                return(
                    <DisplayBox key={index} title={certificate["title"]} img={certificate["img"]} />
                );
            })
        }
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-7">
        {skills.map((skill, index) => {
          switch (index) {
            case 0:
              return (
                <div className="flex flex-col gap-3 h-auto w-auto justify-center items-center">
                  <IconContext.Provider key={index} value={{fill:"white" , color:"white"}}>
                    <FaPython size={150} />
                  </IconContext.Provider>
                  <h3 key={index} className="text-center font-semibold text-lg">Python</h3>
                </div>
              );
            case 1:
                return (
                    <div className="flex flex-col gap-3 h-auto w-auto justify-center items-center">
                      <IconContext.Provider key={index} value={{fill:"white" , color:"white"}}>
                        <FaJava size={150} />
                      </IconContext.Provider>
                      <h3 key={index} className="text-center font-semibold text-lg">Java</h3>
                    </div>
                  );
            case 2:
                return (
                    <div className="flex flex-col gap-3 h-auto w-auto justify-center items-center">
                      <IconContext.Provider key={index} value={{fill:"white" , color:"white"}}>
                        <RiFlutterFill size={150} />
                      </IconContext.Provider>
                      <h3 key={index} className="text-center font-semibold text-lg">Flutter</h3>
                    </div>
                  );
            case 3:
                return (
                    <div className="flex flex-col gap-3 h-auto w-auto justify-center items-center">
                        <IconContext.Provider key={index} value={{fill:"white" , color:"white"}}>
                        <RiNextjsFill size={150} />
                        </IconContext.Provider>
                        <h3 key={index} className="text-center font-semibold text-lg">NextJS</h3>
                    </div>
                );
            
          }
        })}
      </div>
    );
  }
}

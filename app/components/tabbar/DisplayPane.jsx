import DisplayBox from "../general/DisplayBox";
import data from "../../resources/data.json";

export default function DisplayPane({tab}){

    const skills = data[0]["skills"];

    if(tab===1){
    return(
        <div className="grid grid-cols-3 gap-4 mt-7">
            <DisplayBox title={"Test Box"} type={tab}/>
            <DisplayBox title={"Test Box"} type={tab}/>
            <DisplayBox title={"Test Box"} type={tab}/>
            <DisplayBox title={"Test Box"} type={tab}/>
            <DisplayBox title={"Test Box"} type={tab}/>
            <DisplayBox title={"Test Box"} type={tab}/>
        </div>
    );
}else{
    return(
        <div className="grid grid-cols-3 gap-4 mt-7">
            {
                skills.map((skill , index) => {
                    return(
                        <DisplayBox title={skill["title"]} type={tab}/>
                    );
                })
            }
        </div>
    );
}
}
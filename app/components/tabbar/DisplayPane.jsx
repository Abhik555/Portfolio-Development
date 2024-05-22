import DisplayBox from "../general/DisplayBox";

export default function DisplayPane({tab}){

    const skills = [];

    if(tab===0){
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
            <DisplayBox title={"Test Box 2"} type={tab}/>
        </div>
    );
}
}
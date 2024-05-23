import Image from "next/image";

export default function ProjectItem({Title , link , lang ,isImage , Img}) {

    if(isImage){
        return(
            <div className="flex h-auto w-auto">
                <Image src={Img} width={200} height={200} link={link} onClick={() => { location.href=link }} priority/>
            </div>
            
        );
    }else{
        return(
            <div className="flex flex-col gap-3 h-[200px] w-[200px] justify-center items-center text-center bg-[url('/resources/images/proj-place.png')] shadow-md rounded-md">
                <h1>{Title}</h1>
                <p>{lang}</p>
            </div>
        );
    }
}
import Image from "next/image";
import MediaQuery from "react-responsive";

export default function ProjectItem({ Title, link, lang, isImage, Img }) {
  if (isImage) {
    return (
      <div>
        <MediaQuery minWidth={1024}>
          <div className="flex h-auto w-auto cursor-pointer hover:h-[210px] hover:w-[210px] ease-in-out duration-150">
            <Image
              src={Img}
              width={200}
              height={200}
              link={link}
              onClick={() => {
                location.href = link;
              }}
              priority
            />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
          <div className="flex h-[210px] w-[210px] justify-center items-center cursor-pointer hover:h-[210px] hover:w-[210px] ease-in-out duration-150">
            <Image
              src={Img}
              width={200}
              height={200}
              link={link}
              onClick={() => {
                location.href = link;
              }}
              priority
            />
          </div>
        </MediaQuery>
      </div>
    );
  } else {
    return (
      <a href={link}>
        <div className="flex flex-col gap-3 h-[200px] w-[200px] hover:h-[210px] hover:w-[210px] ease-in-out duration-150 justify-center items-center text-center bg-contain bg-[url('https://raw.githubusercontent.com/Abhik555/Portfolio-Development/master/app/resources/images/proj-place.png')] shadow-md rounded-md">
          <h1 className="font-semibold text-lg">{Title}</h1>
          <p className="font-medium text-lg">{lang}</p>
        </div>
      </a>
    );
  }
}

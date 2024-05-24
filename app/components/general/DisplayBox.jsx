import Image from "next/image";
import MediaQuery from "react-responsive";

export default function DisplayBox({ title, img, index }) {
  return (
    <div>
      <MediaQuery minWidth={1024}>
        <div className="flex flex-col w-auto h-auto gap-3 justify-center items-center font-medium text-lg rounded-3xl ">
          {title}
          <Image src={img} alt={title} width={500} height={500} priority />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <div className="flex flex-col w-[170px] h-[170px] gap-3 justify-center items-center text-nowrap font-medium text-lg rounded-3xl ">
          <div className="flex flex-col justify-start items-center">
            <p>{title}</p>
            <Image src={img} alt={title} width={500} height={500} priority />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

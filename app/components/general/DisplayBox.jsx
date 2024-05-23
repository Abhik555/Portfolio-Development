import Image from "next/image";

export default function DisplayBox({ title, img, index }) {
  return (
    <div className="flex flex-col w-auto h-auto gap-3 justify-center items-center font-medium text-lg rounded-3xl ">
      {title}
      <Image src={img} alt={title} width={500} height={500} priority />
    </div>
  );
}

import { IconContext } from "react-icons";

export default function SocialHandel({ icon, label, link }) {
  return (
    <a href={link} className="cursor-default flex justify-start gap-2">
      <div className="grid grid-rows-1 grid-cols-2 gap-1 text-start">
        <div className="flex justify-center items-center">
        <IconContext.Provider value={{ fill: "white", color: "white" , size:"30"}}>
          {icon}
        </IconContext.Provider>
        </div>
        <h1 className="font-medium text-lg text-start">{label}</h1>
      </div>
    </a>
  );
}

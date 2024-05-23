import { BsGithub } from "react-icons/bs";
import SocialHandel from "../general/Socials";

export default function Contact() {
  return (
    <div className="flex flex-row gap-5 h-[80%] w-[70%] justify-between">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="bg-gradient-to-br from-blue-800 to-cyan-600 text-4xl font-extrabold bg-clip-text text-transparent ">Let's Connect</h1>
        <h2 className="text-white text-2xl font-semibold">I would love to hear from you!</h2>
      </div>
      <div>
        <h1>Connection Form</h1>
      </div>
    </div>
  );
}

/*
<SocialHandel
        icon={<BsGithub />}
        label={"Github"}
        link={"https://github.com/abhik555"}
      />
      */

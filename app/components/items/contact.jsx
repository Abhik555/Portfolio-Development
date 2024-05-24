import { BsGithub } from "react-icons/bs";
import SocialHandel from "../general/Socials";
import MediaQuery from "react-responsive";
import ContactWidget from "@/app/contactbox/contactwidget";
import { MdMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex justify-center lg:justify-start w-full">
      <MediaQuery minWidth={1024}>
        <div className="flex flex-row gap-5 h-[80%] w-[70%] justify-between">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="bg-gradient-to-br from-blue-800 to-cyan-600 text-4xl font-extrabold bg-clip-text text-transparent ">
              Let's Connect
            </h1>
            <div>
              <h2 className="text-white text-2xl font-semibold">
                at abhik555@hotmail.com
              </h2>
              <h2 className="text-white text-2xl font-semibold">
                I would love to hear from you!
              </h2>
            </div>
          </div>
          <div>
            <ContactWidget />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <div className="flex flex-col gap-5 h-[80%] w-[70%] justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="bg-gradient-to-br from-blue-800 to-cyan-600 text-4xl font-extrabold bg-clip-text text-transparent ">
              Let's Connect
            </h1>
            <div>
              <h2 className="text-white text-center text-2xl font-semibold">
                at abhik555@hotmail.com
              </h2>
              <h2 className="text-white text-center text-2xl font-semibold">
                I would love to hear from you!
              </h2>
            </div>
          </div>
          <div>
            <ContactWidget />
          </div>
        </div>
      </MediaQuery>
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

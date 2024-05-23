import { TypeAnimation } from "react-type-animation";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IconContext } from "react-icons";

//, background: "linear-gradient(to right, rgba(9,9,121,1) 11%, rgba(0,212,255,1) 100%)" , backgroundClip: "text" , WebkitTextFillColor:"transparent"

export default function Hero() {
  function redirect(index) {
    return links[index];
  }

  const icons = [<BsGithub />, <BsLinkedin />, <MdOutlineAlternateEmail />];
  const links = [
    "https://github.com/abhik555",
    "https://www.linkedin.com/in/abthedev",
    "abhik555@hotmail.com",
  ];

  return (
    <div className="flex flex-col justify-start gap-5">
      <div className="flex flex-col gap-2 justify-start">
        <h1 className="font-extrabold text-8xl bg-gradient-to-br from-blue-800 to-cyan-600 bg-clip-text text-transparent mb-3">
          Hello
        </h1>
        <span>
          <TypeAnimation
            sequence={[
              "I'm Abhik Ghosh",
              1000,
              "I'm a Student",
              1000,
              "I'm a Passionate Developer",
              1000,
              "I'm a Quick Learner",
              1000,
              "I'm a Tech Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block" }}
            repeat={Infinity}
          />
        </span>
      </div>
      <div className="flex flex-row justify-start gap-5">
        {icons.map((icon, index) => {
          return (
            <a
              href={redirect(index)}
              className="flex justify-center items-center w-12 h-12 rounded-full bg-transparent"
            >
              <IconContext.Provider
                value={{ fill: "white", color: "white", size: "2em" }}
              >
                {icon}
              </IconContext.Provider>
            </a>
          );
        })}
      </div>
    </div>
  );
}

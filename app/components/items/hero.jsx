import { TypeAnimation } from "react-type-animation";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import MediaQuery from "react-responsive";

export default function Hero() {
  function redirect(index) {
    return links[index];
  }

  const icons = [<BsGithub key={0} />, <BsLinkedin key={1} />];
  const links = [
    "https://github.com/abhik555",
    "https://www.linkedin.com/in/abthedev",
  ];

  return (
    <div className="flex flex-col justify-start gap-5">
      <div className="flex flex-col gap-2 justify-start">
        <h1 className=" flex flex-col justify-center lg:justify-start lg:items-start items-center font-semibold text-7xl lg:font-extrabold lg:text-8xl pb-6 h-auto bg-gradient-to-br from-blue-800 to-cyan-600 bg-clip-text text-transparent mb-3">
          Hey!
        </h1>
        <MediaQuery minWidth={1024}>
          <span className=" flex flex-col w-full">
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
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
        <span className=" flex flex-col w-full h-28">
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
              style={{ fontSize: "25px", display: "inline-block" , alignItems:"center", textAlign: "center" , width: "full"}}
              repeat={Infinity}
            />
          </span>
        </MediaQuery>
      </div>
      <div className="flex flex-row justify-center items-center lg:justify-start lg:items-start gap-5">
        {icons.map((icon, index) => {
          return (
            <a
              key={index}
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

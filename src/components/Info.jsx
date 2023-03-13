/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
const Info = () => {
  const Data = [
    {
      id: 1,
      title: "LinkedIn",
      icon: <FaLinkedin size={30} color="#0077b5" />,
      href: "https://www.linkedin.com/in/saurav-kumar-1643b4170/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      title: " GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/Saurav02022",
    },
    {
      id: 3,
      title: " Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:sk729584@gmail.com",
    },
    {
      id: 4,
      title: " Phone",
      icon: <FiPhoneCall size={30} />,
      href: `tel:${9572365331}`,
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      title: " Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/Saurav-Kumar-Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/1EXTQAFDi1i8VXpzl9tlAEFsJPzo2V23r/view"
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex  justify-center m-auto flex-wrap">
        {Data.map((link, index) => {
          return (
            <div
              className="justify-between "
              onClick={link.id === 5 ? downloadResume : null}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                download={link.download}
                className={`flex flex-col items-center justify-center p-4 ${link.style}`}
              >
                {link.icon}
                <h3 className="text-lg">{link.title}</h3>
              </a>
            </div>
          );
        })}
      </div>
      {/* <h3
        onClick={() => window.open("https://github.com/theyashpatel")}
        className="hover:text-blue-600 cursor-pointer text-red-600"
      >
        {" "}
        Inspired by Programming With Yash
      </h3> */}
    </div>
  );
};

export default Info;

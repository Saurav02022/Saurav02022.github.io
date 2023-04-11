import {
  BsFillPersonLinesFill,
  BsWhatsapp,
  BsLinkedin,
  BsGithub,
  BsMailbox2,
  BsPhone,
} from "react-icons/bs";
import { FiChevronsUp } from "react-icons/fi";

const Info = () => {
  const Data = [
    {
      id: 1,
      title: "LinkedIn",
      icon: <BsLinkedin size={30} />,
      href: "https://www.linkedin.com/in/saurav-kumar-1643b4170/",
      backgroundColor: "#00a0dc",
    },
    {
      id: 2,
      title: " Phone",
      icon: <BsPhone size={30} />,
      href: `tel:${9572365331}`,
      backgroundColor: "#ccc",
    },
    {
      id: 3,
      title: " GitHub",
      icon: <BsGithub size={30} />,
      href: "https://github.com/Saurav02022",
      backgroundColor: "#373b41",
    },
    {
      id: 4,
      title: " Mail",
      icon: <BsMailbox2 size={30} />,
      href: "mailto:sk729584@gmail.com",
      backgroundColor: "#ccc",
    },
    {
      id: 5,
      title: "What's app",
      icon: <BsWhatsapp size={30} />,
      href: "https://wa.me/9572365331",
      style: "rounded-br-md",
      backgroundColor: "#50CB5E",
    },
    {
      id: 6,
      title: " Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "https://drive.google.com/file/d/1EXTQAFDi1i8VXpzl9tlAEFsJPzo2V23r/view",
      backgroundColor: "#ccc",
    },
  ];

  return (
    <div
      name="Contact"
      className="flex  items-center justify-center bg-[#edf2f8] mt-1"
    >
      <div className="flex  justify-center m-auto flex-wrap">
        {Data.map((link, index) => {
          return (
            <div className="justify-between">
              <button
                key={link}
                onClick={() => {
                  window.open(link.href);
                }}
                style={{
                  display: "flex",
                  border: "1px solid #ccc",
                  marginLeft: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  padding: "10px",
                  gap: "5px",
                  backgroundColor: `${link.backgroundColor}`,
                  color: "white",
                  borderRadius: "5px",
                  fontSize: "21px",
                }}
                className={`${link.style}`}
              >
                {link.title}
                {link.icon}
              </button>
            </div>
          );
        })}
      </div>
      <div
        className="mr-5 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {<FiChevronsUp size={50} />}
      </div>
    </div>
  );
};

export default Info;

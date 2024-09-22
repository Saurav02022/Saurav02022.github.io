import {
  BsLinkedin,
  BsGithub,
  BsMailbox2,
  BsPhone,
  BsHeartFill,
} from "react-icons/bs";
import { FiChevronsUp } from "react-icons/fi";
import ReactTooltip from "react-tooltip";

const contactData = [
  {
    id: "contact-linkedin",
    title: "LinkedIn",
    icon: <BsLinkedin size={30} />,
    href: "https://www.linkedin.com/in/saurav-kumar-1643b4170/",
    backgroundColor: "linear-gradient(135deg, #0077b5, #00a0dc)",
  },
  {
    id: "contact-phone",
    title: "Phone",
    icon: <BsPhone size={30} />,
    href: `tel:${9572365331}`,
    backgroundColor: "linear-gradient(135deg, #4CAF50, #66bb6a)",
  },
  {
    id: "contact-github",
    title: "GitHub",
    icon: <BsGithub size={30} />,
    href: "https://github.com/Saurav02022",
    backgroundColor: "linear-gradient(135deg, #333, #444)",
  },
  {
    id: "contact-email",
    title: "Email",
    icon: <BsMailbox2 size={30} />,
    href: "mailto:sk729584@gmail.com",
    backgroundColor: "linear-gradient(135deg, #c71635, #f44336)",
  },
];

// Button component for individual contact links
const ContactButton = ({ link }) => {
  return (
    <button
      onClick={() => window.open(link.href)}
      className="relative flex items-center justify-between border border-gray-300 rounded-lg p-2.5 transition-transform transform hover:scale-105 hover:shadow-2xl"
      style={{
        background: link.backgroundColor,
        color: "white",
      }}
      aria-label={link.title}
      data-tip={link.title}
      data-for={link.id}
    >
      <span className="flex items-center">
        <span className="mr-2">{link.icon}</span>
        <span className="font-semibold">{link.title}</span>
      </span>
      <ReactTooltip id={link.id} place="top" type="dark" effect="float">
        {link.title}
      </ReactTooltip>
    </button>
  );
};

const Info = () => {
  return (
    <section
      name="Contact"
      id="contact"
      className="w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff]"
    >
      <div className="container mx-auto flex flex-col justify-center items-center p-10">
        <h2 className="text-5xl font-bold mb-5 text-gray-800 text-center transition-transform transform hover:scale-105">
          Get in Touch
        </h2>
        <p className="text-center mb-5 text-gray-600 text-lg">
          Connect with me through any of the platforms below!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {contactData.map((link) => (
            <ContactButton key={link.id} link={link} />
          ))}
        </div>
        <div
          className="cursor-pointer hover:text-[#00a0dc] transition duration-300 transform hover:scale-110"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          aria-label="Scroll to top"
        >
          <FiChevronsUp size={60} className="animate-bounce" />
        </div>

        {/* Footer Section */}
        <footer className="text-center text-gray-600 text-sm">
          <span className="flex gap-2.5 justify-center items-center">
            Designed and built with <BsHeartFill color="red" size={20} />
          </span>{" "}
          <span>by</span>
          <span className="font-semibold"> Saurav Kumar</span>{" "}
          <span>{new Date().getFullYear()}. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
};

export default Info;

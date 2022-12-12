import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto mb-52">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6] ml-5">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bf521582-fee9-47c6-a5b4-3e0c410ce80a"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name Please"
              className="p-2 bg-transparent  rounded-md focus:outline-none border-2 border-[#75bcd6]"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail Please"
              className="p-2 bg-transparent  rounded-md focus:outline-none my-4 border-2 border-[#75bcd6]"
            />
            <input
              type="number"
              name="number"
              placeholder="Enter Your PhoneNumber Please"
              className="p-2 bg-transparent  rounded-md focus:outline-none my-3 border-2 border-[#75bcd6]"
            />
            <textarea
              name="massage"
              placeholder="Enter Your Massage"
              rows="10"
              className="p-2 bg-transparent rounded-md focus:outline-none border-2 border-[#75bcd6]"
            ></textarea>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

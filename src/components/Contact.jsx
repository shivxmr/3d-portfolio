import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import AnimatedText from "./AnimatedText/AnimatedText";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { RiWhatsappFill } from 'react-icons/ri'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    const phoneNumber = '+917067173410';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello Shivam! I wanted to know about ...`;
    window.open(whatsappUrl, '_blank');
  };


  const handleChange = (e) => {
    // const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // prevent default otherwise browser will refresh it - default browser behaviour
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4ybnci5", // service id
        "template_2q7xtgd", // template id
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Shivam Raj",
          to_email: "shivamraj.me21@rvce.edu.in",
          message: form.message,
        },
        // EMAIL JS Public KEy
        "SnwiKTmnafIda8xlW"
      )

      // what happens when above executes - therefore .then will happen after that
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");


          // reset form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },

        // if email was not sent
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Let's Get in touch</p>
        {/* <h3 className={styles.sectionHeadText}>Contact Me</h3> */}
        <div className="text-7xl font-bold ">
          <AnimatedText text={'Contact Me'} />
        </div>
        <p className={styles.sectionSubText}>My Email id: shivxmr@gmail.com</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What is your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex justify-between">
            <button
              type='submit'
              className='bg-tertiary hover:bg-purple-900 py-3 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>


            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-xl outline-none w-fit flex items-center space-x-2"
              onClick={handleButtonClick}
            >
              <RiWhatsappFill className="text-white text-xl mr-2" />
              Contact on WhatsApp
            </button>
          </div>
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
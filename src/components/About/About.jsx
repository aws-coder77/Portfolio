import React from "react";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpeg";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-4 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, My Name is
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Chandan Kumar
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Fullstack Developer", "App Developer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
            />
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            I am an app and full-stack developer with over a year of experience in building scalable web applications. I specialize in creating both
            web and mobile apps using the MERN stack and other modern technologies to ensure smooth user experiences and efficient solutions.
          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/12__qcLjOPoD5CLyy2PE2GlERJGUFzKwo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            Resume
          </motion.a>
        </div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Chandan Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

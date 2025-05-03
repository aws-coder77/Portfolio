import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">
      {/* Section Title */}
      <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img src={project.image} alt={project.title} className="w-full h-20 object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description.length > 12 ? `${project.description.slice(0, 12)}...` : project.description}
              </p>
              <div className="mb-4">
                {project.tags.length > 2 ? (
                  <>
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                    <span className="inline-block text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">...</span>
                  </>
                ) : (
                  project.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                      {tag}
                    </span>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl mx-auto overflow-hidden relative max-h-[90vh] flex flex-col">
              {/* Close button */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-800 hover:bg-purple-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-gray-700"
                  aria-label="Close modal"
                >
                  <span className="text-xl sm:text-2xl font-bold">&times;</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
                <div className="w-full flex justify-center bg-gray-900 px-2 sm:px-4 pt-6">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-contain rounded-lg sm:rounded-xl shadow-xl" />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="bg-[#251f38] text-xs md:text-sm font-semibold text-purple-500 rounded-full px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-xl font-semibold text-center transition-colors"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-xl font-semibold text-center transition-colors"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

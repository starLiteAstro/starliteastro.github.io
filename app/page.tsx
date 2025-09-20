'use client'
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  return (
    <>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hao-Yen Tang
      </h1>
      <AnimatePresence>
        <motion.section
          key="about"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5">
            {`I'm a student at the University of Warwick studying Computer Science.
            I'm primarily interested in software engineering, web development and AI.
            In my free time, I like to contribute to projects, read books, and explore
            new technologies.`}
          </p>
        </motion.section>
        <motion.section
          key="skills"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
          <ul className="list-disc list-inside mb-5">
            <li>Languages: Python, Java, JavaScript, TypeScript, C/C++, SQL</li>
            <li>Frameworks: React/Next.js, Flask</li>
            <li>Tools: Git, GitHub, Node.js, Linux</li>
          </ul>
        </motion.section>
        <motion.section
          key="contact"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-4 text-xl font-semibold tracking-tighter">Contact</h2>
          <ul className="list-disc list-inside mb-5">
            <li>Phone: +44 7440 777121</li>
            <li>Email: userhata45@gmail.com</li>
            <li>Location: Cheltenham, United Kingdom</li>
          </ul>
        </motion.section>
      </AnimatePresence>
    </>
  )
}

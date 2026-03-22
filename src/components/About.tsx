import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutImage from '../assets/me.png'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Image - Left Side */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  src={aboutImage}
                  alt="Profile"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl border-2 border-primary-500/30 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div
              variants={itemVariants}
              className="flex-1 glass-dark rounded-2xl p-8 sm:p-10"
            >
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                I am a passionate Full-Stack Developer with a solid background in the latest web technologies. I am skilled at developing scalable and high-performance applications that address real-world issues.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                As a developer with expertise in both frontend and backend development, I am able to deliver seamless user experiences while developing robust and maintainable code. I am always eager to learn new technologies and take up new challenges.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                Founder and administrator of Ethio Coders, a fast-growing Telegram community
                <a
                  href="https://t.me/Ethio_Coders_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline transition-colors mx-2"
                >
                  https://t.me/Ethio_Coders_channel
                </a>
                with 4.5K+ members, where I share frontend and backend programming tools, best practices, and career guidance for students and junior developers. Strong believer in collaboration, continuous learning, and building impactful software.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Biruk Habte'

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: number

    const typeLetter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeLetter, 100)
      } else {
        // Wait 2 seconds before restarting
        setTimeout(() => {
          currentIndex = 0
          setDisplayedText('')
          typeLetter()
        }, 2000)
      }
    }

    typeLetter()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [fullText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const handleDownloadCV = () => {
    // Download the resume from public folder
    const link = document.createElement('a')
    link.href = '/Biruk_Habte_Resume_.pdf'
    link.download = 'Biruk_Habte_Resume_.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass text-neon text-sm futura-nav mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Full-Stack Developer
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl futura-display mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hi, I'm{' '}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-neon via-green-400 to-neon bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {displayedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed futura-body"
          >
            I build beautiful, functional, and scalable web applications that
            deliver exceptional user experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => {
                const projects = document.querySelector('#projects')
                projects?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleDownloadCV}
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://github.com/birukhabte"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 btn-ghost rounded-lg hover:text-neon transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 btn-ghost rounded-lg hover:text-neon transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.button
              onClick={() => {
                const contact = document.querySelector('#contact')
                contact?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="p-3 btn-ghost rounded-lg hover:text-neon transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Go to Contact section"
            >
              <FaEnvelope size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero


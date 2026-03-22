import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(`https://formspree.io/f/xgoloovo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage("Thank you for your message! I'll get back to you soon.")
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again or email me directly.'
      )
    } finally {
      setIsSubmitting(false)
      // Auto-dismiss status message after 6 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 6000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
    <section id="contact" ref={ref} className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-4 glass-dark rounded-lg p-4 hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-gray-200 group-hover:text-primary-400 transition-colors">
                        biruk.habte-ug@aau.edu.et

                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 glass-dark rounded-lg p-4"
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-gray-200">Addis Ababa, Ethiopia</p>
                    </div>
                  </motion.div>

                  <motion.a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 glass-dark rounded-lg p-4 hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-gray-200 group-hover:text-primary-400 transition-colors">
                        +251 995871152
                      </p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, href: 'https://github.com/birukhabte', label: 'GitHub' },
                    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },

                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-lg text-gray-400 hover:text-primary-400 hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your Message"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FiSend />
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center gap-3 p-4 rounded-lg ${submitStatus === 'success'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                        }`}
                    >
                      {submitStatus === 'success' ? (
                        <FiCheckCircle size={20} className="flex-shrink-0" />
                      ) : (
                        <FiAlertCircle size={20} className="flex-shrink-0" />
                      )}
                      <p className="text-sm">{statusMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact




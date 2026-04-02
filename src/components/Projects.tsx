
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import codeLearnPhoto from '../assets/codelearn.png'
import addisCampusPhoto from '../assets/addis.png'
import powerlinkPhoto from '../assets/powerlik profile.png'
import hospitalPhoto from '../assets/hospitalhome.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  category: 'all' | 'fullstack'
}

const projects: Project[] = [
  {
    id: 9,
    title: 'Hospital Management System',
    description:
      'Hospital Management System is a full-stack MERN web app for managing hospital operations. Users can schedule appointments, view medical records, and manage patient information with JWT-based authentication. Admins can manage staff, oversee patient records, and handle appointments with secure data storage. The frontend runs on React/Vite and the backend on Node/Express with MongoDB.',
    image: hospitalPhoto,
    tech: ['React', 'PostgreSQL/Supabase', 'Node.js/Express', 'Bootstrap', 'jQuery'],
    github: 'https://github.com/birukhabte/Hospital-mgmt-system.git',
    live: 'https://hospital-management-system-mklg.onrender.com/',
    category: 'fullstack'
  },
  {
    id: 1,
    title: 'Learn Coding',
    description:
      'An interactive learning platform designed to help users build coding skills through structured lessons and hands-on practice.',
    image: codeLearnPhoto,
    tech: ['Next.js', 'React', 'TypeScript', 'Firebase'],
    github: 'https://github.com/birukhabte/learn-coding.git',
    live: 'https://learn-coding-sand.vercel.app',
    category: 'fullstack',
  },
  {
    id: 4,
    title: 'AddisCampus',
    description:
      'CampusSync is a comprehensive campus community platform that helps students connect and collaborate. It includes: Lost & Found, Marketplace, AI Notes, AI Interview Practice, Real-time Chat, and User Profiles.',
    image: addisCampusPhoto,
    tech: ['React', 'Node.js/Express', 'MongoDB', 'AI content generation', 'Firebase'],
    github: 'https://github.com/birukhabte/AddisSync.git',
    live: 'https://addissync.vercel.app/',
    category: 'fullstack',
  },

  {
    id: 7,
    title: 'PowerLink Ethiopia',
    description:
      'PowerLink Ethiopia is a web-based platform designed to improve communication between citizens and power service providers in Ethiopia. The system allows users to report power outages, request electrical services, and track the status of their requests in real time, helping reduce delays and improve service transparency.',
    image: powerlinkPhoto,
    tech: ['React', 'Node.js/Express', 'Tailwind CSS', 'Supabase (PostgreSQL)'],
    github: 'https://github.com/birukhabte/Powerlink.git',
    live: 'https://powerlinkethiopiasystem.vercel.app/',
    category: 'fullstack',
  },
]



const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const toggleDescription = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
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
    <section id="projects" ref={ref} className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-8" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-dark rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary-500/20 transition-all"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/90 rounded-lg text-white hover:bg-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/90 rounded-lg text-white hover:bg-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-400 mb-4 ${
                      expandedIds.has(project.id) ? '' : 'line-clamp-3'
                    }`}
                  >
                    {project.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleDescription(project.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-400 hover:text-primary-300 glass hover:bg-white/10 border border-primary-500/20 transition-all duration-300 mb-4"
                  >
                    {expandedIds.has(project.id) ? 'Show less' : 'See description'}
                  </button>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full glass text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects




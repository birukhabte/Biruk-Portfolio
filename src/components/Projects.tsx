
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import codeLearnPhoto from '../assets/codelearn.png'
import addisCampusPhoto from '../assets/addis.png'
import powerlinkPhoto from '../assets/powerlik profile.png'
import hospitalPhoto from '../assets/hospitalhome.png'
import musicPlayerPhoto from '../assets/music-player.png'
import pharmacareLogin from '../assets/project image/login.png'
import pharmacareDashboard from '../assets/project image/dashboard.png'
import pharmacareInventory from '../assets/project image/inventory.png'
import pharmacareSales from '../assets/project image/sales.png'
import fur1 from '../assets/project image/fur1.png'
import fur2 from '../assets/project image/fur2.png'
import fur3 from '../assets/project image/fur3.png'

interface Project {
  id: number
  title: string
  description: string
  image: string | string[]
  tech: string[]
  github: string
  live: string
  category: 'all' | 'fullstack'
}

const projects: Project[] = [
  {
    id: 8,
    title: 'Flutter Music Player',
    description:
      'A mobile music player app that plays MP3 files with comprehensive music management features. The app includes standard playback controls (play, pause, skip, seek), playlist management, song sharing, lyrics search, and even music identification from background audio. It supports both light and dark themes and is available on the Google Play Store.',
    image: musicPlayerPhoto,
    tech: ['Flutter', 'Dart', 'Deezer API', 'AzLyrics/AbsoluteLyrics', 'ACRCloud', 'Hive'],
    github: 'https://github.com/birukhabte/Flutter-music-player.git',
    live: 'https://play.google.com/store/apps/details?id=com.onuifeanyi.vybeplayer',
    category: 'fullstack',
  },
  {
    id: 10,
    title: 'PharmaCare - Pharmacy Management System',
    description:
      'A full-stack web application designed to manage pharmacy operations. It handles medicine inventory, sales tracking, customer management, prescriptions, supplier management, and provides analytics through a dashboard with real-time metrics. Key features include: Medicine inventory management with batch tracking and expiry alerts, Sales and purchase order processing, Customer and supplier management, Prescription handling, Role-based access control (Head Pharmacist, Counter Staff, Inventory Manager), Dashboard with sales trends, top medicines, and KPIs, Audit logging and notifications.',
    image: [pharmacareLogin, pharmacareDashboard, pharmacareInventory, pharmacareSales],
    tech: ['Next.js 14', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Vercel', 'Render'],
    github: 'https://github.com/birukhabte/pharma_Care.git',
    live: 'https://pharmacare-one.vercel.app/',
    category: 'fullstack'
  },
  {
    id: 11,
    title: 'Home Luxury Furniture',
    description:
      'Home Luxury Furniture is an e-commerce platform for selling luxury furniture online. Customers can browse products (Arabian Majlis, sofas, TV stands), add items to their cart, and complete purchases using Chapa payment gateway. The system includes an admin panel for managing products, orders, promotions, and customer inquiries.',
    image: [fur1, fur2, fur3],
    tech: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Docker & Docker Compose'],
    github: 'https://github.com/birukhabte/home-luxury',
    live: 'https://home-luxury.vercel.app/',
    category: 'fullstack'
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
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  // Auto-rotate images for projects with multiple images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = { ...prev }
        projects.forEach((project) => {
          if (Array.isArray(project.image)) {
            const currentIndex = next[project.id] || 0
            next[project.id] = (currentIndex + 1) % project.image.length
          }
        })
        return next
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePrevImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount,
    }))
  }

  const handleNextImage = (projectId: number, imageCount: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount,
    }))
  }

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
                  {Array.isArray(project.image) ? (
                    <>
                      <img
                        src={project.image[currentImageIndex[project.id] || 0]}
                        alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Image Navigation Arrows */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePrevImage(project.id, project.image.length)
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white hover:bg-primary-500 transition-colors z-10"
                      >
                        <FiChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNextImage(project.id, project.image.length)
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white hover:bg-primary-500 transition-colors z-10"
                      >
                        <FiChevronRight size={20} />
                      </button>
                      {/* Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {project.image.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImageIndex((prev) => ({ ...prev, [project.id]: idx }))
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              (currentImageIndex[project.id] || 0) === idx
                                ? 'bg-primary-400 w-6'
                                : 'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
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




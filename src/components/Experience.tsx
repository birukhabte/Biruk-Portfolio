import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface TimelineItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

// Individual Experience Card Component
const ExperienceCard = ({ item, variants }: { item: TimelineItem, variants: any }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(prev => !prev)
  }

  return (
    <motion.div
      variants={variants}
      className="glass-dark rounded-2xl p-6 border border-gray-700/50 hover:border-primary-400 hover:bg-white/5 transition-all duration-300 h-full flex flex-col"
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-gray-200 mb-1">
          {item.title}
        </h4>
        <p className="text-primary-400 font-medium mb-1">
          {item.company}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          {item.location ? `${item.location} • ` : ''}{item.period}
        </p>
      </div>

      <ul className="space-y-2 flex-grow">
        {(isExpanded
          ? item.description
          : item.description.slice(0, 2)
        ).map((desc, idx) => (
          <li
            key={idx}
            className="text-gray-300 text-sm flex items-start gap-2"
          >
            <span className="text-primary-400 mt-1.5">▹</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {item.description.length > 2 && (
        <button
          onClick={toggleExpand}
          className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors"
        >
          {isExpanded ? (
            <><FiChevronUp size={14} /> Show less</>
          ) : (
            <><FiChevronDown size={14} /> Show more</>
          )}
        </button>
      )}

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700/50">
        {item.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const experienceItems: TimelineItem[] = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: 'Gasha Digital Technologies',
    location: 'Addis Ababa, Ethiopia',
    period: '09/2024 – 11/2024',
    description: [
      'Built scalable full-stack applications using Next.js and Node.js',
      'Implemented backend logic and database schemas using Prisma ORM',
      'Developed secure login, authentication, and role-based access systems',
      'Integrated REST APIs and handled server-side rendering (SSR)',
      'Improved application performance, maintainability, and scalability',
      'Used Git for version control and followed clean code best practices',
    ],
    skills: ['Next.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'REST API', 'Prisma ORM'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Habeshacode Software Company',
    location: '',
    period: '05/2024 – 07/2024',
    description: [
      'Developed and maintained scalable web applications using JavaScript, React, and Node.js, following clean architecture and best coding practices',
      'Built complete end-to-end solutions, implementing responsive frontend interfaces and robust backend services',
      'Designed and integrated RESTful APIs, enabling seamless communication between frontend and backend systems',
      'Managed and optimized MongoDB databases to ensure data integrity, performance, and reliability',
      'Collaborated with cross-functional teams to analyze requirements, design system features, and deliver high-quality software on schedule',
      'Improved application performance, usability, and maintainability through optimization and refactoring',
      'Participated in code reviews, followed Agile development practices, and used Git for version control and team collaboration',
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'REST API',],
  },
  {
    id: 3,
    title: 'Junior Full Stack Developer',
    company: 'Efuye Gela Tech Company',
    location: '',
    period: '10/2025 – 12/2025',
    description: [
      'Developed and maintained full-stack web applications using React, Tailwind CSS, Node.js, and Express',
      'Built responsive and intuitive user interfaces with a strong focus on usability and performance',
      'Implemented backend logic, RESTful APIs, and server-side functionality to support frontend features',
      'Worked with PostgreSQL to design, manage, and optimize application databases',
      'Used TypeScript and JavaScript to improve code reliability, maintainability, and scalability',
      'Collaborated with team members using Git for version control and followed Agile-based workflows',
      'Continuously improved technical skills through hands-on projects, remote collaboration, and self-directed learning',
    ],
    skills: ['JavaScript', 'TypeScript', 'React', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Git'],
  },
  {
    id: 4,
    title: 'Freelance Developer',
    company: 'Freelance',
    location: '',
    period: '05/2024 – Present',
    description: [
      'Designing, developing, and delivering high-quality software solutions for a variety of clients, focusing on performance, scalability, and maintainable architecture',
      'Translating business requirements into effective technical implementations, building robust backend systems, optimized APIs and databases, and modern front-end interfaces',
      'Ensuring code quality through best practices, testing, and reviews, while introducing automation and process improvements to accelerate delivery and reliability',
      'Combining hands-on development with strategic planning to help clients achieve their goals through tailored, user-focused software products',
    ],
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Phyton', 'Django', 'Laravel', 'MongoDb', 'Firebase', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Git'],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Experience Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <FiBriefcase className="text-primary-400 text-2xl" />
            <h3 className="text-2xl font-semibold text-gray-200">My Experience</h3>
          </motion.div>

          {/* Experience Grid - Parallel Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {experienceItems.map((item) => (
              <ExperienceCard 
                key={item.id} 
                item={item} 
                variants={itemVariants} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience


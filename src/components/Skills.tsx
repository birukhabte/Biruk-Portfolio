import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaTools,
  FaJs,
  FaPython,
  FaDocker,
  FaServer,
  FaPhp,
  FaLaravel,
  FaCloud,
  FaGlobe,
} from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss, SiMysql, SiFirebase, SiExpress, SiNestjs, SiDjango, SiNextdotjs, SiPrisma, SiSupabase, SiGithub, SiVercel, SiNetlify } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  category: 'frontend' | 'backend' | 'tools' | 'database' | 'cloud' | 'all'
  color: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: <FaReact />, category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend', color: '#000000' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend', color: '#06B6D4' },
  { name: 'JavaScript', icon: <FaJs />, category: 'frontend', color: '#F7DF1E' },

  // Backend
  { name: 'Node.js', icon: <FaNode />, category: 'backend', color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, category: 'backend', color: '#000000' },
  { name: 'NestJS', icon: <SiNestjs />, category: 'backend', color: '#E0234E' },
  { name: 'PHP', icon: <FaPhp />, category: 'backend', color: '#777BB4' },
  { name: 'Laravel', icon: <FaLaravel />, category: 'backend', color: '#FF2D20' },
  { name: 'Python', icon: <FaPython />, category: 'backend', color: '#3776AB' },
  { name: 'Django', icon: <SiDjango />, category: 'backend', color: '#092E20' },

  // Database
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database', color: '#4169E1' },
  { name: 'MySQL', icon: <SiMysql />, category: 'database', color: '#4479A1' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'database', color: '#47A248' },

  // Tools & Version Control
  { name: 'Git', icon: <FaTools />, category: 'tools', color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, category: 'tools', color: '#181717' },
  { name: 'Docker', icon: <FaDocker />, category: 'tools', color: '#2496ED' },
  { name: 'Prisma', icon: <SiPrisma />, category: 'tools', color: '#2D3748' },
  { name: 'Supabase', icon: <SiSupabase />, category: 'tools', color: '#3ECF8E' },

  // Cloud & Hosting
  { name: 'Vercel', icon: <SiVercel />, category: 'cloud', color: '#000000' },
  { name: 'Netlify', icon: <SiNetlify />, category: 'cloud', color: '#00C7B7' },
  { name: 'Firebase Hosting', icon: <SiFirebase />, category: 'cloud', color: '#FFCA28' },
]

const categories = [
  { id: 'all', name: 'All', icon: <FaGlobe /> },
  { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
  { id: 'backend', name: 'Backend', icon: <FaServer /> },
  { id: 'database', name: 'Database', icon: <FaDatabase /> },
  { id: 'cloud', name: 'Cloud & Hosting', icon: <FaCloud /> },
  { id: 'tools', name: 'Tools & Version Control', icon: <FaTools /> },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id)
    setShowAll(false)
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
    <section id="skills" ref={ref} className="py-20 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {skills
                .filter((skill) => activeCategory === 'all' || skill.category === activeCategory)
                .slice(0, activeCategory === 'all' && !showAll ? 8 : undefined)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.1,
                      },
                    }}
                    className="glass-dark p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="text-4xl transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* Show more / less button — only on All tab */}
          {activeCategory === 'all' && skills.length > 8 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-primary-400 hover:text-primary-300 glass hover:bg-white/10 border border-primary-500/20 transition-all duration-300"
              >
                {showAll ? (
                  <><FiChevronUp size={16} /> Show less</>
                ) : (
                  <><FiChevronDown size={16} /> Show more</>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills



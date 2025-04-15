import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Brain,
  Rocket,
  Shield,
  Cloud,
  FileText,
  ChevronRight,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Star,
  Users,
  Terminal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const skills = [
    { name: 'Web Development', icon: Code, color: 'from-blue-500 to-blue-700' },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-purple-500 to-purple-700',
    },
    {
      name: 'Cloud Computing',
      icon: Cloud,
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      name: 'Digital Marketing',
      icon: Brain,
      color: 'from-pink-500 to-pink-700',
    },
    {
      name: 'System Architecture',
      icon: Terminal,
      color: 'from-green-500 to-green-700',
    },
    {
      name: 'Team Leadership',
      icon: Users,
      color: 'from-yellow-500 to-yellow-700',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background for entire page */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-sm font-medium">
                    Available for opportunities
                  </span>
                </motion.div>

                <h1 className="text-6xl lg:text-7xl font-bold mb-6">
                  <span className="block">Sydwell</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Lebeloane
                  </span>
                </h1>

                <div className="space-y-4">
                  <p className="text-2xl text-blue-200">
                    Software Engineer & Tech Innovator
                  </p>
                  <p className="text-lg text-gray-300 max-w-2xl">
                    Transforming complex challenges into elegant solutions.
                    Specializing in scalable web applications, cybersecurity,
                    and digital innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://alphac137.github.io/Coming-soon-page/"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV <Download />
                </motion.a>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '20+', label: 'Projects Completed' },
                  { value: '90%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-sm text-blue-200">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-[600px] h-[600px]">
                {/* Animated Circles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '2px solid rgba(255,255,255,0.1)',
                      scale: 1 - i * 0.1,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1 - i * 0.1, 1.1 - i * 0.1, 1 - i * 0.1],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ))}

                {/* Profile Image Container */}
                <motion.div
                  className="absolute inset-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  style={{ translateY: -parallaxOffset }}
                >
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQGF7YZUGbBkkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687760479233?e=1749686400&v=beta&t=9YpDGpXVDdX9btnyhMEhhCqGdM56jhn8kFKOSZXt0mk"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                    {/* Overlay Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </div>
                </motion.div>

                {/* Floating Icons */}
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={`absolute p-4 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                    style={{
                      top: `${Math.sin(index * (Math.PI / 3)) * 40 + 50}%`,
                      left: `${Math.cos(index * (Math.PI / 3)) * 40 + 50}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </header>

      {/* Experience Section */}
      <section className="relative py-20 z-10" id="experience">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Journey
          </motion.h2>

          {/* Floating circles in the background */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                zIndex: -1,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: 'Control Room Operator',
                company: 'STALLION SECURITY',
                type: 'Full-time',
                period: 'Jul 2024 - Present',
                location: 'City of Johannesburg, Gauteng, South Africa',
                duties: [
                  'Monitor Security Systems',
                  'Respond to Alerts',
                  'Dispatch Security Personnel',
                  'Incident Documentation',
                  'Communication Coordination',
                  'System Maintenance',
                ],
              },
              {
                title: 'Salesperson',
                company: 'The Unlimited',
                type: 'Full-time',
                period: 'Sep 2022 - Jun 2023',
                location: 'Pretoria, Gauteng, South Africa',
                duties: [
                  'Direct Sales',
                  'Marketing Strategy Implementation',
                  'Client Relationship Management',
                  'Sales Target Achievement',
                ],
              },
              {
                title: 'Rica Agent',
                company: 'P2 Mobile Technologies Limited',
                type: 'Internship',
                period: 'Jul 2021 - Oct 2022',
                location: 'Gauteng, South Africa',
                duties: [
                  'Customer Registration',
                  'Documentation Processing',
                  'Compliance Verification',
                ],
              },
              {
                title: 'Educator Assistant',
                company: 'Sasolia Primary School',
                type: 'Contract',
                period: 'Nov 2021 - Aug 2022',
                location: 'Kinross, Mpumalanga, South Africa',
                duties: [
                  'Class Management',
                  'Administrative Support',
                  'School Fundraising',
                  'Sport Management',
                  'Scholar Patrol',
                  'Choral director',
                  'Library Management',
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 border-l-2 border-blue-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0.5)',
                      '0 0 0 10px rgba(59, 130, 246, 0)',
                      '0 0 0 0 rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                />
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    scale: 1.02,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="text-blue-500" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-blue-600">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.duties.map((duty, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <ChevronRight size={16} className="text-blue-500" />
                        {duty}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 z-10" id="education">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education & Certifications
          </motion.h2>

          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                zIndex: -1,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          <div className="max-w-4xl mx-auto grid gap-8">
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <GraduationCap size={32} className="text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    High School Diploma
                  </h3>
                  <p className="text-blue-600">Thistle Groove Combine School</p>
                  <p className="text-gray-600">2017 - 2020</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <Award size={32} className="text-purple-600" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Digital Skills: Digital Marketing
                  </h3>
                  <p className="text-purple-600">CPD Certification</p>
                  <ul className="mt-4 space-y-2">
                    {[
                      'Introduction to digital marketing',
                      'Banner advertising',
                      'Pay per click advertising',
                      'Search engine optimisation (SEO)',
                      'Integrated digital marketing',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        >
                          <Star size={16} className="text-yellow-500" />
                        </motion.div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <FileText size={32} className="text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Power Learn Project Scholarship
                  </h3>
                  <p className="text-blue-600">
                    Full-stack Development Program
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      'Web Development',
                      'Python',
                      'Database Design & Programming with SQL',
                      'Software Engineering Essentials',
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        >
                          <Star size={16} className="text-yellow-500" />
                        </motion.div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 z-10" id="skills">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>

          {/* Animated Circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-white/10"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                top: '50%',
                left: '50%',
                marginLeft: `-${150 + i * 50}px`,
                marginTop: `-${150 + i * 50}px`,
                zIndex: -1,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }}
            />
          ))}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Web Development',
                icon: Code,
                skills: [
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'Basic React',
                  'Responsive Design',
                  'Git & GitHub',
                ],
                color: 'from-blue-500 to-blue-700',
              },
              {
                title: 'Cybersecurity',
                icon: Shield,
                skills: [
                  'Data Encryption',
                  'Automation and Scripting',
                  'Security Threats and Vulnerabilities',
                  'VPN Configuration',
                ],
                color: 'from-purple-500 to-purple-700',
              },
              {
                title: 'Cloud Computing',
                icon: Cloud,
                skills: [
                  'AWS/Azure Basics',
                  'Docker',
                  'CI/CD Pipelines',
                  'Cloud Security',
                ],
                color: 'from-indigo-500 to-indigo-700',
              },
              {
                title: 'Digital Marketing',
                icon: Brain,
                skills: [
                  'SEO',
                  'Content Strategy',
                  'Social Media',
                  'Analytics',
                ],
                color: 'from-pink-500 to-pink-700',
              },
              {
                title: 'System Architecture',
                icon: Terminal,
                skills: [
                  'System Design',
                  'API Development',
                  'Database Management',
                  'Scalability',
                ],
                color: 'from-green-500 to-green-700',
              },
              {
                title: 'Soft Skills',
                icon: Users,
                skills: [
                  'Team Leadership',
                  'Problem Solving',
                  'Communication',
                  'Time Management',
                ],
                color: 'from-yellow-500 to-yellow-700',
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
              >
                <motion.div
                  className={`bg-gradient-to-r ${category.color} p-6 text-white relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated background patterns */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: 'mirror',
                    }}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <category.icon size={32} className="mb-4" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </motion.div>
                </motion.div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 0, 180, 180, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: i * 0.5,
                          }}
                        >
                          <ChevronRight size={16} className="text-blue-500" />
                        </motion.div>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 z-10" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Let's Connect
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Get in Touch
                </h3>
                <p className="text-blue-200 mb-6">
                  Looking for a dedicated and adaptable professional? Let's
                  create transformative solutions together.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    text: 'alphasydwell93@gmail.com',
                    href: 'mailto:alphasydwell93@gmail.com',
                  },
                  { icon: Phone, text: '072 766 9825', href: 'tel:0727669825' },
                  {
                    icon: MapPin,
                    text: 'City of Johannesburg, Gauteng, South Africa',
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white"
                  >
                    <contact.icon size={24} className="text-blue-300" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Github,
                    text: 'GitHub',
                    link: 'https://github.com/alphac137',
                  },
                  {
                    icon: Linkedin,
                    text: 'LinkedIn',
                    link: 'https://za.linkedin.com/in/alpha-sydwell-lebeloane',
                  },
                  {
                    icon: Download,
                    text: 'Download CV',
                    link: 'https://alphac137.github.io/Coming-soon-page/',
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
                  >
                    <link.icon
                      size={24}
                      className="group-hover:text-blue-300 transition-colors"
                    />
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-transparent text-white py-12 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.p
              className="text-xl font-bold italic mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              "Build what they need. Protect what they don't understand." —
              Alpha 🔥
            </motion.p>
            <p className="text-gray-400">
              © 2024 Sydwell Lebeloane. All rights reserved.
            </p>
          </div>
        </div>

        {/* Animated footer particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              bottom: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              zIndex: -1,
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </footer>
    </div>
  );
}

export default App;

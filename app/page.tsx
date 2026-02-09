'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaMicrochip, FaPython, FaWifi, FaTools, FaCog, FaChartLine, FaProjectDiagram, FaDraftingCompass, FaLayerGroup, FaTrophy, FaRocket, FaRobot, FaUsers, FaHandshake, FaCodeBranch, FaFileAlt, FaMapMarkerAlt, FaFlask, FaTint, FaEye, FaThermometerHalf, FaCloud, FaStar, FaCheckCircle, FaBuilding, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { SiC, SiCplusplus, SiDart } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import ParticleField from '@/components/3d/ParticleField';
import FloatingChip from '@/components/3d/FloatingChip';
import WaveBackground from '@/components/3d/WaveBackground';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Activities', 'Contact'];

  return (
    <main className="relative min-h-screen text-black bg-[#FAFAFA] font-sans selection:bg-black selection:text-white">
      <WaveBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/10 bg-white/80 font-mono">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-xl font-bold tracking-tighter uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Irfan Fathan M
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-sm uppercase tracking-wide font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all hover:bg-black hover:text-white px-2 py-1"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black overflow-hidden flex flex-col items-center justify-center gap-8 shadow-2xl"
              style={{ top: '60px' }} // Approx navbar height
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-black uppercase tracking-widest hover:text-gray-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ParticleField />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none font-mono">
              IRFAN FATHAN M
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 uppercase tracking-widest border-l-4 border-black pl-4 font-mono">
              Electronics & Communication Engineer <br />
              <span className="text-black font-bold">Embedded Systems | IoT | Robotics</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed font-sans">
              Designing innovative hardware solutions through precise engineering.
              Specializing in <span className="font-bold border-b border-black font-mono">ESP32</span>, <span className="font-bold border-b border-black font-mono">Arduino</span>, and advanced sensor integration.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start font-mono">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-black text-white rounded-none border border-black font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-black rounded-none border border-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-16 border-b-2 border-black inline-block pb-2 font-mono"
          >
            01. About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4"></div>
                <div className="relative bg-white border-2 border-black p-4">
                  <FloatingChip />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide font-mono">Building the Future with Hardware & Software</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-justify font-sans">
                Pursuing <strong>B.Tech in Electronics and Communication Engineering</strong> at <strong>Eranad Knowledge City Technical Campus</strong>.
                My focus is on transforming valid technical theory into functional reality.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify font-sans">
                Core interests: <strong className="font-mono text-sm">Embedded Systems, Robotics, IoT, Automation</strong>.
              </p>

              <div className="bg-white p-6 border-l-4 border-black shadow-sm mb-8">
                <h4 className="flex items-center gap-2 font-bold mb-2 uppercase text-sm tracking-wider font-mono">
                  <FaStar /> Career Objective
                </h4>
                <p className="text-gray-600 italic font-sans">
                  &quot;To leverage expertise in embedded systems and IoT to build reliable, innovative hardware solutions.&quot;
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaProjectDiagram, value: '5+', label: 'Projects' },
                  { icon: FaTrophy, value: '3+', label: 'Certifications' },
                  { icon: FaCode, value: '4+', label: 'Languages' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-mono"
                  >
                    <stat.icon className="text-2xl mb-2 mx-auto" />
                    <h4 className="text-3xl font-black">{stat.value}</h4>
                    <p className="text-xs uppercase font-bold tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-4 border-b-2 border-black inline-block pb-2 font-mono"
          >
            02. Technical Skills
          </motion.h2>
          <p className="text-gray-600 mb-16 max-w-2xl font-sans">Tools and technologies for building robust embedded systems.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Programming Languages',
                icon: FaCode,
                skills: [
                  { name: 'C', icon: SiC },
                  { name: 'C++', icon: SiCplusplus },
                  { name: 'Python', icon: FaPython },
                  { name: 'Dart', icon: SiDart }
                ]
              },
              {
                title: 'Embedded Tools',
                icon: FaMicrochip,
                skills: [
                  { name: 'Arduino IDE', icon: FaTools },
                  { name: 'PlatformIO', icon: FaCog },
                  { name: 'STM32CubeIDE', icon: FaMicrochip }
                ]
              },
              {
                title: 'Hardware Platforms',
                icon: FaMicrochip,
                skills: [
                  { name: 'ESP32', icon: FaWifi },
                  { name: 'Arduino UNO', icon: FaMicrochip },
                  { name: '8051', icon: FaMicrochip }
                ]
              },
              {
                title: 'Software & Simulation',
                icon: FaProjectDiagram,
                skills: [
                  { name: 'MATLAB', icon: FaChartLine },
                  { name: 'Proteus', icon: FaProjectDiagram },
                  { name: 'Altium 365', icon: FaDraftingCompass },
                  { name: 'KiCad', icon: FaLayerGroup }
                ]
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/10">
                  <category.icon className="text-3xl" />
                  <h3 className="text-xl font-bold uppercase tracking-wider font-mono">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 border border-black px-4 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default font-mono"
                    >
                      <skill.icon className="text-lg" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 bg-[#F0F0F0]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-16 border-b-2 border-black inline-block pb-2 font-mono"
          >
            03. Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="relative border-l-2 border-black pl-8"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black rounded-none rotate-45" />
            <div className="bg-white border border-black p-8 shadow-sm">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black uppercase font-mono">Robotics and IoT Intern</h3>
                  <h4 className="flex items-center gap-2 text-lg font-medium text-gray-700 mt-1 font-mono">
                    <FaBuilding /> Innoknowvex, Bangalore
                  </h4>
                </div>
                <span className="flex items-center gap-2 bg-black text-white px-4 py-2 font-bold text-sm font-mono">
                  <FaCalendarAlt /> 2024
                </span>
              </div>
              <ul className="space-y-4">
                {[
                  'Designed and developed embedded systems using ESP32 and Arduino platforms for IoT applications',
                  'Integrated multiple sensors including pH, TDS, turbidity, and temperature sensors for real-time data acquisition',
                  'Developed PCB prototypes using Altium 365 and KiCad for production-ready hardware solutions',
                  'Implemented IoT connectivity using Blynk and ThingSpeak platforms for remote monitoring and control',
                  'Performed system troubleshooting and debugging to ensure reliable operation in field conditions',
                  'Collaborated with cross-functional teams to deliver end-to-end embedded solutions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 font-sans">
                    <span className="mt-1.5 w-2 h-2 bg-black flex-shrink-0 rotate-45"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-4 border-b-2 border-black inline-block pb-2 font-mono"
          >
            04. Projects
          </motion.h2>
          <p className="text-gray-600 mb-16 max-w-2xl font-sans">Hardware & Software Integration.</p>

          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2500}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black uppercase font-mono">AQUA Intel</h3>
                <span className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-wider font-mono">
                  Featured
                </span>
              </div>
              <p className="text-xl font-bold mb-4 border-b border-gray-200 pb-2 font-mono">Smart Water Quality Monitoring System</p>
              <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl font-sans">
                An ESP32-based IoT solution for real-time water quality monitoring using multiple sensors.
                The system classifies water into safe, abnormal, or dangerous categories based on pH, TDS,
                turbidity, and temperature readings, with live data visualization through Blynk platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { name: 'ESP32', icon: FaWifi },
                  { name: 'pH Sensor', icon: FaFlask },
                  { name: 'TDS Sensor', icon: FaTint },
                  { name: 'Turbidity', icon: FaEye },
                  { name: 'DS18B20', icon: FaThermometerHalf },
                  { name: 'Blynk IoT', icon: FaCloud }
                ].map((tech, i) => (
                  <span key={i} className="flex items-center gap-2 border border-black px-3 py-1 text-sm font-bold hover:bg-black hover:text-white transition-colors font-mono">
                    <tech.icon /> {tech.name}
                  </span>
                ))}
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
                <h4 className="flex items-center gap-2 font-bold mb-4 uppercase text-sm">
                  <FaStar /> Key Features
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Real-time multi-parameter water quality monitoring',
                    'Intelligent water classification algorithm',
                    'Cloud-based data logging and visualization',
                    'Mobile app integration for remote access'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-mono">
                      <FaCheckCircle className="text-black" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a
                href="https://github.com/irfanfathan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 font-bold uppercase underline underline-offset-4 decoration-2 decoration-black font-mono"
              >
                <FaGithub /> View on GitHub
              </motion.a>
            </motion.div>
          </Tilt>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-16 border-b-2 border-black inline-block pb-2 font-mono"
          >
            05. Certifications
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaTrophy,
                title: 'WorldSkills India',
                subtitle: 'Mobile App Development',
                description: 'State Level Finalist',
                year: '2024'
              },
              {
                icon: FaRocket,
                title: 'NASA Space Apps',
                subtitle: 'Global Hackathon',
                description: 'Global Participant',
                year: '2024'
              },
              {
                icon: FaRobot,
                title: 'Robotics Workshop',
                subtitle: 'Eight Plane',
                description: 'Advanced Robotics Training',
                year: '2023'
              }
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-black p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <cert.icon className="text-4xl mx-auto mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 uppercase">{cert.title}</h3>
                <p className="font-semibold mb-2 text-gray-800">{cert.subtitle}</p>
                <p className="text-gray-600 mb-6 text-sm">{cert.description}</p>
                <span className="inline-block bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Activities Section */}
      <section id="activities" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-16 border-b-2 border-black inline-block pb-2 font-mono"
          >
            06. Activities
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                title: 'IEDC Summit 2023',
                location: 'College of Engineering Trivandrum',
                date: '12 October 2023',
                description: 'Participated in IEDC Submit 2023, engaging with fellow innovators and industry leaders.',
                link: 'https://drive.google.com/file/d/1Cx-54yd4pVRGY3p5IaJYtJ5g-FrTGAne/view',
                linkText: 'View Certificate'
              },
              {
                title: 'NASA Space Apps Challenge',
                location: 'Global Hackathon',
                date: '2023, 2024, 2025',
                description: 'Collaborated on innovative problem-solving challenges in the annual NASA Space Apps Global Hackathon.',
                link: 'https://drive.google.com/file/d/11A6B-WlbObFjh_8kpF5nzszmuDmNXE0z/view',
                linkText: 'View Proof'
              },
              {
                title: 'IEEE YES 2025',
                location: 'NIT Calicut',
                date: '2025',
                description: 'Attended the IEEE Young Engineers Summit (YES) 2025, organized by IEEE Kerala Section.',
                link: 'https://drive.google.com/file/d/12JkNxeM5E4w3ufQDOkpiXvUIei8CNM3I/view',
                linkText: 'View Certificate'
              },
              {
                title: 'Malabar College Techfest',
                location: 'Malabar College',
                date: 'Annual',
                description: 'Actively participated in the CEO Pitch idea pitching competition during the annual tech fest.',
                link: null,
                linkText: null
              }
            ].map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 items-start border-l-2 border-black pl-6 hover:pl-8 transition-all"
              >
                <div className="md:w-1/4">
                  <span className="block font-mono text-sm font-bold text-gray-500 mb-1">{activity.date}</span>
                  <h3 className="font-bold text-lg font-mono uppercase">{activity.title}</h3>
                  <span className="text-sm font-medium text-gray-600 font-mono">{activity.location}</span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-3 font-sans max-w-2xl">{activity.description}</p>
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase underline underline-offset-4 decoration-2 decoration-black hover:bg-black hover:text-white px-1 -ml-1 transition-colors font-mono"
                    >
                      <FaFileAlt /> {activity.linkText}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="relative py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-16 border-b-2 border-black inline-block pb-2 font-mono"
          >
            07. Leadership
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white border border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <FaUsers className="text-5xl flex-shrink-0 border-2 border-black p-2 rounded-full" />
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase font-mono">Team Member - Motridox Robotics</h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-sans">
                  Active contributor to a collaborative robotics team focused on innovation and technical excellence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: FaHandshake, label: 'Robotics Collaboration' },
                    { icon: FaCodeBranch, label: 'Hackathon Participation' },
                    { icon: FaFileAlt, label: 'Technical Documentation' },
                    { icon: FaProjectDiagram, label: 'Team Coordination' }
                  ].map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border border-gray-200 p-3 hover:bg-black hover:text-white transition-colors font-mono"
                    >
                      <activity.icon className="text-lg" />
                      <span className="font-bold text-sm uppercase">{activity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase mb-4 border-b-2 border-white inline-block pb-2 font-mono"
          >
            08. Get In Touch
          </motion.h2>
          <p className="text-gray-400 mb-16 max-w-xl font-sans">Let&apos;s collaborate on innovative projects.</p>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 uppercase">Contact Information</h3>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-2xl mt-1" />
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-mono">Email</h4>
                    <a href="mailto:irfanfathan.m@gmail.com" className="text-xl font-bold hover:underline font-mono">
                      irfanfathan.m@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-2xl mt-1" />
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-mono">Location</h4>
                    <p className="text-xl font-bold font-mono">Manjeri, Kerala, India</p>
                  </div>
                </div>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">Socials</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/irfanfathan', label: 'LinkedIn' },
                  { icon: FaGithub, href: 'https://github.com/irfanfathan', label: 'GitHub' },
                  { icon: FaEnvelope, href: 'mailto:irfanfathan.m@gmail.com', label: 'Email' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: '#ffffff', color: '#000000' }}
                    className="w-14 h-14 flex items-center justify-center border border-white/20 text-2xl transition-all"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#121212] border border-white/10 p-8"
            >
              <form className="space-y-6 font-mono">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="YOUR.EMAIL@EXAMPLE.COM"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="YOUR MESSAGE..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-white/10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-2 font-mono text-sm">&copy; 2026 Irfan Fathan M. All rights reserved.</p>
          <p className="text-white text-xs uppercase tracking-widest">Built with passion for embedded systems and IoT</p>
        </div>
      </footer>
    </main>
  );
}

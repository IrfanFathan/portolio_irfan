'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaMicrochip, FaPython, FaWifi, FaTools, FaCog, FaChartLine, FaProjectDiagram, FaDraftingCompass, FaLayerGroup, FaTrophy, FaRocket, FaRobot, FaUsers, FaHandshake, FaCodeBranch, FaFileAlt, FaMapMarkerAlt, FaFlask, FaTint, FaEye, FaThermometerHalf, FaCloud, FaStar, FaCheckCircle, FaBuilding, FaCalendarAlt, FaMobileAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiDart } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import ParticleField from '@/components/3d/ParticleField';
import FloatingChip from '@/components/3d/FloatingChip';
import WaveBackground from '@/components/3d/WaveBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <WaveBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Irfan Fathan M
          </motion.h1>
          <div className="hidden md:flex gap-6">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text-muted hover:text-cyan transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Irfan Fathan M</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-muted mb-8">
              Electronics and Communication Engineering Student | Embedded Systems & IoT Enthusiast
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mb-12 leading-relaxed">
              Passionate about designing innovative hardware solutions through embedded systems, microcontrollers, and IoT technologies.
              Experienced in developing robust prototypes using ESP32, Arduino, and advanced sensor integration for real-world applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan to-green text-primary rounded-lg font-semibold flex items-center gap-2"
              >
                <FaCode /> View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass text-cyan rounded-lg font-semibold flex items-center gap-2 border border-cyan"
              >
                <FaEnvelope /> Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <FloatingChip />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-green mb-6">Building the Future with Hardware & Software</h3>
              <p className="text-text-muted mb-4 leading-relaxed">
                I am currently pursuing my <strong>B.Tech in Electronics and Communication Engineering</strong> at
                <strong> Eranad Knowledge City Technical Campus</strong>, where I've developed a strong foundation in
                embedded systems design, digital electronics, and communication technologies.
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                My core interests lie in <strong>embedded systems, robotics, IoT, and automation</strong>. I thrive on
                transforming complex technical challenges into elegant, functional solutions through hands-on prototyping
                and innovative problem-solving.
              </p>
              <div className="glass p-6 rounded-lg border-l-4 border-cyan mb-6">
                <h4 className="flex items-center gap-2 text-cyan font-semibold mb-3">
                  <FaStar /> Career Objective
                </h4>
                <p className="text-text-muted leading-relaxed">
                  To leverage my expertise in embedded systems and IoT to build reliable, innovative hardware solutions
                  that solve real-world problems. I aim to contribute to cutting-edge projects in robotics and automation.
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
                    className="glass p-4 rounded-lg text-center"
                  >
                    <stat.icon className="text-3xl text-cyan mx-auto mb-2" />
                    <h4 className="text-2xl font-bold text-green">{stat.value}</h4>
                    <p className="text-sm text-text-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Technical Skills
          </motion.h2>
          <p className="text-center text-text-muted mb-16">My toolkit for building innovative embedded systems and IoT solutions</p>

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
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-card-border">
                  <category.icon className="text-3xl text-cyan" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
                      className="flex items-center gap-2 bg-green/10 px-4 py-2 rounded-lg text-sm font-medium cursor-default"
                    >
                      <skill.icon className="text-lg" />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Professional Experience
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="relative pl-8 border-l-2 border-cyan"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan rounded-full shadow-lg shadow-cyan/50" />
            <div className="glass p-8 rounded-xl">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green mb-2">Robotics and IoT Intern</h3>
                  <h4 className="flex items-center gap-2 text-lg text-text-muted">
                    <FaBuilding /> Innoknowvex, Bangalore
                  </h4>
                </div>
                <span className="flex items-center gap-2 bg-cyan/10 text-cyan px-4 py-2 rounded-lg">
                  <FaCalendarAlt /> 2024
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  'Designed and developed embedded systems using ESP32 and Arduino platforms for IoT applications',
                  'Integrated multiple sensors including pH, TDS, turbidity, and temperature sensors for real-time data acquisition',
                  'Developed PCB prototypes using Altium 365 and KiCad for production-ready hardware solutions',
                  'Implemented IoT connectivity using Blynk and ThingSpeak platforms for remote monitoring and control',
                  'Performed system troubleshooting and debugging to ensure reliable operation in field conditions',
                  'Collaborated with cross-functional teams to deliver end-to-end embedded solutions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted">
                    <FaCheckCircle className="text-green mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Featured Projects
          </motion.h2>
          <p className="text-center text-text-muted mb-16">Innovative solutions combining hardware and software</p>

          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold">AQUA Intel</h3>
                <span className="bg-gradient-to-r from-cyan to-green text-primary px-4 py-1 rounded-lg text-sm font-bold">
                  FEATURED
                </span>
              </div>
              <p className="text-xl text-green mb-4 font-semibold">Smart Water Quality Monitoring System</p>
              <p className="text-text-muted mb-6 leading-relaxed">
                An ESP32-based IoT solution for real-time water quality monitoring using multiple sensors.
                The system classifies water into safe, abnormal, or dangerous categories based on pH, TDS,
                turbidity, and temperature readings, with live data visualization through Blynk platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { name: 'ESP32', icon: FaWifi },
                  { name: 'pH Sensor', icon: FaFlask },
                  { name: 'TDS Sensor', icon: FaTint },
                  { name: 'Turbidity', icon: FaEye },
                  { name: 'DS18B20', icon: FaThermometerHalf },
                  { name: 'Blynk IoT', icon: FaCloud }
                ].map((tech, i) => (
                  <span key={i} className="flex items-center gap-2 bg-green/10 text-green px-3 py-1 rounded-lg text-sm">
                    <tech.icon /> {tech.name}
                  </span>
                ))}
              </div>
              <div className="bg-cyan/5 p-6 rounded-lg mb-6">
                <h4 className="flex items-center gap-2 text-cyan font-semibold mb-3">
                  <FaStar /> Key Features
                </h4>
                <ul className="space-y-2">
                  {[
                    'Real-time multi-parameter water quality monitoring',
                    'Intelligent water classification algorithm',
                    'Cloud-based data logging and visualization',
                    'Mobile app integration for remote access'
                  ].map((feature, i) => (
                    <li key={i} className="text-text-muted pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-green">
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
                className="inline-flex items-center gap-2 text-cyan font-semibold"
              >
                <FaGithub /> View on GitHub
              </motion.a>
            </motion.div>
          </Tilt>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Certifications & Achievements
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
                title: 'NASA Space Apps Challenge',
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
                className="glass p-8 rounded-xl text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <cert.icon className="text-6xl text-cyan mx-auto mb-6" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-green font-semibold mb-2">{cert.subtitle}</p>
                <p className="text-text-muted mb-4">{cert.description}</p>
                <span className="inline-block bg-cyan/10 text-cyan px-4 py-1 rounded-lg text-sm font-semibold">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Leadership & Activities
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-xl"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <FaUsers className="text-6xl text-cyan flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-green mb-4">Team Member - Motridox Robotics</h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Active contributor to a collaborative robotics team focused on innovation and technical excellence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: FaHandshake, label: 'Robotics Collaboration' },
                    { icon: FaCodeBranch, label: 'Hackathon Participation' },
                    { icon: FaFileAlt, label: 'Technical Documentation' },
                    { icon: FaProjectDiagram, label: 'Team Coordination' }
                  ].map((activity, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
                      className="flex items-center gap-3 bg-green/10 p-3 rounded-lg"
                    >
                      <activity.icon className="text-cyan text-xl" />
                      <span className="font-medium">{activity.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="text-center text-text-muted mb-16">Let's collaborate on innovative projects</p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-green mb-8">Contact Information</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-2xl text-cyan mt-1" />
                  <div>
                    <h4 className="text-text-muted text-sm mb-1">Email</h4>
                    <a href="mailto:irfanfathan@example.com" className="text-cyan hover:text-green transition-colors">
                      irfanfathan@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-2xl text-cyan mt-1" />
                  <div>
                    <h4 className="text-text-muted text-sm mb-1">Location</h4>
                    <p>Manjeri, Kerala, India</p>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/irfanfathan', label: 'LinkedIn' },
                  { icon: FaGithub, href: 'https://github.com/irfanfathan', label: 'GitHub' },
                  { icon: FaEnvelope, href: 'mailto:irfanfathan@example.com', label: 'Email' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: 'var(--color-accent-cyan)', color: 'var(--color-primary-bg)' }}
                    className="glass w-14 h-14 flex items-center justify-center rounded-lg text-2xl text-cyan border border-card-border"
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
              className="glass p-8 rounded-xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-primary/50 border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-primary/50 border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-primary/50 border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan to-green text-primary py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <FaEnvelope /> Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-text-muted mb-2">&copy; 2026 Irfan Fathan M. All rights reserved.</p>
          <p className="text-cyan text-sm">Built with passion for embedded systems and IoT</p>
        </div>
      </footer>
    </main>
  );
}

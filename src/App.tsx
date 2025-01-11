import React from 'react';
import { Terminal, Code2, BookOpen, Github, Linkedin, Mail, ExternalLink, Server, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="relative z-10 text-center px-4">
          <img 
            src="YOUR_IMAGE_URL"
            alt="Mayank Rayabharapu"
            className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-4">Mayank Rayabharapu</h1>
          <p className="text-xl text-cyan-400 mb-8">Cybersecurity Professional</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Mayank105" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mayankrayabharapu" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mayankrayabharapu@gmail.com" className="p-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate cybersecurity enthusiast and a student, graduating in May 2025, with a strong foundation in security concepts and a curiosity for solving complex challenges. With a Security+ certification under my belt and ongoing exploration of advanced tools and frameworks like Splunk, I aim to stay at the forefront of the ever-evolving cybersecurity landscape.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            My goal is to leverage my technical skills and dedication to make systems and networks safer in today's digital world. Explore my portfolio to see projects, certifications, and achievements that showcase my journey in cybersecurity!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-gray-900 rounded-lg">
              <Terminal className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
              <p className="text-gray-400">Experienced in identifying and exploiting security vulnerabilities</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <Lock className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Analysis</h3>
              <p className="text-gray-400">Skilled in analyzing systems for potential security threats</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Coding</h3>
              <p className="text-gray-400">Developing secure applications with security best practices</p>
            </div>
             <div   className="p-6 bg-gray-900 rounded-lg">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Governance, Risk, and Compliance (GRC)</h3>
              <p className="text-gray-400">Well-versed in integrating risk management processes with business strategies, ensuring organizational compliance with security standards, and developing risk mitigation plans. Focused on aligning security goals with regulatory and industry requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <Server className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Threat Intelligence Dashboard with Splunk (SIEM):</h3>
                <p className="text-gray-400 mb-4">This project involves utilizing Splunk's capabilities to aggregate, analyze, and visualize security data for improved threat detection and response. In this project, you create dashboards using the Eventgen app to simulate real-time event data, enhancing the ability to monitor network and system activities. Additionally, you configure alerts to notify security teams about potential threats, ensuring timely intervention. This setup strengthens the organization's overall security posture by streamlining threat intelligence management within Splunk.</p>
                <a href="http://127.0.0.1:8000/en-US/app/search/threat_intelligence_dashboard" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <Lock className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Implementation of Watermarking Using Cryptography and Bit Pair Matching:</h3>
                <p className="text-gray-400 mb-4">Developed a secure watermarking system in Python that embeds digital watermarks into media files using cryptographic techniques and bit pair matching. Ensured data integrity, authentication, and protection against unauthorized access or tampering.</p>
                <a href="https://www.int-jecse.net/article/On+the+Implementation+of+a+Secured+Watermarking+Mechanism+Based+on+Cryptography+and+Bit+Pairs+Matching_2737/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <Lock className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Complete Cybersecurity Program for an organization </h3>
                <p className="text-gray-400 mb-4">To establish a comprehensive cybersecurity program that protects the company's information systems, networks, and data from cyber threats. This program outlines policies, procedures, and
controls to safeguard against unauthorized access, data breaches, and other cyber incidents.</p>
                <a href="https://docs.google.com/document/d/1U2oo3sBj64j0crdE0hl4lCnTufCLL55P/edit?usp=drive_link&ouid=100004510082215848223&rtpof=true&sd=true" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">DDoS Attack Analysis and Mitigation:</h3>
                <p className="text-gray-400 mb-4">Conducted a detailed analysis of Distributed Denial of Service (DDoS) attack vectors using tools like Wireshark and tcpdump. Simulated DDoS attacks in a controlled lab environment to understand attack patterns and their impact on network performance. Developed and tested mitigation strategies, including rate-limiting, firewall rules, and traffic filtering, to minimize the attack surface and enhance network security..</p>
               
              </div>
            </div>
             <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Network Threat Analysis and Prevention:
</h3>
                <p className="text-gray-400 mb-4">Designed and implemented a network threat analysis project, identifying potential risks using IDS/IPS tools like Snort and analyzing firewall logs. Conducted deep packet analysis using Wireshark to detect malicious traffic, proactively addressing vulnerabilities and enhancing overall network security</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">CompTIA Security+</h3>
              <p className="text-gray-400">Completed</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">ANZ Australia Cyber Security Management Job Simulation Forage</h3>
              <p className="text-gray-400">Completed 2024</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">The Complete Cyber Security course: Hackers Exposed, Network Security, Anonymous Browsing, End-point protection- Station X</h3>
              <p className="text-gray-400">Completed 2023</p>
            </div>
             <div className="p-6 bg-gray-900 rounded-lg">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">The Complete Splunk Core Certified User Course - SPLK-1001</h3>
              <p className="text-gray-400">Completed the training in 2024 and will be writing the exam soon to get the certfication.</p>
            </div>
          </div>
        </div>
      </section>
       
          <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <p className="white">I participated in the National Cyber League (NCL), where I applied and enhanced my cybersecurity skills through a variety of challenges in areas such as cryptography, network defense, web application security, incident response, and digital forensics. This competitive environment allowed me to solve real-world security problems while working alongside peers and industry professionals. Through this experience, I gained hands-on expertise in penetration testing, vulnerability analysis, and threat mitigation, all while improving my ability to think critically, collaborate effectively, and perform under pressure.</p>
           </div>
          </section>
{/* Experience */}
       <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="p-6 bg-gray-900 rounded-lg">
              
              
              <p className="text-gray-400">Although I do not have on-site professional experience, I have actively bridged this gap through hands-on training and simulations in real-world scenarios. By leveraging platforms like Hack The Box and TryHackMe, I have gained practical expertise in critical areas of cybersecurity, such as log analysis, penetration testing, threat detection, and incident response. These experiences have allowed me to develop and demonstrate skills comparable to industry roles.</p>
            <h3 className="text-xl font-semibold mb-2">SOC Analyst - Hack The Box</h3>
             <p className="text-gray-400">Gained hands-on experience in log analysis, incident response, threat detection, and the use of SIEM tools to investigate and mitigate security incidents. Performed forensic analysis on both Windows and Linux systems, applying knowledge of security logging and endpoint security mechanisms to identify, analyze, and resolve threats effectively.</p>
            <h3 className="text-xl font-semibold mb-2">Hack The Box & TryHackMe</h3>
             <p className="text-gray-400">Developed skills in penetration testing, threat analysis, and cybersecurity fundamentals through interactive labs and real-world scenarios. Participated in red and purple teaming exercises, identifying vulnerabilities, and demonstrating techniques such as lateral movement, privilege escalation, and persistence. Gained practical experience in exploiting security weaknesses and strengthening defenses.</p>
            
            </div>
          </div>
          </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Thank you for taking the time to explore my portfolio!  I hope you see the potential in me and consider giving this determined newcomer a chance to prove their worth. If you’re looking for someone who thrives on problem-solving, continuous learning, and making a difference in the cybersecurity landscape, I’d love to connect.  Let’s collaborate to create a more secure digital future!</h2>
                     </div>
          </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2024 Mayank Rayabharapu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
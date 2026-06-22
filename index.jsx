import React, { useState } from 'react';
import { 
  Code, Briefcase, Award, GraduationCap, MapPin, Mail, 
  Github, Linkedin, ExternalLink, ChevronRight, Server, 
  Users, Presentation, BookOpen, User, Star,
  Palette, Gamepad2, BookHeart, Mic, Music, Globe
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const tabs = [
    { id: 'tech', label: 'Tech & Cloud', icon: Server },
    { id: 'ops_leadership', label: 'Operations & Leadership', icon: Briefcase },
    { id: 'education', label: 'Education & Certs', icon: GraduationCap },
    { id: 'hobbies', label: 'Hobbies', icon: Palette }
  ];

  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = 'https://ui-avatars.com/api/?name=Daneen+Majeed+Valiya+Peedikakkal&background=241E1A&color=B87A44&size=512';
  };

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#292524] font-sans selection:bg-[#B87A44] selection:text-white pb-20 overflow-x-hidden w-full">
      
      {}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#241E1A] via-[#1A1614] to-[#2C211B] text-[#F3EFE7] py-20 md:py-28 shadow-2xl w-full">
        {/* Abstract background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B87A44] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C6D53] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

        <div className="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center gap-12 z-10">
          
          {/* Profile Picture with richer glow */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#B87A44] to-[#E5B98D] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-500 scale-105"></div>
            <img 
              src="profile pic_2.jpg" 
              alt="Daneen Majeed Valiya Peedikakkal" 
              onError={handleImageError}
              style={{ imageRendering: 'high-quality' }}
              className="relative w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-4 border-[#3A312B] shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-[#B87A44]"
            />
          </div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <div className="inline-block px-3 py-1 mb-4 bg-[#B87A44]/20 border border-[#B87A44]/40 text-[#E5B98D] rounded-full text-xs font-bold tracking-widest uppercase">
                Portfolio 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3EFE7] to-[#C8A07D]">
                Daneen Majeed Valiya Peedikakkal
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-[#A89F95]">
                Cloud Computing & AI Student <span className="text-[#B87A44] mx-2">|</span> Operations Specialist
              </h2>
            </div>
            
            <p className="text-lg text-[#C8C1B9] leading-relaxed max-w-2xl font-light">
              I bridge the gap between technical innovation and structured execution. 
              With a foundation in Cloud Computing and AI, and a proven track record of 
              leading large-scale university events, I drive results through operational discipline and technology.
            </p>

            {}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a href="mailto:daneenmajeed@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-[#B87A44] hover:bg-[#A36836] text-white rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-[#B87A44]/30 hover:-translate-y-0.5">
                <Mail size={18} /> Email Me
              </a>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm">
                <MapPin size={16} className="text-[#B87A44]" /> Chennai, India
              </div>
              <a href="https://github.com/daneenmajeed" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full hover:bg-white/10 hover:text-[#B87A44] transition-all shadow-sm hover:-translate-y-0.5">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/daneenmajeed" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full hover:bg-white/10 hover:text-[#B87A44] transition-all shadow-sm hover:-translate-y-0.5">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {}
      <main className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        
        {/* Tab Navigation - Pill Style for better color pop */}
        <div className="flex flex-wrap justify-center md:justify-center gap-3 bg-white p-2 rounded-2xl shadow-xl border border-[#E8E1D5] mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#241E1A] text-[#E5B98D] shadow-md scale-105' 
                    : 'bg-transparent text-[#7A7165] hover:bg-[#F3EFE7] hover:text-[#241E1A]'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-[#B87A44]' : 'text-[#A89F95]'} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {}
          {activeTab === 'tech' && (
            <div className="space-y-12">
              <section>
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-[#241E1A]">
                  <span className="p-2.5 bg-[#E8DCCB] text-[#B87A44] rounded-xl"><Code size={24} /></span> 
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { 
                      category: 'Cloud & Architecture', 
                      icon: <Server className="text-[#8C6D53]" size={20} />, 
                      skills: ['Amazon Web Services (AWS)', 'Oracle Cloud Infrastructure (OCI)', 'Cloud Computing Fundamentals', 'Multi-Cloud Concepts'] 
                    },
                    { 
                      category: 'Programming & Core CS', 
                      icon: <Code className="text-[#8C6D53]" size={20} />, 
                      skills: ['Python', 'C', 'HTML5', 'CSS3', 'Data Structures', 'Database Concepts'] 
                    },
                    { 
                      category: 'AI & Data Science', 
                      icon: <Star className="text-[#8C6D53]" size={20} />, 
                      skills: ['Prompt Engineering', 'AI-Assisted Development', 'Rapid Prototyping', 'Modern AI Tools', 'Data Science Fundamentals'] 
                    },
                    { 
                      category: 'Tools & Software', 
                      icon: <Briefcase className="text-[#8C6D53]" size={20} />, 
                      skills: ['Git / GitHub', 'AutoCAD', 'Canva', 'Microsoft Office Suite', 'Analytical Thinking', 'Problem Solving'] 
                    }
                  ].map((group, idx) => (
                    <div key={idx} className="bg-white p-7 rounded-3xl border-b-4 border-b-[#B87A44] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="p-2 bg-[#F3EFE7] rounded-lg">{group.icon}</div>
                        <h4 className="font-bold text-[#241E1A] text-xl">{group.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {group.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-4 py-2 bg-[#F3EFE7] text-[#5C544D] border border-[#E8DCCB] rounded-lg text-sm font-bold shadow-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-[#241E1A]">
                  <span className="p-2.5 bg-[#E8DCCB] text-[#B87A44] rounded-xl"><Server size={24} /></span> 
                  Featured Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project 1 */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-2 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B87A44]/10 to-transparent rounded-bl-full"></div>
                    <div className="flex justify-between items-start mb-5 relative z-10">
                      <h4 className="text-2xl font-bold text-[#241E1A]">FIMENTOR</h4>
                      <a href="https://fi-mentor-pbhz3o2h1-neen1.vercel.app/" target="_blank" rel="noreferrer" className="p-2 bg-[#F3EFE7] text-[#7A7165] rounded-full hover:bg-[#B87A44] hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-[#5C544D] mb-8 text-sm leading-relaxed relative z-10">
                      An AI-Powered Financial Mentorship Platform prototype built to improve access to financial guidance for underserved users. Presented at the Google Agentic AI Workshop.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      <span className="px-4 py-1.5 bg-[#241E1A] text-[#E5B98D] rounded-full text-xs font-bold shadow-sm">HTML</span>
                      <span className="px-4 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold shadow-sm">AI-Assisted Dev</span>
                      <span className="px-4 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold shadow-sm">UI/UX</span>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-2 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B87A44]/10 to-transparent rounded-bl-full"></div>
                    <div className="flex justify-between items-start mb-5 relative z-10">
                      <h4 className="text-2xl font-bold text-[#241E1A]">AI Web Dev</h4>
                      <div className="p-2 bg-gradient-to-br from-[#B87A44] to-[#8C6D53] text-white rounded-full shadow-md"><Star size={20} /></div>
                    </div>
                    <p className="text-[#5C544D] mb-8 text-sm leading-relaxed relative z-10">
                      Designed and built a complete, functional website using AI-assisted development tools and advanced prompt-engineering techniques during the Build with AI-Saudi Arabia workshop.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                      <span className="px-4 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold shadow-sm">Prompt Engineering</span>
                      <span className="px-4 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold shadow-sm">Prototyping</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {}
          {activeTab === 'ops_leadership' && (
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Operations Section */}
              <section>
                <h3 className="text-3xl font-extrabold mb-10 flex items-center gap-3 text-[#241E1A]">
                  <span className="p-2.5 bg-[#E8DCCB] text-[#B87A44] rounded-xl"><Briefcase size={24} /></span> 
                  Operations & Event Management
                </h3>
                <div className="space-y-8">
                  
                  {[
                    {
                      pill: "ELIGEN Private Limited",
                      pillColor: "bg-[#241E1A] text-[#E5B98D]",
                      title: "Lead Intern – Public Relations & Publicity",
                      subtitle: "Sept 2025 - Dec 2025",
                      icon: Briefcase,
                      bullets: [
                        "Led outreach and publicity initiatives aimed at strengthening relationships between the organization and university communities.",
                        "Collaborated with student representatives and institutional stakeholders to improve engagement and participation across various initiatives.",
                        "Planned and executed communication campaigns that increased organizational visibility and expanded outreach efforts.",
                        "Worked closely with team members to coordinate promotional activities and ensure the successful delivery of engagement programs.",
                        "Developed strong skills in stakeholder management, strategic communication, and professional relationship building."
                      ]
                    },
                    {
                      pill: "SRMIST",
                      pillColor: "bg-[#E8DCCB] text-[#7A5A40]",
                      title: "Student Discipline Lead",
                      subtitle: "SRM LITFEST 3.0",
                      icon: Presentation,
                      bullets: [
                        "Served as one of three lead coordinators responsible for student discipline, audience management, and operational execution during SRM LITFEST 3.0, one of SRM University's flagship cultural and literary festivals.",
                        "Coordinated audience movement, seating logistics, and crowd management across two major venues: the G.K. Grand Auditorium and the University Building.",
                        "Led volunteers and worked closely with faculty coordinators, organizers, and participants to ensure a smooth and engaging festival experience.",
                        "Addressed real-time operational challenges and implemented effective solutions to maintain event flow and organizational efficiency.",
                        "Contributed to the successful management of large audiences over multiple event days while maintaining a professional and welcoming environment."
                      ]
                    },
                    {
                      pill: "SRMIST",
                      pillColor: "bg-[#E8DCCB] text-[#7A5A40]",
                      title: "Lead Coordinator",
                      subtitle: "Project Based Learning (PBL) Presentation Day",
                      icon: BookOpen,
                      bullets: [
                        "Led the planning and execution of a university-wide academic showcase featuring student project presentations and faculty evaluations.",
                        "Coordinated participant scheduling, project allocations, venue readiness, and overall event logistics.",
                        "Served as a key point of contact between participants, judges, faculty members, and organizing teams to ensure seamless communication.",
                        "Oversaw volunteer teams responsible for participant support, event flow, and operational assistance throughout the event.",
                        "Managed final presentations, awards distribution, and closing activities while ensuring a positive experience for all stakeholders."
                      ]
                    },
                    {
                      pill: "CINTEL Next-GEN AI Club",
                      pillColor: "bg-[#E8DCCB] text-[#7A5A40]",
                      title: "Management Team Member",
                      subtitle: "Next-GEN AI Hackathon",
                      icon: Users,
                      bullets: [
                        "Played a key role in planning and executing a university-level hackathon focused on innovation and emerging technologies.",
                        "Coordinated participant registration, team onboarding, venue preparation, and event logistics to ensure a smooth participant experience.",
                        "Acted as a central communication bridge between multiple organizational domains, facilitating collaboration and alignment among teams.",
                        "Worked closely with organizers, volunteers, and stakeholders to resolve operational challenges and maintain event efficiency.",
                        "Contributed to the successful delivery of the event through strong coordination, problem-solving, and cross-functional collaboration."
                      ]
                    },
                    {
                      pill: "Int'l Student Chapter, DIR",
                      pillColor: "bg-[#E8DCCB] text-[#7A5A40]",
                      title: "Operations Team Member",
                      subtitle: "International Students' Day",
                      icon: Globe,
                      bullets: [
                        "Selected as one of two operations coordinators responsible for backstage management and event execution during International Students' Day.",
                        "Coordinated closely with performers, organizers, and technical teams to ensure seamless transitions and event flow.",
                        "Managed participant readiness, backstage logistics, and schedule adherence throughout the program.",
                        "Facilitated communication between stakeholders to address operational requirements and real-time challenges efficiently.",
                        "Contributed to the successful execution of an international cultural celebration that brought together students from diverse backgrounds."
                      ]
                    },
                    {
                      pill: "SRMIST",
                      pillColor: "bg-[#E8DCCB] text-[#7A5A40]",
                      title: "Operations Team Member",
                      subtitle: "SRMMUN 2025",
                      icon: Briefcase,
                      bullets: [
                        "Supported the operational execution of a university-wide Model United Nations conference involving delegates, Executive Board members, and organizing teams.",
                        "Assisted participants with logistics, navigation, and conference-related requirements to enhance delegate experience.",
                        "Coordinated committee resources, including documentation, stationery, technical equipment, and operational materials.",
                        "Worked closely with Executive Board members to ensure committee sessions ran efficiently and without disruptions.",
                        "Contributed to participant outreach and promotional efforts that increased awareness and engagement across campus."
                      ]
                    }
                  ].map((job, idx) => {
                    const Icon = job.icon;
                    return (
                      <div key={idx} className="bg-white p-7 md:p-8 rounded-3xl shadow-sm border border-[#E8E1D5] hover:shadow-xl hover:-translate-y-1 hover:border-[#B87A44]/30 transition-all duration-300 group flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="shrink-0">
                          <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#241E1A] to-[#3A312B] text-[#E5B98D] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 border border-[#E8DCCB]/20">
                            <Icon size={28} />
                          </div>
                        </div>
                        <div>
                          <div className={`inline-block px-3 py-1 rounded-md text-[10px] font-extrabold tracking-widest uppercase mb-3 shadow-sm border border-[#E8DCCB]/50 ${job.pillColor}`}>
                            {job.pill}
                          </div>
                          <h4 className="text-xl md:text-2xl font-bold text-[#241E1A] leading-tight mb-1">{job.title}</h4>
                          <div className="text-[#B87A44] font-bold text-sm mb-5">{job.subtitle}</div>
                          <ul className="space-y-3 text-sm text-[#5C544D]">
                            {job.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3">
                                <span className="p-1 bg-[#F3EFE7] text-[#B87A44] rounded-md mt-0.5 shrink-0 border border-[#E8DCCB]"><ChevronRight size={12}/></span> 
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </section>

              {}
              <section>
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-[#241E1A]">
                  <span className="p-2.5 bg-[#E8DCCB] text-[#B87A44] rounded-xl"><Users size={24} /></span> 
                  Creative & Early Leadership
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {[
                    {
                      role: "Assistant Director",
                      org: "Zephyr Playhouse Theatre Production",
                      type: "Creative Leadership",
                      bullets: [
                        "Served as Assistant Director for a theatre production under Zephyr Playhouse, the theatre wing of Zephyr Club.",
                        "Collaborated with the directing team to oversee production planning, rehearsal coordination, and overall execution.",
                        "Guided and mentored performers with limited prior theatre experience, fostering confidence and teamwork throughout the process.",
                        "Managed schedules, rehearsals, and production timelines to ensure readiness for final performance.",
                        "Contributed to the successful delivery of a production that received positive recognition from university leadership."
                      ]
                    },
                    {
                      role: "Master of Ceremonies (MC) & Event Host",
                      org: "Multiple Formal University Events",
                      type: "Public Speaking & Hosting",
                      bullets: [
                        "Hosted and moderated multiple formal university events attended by students, faculty members, and invited guests.",
                        "Managed stage proceedings, speaker transitions, and audience engagement while maintaining a professional atmosphere.",
                        "Collaborated with organizing teams to ensure smooth event execution and adherence to program schedules.",
                        "Demonstrated strong communication, adaptability, and audience management skills in high-visibility environments.",
                        "Successfully handled live event changes while maintaining continuity and engagement throughout the program."
                      ]
                    },
                    {
                      role: "Head Girl",
                      org: "International Indian School Jeddah",
                      type: "Early Leadership Experience",
                      bullets: [
                        "Represented the student body and served as a liaison between students, faculty, and school administration.",
                        "Led initiatives focused on student welfare, discipline, and school-wide engagement activities.",
                        "Coordinated student participation in institutional events while promoting a positive and inclusive school environment."
                      ]
                    },
                    {
                      role: "Literary Secretary",
                      org: "International Indian School Jeddah",
                      type: "Early Leadership Experience",
                      bullets: [
                        "Organized literary competitions, debates, and public speaking initiatives that encouraged student participation and creative expression.",
                        "Collaborated with faculty and student teams to plan and execute academic and cultural events.",
                        "Fostered a culture of communication, critical thinking, and creativity within the student community."
                      ]
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8E1D5] hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full">
                      <div className="flex items-start gap-5 mb-6">
                        <div className="p-4 bg-gradient-to-br from-[#241E1A] to-[#3A312B] rounded-2xl text-[#E5B98D] shadow-inner shrink-0">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 bg-[#F3EFE7] text-[#5C544D] rounded-md text-[10px] font-extrabold tracking-widest uppercase mb-2 border border-[#E8DCCB]">{item.type}</div>
                          <h4 className="font-bold text-xl text-[#241E1A] leading-tight mb-1">{item.role}</h4>
                          <p className="text-sm font-bold text-[#B87A44]">{item.org}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-sm text-[#5C544D] flex-grow">
                         {item.bullets.map((bullet, bIdx) => (
                           <li key={bIdx} className="flex items-start gap-3">
                             <span className="text-[#B87A44] mt-1 shrink-0">•</span> 
                             <span className="leading-relaxed">{bullet}</span>
                           </li>
                         ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}

          {}
          {activeTab === 'education' && (
            <div className="grid md:grid-cols-12 gap-10">
              
              {/* Education */}
              <div className="md:col-span-5 space-y-6">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-[#241E1A]">
                  <span className="p-2.5 bg-[#E8DCCB] text-[#B87A44] rounded-xl"><GraduationCap size={24} /></span> 
                  Education
                </h3>
                
                <div className="bg-white p-7 rounded-3xl shadow-lg border border-[#E8E1D5] relative overflow-hidden group hover:border-[#B87A44]/50 transition-colors">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#B87A44] to-[#8C6D53]"></div>
                  <div className="inline-block px-3 py-1 bg-[#241E1A] text-[#E5B98D] rounded-lg text-xs font-bold mb-3 shadow-sm">2025 - 2029 (Expected)</div>
                  <h4 className="text-xl font-bold text-[#241E1A] leading-tight mb-2">B.Tech Computer Science</h4>
                  <p className="text-[#B87A44] text-sm font-bold mb-2">Specialization: Cloud Computing</p>
                  <p className="text-[#7A7165] text-sm font-medium">SRM Institute of Science and Technology • Chennai</p>
                </div>

                <div className="bg-white p-7 rounded-3xl shadow-sm border border-[#E8E1D5] hover:shadow-md transition-shadow">
                  <div className="inline-block px-3 py-1 bg-[#E8DCCB] text-[#7A5A40] rounded-lg text-xs font-bold mb-3">2023 - 2025</div>
                  <h4 className="text-lg font-bold text-[#241E1A] leading-tight mb-2">Senior Secondary Education</h4>
                  <p className="text-[#7A7165] text-sm font-medium">Sree Gokulam Public School • Calicut, India</p>
                </div>

                <div className="bg-white p-7 rounded-3xl shadow-sm border border-[#E8E1D5] hover:shadow-md transition-shadow">
                  <div className="inline-block px-3 py-1 bg-[#E8DCCB] text-[#7A5A40] rounded-lg text-xs font-bold mb-3">2011 - 2023</div>
                  <h4 className="text-lg font-bold text-[#241E1A] leading-tight mb-2">Primary & Secondary</h4>
                  <p className="text-[#7A7165] text-sm font-medium">International Indian School Jeddah • KSA</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="md:col-span-7">
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-[#241E1A]">
                  <span className="p-2.5 bg-[#E8DCCB] text-[#B87A44] rounded-xl"><Award size={24} /></span> 
                  Certifications
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Oracle Certified Associate", sub: "AI Foundations (OCI)", org: "Oracle" },
                    { title: "Python Essentials 1", sub: "Programming Basics", org: "Cisco Networking" },
                    { title: "Intro to Modern AI", sub: "AI Concepts", org: "Cisco Networking" },
                    { title: "Intro to Data Science", sub: "Analytics", org: "Cisco Networking" },
                    { title: "Intro to Cloud Computing", sub: "AWS Fundamentals", org: "Udemy" },
                    { title: "Claude 101", sub: "LLM Fundamentals", org: "Anthropic" },
                    { title: "AI Fluency", sub: "Framework & Foundations", org: "Anthropic" },
                    { title: "Agentic AI Workshop", sub: "AI Tools", org: "Google" }
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-[#E8E1D5] hover:shadow-lg hover:-translate-y-1 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-[#F3EFE7] group-hover:bg-[#B87A44] group-hover:text-white flex items-center justify-center text-[#B87A44] shrink-0 transition-colors duration-300">
                        <Award size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-[#241E1A] leading-tight">{cert.title}</h5>
                        <p className="text-xs font-bold text-[#A38568] mt-1 uppercase tracking-wide">{cert.org}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {}
          {activeTab === 'hobbies' && (
            <div className="space-y-10 animate-in fade-in zoom-in-95 duration-500">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#241E1A] mb-4">Beyond the Code & Operations</h3>
                <p className="text-[#5C544D] text-lg leading-relaxed">A glimpse into my creative pursuits, digital worlds, and physical activities that keep me balanced, inspired, and constantly learning.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Dance Card - Spans 2 columns on larger screens */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#241E1A] to-[#3A312B] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#B87A44] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/20">
                      <Music size={28} className="text-[#E5B98D]" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-white">Bharatanatyam</h4>
                    <p className="text-[#C8C1B9] mb-6 leading-relaxed max-w-xl">
                      7+ years of dedicated training and practice in Indian classical dance, culminating in multiple stage performances. This art form has been foundational in teaching me discipline, cultural expression, and rhythmic storytelling.
                    </p>
                    <div className="flex gap-2">
                      <div className="inline-block px-4 py-2 bg-[#B87A44] rounded-full text-xs font-bold text-white shadow-md">Classical Dance</div>
                      <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#E5B98D]">7 Years Exp.</div>
                    </div>
                  </div>
                </div>

                {/* MUN & Speaking */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E8DCCB] to-transparent rounded-bl-full z-0 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#F3EFE7] text-[#B87A44] rounded-2xl flex items-center justify-center mb-6 border border-[#E8E1D5]">
                      <Mic size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-[#241E1A]">The Podium & Diplomacy</h4>
                    <p className="text-[#5C544D] text-sm mb-6 leading-relaxed">
                      Passionate about public speaking, debating, and hosting events. Jumped into Model United Nations (MUN) in Jan 2026 and have already attended 4 conferences to debate global issues.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold">Model UN</span>
                      <span className="px-3 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold">Oratory</span>
                    </div>
                  </div>
                </div>

                {/* Gaming - Spans 2 columns */}
                <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden group">
                  <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#B87A44]/10 rounded-full blur-3xl group-hover:bg-[#B87A44]/20 transition-colors duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#F3EFE7] text-[#B87A44] rounded-2xl flex items-center justify-center border border-[#E8E1D5]">
                        <Gamepad2 size={24} />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-[#241E1A]">Gaming & Immersive Lore</h4>
                    <p className="text-[#5C544D] mb-6 leading-relaxed max-w-2xl">
                      An avid player of rich, story-driven gacha and RPG titles. I love exploring immersive worlds, diving deep into character mechanics, and analyzing game lore and beautifully crafted soundtracks.
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <span className="px-4 py-2 bg-[#241E1A] text-[#E5B98D] rounded-full text-xs font-bold shadow-sm flex items-center gap-2">✨ Honkai: Star Rail</span>
                      <span className="px-4 py-2 bg-[#241E1A] text-[#E5B98D] rounded-full text-xs font-bold shadow-sm flex items-center gap-2">🗡️ Genshin Impact</span>
                      <span className="px-4 py-2 bg-[#241E1A] text-[#E5B98D] rounded-full text-xs font-bold shadow-sm flex items-center gap-2">🌌 Love and Deepspace</span>
                      <span className="px-4 py-2 bg-[#241E1A] text-[#E5B98D] rounded-full text-xs font-bold shadow-sm flex items-center gap-2">🌊 Wuthering Waves</span>
                    </div>
                  </div>
                </div>

                {/* Fiction & Storytelling */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-[#F3EFE7] text-[#B87A44] rounded-2xl flex items-center justify-center mb-6 border border-[#E8E1D5]">
                    <BookHeart size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#241E1A]">Fiction & Reading</h4>
                  <p className="text-[#5C544D] text-sm mb-6 leading-relaxed">
                    Immersed in fictional worlds through romance novels, manga, manhwa, and audiobooks. I love engaging in deep dives into character analysis and storytelling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-[#F3EFE7] border border-[#E8DCCB] text-[#5C544D] rounded-full text-xs font-bold">Manhwa</span>
                    <span className="px-3 py-1.5 bg-[#F3EFE7] border border-[#E8DCCB] text-[#5C544D] rounded-full text-xs font-bold">Romance Novels</span>
                  </div>
                </div>

                {/* Art & Creative */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-[#F3EFE7] text-[#B87A44] rounded-2xl flex items-center justify-center mb-6 border border-[#E8E1D5]">
                    <Palette size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#241E1A]">Art & Creative Expression</h4>
                  <p className="text-[#5C544D] text-sm mb-6 leading-relaxed">
                    Pencil sketching 2D characters with a focus on light anime-style art. I also channel creativity into writing poetry and active participation in literature clubs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold">Sketching</span>
                    <span className="px-3 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold">Poetry</span>
                  </div>
                </div>
                
                 {/* Recreation & Lifestyle */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8E1D5] hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-[#F3EFE7] text-[#B87A44] rounded-2xl flex items-center justify-center mb-6 border border-[#E8E1D5]">
                    <Globe size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#241E1A]">Recreation & Lifestyle</h4>
                  <p className="text-[#5C544D] text-sm mb-6 leading-relaxed">
                    Balancing the digital with the physical. I enjoy swimming for fitness and active relaxation, while also exploring content creation and social media strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold">Swimming</span>
                    <span className="px-3 py-1.5 bg-[#E8DCCB] text-[#7A5A40] rounded-full text-xs font-bold">Content Creation</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
};
  );
};

"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  
  // Parallax Effect Logic
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only apply parallax on screens larger than mobile
          if (window.innerWidth > 768) {
            // We select elements, but we cast them inside the loop to fix the error
            document.querySelectorAll("[data-speed]").forEach((el) => {
              // 1. Tell TypeScript this is an HTMLElement
              const element = el as HTMLElement; 

              // 2. Now .dataset and .style work perfectly
              const speed = Number(element.dataset.speed) || 0;
              const rect = element.getBoundingClientRect();
              const offsetFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
              
              const y = Math.round(offsetFromCenter * speed);
              
              element.style.backgroundPosition = `center ${-y}px`;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Common Styles (Using Tailwind classes concepts for inline style fallback if needed)
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  };

  const goldColor = "#C8A951";

  return (
    <main className="min-h-screen text-gray-800 font-sans overflow-x-hidden">
      <Header />

      {/* --- HERO SECTION --- */}
      <section
        id="me-section"
        className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-8"
        data-speed="0.05"
        style={{
          background: "linear-gradient(135deg, #fdfbf7 0%, #ebdec2 100%)",
        }}
      >
        <div
          style={glassStyle}
          className="relative z-10 w-full max-w-6xl rounded-3xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
                Hello! I'm <br />
                <span style={{ color: goldColor }}>Romer Ryle B. Carreon</span>
              </h1>
            </div>
            
            <div className="text-lg md:text-xl leading-relaxed text-gray-700 bg-white/60 p-6 rounded-xl shadow-sm border border-orange-100/50">
              <p>
                I’m a fourth-year <strong>Information Technology</strong> student, passionate about building practical solutions.
                I enjoy turning ideas into real projects that help people, utilizing modern tools like 
                <span className="font-semibold text-yellow-600"> React, Laravel, and IoT.</span>
              </p>
              <br />
              <p>
                I’m excited to keep growing as a developer and make a positive impact through technology.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/my-portfolio/me.jpg"
                alt="Romer Ryle Portrait"
                className="relative block w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem] border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCES SECTION --- */}
      <section
        id="experiences-section"
        className="relative w-full py-24 px-4 sm:px-8"
        data-speed="0.02"
        style={{
          background: "linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
            <span className="text-yellow-500 mr-2">✦</span> Experiences
          </h2>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 }, // On tablet/desktop show 2 slides
            }}
            className="w-full pb-12"
          >
            {/* Experience 1 */}
            <SwiperSlide className="h-auto">
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-xl border-t-4 border-yellow-500">
                <img src="/my-portfolio/ssd.png" alt="SSD" className="w-24 h-24 object-contain mb-6 bg-white rounded-xl p-2 shadow-sm" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">USJR Safety & Security</h3>
                <p className="text-yellow-600 font-bold mb-4">2022 - Present</p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base bg-white/50 p-4 rounded-xl">
                  Working Scholar assisting in data encoding, customer service, and developing internal application tools to improve office workflow.
                </p>
              </div>
            </SwiperSlide>

            {/* Experience 2 */}
            <SwiperSlide className="h-auto">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-xl border-t-4 border-blue-500">
                <img src="/my-portfolio/hrsp.png" alt="HRSP" className="w-24 h-24 object-contain mb-6 bg-white rounded-xl p-2 shadow-sm" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Technical Support</h3>
                <p className="text-blue-600 font-bold mb-4">2020 - 2022</p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base bg-white/50 p-4 rounded-xl">
                   Served as Technical Support and Committee member for school events during Senior High School immersion.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section
        id="skills-section"
        className="relative w-full py-24 px-4 sm:px-8 bg-[#fffbf0]"
        data-speed="0.01"
      >
        <div 
            style={glassStyle}
            className="max-w-4xl mx-auto rounded-3xl p-8 md:p-16 border-2 border-[#C8A951]/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            <span className="mr-3">🛠️</span> Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center md:justify-start">
                    <span className="text-yellow-600 mr-2">💻</span> Technical
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Front-End & Back-End Dev</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> <span className="font-semibold mx-1">Java, JS, Python, PHP</span></li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Laravel, React, Ionic</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Database Management</li>
                </ul>
            </div>

            {/* Leadership */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center md:justify-start">
                    <span className="text-yellow-600 mr-2">🤝</span> Soft Skills
                </h3>
                 <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Leadership & Teamwork</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Problem Solving</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Project Management</li>
                    <li className="flex items-start"><span className="text-yellow-500 mr-2">▸</span> Research & Analysis</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects-section"
        className="relative w-full py-24 px-4 sm:px-8"
        style={{ background: "linear-gradient(180deg, #C8A951 0%, #F5E6CA 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-md">
            <span className="mr-2">🚀</span> Featured Projects
          </h2>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              1024: { slidesPerView: 2 }, // Show 2 slides on large screens
            }}
            className="w-full pb-14 px-4"
          >
            {/* Project 1 */}
            <SwiperSlide className="h-auto">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
                    <img src="/my-portfolio/psd.png" alt="Parking Sticker DB" className="h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">Parking Sticker Database v2</h3>
                    <p className="text-yellow-600 font-semibold text-sm mb-4">2024 - 2025</p>
                    <p className="text-gray-600 leading-relaxed">
                        A no-code web application utilizing Google AppSheet to streamline the parking sticker issuance process at USJR. Focused on efficiency and budget-friendly resource management.
                    </p>
                </div>
              </div>
            </SwiperSlide>

             {/* Project 2 */}
             <SwiperSlide className="h-auto">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="w-full h-64 bg-blue-50 flex items-center justify-center p-6 overflow-hidden">
                    <img src="/my-portfolio/uranus.png" alt="Uranus" className="h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">Uranus IoT Aquaponics</h3>
                    <p className="text-blue-500 font-semibold text-sm mb-4">Capstone 2025</p>
                    <p className="text-gray-600 leading-relaxed">
                        An automated aquaponics system with IoT monitoring, logging, and remote feeding controls. Designed to ensure sustainability and minimize human intervention.
                    </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Project 3 */}
            <SwiperSlide className="h-auto">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col">
                <div className="w-full h-64 bg-indigo-50 flex items-center justify-center p-6 overflow-hidden">
                    <img src="/my-portfolio/ipbl2.jpg" alt="IPBL" className="h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">IPBL Japan Solar Project</h3>
                    <p className="text-indigo-500 font-semibold text-sm mb-4">2025</p>
                    <p className="text-gray-600 leading-relaxed">
                        International competition entry focused on optimizing hardware and algorithms for solar power conversion efficiency.
                    </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contacts-section"
        className="relative w-full py-24 px-4 sm:px-8"
        style={{
          background: "linear-gradient(135deg, #d97b34 0%, #fffbe6 100%)",
        }}
      >
        <div 
          style={glassStyle}
          className="max-w-lg mx-auto rounded-3xl p-10 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-4xl font-bold text-[#D97B34] flex items-center justify-center">
            <span className="mr-2">📬</span> Contact Me
          </h2>
          <p className="text-gray-700 text-lg">
            Looking for a dedicated developer? <br/> Let's build something great together.
          </p>
          
          <div className="w-full space-y-4 mt-2">
            <a 
                href="mailto:carreonromer@gmail.com" 
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all text-gray-800 font-semibold no-underline"
            >
                <span className="text-xl">📧</span> carreonromer@gmail.com
            </a>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-md text-gray-800 font-semibold">
                <span className="text-xl">📱</span> +63 945 880 5267
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
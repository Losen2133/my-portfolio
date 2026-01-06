"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
            const speed = Number(el.dataset.speed) || 0;
            const rect = el.getBoundingClientRect();
            // calculate how far the element is from the center of the viewport
            const offsetFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
            // move background based on offset and speed
            const y = Math.round(offsetFromCenter * speed);
            // set both backgroundPosition and backgroundPositionY for compatibility
            el.style.backgroundPosition = `center ${-y}px`;
            el.style.backgroundPositionY = `-${y}px`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // initialize positions on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <section
        id="before-section"
        className="section"
        data-speed="0.01"
        style={{
          background: "linear-gradient(120deg, #e9e9ff 60%, #fffbe6 100%)", // changed to a cool lavender/blue to beige gradient
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        This is better viewed in a desktop or tablet device.
      </section>

      <section
        id="me-section"
        className="section"
        data-speed="0.01"
        style={{
          background: "linear-gradient(120deg, #ebe9e1 60%, #f7e9d7 100%)",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "left"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "2.5rem 3rem",
            borderRadius: "2rem",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            gap: "2.5rem",
            maxWidth: "900px",
            width: "100%",
            margin: "auto"
          }}
        >
          <div style={{ flexDirection: "column", display: "flex", marginRight: "2.5rem", flex: 1 }}>
            <div style={{ fontSize: "2.7rem", color: "#222", fontWeight: 700, marginBottom: "0.2rem", letterSpacing: "-1px", lineHeight: 1.1 }}>
              Hello! I'm <br /><span style={{ color: "#C8A951" }}>Romer Ryle B. Carreon</span>
            </div>
            <div style={{ fontSize: "1.25rem", color: "#333", maxWidth: "420px", wordBreak: "break-word", lineHeight: 1.6, background: "rgba(255,255,255,0.6)", padding: "1rem 1.5rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(200,169,81,0.07)", fontWeight: 500 }}>
              I’m a fourth-year Information Technology student, passionate about building practical solutions and constantly learning new skills.<br />
              I enjoy working with modern tools and turning ideas into real projects that help people.<br />
              I love coding, problem-solving, and collaborating with others to create innovative applications, and I have experience working in an office with people from different backgrounds.<br />
              I’m excited to keep growing as a developer and make a positive impact through technology.
            </div>
          </div>
          <img
            src="/me.jpg"
            alt="Romer Ryle B. Carreon portrait"
            style={{
              display: "block",
              maxWidth: "350px",
              width: "100%",
              borderRadius: "1.5rem",
              boxShadow: "0 6px 32px rgba(200,169,81,0.18), 0 2px 12px rgba(0,0,0,0.10)",
              border: "4px solid #fff"
            }}
          />
        </div>
      </section>

      <section
        id="experiences-section"
        className="section"
        data-speed="0.01"
        style={{
          background: "linear-gradient(120deg, #545454 60%, #222 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{
          width: "100%",
          maxWidth: "800px",
          margin: "auto",
          borderRadius: "2rem",
          padding: "2.5rem 1.5rem",
          background: "rgba(40,40,50,0.85)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "2rem", color: "#fff", fontWeight: 700, letterSpacing: "-1px" }}>Experiences</h2>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            style={{ width: "100%", minHeight: "420px" }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <div style={{
                height: "400px",
                padding: "2rem 1.5rem",
                background: "linear-gradient(120deg, #fffbe6 60%, #f7e9d7 100%)",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(200,169,81,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem"
              }}>
                <img
                  src="/ssd.png"
                  alt="SSD LOGO"
                  style={{ width: "120px", marginBottom: "0.5rem", borderRadius: "1rem" }}
                />
                <span style={{ fontSize: "2rem", color: "#222", fontWeight: 700, textAlign: "center" }}>USJR Safety & Security Department</span>
                <span style={{ fontSize: "1.2rem", color: "#C8A951", fontWeight: 600 }}>(2022 - Present)</span>
                <span style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", background: "rgba(255,255,255,0.7)", padding: "1rem 1.2rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(200,169,81,0.07)" }}>
                  Worked as a Working Scholar for the safety and security department. I mainly assisted in data encoding and customer service. I also helped during the NSTP-CWTS classes. I also developed application tools that improved the workflow of the office.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{
                height: "400px",
                padding: "2rem 1.5rem",
                background: "linear-gradient(120deg, #e9e9ff 60%, #d7e9f7 100%)",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(81,130,200,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem"
              }}>
                <img
                  src="/hrsp.png"
                  alt="HRSP LOGO"
                  style={{ width: "120px", marginBottom: "0.5rem", borderRadius: "1rem" }}
                />
                <span style={{ fontSize: "2rem", color: "#222", fontWeight: 700, textAlign: "center" }}>Technical Support and Committee</span>
                <span style={{ fontSize: "1.2rem", color: "#5182c8", fontWeight: 600 }}>(2020 - 2022)</span>
                <span style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", background: "rgba(255,255,255,0.7)", padding: "1rem 1.2rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(81,130,200,0.07)" }}>
                  I had my Senior High School immersion as the Technical Support for HRSP during the pandemic and was the Technical Committee during events in the school.
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section
        id="skills-section"
        className="section"
        data-speed="0.01"
        style={{ background: "linear-gradient(120deg, #DDB7A0 60%, #fffbe6 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: "2.2rem",
          boxShadow: "0 12px 36px rgba(200,169,81,0.13)",
          padding: "2.7rem 2.2rem",
          maxWidth: "650px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          border: "1.5px solid #C8A951"
        }}>
          <h2 style={{ fontSize: "2.5rem", color: "#C8A951", fontWeight: 800, marginBottom: "0.7rem", letterSpacing: "-1px", textShadow: "0 2px 8px #f7e9d7", textAlign: "center"  }}>
            <span style={{ verticalAlign: "middle", marginRight: "0.5rem" }}>🛠️</span>Skills
          </h2>
          <div>
            <h3 style={{ fontSize: "1.35rem", color: "#222", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.5px", textAlign: "center"  }}>
              <span style={{ color: "#C8A951", marginRight: "0.3rem" }}>💻</span>Technical
            </h3>
            <ul style={{ fontSize: "1.13rem", color: "#222", marginLeft: "1.2rem", marginBottom: "1.2rem", lineHeight: 1.8, paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}><b>Web & Mobile Development</b></li>
              <li style={{ marginBottom: "0.5rem" }}>Front–End and Back–End Development</li>
              <li style={{ marginBottom: "0.5rem" }}>Experience in <span style={{ color: '#C8A951', fontWeight: 600 }}>C, Java, Javascript, Python, Php</span></li>
              <li style={{ marginBottom: "0.5rem" }}>Worked with <span style={{ color: '#C8A951', fontWeight: 600 }}>Laravel, Ionic, React, Angular</span></li>
              <li style={{ marginBottom: "0.5rem" }}>Proficient in Microsoft Office & Google Workspace</li>
              <li style={{ marginBottom: "0.5rem" }}>Visual Studio & IntelliJ IDE Experience</li>
              <li style={{ marginBottom: "0.5rem" }}>Keen research, data analysis, and solution support</li>
              <li style={{ marginBottom: "0.5rem" }}>Strong decision–making, judgment, and problem solving</li>
            </ul>
            <h3 style={{ fontSize: "1.35rem", color: "#222", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.5px", textAlign: "center"  }}>
              <span style={{ color: "#C8A951", marginRight: "0.3rem" }}>🤝</span>Leadership & Collaboration
            </h3>
            <ul style={{ fontSize: "1.13rem", color: "#222", marginLeft: "1.2rem", lineHeight: 1.8, paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <b>Team Player</b> with excellent interpersonal communication skills, successful in collaborating on projects (e.g., <span style={{ color: '#C8A951', fontWeight: 600 }}>USJR Parking Sticker tool</span>) with good time management skills.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="projects-section"
        className="section"
        data-speed="0.01"
        style={{
          background: "linear-gradient(120deg, #C8A951 60%, #fffbe6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{
          width: "100%",
          maxWidth: "800px",
          margin: "auto",
          borderRadius: "2rem",
          padding: "2.5rem 1.5rem",
          background: "rgba(255,255,255,0.96)",
          boxShadow: "0 8px 32px rgba(200,169,81,0.13)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "2rem", color: "#C8A951", fontWeight: 800, letterSpacing: "-1px", textAlign: "center", textShadow: "0 2px 8px #fffbe6" }}>
            <span style={{ verticalAlign: "middle", marginRight: "0.5rem" }}>🚀</span>Projects
          </h2>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            style={{ width: "100%", minHeight: "600px" }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <div style={{
                height: "525px",
                padding: "2rem 1.5rem",
                background: "linear-gradient(120deg, #fffbe6 60%, #f7e9d7 100%)",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(200,169,81,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem"
              }}>
                <img
                  src="/psd.png"
                  alt="Parking Sticker Database v2 Logo"
                  style={{ width: "600px", maxWidth: "90vw", marginBottom: "0.5rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(200,169,81,0.07)" }}
                />
                <span style={{ fontSize: "2rem", color: "#222", fontWeight: 700, textAlign: "center" }}>Parking Sticker Database v2</span>
                <span style={{ fontSize: "1.2rem", color: "#C8A951", fontWeight: 600 }}>(2024 - 2025)</span>
                <span style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", background: "rgba(255,255,255,0.7)", padding: "1rem 1.2rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(200,169,81,0.07)" }}>
                  A no code web application that utilized Google's Appsheet to streamline and digitize the parking sticker issuance process at USJR, enhancing efficiency and record-keeping. The choice to use Appsheet was due to the budget and resources given so I had to use something that was free and does its job.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{
                height: "525px",
                padding: "2rem 1.5rem",
                background: "linear-gradient(120deg, #e9e9ff 60%, #d7e9f7 100%)",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(81,130,200,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem"
              }}>
                <img
                  src="/uranus.png"
                  alt="Uranus LOGO"
                  style={{ width: "180px", maxWidth: "80vw", marginBottom: "0.5rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(81,130,200,0.07)" }}
                />
                <span style={{ fontSize: "2rem", color: "#222", fontWeight: 700, textAlign: "center" }}>Uranus</span>
                <span style={{ fontSize: "1.2rem", color: "#5182c8", fontWeight: 600 }}>(2025)</span>
                <span style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", background: "rgba(255,255,255,0.7)", padding: "1rem 1.2rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(81,130,200,0.07)" }}>
                  Uranus is an aquaponics system enhanced with IoT capabilities, enabling automated environmental monitoring, growth-stage-based logging, and remote-controlled feeding. The system ensures sustainability, minimal human intervention, and optimized conditions for fish and plant growth. This is my capstone project for my degree.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{
                height: "525px",
                padding: "2rem 1.5rem",
                background: "linear-gradient(120deg, #e9e9ff 60%, #d7e9f7 100%)",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(81,130,200,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem"
              }}>
                <img
                  src="/ipbl2.jpg"
                  alt="IPBL Japan Project LOGO"
                  style={{ width: "180px", maxWidth: "80vw", marginBottom: "0.5rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(81,130,200,0.07)" }}
                />
                <span style={{ fontSize: "2rem", color: "#222", fontWeight: 700, textAlign: "center" }}>IPBL Japan Project</span>
                <span style={{ fontSize: "1.2rem", color: "#5182c8", fontWeight: 600 }}>(2025)</span>
                <span style={{ fontSize: "1.1rem", color: "#333", textAlign: "center", background: "rgba(255,255,255,0.7)", padding: "1rem 1.2rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(81,130,200,0.07)" }}>
                  The project for IPBL 2025 that was held in Japan was to create an algorithm and hardware that could efficiently convert sunlight to power using solar panels. The competition was decided based on whose group was able to generate the most power with their algorithm and hardware.
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section
        id="contacts-section"
        className="section"
        data-speed="0.01"
        style={{
          background: "linear-gradient(120deg, #D97B34 60%, #fffbe6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{
          background: "rgba(255,255,255,0.98)",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px rgba(217,123,52,0.13)",
          padding: "2.2rem 1.2rem",
          maxWidth: "420px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.2rem",
          border: "1.5px solid #D97B34"
        }}>
          <h2 style={{ fontSize: "2rem", color: "#D97B34", fontWeight: 800, marginBottom: "0.7rem", letterSpacing: "-1px", textAlign: "center" }}>
            <span style={{ verticalAlign: "middle", marginRight: "0.5rem" }}>📬</span>Contact Me
          </h2>
          <div style={{ fontSize: "1.1rem", color: "#222", textAlign: "center", marginBottom: "0.7rem" }}>
            That's all about me! If you want to reach out, feel free to contact me through the following:
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", justifyContent: "center" }}>
              <span style={{ fontSize: "1.3rem" }}>📧</span>
              <a href="mailto:carreonromer@gmail.com" style={{ color: "#D97B34", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none" }}>carreonromer@gmail.com</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", justifyContent: "center" }}>
              <span style={{ fontSize: "1.3rem" }}>📱</span>
              <span style={{ color: "#222", fontWeight: 600, fontSize: "1.1rem" }}>+63 945 880 5267</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
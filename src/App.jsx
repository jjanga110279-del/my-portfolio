import React, { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

import { avatar, projectA, projectB, projectDmart, projectC, projectD, life1, life2, life3, life4, life5, life6, life7, life8, card, card1, card2, card3, card4, card5, card6, card7, card8, card9, work1, work2, work3, work4, work5, work6, work7, work8, work9, work10 } from "./assets/images";

const AnimatedHeroTitle = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 텍스트 분할 애니메이션
      const mm = gsap.matchMedia();
      let split;

      const createAnimation = () => {
        if (split) split.revert();
        split = new SplitText(containerRef.current.querySelectorAll("span"), { type: "chars" });

        mm.add(
          {
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
          },
          (context) => {
            const { isMobile } = context.conditions;

            gsap.from(split.chars, {
              y: isMobile ? 15 : 50,
              opacity: 0,
              stagger: 0.03,
              ease: "power3.out",
              duration: 1,
              repeat: -1,
              repeatDelay: 1,
            });
          },
        );
      };

      createAnimation();

      window.addEventListener("resize", createAnimation);

      return () => {
        window.removeEventListener("resize", createAnimation);
        if (split) split.revert();
        mm.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <h1 className="hero-title">
        <span>믿음은 촘촘하게</span>
        <span>내일은 당당하게</span>
      </h1>
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const form = useRef();

  // EmailJS 초기화 (공용 키가 있는 경우)
  React.useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      alert("환경 변수 로드 실패. .env 파일을 확인해 주세요.");
      return;
    }

    try {
      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      if (result.status === 200) {
        alert("이메일이 성공적으로 전송되었습니다!");
        e.target.reset();
      }
    } catch (error) {
      console.error("Email 전송 에러:", error);
      alert("전송 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`portfolio-app ${scrolled ? "is-scrolled" : ""}`}>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-left">
            <a href="#home" className={`nav-avatar ${scrolled ? "visible" : ""}`}>
              <img src={avatar} alt="Avatar" className="avatar-img" />
              <span>황정화</span>
            </a>
          </div>
          <div className={`nav-links-wrapper ${scrolled ? "is-scrolled" : ""}`}>
            <div className="nav-links">
              <a href="#work" className="nav-link">Projects</a>
              <a href="#about" className="nav-link">About</a>
              <a href="https://github.com/jjanga110279-del" target="_blank" rel="noopener noreferrer" className="nav-resume-btn">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text-container">
              <div className="hero-text-row">
                <div className="hero-left">
                  <AnimatedHeroTitle />
                </div>
                <div className="hero-desc">
                  <div className="hero-profile">
                    <span className="hero-role">Fashion Designer</span>
                    <span className="hero-name">junghwa.HWANG</span>
                    <div className="hero-motto">
                      <span className="hero-motto-ko">
                        차곡차곡 쌓인 시간으로 신뢰를 짓고,<br className="mobile-only-br" />
                        온전한 책임감으로 내일을 빚어냅니다.<br />
                        깨어있는 감각으로 늘 현장과 호흡하겠습니다.
                      </span>
                      <span className="hero-motto-en">
                        We build trust through the steady accumulation of time<br />
                        and shape tomorrow with unwavering responsibility.<br />
                        We will always stay attuned to the field with keen awareness.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-bg"></div>
          <div className="about-container">
            <h2 className="about-title">About Me</h2>
            <div className="about-info-grid">
              <div className="info-block">
                <h3 className="info-title">인적사항</h3>
                <div className="info-row"><span className="info-label">이 름 :</span><span>황정화</span></div>
                <div className="info-row"><span className="info-label">나 이 :</span><span>1979.07.</span></div>
                <div className="info-row"><span className="info-label">거주지 :</span><span>서울시 강북구</span></div>
                <div className="info-row"><span className="info-label">휴대폰 :</span><span>010.5331.7174</span></div>
                <div className="info-row"><span className="info-label">이메일 :</span><span>jjanga110279@gmail.com</span></div>
              </div>
              <div className="info-block">
                <h3 className="info-title">학력 및 교육사항</h3>
                <div className="info-row">
                  <div className="info-date">25.10 - 26.04</div>
                  <span>생성형 AI를 활용한 반응형 웹콘텐츠 개발기획자 양성과정</span>
                </div>
                <div className="info-row" style={{ marginTop: "10px" }}>
                  <div className="info-date">96.03 - 98.2</div>
                  <span>신경여자실업고 의상학과 졸업</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="work-section">
          <div className="work-header">
            <h2>A scene from my<br />project the <span>result</span></h2>
          </div>
          <div className="projects-grid">
            <a href="https://jjanga110279-del.github.io/project-A/" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image"><img src={projectA} alt="Project-A" /></div>
              <div className="project-info">
                <span className="project-category">Html,Css 홈화면 디자인</span>
                <h3 className="project-title">Project-A</h3>
              </div>
            </a>
            <a href="https://pepi-a.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image"><img src={projectB} alt="Project-B" /></div>
              <div className="project-info">
                <span className="project-category">React(Tailwind) 쇼핑몰 디자인</span>
                <h3 className="project-title">Project-B</h3>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/19EDcxX4a-qSoU7hoAcRuP1uV2Y3g_L0W/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image"><img src={projectC} alt="Project-C" /></div>
              <div className="project-info">
                <span className="project-category">Ai 기반 영상 제작</span>
                <h3 className="project-title">Project-C</h3>
              </div>
            </a>
            <a href="https://www.figma.com/proto/fHdlFl8mWWusKvY2j1Io1d/%EC%86%8C%EC%9A%B8%EB%B8%94%EB%A0%8C%EB%93%9C-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%8C%EC%9D%BC-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?page-id=223%3A2021&node-id=453-721&p=f&viewport=412%2C1223%2C0.14&t=wVTWxVrCVKXR1Cza-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=522%3A3226" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image"><img src={projectD} alt="Team Project" /></div>
              <div className="project-info">
                <span className="project-category">앱 리디자인 프로토타입</span>
                <h3 className="project-title">Team Project</h3>
              </div>
            </a>
          </div>
        </section>

        {/* Creations Section: Designer's Taste */}
        <section className="creations-section">
          <div className="creations-container">
            <h2 className="creations-title">Design<br />Sketch</h2>
            <div className="creations-list">
              {[card, card1, card2, card3, card4, card5, card6, card7, card8, card9].map((img, i) => (
                <div key={i} className={`creation-card c-${i}`}>
                  <img src={img} alt={`Creation ${i}`} className="creation-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creations Section: Real Work Log */}
        <section className="creations-section work-log-section">
          <div className="creations-container">
            <h2 className="creations-title">Real<br />Work Log</h2>
            <div className="creations-list">
              {[work1, work2, work3, work4, work5, work6, work7, work8, work9, work10].map((img, i) => (
                <div key={i} className={`creation-card w-${i}`}>
                  <img src={img} alt={`Work ${i}`} className="creation-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life Section */}
        <section className="life-section">
          <h2 className="life-title"><span>My life</span> beyond Pixels</h2>
          <div className="gallery-container">
            <div className="gallery-track">
              {[life1, life2, life3, life4, life5, life6, life7, life8].map((img, i) => (
                <div key={i} className={`gallery-item ${i % 2 === 0 ? 'g-odd' : 'g-even'}`}>
                  <img src={img} alt={`Life ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-links-grid">
            <div className="footer-col">
              <h3 className="footer-col-title">Explore</h3>
              <div className="footer-link-list">
                <a href="#home" className="footer-link">Home</a>
                <a href="#work" className="footer-link">Projects</a>
                <a href="#about" className="footer-link">About</a>
              </div>
            </div>
            <div className="footer-col contact-col">
              <h3 className="footer-col-title">Quick Message</h3>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="user_name" placeholder="Name" required className="contact-input" />
                <input type="email" name="user_email" placeholder="Email" required className="contact-input" />
                <textarea name="message" placeholder="Message" required className="contact-textarea" />
                <button type="submit" className="contact-submit-btn">Send Message</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© Copyright 2026 by Junghwa.Hwang</span>
            <a href="mailto:jjanga110279@gmail.com">jjanga110279@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

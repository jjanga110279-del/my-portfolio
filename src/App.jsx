import React, { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

import { avatar, projectA, projectB, projectDmart, projectC, projectD, life1, life2, life3, life4, life5, life6, life7, life8, card, card1, card2, card3, card4, card5, card6, card7 } from "./assets/images";

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const form = useRef();

  const handleLinkClick = (e) => {
    e.preventDefault();
    alert("현재 지원하지 않는 링크입니다.");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 이 부분의 ID들은 나중에 EmailJS 대시보드에서 확인 후 교체해야 합니다.
    emailjs.sendForm(
      "YOUR_SERVICE_ID",   // 서비스 ID
      "YOUR_TEMPLATE_ID",  // 템플릿 ID
      form.current,
      "YOUR_PUBLIC_KEY"    // 공개 키
    )
      .then((result) => {
          console.log(result.text);
          alert("이메일이 성공적으로 전송되었습니다!");
          e.target.reset(); // 폼 초기화
      }, (error) => {
          console.log(error.text);
          alert("전송 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
      });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`portfolio-app ${scrolled ? "is-scrolled" : ""}`}>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <a href="#home" className={`nav-avatar ${scrolled ? "visible" : ""}`}>
            <img src={avatar} alt="Avatar" className="avatar-img" />
            <span>황정화</span>
          </a>
          <div className="nav-links">
            <a href="#work" className="nav-link">
              Projects
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#" onClick={handleLinkClick} className="nav-resume-btn">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className={`hero-avatar-wrapper ${scrolled ? "hidden" : ""}`}>
              <img src={avatar} alt="Avatar" className="hero-large-avatar" />
            </div>

            <div className="hero-text-container">
              <span className="hero-subtitle"></span>
              <div className="hero-text-row">
                <div className="hero-left">
                  <h1 className="hero-title">
                    <span>믿음은 촘촘하게</span>
                    <span>내일은 당당하게</span>
                  </h1>
                </div>
                <div className="hero-desc">
                  <div className="hero-profile">
                    <span className="hero-role">Fashion Designer</span>
                    <span className="hero-name">junghwa.HWANG</span>
                    <div className="hero-motto">
                      <span className="hero-motto-ko">시간의 매듭으로 신뢰를 짓고, 주인의식의 색으로 내일을 디자인합니다.</span>
                      <span className="hero-motto-en">
                        We build trust through the knots of time, 
                        <br />
                        and design tomorrow with the colors of ownership.
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
                <div className="info-row">
                  <span className="info-label">이 름 :</span>
                  <span>황정화</span>
                </div>
                <div className="info-row">
                  <span className="info-label">나 이 :</span>
                  <span>1979.07.</span>
                </div>
                <div className="info-row">
                  <span className="info-label">거주지 :</span>
                  <span>서울시 강북구</span>
                </div>
                <div className="info-row">
                  <span className="info-label">휴대폰 :</span>
                  <span>010.5331.7174</span>
                </div>
                <div className="info-row">
                  <span className="info-label">이메일 :</span>
                  <span>jjanga110279@gmail.com</span>
                </div>
              </div>

              <div className="info-block">
                <h3 className="info-title">학력 및 교육사항</h3>
                <div className="info-row">
                  <div className="info-date">25.10 - 26.04</div>
                  <span>생성형 AI를 활용한 반응형 웹콘텐츠(영상제작&코딩)<br/>
                       개발기획자 양성과정</span>
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
            <h2>
              A scene from my
              <br />
              project the <span>result</span>
            </h2>
          </div>

          <div className="projects-grid">
            <a href="https://jjanga110279-del.github.io/project-A/" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image">
                <img src={projectA} alt="Project-A" />
              </div>
              <div className="project-info">
                <span className="project-category">Html,Css 홈화면 디자인</span>
                <h3 className="project-title">Project-A</h3>
              </div>
            </a>

            <a href="https://pepi-a.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image">
                <img src={projectB} alt="Project-B" />
              </div>
              <div className="project-info">
                <span className="project-category">React,Python 쇼핑몰 디자인</span>
                <h3 className="project-title">Project-B</h3>
              </div>
            </a>

            <a href="https://drive.google.com/file/d/19EDcxX4a-qSoU7hoAcRuP1uV2Y3g_L0W/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image">
                <img src={projectC} alt="Project-C" />
              </div>
              <div className="project-info">

                <span className="project-category">Ai 기반 크록스영상 제작</span>
                <h3 className="project-title">Project-C</h3>
              </div>
            </a>

            <a href="https://www.figma.com/proto/fHdlFl8mWWusKvY2j1Io1d/%EC%86%8C%EC%9A%B8%EB%B8%94%EB%A0%8C%EB%93%9C-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%8C%EC%9D%BC-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?page-id=223%3A2021&node-id=453-721&p=f&viewport=412%2C1223%2C0.14&t=wVTWxVrCVKXR1Cza-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=522%3A3226" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image">
                <img src={projectD} alt="Soul Blend Prototype" />
              </div>
              <div className="project-info">
                <span className="project-category">소울블렌드 앱 리디자인 프로토타입</span>
                <h3 className="project-title">Team Project</h3>
              </div>
            </a>
          </div>

          <a href="#work" className="view-more-btn">
            View all Projects
          </a>
        </section>

        {/* Curious Creations Section */}
        <section className="creations-section">
          <div className="creations-container">
            <h2 className="creations-title">
              Fashion
              <br />
              Schematization
            </h2>

            <div className="creations-list">
              <div className="creation-card c">
                <img src={card} alt="Card" className="creation-img" />
              </div>
              <div className="creation-card c-1">
                <img src={card1} alt="Card 1" className="creation-img" />
              </div>
              <div className="creation-card c-2">
                <img src={card2} alt="Card 2" className="creation-img" />
              </div>
              <div className="creation-card c-3">
                <img src={card3} alt="Card 3" className="creation-img" />
              </div>
              <div className="creation-card c-4">
                <img src={card4} alt="Card 4" className="creation-img" />
              </div>
              <div className="creation-card c-5">
                <img src={card5} alt="Card 5" className="creation-img" />
              </div>
              <div className="creation-card c-4">
                <img src={card6} alt="Card 6" className="creation-img" />
              </div>
              <div className="creation-card c-2">
                <img src={card7} alt="Card 7" className="creation-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Life Beyond Pixels Section */}
        <section className="life-section">
          <h2 className="life-title">
            <span>My life</span> beyond Pixels
          </h2>
          <div className="gallery-container">
            <div className="gallery-track">
              <div className="gallery-item g-odd">
                <img src={life1} alt="Life 1" />
              </div>
              <div className="gallery-item g-even">
                <img src={life2} alt="Life 2" />
              </div>
              <div className="gallery-item g-odd">
                <img src={life3} alt="Life 3" />
              </div>
              <div className="gallery-item g-even">
                <img src={life4} alt="Life 4" />
              </div>
              <div className="gallery-item g-odd">
                <img src={life5} alt="Life 5" />
              </div>
              <div className="gallery-item g-even">
                <img src={life6} alt="Life 6" />
              </div>
              <div className="gallery-item g-odd">
                <img src={life7} alt="Life 7" />
              </div>
              <div className="gallery-item g-even">
                <img src={life8} alt="Life 8" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-links-grid">
            <div className="footer-col">
              <h3 className="footer-col-title">Get in Touch</h3>
              <div className="footer-link-list">
                <a href="#" onClick={handleLinkClick} className="footer-link">
                  LinkedIn
                </a>
                <a href="#" onClick={handleLinkClick} className="footer-link">
                  Behance
                </a>
                <a href="#" onClick={handleLinkClick} className="footer-link">
                  Instagram
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Explore</h3>
              <div className="footer-link-list">
                <a href="#home" className="footer-link">
                  Home
                </a>
                <a href="#work" className="footer-link">
                  Projects
                </a>
                <a href="#about" className="footer-link">
                  About
                </a>
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

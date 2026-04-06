import React, { useEffect, useRef } from "react";
import "../section5/style.scss";

const Section5 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) =>
              el.classList.add("in-view")
            );
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section5" id="contact" ref={sectionRef}>
      <div className="section5__inner">
        {/* 헤더 */}
        <div className="section5__header reveal">
          <span className="section5__label">05</span>
          <h2 className="section5__title">CONTACT</h2>
          <div className="section5__line" />
        </div>

        {/* 메인 콘텐츠 */}
        <div className="section5__body">
          <div className="section5__text reveal">
            <p className="section5__message">
              저의 포트폴리오를 읽어주셔서 감사합니다.
            </p>
            <p className="section5__sub">
              배려와 소통, 효율적인 협업을 통해 성장하는
              <br />
              웹 퍼블리셔를 찾고계신다면 메일을 보내주세요.
            </p>

            <a
              href="mailto:your@email.com"
              className="section5__mail-btn reveal"
            >
              <span className="section5__mail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l9 6 9-6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>your@email.com</span>
              <span className="section5__mail-arrow">→</span>
            </a>
          </div>

          {/* 오른쪽 장식 텍스트 */}
          <div className="section5__deco reveal">
            <div className="section5__deco-big">LET'S</div>
            <div className="section5__deco-big section5__deco-big--outline">WORK</div>
            <div className="section5__deco-big">TOGETHER</div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="section5__footer">
        <div className="section5__footer-inner">
          <p className="section5__footer-copy">
            상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
          </p>
          <p className="section5__footer-right">
            © 2024 Hong_Gil_Dong. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Section5;

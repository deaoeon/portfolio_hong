import React, { useEffect, useRef, useState } from "react";
import "../section4/style.scss";

const portfolioItems = [
  {
    id: 1,
    title: "FORM GUNG",
    category: "CLONE CODING",
    desc: "프로젝트 궁에서 온",
    url: "https://from-gung-project-three.vercel.app/",
    num: "01",
    roles: ["팀 리더", "메인 레이아웃 설계", "GSAP 애니메이션 구현", "반응형 작업"],
  },
  {
    id: 2,
    title: "PROJECT CASETIFY",
    category: "CLONE CODING",
    desc: "케이스티파이 랜딩 페이지 리뉴얼",
    url: "https://team-project-casetify-eight.vercel.app/",
    num: "02",
    roles: ["K-Content Lineup 섹션 제작", "삼성, 애플, ACC 섹션 제작", "CSS 애니메이션"],
  },
  {
    id: 3,
    title: "IMWEB",
    category: "CLONE CODING",
    desc: "아임웹 랜딩 페이지 클론 코딩",
    url: "https://gygma10.mycafe24.com/portfolio/3.Imweb/index.html",
    num: "03",
    roles: ["전체 단독 작업", "섹션별 레이아웃 구현", "슬라이더 기능 개발"],
  },
  {
    id: 4,
    title: "MGCOFFEE",
    category: "CLONE CODING",
    desc: "카페 브랜드 클론 코딩",
    url: "https://gygma10.mycafe24.com/portfolio/4.Mgcoffee/index.html",
    num: "04",
    roles: ["전체 단독 작업", "브랜드 무드 UI 설계", "메뉴 섹션 인터랙션"],
  },
];

const Section4 = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("in-view"), i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section4" id="portfolio" ref={sectionRef}>
      <div className="section4__inner">
        <div className="section4__header reveal">
          <h2 className="section4__title">PORTFOLIO</h2>
          <div className="section4__line" />
        </div>

        <div className="section4__category-tag reveal">LIST</div>

        <div className="section4__list">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`section4__item reveal ${hoveredId === item.id ? "hovered" : ""}`}
            >
              <span className="section4__item-num">{item.num}</span>
              <div className="section4__item-info">
                <h3 className="section4__item-title">{item.title}</h3>
                <p className="section4__item-desc">{item.desc}</p>
              </div>
              <div className="section4__item-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* 역할 드롭다운 */}
              <div className="section4__item-roles">
                <div className="section4__item-roles-inner">
                  <span className="section4__roles-label">ROLE</span>
                  <ul className="section4__roles-list">
                    {item.roles.map((role, i) => (
                      <li key={i} className="section4__roles-tag">{role}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="section4__item-bar" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
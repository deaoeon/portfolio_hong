import React, { useEffect, useRef, useState } from "react";
import "../section4/style.scss";

const portfolioItems = [
  {
    id: 1,
    title: "GENESIS",
    category: "CLONE CODING",
    desc: "자동차 브랜드 제네시스 클론 코딩",
    url: "https://gygma10.mycafe24.com/portfolio/1.Genesis/index.html",
    num: "01",
  },
  {
    id: 2,
    title: "CKDCOS",
    category: "CLONE CODING",
    desc: "화장품 브랜드 클론 코딩",
    url: "https://gygma10.mycafe24.com/portfolio/2.Ckdcos/index.html",
    num: "02",
  },
  {
    id: 3,
    title: "IMWEB",
    category: "CLONE CODING",
    desc: "아임웹 랜딩 페이지 클론 코딩",
    url: "https://gygma10.mycafe24.com/portfolio/3.Imweb/index.html",
    num: "03",
  },
  {
    id: 4,
    title: "MGCOFFEE",
    category: "CLONE CODING",
    desc: "카페 브랜드 클론 코딩",
    url: "https://gygma10.mycafe24.com/portfolio/4.Mgcoffee/index.html",
    num: "04",
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
        {/* 헤더 */}
        <div className="section4__header reveal">
          <h2 className="section4__title">PORTFOLIO</h2>
          <div className="section4__line" />
        </div>

        <div className="section4__category-tag reveal">LIST</div>

        {/* 포트폴리오 목록 */}
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
              <div className="section4__item-bar" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;

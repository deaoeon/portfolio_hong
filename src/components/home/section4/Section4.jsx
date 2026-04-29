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
    title: "TRIPLE",
    category: "APP REDESIGN",
    desc: "트리플 앱 리디자인",
    url: "https://www.figma.com/design/KrYmp0JBdcu9Z7QXux044g/%ED%8A%B8%EB%A6%AC%ED%94%8C-%EC%95%B1%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8_%EC%B5%9C%EC%A2%85?node-id=0-1&t=SqGWjQtT5yGEBVMK-1",
    num: "03",
    roles: ["메인 페이지", "로그인 페이지", "인트로 페이지", "메뉴 / 버튼 디자인" ],
  },
  {
    id: 4,
    title: "SNS DESIGN",
    category: "SNS DESIGN",
    desc: "SNS 광고 디자인",
    url: "https://www.figma.com/design/5LM06FAwfTtArET9o6aGGf/SNS-%EA%B4%91%EA%B3%A0%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=CtqdK4DoDFLi1v76-1",
    num: "04",
    roles: ["SNS 노출 배너", "업체와의 소통"],
  },
  {
    id: 5,
    title: "UNICEF",
    category: "UNICEF REDESIGN",
    desc: "유니세프 웹 리디자인",
    url: "https://www.figma.com/design/gfgxfZkmPbegpnxnqg2kzt/%EC%9C%A0%EB%8B%88%EC%84%B8%ED%94%84-%EC%9B%B9-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=ECqxMU6zghZ4ifR8-1",
    num: "05",
    roles: ["메인 섹션 제작", "소식 섹션 제작", "버튼 디자인"],
  },
  {
    id: 6,
    title: "UNIQLO",
    category: "UNIQLO APP REDESIGN",
    desc: "유니클로 앱 리디자인",
    url: "https://www.figma.com/design/QT6bwmwIjb2Tr5752OFdQ7/%EC%9C%A0%EB%8B%88%ED%81%B4%EB%A1%9C-%EC%95%B1-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=CrlPxseh5aLp3tCo-1",
    num: "06",
    roles: ["메인 페이지 제작", "검색 페이지 제작", "제품 / 상세 페이지 제작" , "네비게이션 바 제작"],
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
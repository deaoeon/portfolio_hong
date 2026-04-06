import React, { useState, useEffect, useRef } from "react";
import "../section3/style.scss";

const skills = [
  {
    id: "html",
    label: "HTML",
    level: 85,
    desc: "마크업 랭귀지를 준수하여 홈페이지를 구조적으로 작성하는 방법을 배웠으며 웹표준과 웹접근성을 준수하여 완성 할 수 있습니다. SEO 검색엔진 최적화를 통해 상위 노출하는 법을 배웠습니다.",
  },
  {
    id: "css",
    label: "CSS",
    level: 80,
    desc: "구조적 선택자를 활용하여 중첩되는 클래스와 지정된 아이디를 적절히 작업하여 반복적인 코딩을 줄였습니다. 최신 기술인 flex와 grid를 통해 반응형 홈페이지를 보다 효율적으로 만들 수 있습니다.",
  },
  {
    id: "js",
    label: "JavaScript",
    level: 70,
    desc: "jquery를 배우기 위한 단계의 필수적인 지식과 function의 응용 및 구조를 배워 코딩의 핵심 구조를 배웠습니다. 웹페이지 동작에 필요한 스크립트 언어를 작성 할 수 있습니다.",
  },
   {
    id: "react",
    label: "React",
    level: 70,
    desc: "컴포넌트 기반 구조를 이해하고 재사용 가능한 UI를 설계할 수 있습니다. state와 props를 활용한 데이터 흐름을 구현하며, 사용자 이벤트에 따른 동적인 인터페이스를 개발할 수 있습니다.",
  },
  {
    id: "jquery",
    label: "jQuery",
    level: 60,
    desc: "html과 css를 응용하여 쉽고 간단한 jquery를 사용하여 효과적인 기능을 만드는 것을 배웠습니다. 오픈 소스의 활용과 사용자의 이벤트에 따른 동작에 필요한 기능을 구현합니다.",
  },
  {
    id: "ps",
    label: "Photoshop",
    level: 90,
    desc: "사진 보정 및 편집, 상세페이지 등의 디자인 작업을 진행합니다.",
  },
  {
    id: "ai",
    label: "Illustrator",
    level: 80,
    desc: "팝업, 배너, 로고, 아이콘, 벡터이미지와 같은 작업을 진행합니다.",
  },
  {
    id: "itq",
    label: "ITQ Master",
    level: 90,
    desc: "Excel, PowerPoint, 한글 A등급 자격증을 취득하였고 3년간의 사무직 경력을 바탕으로 기본적인 문서작성 능력과 엑셀 함수 활용이 가능합니다.",
  },
];

const Section3 = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [barReady, setBarReady] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarReady(true);
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
    <section className="section3" id="skill" ref={sectionRef}>
      <div className="section3__inner">
        {/* 헤더 */}
        <div className="section3__header reveal">
          <h2 className="section3__title">SKILLS</h2>
          <div className="section3__line" />
        </div>

        <div className="section3__body">
          {/* 왼쪽: 스킬 탭 목록 */}
          <div className="section3__tabs reveal">
            {skills.map((skill, i) => (
              <button
                key={skill.id}
                className={`section3__tab ${activeSkill.id === skill.id ? "active" : ""}`}
                onClick={() => setActiveSkill(skill)}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="section3__tab-label">{skill.label}</span>
                <div className="section3__tab-bar">
                  <div
                    className="section3__tab-fill"
                    style={{ width: barReady ? `${skill.level}%` : "0%" }}
                  />
                </div>
                <span className="section3__tab-num">{skill.level}%</span>
              </button>
            ))}
          </div>

          {/* 오른쪽: 상세 패널 */}
          <div className="section3__panel reveal">
            <div className="section3__panel-header">
              <p className="section3__panel-tag">SKILL</p>
              <h3 className="section3__panel-name">{activeSkill.label}</h3>
            </div>

            <div className="section3__panel-level">
              <span className="section3__panel-level-label">LEVEL</span>
              <div className="section3__panel-bar">
                <div
                  className="section3__panel-fill"
                  style={{ width: barReady ? `${activeSkill.level}%` : "0%" }}
                />
              </div>
              <span className="section3__panel-pct">{activeSkill.level}%</span>
            </div>

            <p className="section3__panel-desc">{activeSkill.desc}</p>

            <div className="section3__panel-deco">
              {activeSkill.label.split("").map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;

import React, { useEffect, useRef } from "react";
import "../section2/style.scss";

const profileData = {
  name: "Hong Seokgyun",
  birth: "97. 03. 04",
  about:
    "사용자를 고려한 웹사이트를 만들어 나가는 목표를 가진 신입 웹 퍼블리셔입니다. 아직은 부족할지 모르지만 계속해서 배움을 갈구하고 새로운 것을 받아들이는 웹 퍼블리셔가 되겠습니다.",
  hobby: [
    "다양한 취미로 많은 교류회 참석",
    "영화 감상, 음악 감상",
  ],
  career: [
    "KFC 정자역점 매니저 1년 근무",
    "BABY 파스텔 디자인팀 3년 근무",
    "SNACOMMZ SNS 마케팅팀 1년 근무",
  ],
  license: [
    "컴퓨터그래픽스운용기능사 취득",
    "컴퓨터활용능력 2급 취득",
    "ITQ 마스터 취득",
    "GTQ 포토샵, 일러스트 1급 취득",
  ],
  education: ["신구대학교 졸업", "한양사이버대학교 졸업"],
};

const Section2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = sectionRef.current?.querySelectorAll(".reveal");
    targets?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section2" id="profile" ref={sectionRef}>
      <div className="section2__inner">
        {/* 섹션 헤더 */}
        <div className="section2__header reveal">
          <h2 className="section2__title">PROFILE</h2>
          <div className="section2__line" />
        </div>

        <div className="section2__body">
          {/* 왼쪽: 기본 정보 카드 */}
          <div className="section2__left reveal">
            <div className="section2__card">
              <div className="section2__avatar">
                <div className="section2__avatar-inner">
                  <span>GJ</span>
                </div>
              </div>
              <div className="section2__info">
                <p className="section2__info-name">{profileData.name}</p>
                <ul className="section2__info-list">
                  <li>
                    <span className="key">생년월일</span>
                    <span className="val">{profileData.birth}</span>
                  </li>

                </ul>
              </div>
              <div className="section2__about">
                <p className="section2__about-label">ABOUT ME</p>
                <p className="section2__about-text">{profileData.about}</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 상세 정보 */}
          <div className="section2__right">
            <div className="section2__detail reveal">
              <h3 className="section2__detail-title">MY HOBBY</h3>
              <ul>
                {profileData.hobby.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="section2__detail reveal">
              <h3 className="section2__detail-title">MY CAREER</h3>
              <ul>
                {profileData.career.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="section2__detail reveal">
              <h3 className="section2__detail-title">MY LICENSE</h3>
              <ul>
                {profileData.license.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="section2__detail reveal">
              <h3 className="section2__detail-title">MY EDUCATION</h3>
              <ul>
                {profileData.education.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

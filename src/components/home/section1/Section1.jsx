import React, { useEffect, useRef } from "react";
import "../section1/style.scss/";

const Section1 = () => {
  return (
<section className="section1" id="home">
  <div className="section1__inner">
    
    <div className="section1__left">
      <h1 className="section1__title">
        새로운 것에 도전하고 <br />
        <strong>성장하는 홍석균입니다.</strong>
      </h1>

      <p className="section1__desc">
        새로운 분야에 도전하여 끊임없이 성장하며<br />
        사용자 경험을 중요하게 생각하는 퍼블리셔가 되겠습니다.
      </p>
      <p className="section1__desc2">
        언제나 소통을 중요시 생각하며 팀원들과 협력해<br />
        최고를 만들어 낼 수 있는 톱니바퀴입니다.
      </p>
    </div>

    <div className="section1__right">
      <img src="/portfolio_hong/images/hong2.jpg" alt="profile" />
    </div>

  </div>
</section>
  );
};

export default Section1;

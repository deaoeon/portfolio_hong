import React, { useState, useEffect } from "react";
import "../header/NavBar.scss";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "PROFILE", href: "#profile" },
  { label: "SKILL", href: "#skill" },
  { label: "PORTFOLIO", href: "#portfolio" },
  // { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // 현재 섹션 감지
      const ids = ["home", "profile", "skill", "portfolio",];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
        >
          <span className="navbar__logo-bracket">[</span>
          Hong
          <span className="navbar__logo-bracket">]</span>
        </a>

        {/* 데스크탑 메뉴 */}
        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`navbar__link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* 모바일 드로어 */}
      <div className={`navbar__drawer ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

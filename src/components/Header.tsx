import { useState } from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './Header.module.css';
import Logo from "./images/logo.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState('inicio');

  const handleNavClick = (section: string) => {
    setActiveLink(section);
    scrollToSection(section);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo} onClick={() => handleNavClick('inicio')}>
          <img src={Logo} alt="Urban Lytica Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Urban Lytica</span>
        </a>
        <nav className={styles.nav}>
          <span
            className={`${styles.navLink} ${activeLink === 'inicio' ? styles.active : ''}`}
            onClick={() => handleNavClick('inicio')}
          >
            Inicio
          </span>
          <span
            className={`${styles.navLink} ${activeLink === 'servicios' ? styles.active : ''}`}
            onClick={() => handleNavClick('servicios')}
          >
            Servicios
          </span>
          <span
            className={`${styles.navLink} ${activeLink === 'proyectos' ? styles.active : ''}`}
            onClick={() => handleNavClick('proyectos')}
          >
            Proyectos
          </span>
          <span
            className={`${styles.navLink} ${activeLink === 'testimonios' ? styles.active : ''}`}
            onClick={() => handleNavClick('testimonios')}
          >
            Testimonios
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
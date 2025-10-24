import { scrollToSection } from '../utils/scrollToSection';
import styles from './Hero.module.css';

const Hero = () => {
  const handleScrollToProjects = () => {
    scrollToSection('proyectos');
  };

  return (
    <section id="inicio" className={styles.hero}>
      <img
        src="%PUBLIC_URL%/images/hero-background.jpg"
        alt="Urban cityscape"
        className={styles.background}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.headlineContainer}>
          <h1 className={`${styles.headline} heading-xl`}>
            Hacemos realidad proyectos que transforman comunidades
          </h1>
          <p className={`${styles.subheadline} text-xl`}>
            Gestionamos recursos, nos conectamos con empresas y te asesoramos sobre el impacto de tu proyecto para hacerlo realidad.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonPrimary}>Dar el siguiente paso</button>
          <button className={styles.buttonSecondary} onClick={handleScrollToProjects}>
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
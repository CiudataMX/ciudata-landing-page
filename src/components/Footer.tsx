import styles from './Footer.module.css';
import Logo from "./images/logo.png";

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.logoSection}>
            <img src={Logo} alt="Urban Lytica Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Urban Lytica</span>
          </div>
          <p className={styles.tagline}>
            "Transformando el futuro urbano de tu ciudad, un proyecto a la vez"
          </p>
          <hr className={styles.divider} />
          <p className={styles.copyright}>© 2025 Ciudata. Todos los derechos reservados.</p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contacto</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>Email: ciudata.mx@gmail.com</p>
            <p className={styles.contactItem}>Teléfono: (662) 427-2598</p>
            <p className={styles.contactItem}>Dirección: Hermosillo, Sonora</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
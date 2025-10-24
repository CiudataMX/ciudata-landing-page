import styles from './FeaturedProject.module.css';

const FeaturedProject = () => {
  return (
    <section id="proyectos" className={styles.project}>
      <div className={styles.container}>
        <h2 className={`${styles.title} heading-lg`}>Proyecto Actual</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/project-meeting.png"
              alt="Team meeting for Carretera Juan de Garay project"
              className={styles.image}
            />
          </div>
          <div className={styles.details}>
            <h3 className={`${styles.projectTitle} heading-lg`}>Hermosillo Tree Map</h3>
            <p className={`${styles.description} text-lg`}>
              Es una plataforma desarrollada para registrar, analizar y visualizar la cobertura vegetal de la ciudad. A través de mapas interactivos, el sistema muestra la ubicación, tipo y estado de cada árbol, así como su aprote ambiental (captura de CO2, retención de agua y ahorro energético).
            </p>
            
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/project-2.jpeg"
              alt="Team meeting for Carretera Juan de Garay project"
              className={styles.image}
            />
          </div>
          <div className={styles.details}>
            <h3 className={`${styles.projectTitle} heading-lg`}>Proyecto Tazajal - Ecozonas Caffenio</h3>
            <p className={`${styles.description} text-lg`}>
              Iniciativa orientada a transformar zonas urbanas en espacios verdes, seguros y de convivencia. Se busca renovar una zona estratégica de El Tazajal, frente a una iglesia y una primaria de alta afluencia, mediante la creación de una plaza-andador con áreas verdes, recreativas y comunitarias.
            </p>
            
          </div>
        </div>
        <button className={styles.button}>Ver más proyectos</button>
      </div>
    </section>
  );
};

export default FeaturedProject;
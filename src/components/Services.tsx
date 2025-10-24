import type { FC, ReactElement } from 'react';
import HardHatIcon from './icons/HardHatIcon';
import HandshakeIcon from './icons/HandshakeIcon';
import PieChartIcon from './icons/PieChartIcon';
import styles from './Services.module.css';

interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={`${styles.cardTitle} heading-md`}>{title}</h3>
      <p className={`${styles.cardDescription} text-md`}>{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <HardHatIcon width={43} height={34} color="#ffa433" />,
      title: 'Gestión',
      description: 'Coordinamos todo el proceso del proyecto, desde la idea inicial hasta su ejecución.',
    },
    {
      icon: <HandshakeIcon width={43} height={34} color="#debaba" />,
      title: 'Conexión',
      description:
        'Actuamos como puente entre tu idea y empresas, encontrando patrocinadores y aliados estratégicos para hacerla realidad.',
    },
    {
      icon: <PieChartIcon width={40} height={38} color="#33afe2" />,
      title: 'Asesoría',
      description:
        'Analizamos el impacto demográfico y social de tu proyecto para guiar cada decisión hacia el éxito.',
    },
  ];

  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} heading-lg`}>¿Qué hacemos?</h2>
          <p className={`${styles.subtitle} text-lg`}>
            Impulsamos tu idea conectándote con empresas y asesorándote en cada paso.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
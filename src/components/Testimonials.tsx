import { useState } from 'react';
import LeftArrowIcon from './icons/LeftArrowIcon';
import RightArrowIcon from './icons/RightArrowIcon';
import StarIcon from './icons/StarIcon';
import styles from './Testimonials.module.css';
import TestimonialImg from "/images/emma-avatar.jpg";

interface Testimonial {
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Marisol Ramirez',
      avatar: TestimonialImg,
      review:
        'Mi sueño es tener áreas verdes para los niños de aquí de la comunidad. Es un sueño que tengo desde hace mucho tiempo, una inquietud.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={`${styles.title} heading-lg`}>Testimonios</h2>
        <div className={styles.carouselWrapper}>
          <button className={styles.navButton} onClick={handlePrevious} aria-label="Previous testimonial">
            <LeftArrowIcon width={51} height={51} color="#4c515b" style={{ width: '100%', height: 'auto' }} />
          </button>
          <div className={styles.card}>
            <div className={styles.header}>
              <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className={styles.avatar} />
              <h3 className={`${styles.name} heading-md`}>{currentTestimonial.name}</h3>
            </div>
            <p className={`${styles.review} text-md`}>{currentTestimonial.review}</p>
            <div className={styles.rating}>
              {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
                <StarIcon key={index} width={21} height={20} color="#ffb354" />
              ))}
            </div>
          </div>
          <button className={styles.navButton} onClick={handleNext} aria-label="Next testimonial">
            <RightArrowIcon width={51} height={51} color="#009bdb" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const isMobile = window.innerWidth <= 768;
    const headerHeight = isMobile ? 71 : 92; // Adjusted header height for mobile
    const paddingOffset = isMobile ? 60 : 80; // Adjusted padding for mobile
    const totalOffset = headerHeight + paddingOffset;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
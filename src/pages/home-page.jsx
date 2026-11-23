import HeroSection from '../components/landing/hero-section';
import AboutMeSection from '../components/landing/about-me-section';
import SkillTreeSection from '../components/landing/skill-tree-section';
import ProjectsSection from '../components/landing/projects-section';
import ContactSection from '../components/landing/contact-section';

/**
 * Home 페이지 (Hero / About Me / Skill Tree / Projects / Contact 5개 섹션)
 *
 * Example usage:
 * <Route index element={ <HomePage /> } />
 */
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;

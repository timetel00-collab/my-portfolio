import SectionCard from '../components/ui/section-card';

/**
 * About Me 페이지
 *
 * Example usage:
 * <Route path="about" element={ <AboutPage /> } />
 */
function AboutPage() {
  return (
    <SectionCard
      id="about-page"
      title="About Me"
      description="About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다."
      bgColor="var(--color-bg-secondary)"
      accentColor="var(--color-secondary)"
      minHeight={ 320 }
    />
  );
}

export default AboutPage;

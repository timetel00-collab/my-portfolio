import SectionCard from '../ui/section-card';

/**
 * About Me 섹션 (Home 페이지)
 *
 * Example usage:
 * <AboutMeSection />
 */
function AboutMeSection() {
  return (
    <SectionCard
      id="about-me"
      title="About Me"
      description="여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다."
      bgColor="var(--color-bg-primary)"
      accentColor="var(--color-secondary)"
      minHeight={ 240 }
    />
  );
}

export default AboutMeSection;

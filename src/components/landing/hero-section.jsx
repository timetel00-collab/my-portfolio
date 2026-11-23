import SectionCard from '../ui/section-card';

/**
 * Hero 섹션 (Home 페이지)
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <SectionCard
      id="hero"
      title="Hero"
      description="여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
      bgColor="var(--color-bg-secondary)"
      accentColor="var(--color-primary)"
      minHeight={ 360 }
    />
  );
}

export default HeroSection;

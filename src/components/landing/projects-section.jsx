import SectionCard from '../ui/section-card';

/**
 * Projects 섹션 (Home 페이지)
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <SectionCard
      id="projects"
      title="Projects"
      description="여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다."
      bgColor="var(--color-bg-primary)"
      accentColor="var(--color-primary)"
      minHeight={ 240 }
    />
  );
}

export default ProjectsSection;

import SectionCard from '../components/ui/section-card';

/**
 * Projects 페이지
 *
 * Example usage:
 * <Route path="projects" element={ <ProjectsPage /> } />
 */
function ProjectsPage() {
  return (
    <SectionCard
      id="projects-page"
      title="Projects"
      description="Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다."
      bgColor="var(--color-bg-secondary)"
      accentColor="var(--color-primary)"
      minHeight={ 320 }
    />
  );
}

export default ProjectsPage;

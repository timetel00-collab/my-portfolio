import SectionCard from '../ui/section-card';

/**
 * Skill Tree 섹션 (Home 페이지)
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <SectionCard
      id="skill-tree"
      title="Skill Tree"
      description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
      bgColor="var(--color-bg-secondary)"
      accentColor="var(--color-accent)"
      minHeight={ 240 }
    />
  );
}

export default SkillTreeSection;

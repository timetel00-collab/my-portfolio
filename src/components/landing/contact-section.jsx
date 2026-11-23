import SectionCard from '../ui/section-card';

/**
 * Contact 섹션 (Home 페이지)
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <SectionCard
      id="contact"
      title="Contact"
      description="여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."
      bgColor="var(--color-bg-secondary)"
      accentColor="var(--color-secondary)"
      minHeight={ 240 }
    />
  );
}

export default ContactSection;

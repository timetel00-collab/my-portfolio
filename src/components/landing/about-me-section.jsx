import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';

/**
 * About Me 섹션 (Home 페이지) - 간단한 자기소개와 더 알아보기 버튼
 *
 * Example usage:
 * <AboutMeSection />
 */
function AboutMeSection() {
  return (
    <Box
      component="section"
      id="about-me"
      sx={ { width: '100%', bgcolor: 'var(--color-bg-primary)', py: { xs: 6, md: 10 } } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 }, textAlign: 'center' } }>
        <Box sx={ { width: 48, height: 4, bgcolor: 'var(--color-secondary)', borderRadius: 2, mx: 'auto', mb: 2 } } />
        <Box component="h2" sx={ { m: 0, mb: 2, color: 'var(--color-text-primary)', fontSize: { xs: '1.5rem', md: '2rem' } } }>
          About Me
        </Box>
        <Box
          component="p"
          sx={ { m: 0, mb: 4, color: 'var(--color-text-secondary)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7 } }
        >
          꼼꼼함과 호기심을 바탕으로 문제를 풀어 가는 개발자입니다.
          <br />
          작은 기능 하나도 사용하는 사람의 입장에서 다듬는 것을 좋아합니다.
        </Box>
        <Button
          component={ Link }
          to="/about"
          variant="outlined"
          size="large"
          sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)' } }
        >
          더 알아보기
        </Button>
      </Container>
    </Box>
  );
}

export default AboutMeSection;

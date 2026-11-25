import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack } from '@mui/material';

/**
 * Hero 섹션 (Home 페이지) - 이름, 한 줄 소개, 이동 버튼
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={ {
        width: '100%',
        bgcolor: 'var(--color-bg-secondary)',
        py: { xs: 8, md: 14 },
        textAlign: 'center',
      } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <Box sx={ { width: 48, height: 4, bgcolor: 'var(--color-primary)', borderRadius: 2, mx: 'auto', mb: 3 } } />
        <Box sx={ { color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 } }>
          PORTFOLIO
        </Box>
        <Box
          component="h1"
          sx={ {
            m: 0,
            mb: 2,
            color: 'var(--color-text-primary)',
            fontSize: { xs: '2.25rem', md: '3.5rem' },
            lineHeight: 1.2,
          } }
        >
          안녕하세요, 박태하입니다
        </Box>
        <Box
          component="p"
          sx={ {
            m: 0,
            mb: 4,
            color: 'var(--color-text-secondary)',
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
          } }
        >
          사용자 경험을 생각하며 React로 웹 서비스를 만듭니다.
        </Box>
        <Stack direction={ { xs: 'column', sm: 'row' } } spacing={ 2 } justifyContent="center">
          <Button component={ Link } to="/projects" variant="contained" size="large" disableElevation sx={ { fontWeight: 700 } }>
            프로젝트 보기
          </Button>
          <Button
            href="#contact"
            variant="outlined"
            size="large"
            sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)' } }
          >
            연락하기
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;

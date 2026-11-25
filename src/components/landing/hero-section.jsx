import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack } from '@mui/material';
import { imageUrl } from '../../utils/image-url';

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
        backgroundImage: `linear-gradient(rgba(20, 22, 26, 0.62), rgba(20, 22, 26, 0.62)), url(${ imageUrl('hero.jpg') })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 10, md: 18 },
        textAlign: 'center',
      } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <Box sx={ { width: 48, height: 4, bgcolor: 'var(--color-primary)', borderRadius: 2, mx: 'auto', mb: 3 } } />
        <Box sx={ { color: '#FFFFFF', opacity: 0.85, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 } }>
          PORTFOLIO
        </Box>
        <Box
          component="h1"
          sx={ {
            m: 0,
            mb: 2,
            color: '#FFFFFF',
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
            color: 'rgba(255, 255, 255, 0.88)',
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
            sx={ { color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.7)', '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.12)' } } }
          >
            연락하기
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;

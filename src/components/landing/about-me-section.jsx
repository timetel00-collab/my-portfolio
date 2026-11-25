import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { imageUrl } from '../../utils/image-url';

/**
 * About Me 섹션 (Home 페이지) - 사진과 간단한 자기소개, 더 알아보기 버튼
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
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <Grid container spacing={ { xs: 3, md: 6 } } alignItems="center">
          <Grid size={ { xs: 12, md: 5 } }>
            <Box
              component="img"
              src={ imageUrl('about.jpg') }
              alt="소개 사진"
              loading="lazy"
              sx={ {
                display: 'block',
                width: '100%',
                maxHeight: { xs: 320, md: 420 },
                objectFit: 'cover',
                borderRadius: 2,
                border: '1px solid var(--color-border)',
              } }
            />
          </Grid>
          <Grid size={ { xs: 12, md: 7 } }>
            <Box sx={ { width: 48, height: 4, bgcolor: 'var(--color-secondary)', borderRadius: 2, mb: 2 } } />
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutMeSection;

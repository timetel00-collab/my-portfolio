import { Link } from 'react-router-dom';
import { Box, Button, Card, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const PROJECTS = [
  { title: '세파티 가구', desc: '가구 쇼핑 + 커뮤니티 웹앱', tag: 'React · Supabase', color: '#6B7A8F' },
  { title: 'My Portfolio', desc: '반응형 포트폴리오 사이트', tag: 'React · MUI', color: '#D9B98F' },
  { title: '견적 문의 시스템', desc: '문의 접수와 첨부파일 저장', tag: 'Supabase · RLS', color: '#E8343F' },
  { title: 'UI 테스트', desc: '컴포넌트 실험 프로젝트', tag: 'Vite · React', color: '#2B2B2B' },
];

/**
 * Projects 섹션 (Home 페이지) - 대표작 썸네일 4개와 더 보기 버튼
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <Box
      component="section"
      id="projects"
      sx={ { width: '100%', bgcolor: 'var(--color-bg-primary)', py: { xs: 6, md: 10 } } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Box sx={ { textAlign: 'center', mb: { xs: 3, md: 5 } } }>
          <Box sx={ { width: 48, height: 4, bgcolor: 'var(--color-accent)', borderRadius: 2, mx: 'auto', mb: 2 } } />
          <Box component="h2" sx={ { m: 0, color: 'var(--color-text-primary)', fontSize: { xs: '1.5rem', md: '2rem' } } }>
            Projects
          </Box>
        </Box>
        <Grid container spacing={ { xs: 2, md: 3 } }>
          { PROJECTS.map(({ title, desc, tag, color }) => (
            <Grid key={ title } size={ { xs: 12, sm: 6, md: 3 } }>
              <Card elevation={ 0 } sx={ { height: '100%', border: '1px solid var(--color-border)', borderRadius: 2 } }>
                <Box
                  role="img"
                  aria-label={ `${ title } 썸네일` }
                  sx={ {
                    height: 140,
                    bgcolor: color,
                    display: 'grid',
                    placeItems: 'center',
                    color: '#FFFFFF',
                    fontSize: '2rem',
                    fontWeight: 700,
                  } }
                >
                  { title.charAt(0) }
                </Box>
                <CardContent>
                  <Box sx={ { fontWeight: 700, color: 'var(--color-text-primary)', mb: 0.5 } }>{ title }</Box>
                  <Box sx={ { fontSize: '0.9rem', color: 'var(--color-text-secondary)', mb: 1 } }>{ desc }</Box>
                  <Box sx={ { fontSize: '0.8rem', color: 'var(--color-text-muted)' } }>{ tag }</Box>
                </CardContent>
              </Card>
            </Grid>
          )) }
        </Grid>
        <Box sx={ { textAlign: 'center', mt: { xs: 3, md: 5 } } }>
          <Button
            component={ Link }
            to="/projects"
            variant="outlined"
            size="large"
            sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)' } }
          >
            더 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectsSection;

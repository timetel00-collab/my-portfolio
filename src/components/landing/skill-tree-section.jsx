import { Box, Container, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid';

const SKILLS = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'MUI', level: 75 },
  { name: 'Supabase', level: 60 },
  { name: 'Git / GitHub', level: 70 },
  { name: 'HTML / CSS', level: 85 },
];

/**
 * Skill Tree 섹션 (Home 페이지) - 기술 스택을 프로그레스바로 시각화
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <Box
      component="section"
      id="skill-tree"
      sx={ { width: '100%', bgcolor: 'var(--color-bg-secondary)', py: { xs: 6, md: 10 } } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <Box sx={ { textAlign: 'center', mb: { xs: 3, md: 5 } } }>
          <Box sx={ { width: 48, height: 4, bgcolor: 'var(--color-primary)', borderRadius: 2, mx: 'auto', mb: 2 } } />
          <Box component="h2" sx={ { m: 0, color: 'var(--color-text-primary)', fontSize: { xs: '1.5rem', md: '2rem' } } }>
            Skill Tree
          </Box>
        </Box>
        <Grid container spacing={ { xs: 2, md: 4 } }>
          { SKILLS.map(({ name, level }) => (
            <Grid key={ name } size={ { xs: 12, sm: 6 } }>
              <Box sx={ { display: 'flex', justifyContent: 'space-between', mb: 0.75, color: 'var(--color-text-primary)', fontWeight: 600 } }>
                <Box component="span">{ name }</Box>
                <Box component="span" sx={ { color: 'var(--color-text-muted)', fontWeight: 400 } }>{ level }%</Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={ level }
                aria-label={ `${ name } 숙련도` }
                sx={ {
                  height: 8,
                  borderRadius: 4,
                  bgcolor: 'var(--color-border)',
                  '& .MuiLinearProgress-bar': { bgcolor: 'var(--color-primary)', borderRadius: 4 },
                } }
              />
            </Grid>
          )) }
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;

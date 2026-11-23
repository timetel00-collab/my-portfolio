import { Box, Card, CardContent, Container } from '@mui/material';

/**
 * 섹션 공통 카드 (페이지 중앙정렬 + 섹션 구분)
 *
 * Props:
 * @param {string} id - 섹션 앵커 id [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 텍스트 [Required]
 * @param {string} bgColor - 섹션 배경색 [Optional, 기본값: var(--color-bg-primary)]
 * @param {string} accentColor - 제목 위 포인트 라인 색 [Optional, 기본값: var(--color-primary)]
 * @param {number} minHeight - 카드 최소 높이(px) [Optional, 기본값: 200]
 *
 * Example usage:
 * <SectionCard id="hero" title="Hero" description="설명" />
 */
function SectionCard({
  id,
  title,
  description,
  bgColor = 'var(--color-bg-primary)',
  accentColor = 'var(--color-primary)',
  minHeight = 200,
}) {
  return (
    <Box
      component="section"
      id={ id }
      sx={ {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: bgColor,
        py: { xs: 4, md: 8 },
      } }
    >
      <Container maxWidth="md" sx={ { px: { xs: 2, md: 3 } } }>
        <Card
          elevation={ 0 }
          sx={ {
            bgcolor: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border)',
            borderRadius: 2,
            minHeight,
            display: 'flex',
            alignItems: 'center',
          } }
        >
          <CardContent sx={ { width: '100%', textAlign: 'center', p: { xs: 3, md: 5 } } }>
            <Box sx={ { width: 48, height: 4, bgcolor: accentColor, borderRadius: 2, mx: 'auto', mb: 2 } } />
            <Box
              component="h2"
              sx={ {
                m: 0,
                mb: 1.5,
                color: 'var(--color-text-primary)',
                fontSize: { xs: '1.5rem', md: '2rem' },
                lineHeight: 1.3,
              } }
            >
              { title }
            </Box>
            <Box
              component="p"
              sx={ {
                m: 0,
                color: 'var(--color-text-secondary)',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
              } }
            >
              { description }
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SectionCard;

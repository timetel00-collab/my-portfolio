import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { COBALT } from '../../utils/contact-info';
import ContactInfoCard from './contact-info-card';
import ContactForm from './contact-form';

const PANEL_SX = {
  height: '100%',
  p: { xs: 3, md: 4 },
  bgcolor: 'var(--color-bg-primary)',
  border: '1px solid var(--color-border)',
  borderRadius: 2,
};

const PANEL_TITLE_SX = {
  m: 0,
  mb: 3,
  pb: 2,
  fontSize: '1.15rem',
  color: 'var(--color-text-primary)',
  borderBottom: '1px solid var(--color-border)',
};

/**
 * Contact 섹션 (Home 페이지)
 * 좌측: 회사 연락처 / 우측: 견적 · 납품 문의 양식
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={ {
        width: '100%',
        bgcolor: 'var(--color-bg-secondary)',
        py: { xs: 4, md: 8 },
        '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: COBALT.main },
        '& .MuiInputLabel-root.Mui-focused': { color: COBALT.main },
        '& .MuiCheckbox-root.Mui-checked': { color: COBALT.main },
        '& :focus-visible': { outlineColor: COBALT.main },
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Box sx={ { maxWidth: 640, mb: { xs: 3, md: 5 } } }>
          <Box sx={ { width: 48, height: 4, bgcolor: COBALT.main, borderRadius: 2, mb: 2 } } />
          <Box
            component="h2"
            sx={ {
              m: 0,
              mb: 1.5,
              color: 'var(--color-text-primary)',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              lineHeight: 1.3,
            } }
          >
            Contact
          </Box>
          <Box
            component="p"
            sx={ { m: 0, color: 'var(--color-text-secondary)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 } }
          >
            견적 및 납품 상담을 남겨 주시면 담당자가 직접 회신드립니다.
          </Box>
        </Box>

        <Grid container spacing={ { xs: 2, md: 3 } }>
          <Grid size={ { xs: 12, md: 5 } }>
            <Box sx={ PANEL_SX }>
              <Box component="h3" sx={ PANEL_TITLE_SX }>회사 연락처</Box>
              <ContactInfoCard />
            </Box>
          </Grid>
          <Grid size={ { xs: 12, md: 7 } }>
            <Box sx={ PANEL_SX }>
              <Box component="h3" sx={ PANEL_TITLE_SX }>견적 문의</Box>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;

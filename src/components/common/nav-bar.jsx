import { NavLink } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

/**
 * 상단 네비게이션 (Home / About Me / Projects)
 * 활성 탭은 Primary 컬러 밑줄로 표시합니다.
 *
 * Example usage:
 * <NavBar />
 */
function NavBar() {
  return (
    <Box
      component="header"
      sx={ {
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      } }
    >
      <Container maxWidth="lg" sx={ { px: { xs: 2, md: 3 } } }>
        <Box
          component="nav"
          aria-label="주 메뉴"
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 64,
            gap: 2,
          } }
        >
          <Box
            sx={ {
              color: 'var(--color-secondary)',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            } }
          >
            My Portfolio
          </Box>
          <Box sx={ { display: 'flex', gap: { xs: 2, md: 4 } } }>
            { NAV_ITEMS.map(({ label, to }) => (
              <Box
                key={ to }
                component={ NavLink }
                to={ to }
                end={ to === '/' }
                sx={ {
                  py: 2.5,
                  color: 'var(--color-link)',
                  textDecoration: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 500,
                  borderBottom: '3px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                  '&:hover': { color: 'var(--color-link-hover)' },
                  '&.active': {
                    color: 'var(--color-link-hover)',
                    borderBottomColor: 'var(--color-primary)',
                  },
                } }
              >
                { label }
              </Box>
            )) }
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NavBar;

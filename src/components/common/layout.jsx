import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './nav-bar';

/**
 * 공통 레이아웃 (상단 네비게이션 + 페이지 영역)
 *
 * Example usage:
 * <Route element={ <Layout /> }>...</Route>
 */
function Layout() {
  return (
    <Box
      sx={ {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
      } }
    >
      <NavBar />
      <Box component="main" sx={ { flexGrow: 1, width: '100%' } }>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;

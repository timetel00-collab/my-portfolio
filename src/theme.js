import { createTheme } from '@mui/material/styles';

/**
 * 컬러 팔레트 디자인 시스템.md 의 값을 MUI 테마에 반영합니다.
 * (MUI 팔레트는 hex 값이 필요하므로 index.css 의 CSS 변수와 같은 값을 사용합니다.
 *  컴포넌트의 sx 에서는 다크모드 대응을 위해 var(--color-*) 를 직접 사용합니다.)
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#E8343F',
      light: '#F26B73',
      dark: '#C21F2A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B7A8F',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#555555',
    },
    divider: '#DDDDDD',
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;

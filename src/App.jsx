import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/layout';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ProjectsPage from './pages/projects-page';

/**
 * 앱 라우팅 정의 컴포넌트
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route index element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="projects" element={ <ProjectsPage /> } />
        <Route path="*" element={ <HomePage /> } />
      </Route>
    </Routes>
  );
}

export default App;

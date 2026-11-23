import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages 프로젝트 사이트(/my-portfolio/)에서 서비스되도록 base 지정
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
});

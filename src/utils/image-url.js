/**
 * public/images 아래 이미지의 실제 경로를 돌려줍니다. (GitHub Pages base 경로 대응)
 * @param {string} name - 파일명 (예: 'hero.jpg')
 * @returns {string} 이미지 URL
 */
export const imageUrl = (name) => `${ import.meta.env.BASE_URL }images/${ name }`;

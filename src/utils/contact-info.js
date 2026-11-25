/**
 * Contact 섹션에 표시되는 회사 정보
 * TODO: 아래 값은 예시입니다. 실제 회사 정보로 교체하세요.
 */
export const CONTACT_INFO = {
  phone: '02-0000-0000',
  email: 'contact@example.com',
  address: '서울특별시 OO구 OO로 123',
  hours: [
    { day: '평일', time: '09:00 – 18:00' },
    { day: '토요일', time: '10:00 – 15:00' },
    { day: '일·공휴일', time: '휴무' },
  ],
  /** 카카오톡 채널 상담 링크 (운영 시 입력, 비어 있으면 버튼 숨김) */
  kakaoUrl: '',
  naverMapUrl: `https://map.naver.com/p/search/${ encodeURIComponent('서울특별시 OO구 OO로 123') }`,
  /** SNS 링크 (비어 있으면 숨김) */
  instagramUrl: '',
  blogUrl: '',
};

export const CUSTOMER_TYPES = ['기업', '관공서', '일반 고객'];

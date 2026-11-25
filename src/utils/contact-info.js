/**
 * Contact 섹션에 표시되는 회사 정보
 * TODO: 영업시간은 임의 기본값입니다. 실제 시간으로 수정하세요. 카카오톡·SNS 링크는 미입력 (비어 있으면 화면에서 숨김)
 */
export const CONTACT_INFO = {
  phone: '010-8484-4841',
  email: 'timetel00@gmail.com',
  address: '부산 해운대구 센텀중앙로 97 센텀스카이비즈 A동',
  /** 예) { day: '평일', time: '09:00 – 18:00' } (비어 있으면 영업시간 줄 숨김) */
  hours: [
    { day: '평일', time: '09:00 – 18:00' },
    { day: '토·일·공휴일', time: '휴무' },
  ],
  /** 카카오톡 채널 상담 링크 (운영 시 입력, 비어 있으면 버튼 숨김) */
  kakaoUrl: '',
  naverMapUrl: `https://map.naver.com/p/search/${ encodeURIComponent('부산 해운대구 센텀중앙로 97 센텀스카이비즈 A동') }`,
  /** SNS 링크 (비어 있으면 숨김) */
  instagramUrl: '',
  blogUrl: '',
};

export const CUSTOMER_TYPES = ['기업', '관공서', '일반 고객'];

/** Contact 섹션 전용 코발트블루 컬러 */
export const COBALT = {
  main: '#0047AB',
  dark: '#003380',
  tint: '#EAF0FA',
};

import { Box, Button, IconButton, Stack } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { COBALT, CONTACT_INFO } from '../../utils/contact-info';

const ROW_ICON_SX = {
  flex: 'none',
  width: 40,
  height: 40,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  bgcolor: 'var(--color-bg-secondary)',
  color: 'var(--color-secondary)',
};

const LABEL_SX = { fontSize: '0.8rem', color: 'var(--color-text-muted)', mb: 0.25 };
const VALUE_SX = { fontWeight: 600, color: 'var(--color-text-primary)', textDecoration: 'none' };

/**
 * 연락처 한 줄 (아이콘 + 라벨 + 내용)
 *
 * @param {React.ReactNode} icon - 왼쪽 아이콘 [Required]
 * @param {string} label - 항목 이름 [Required]
 * @param {React.ReactNode} children - 항목 내용 [Required]
 */
function InfoRow({ icon, label, children }) {
  return (
    <Box sx={ { display: 'flex', gap: 2, alignItems: 'flex-start' } }>
      <Box sx={ ROW_ICON_SX }>{ icon }</Box>
      <Box>
        <Box sx={ LABEL_SX }>{ label }</Box>
        { children }
      </Box>
    </Box>
  );
}

/**
 * 회사 연락처 카드 (대표 연락처 / 이메일 / 주소 / 영업시간 / 카카오톡 / 네이버 지도 / SNS)
 *
 * Example usage:
 * <ContactInfoCard />
 */
function ContactInfoCard() {
  const { phone, email, address, hours, kakaoUrl, naverMapUrl, instagramUrl, blogUrl } = CONTACT_INFO;
  const socials = [
    { label: '인스타그램', url: instagramUrl, icon: <InstagramIcon /> },
    { label: '블로그', url: blogUrl, icon: <RssFeedIcon /> },
  ].filter((item) => item.url);

  return (
    <Stack spacing={ 3 } sx={ { height: '100%' } }>
      <InfoRow icon={ <PhoneOutlinedIcon fontSize="small" /> } label="대표 전화">
        <Box component="a" href={ `tel:${ phone.replace(/-/g, '') }` } sx={ VALUE_SX }>{ phone }</Box>
      </InfoRow>

      <InfoRow icon={ <MailOutlinedIcon fontSize="small" /> } label="이메일 문의">
        <Box component="a" href={ `mailto:${ email }` } sx={ VALUE_SX }>{ email }</Box>
      </InfoRow>

      <InfoRow icon={ <PlaceOutlinedIcon fontSize="small" /> } label="회사 주소">
        <Box sx={ VALUE_SX }>{ address }</Box>
      </InfoRow>

      <InfoRow icon={ <AccessTimeIcon fontSize="small" /> } label="영업시간">
        <Box sx={ { display: 'grid', gap: 0.25 } }>
          { hours.map(({ day, time }) => (
            <Box key={ day } sx={ { display: 'flex', gap: 2 } }>
              <Box sx={ { width: 72, color: 'var(--color-text-secondary)' } }>{ day }</Box>
              <Box sx={ { fontWeight: 600 } }>{ time }</Box>
            </Box>
          )) }
        </Box>
      </InfoRow>

      <Stack spacing={ 1.5 }>
        <Button
          href="#contact-form"
          variant="contained"
          size="large"
          disableElevation
          sx={ {
            bgcolor: COBALT.main,
            '&:hover': { bgcolor: COBALT.dark },
            py: 1.5,
            fontWeight: 700,
          } }
        >
          견적 · 납품 상담 신청
        </Button>
        { kakaoUrl && (
          <Button
            href={ kakaoUrl }
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="large"
            startIcon={ <ChatBubbleOutlineIcon /> }
            sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)', py: 1.5 } }
          >
            카카오톡 상담
          </Button>
        ) }
        <Button
          href={ naverMapUrl }
          target="_blank"
          rel="noreferrer"
          variant="outlined"
          size="large"
          startIcon={ <PlaceOutlinedIcon /> }
          sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)', py: 1.5 } }
        >
          네이버 지도로 보기
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={ 1.5 }
        sx={ { pt: 2.5, borderTop: '1px solid var(--color-border)', mt: 'auto !important' } }
      >
        <IconButton
          href={ `mailto:${ email }` }
          aria-label="이메일 보내기"
          sx={ { border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' } }
        >
          <MailOutlinedIcon />
        </IconButton>
        <IconButton
          href={ `tel:${ phone.replace(/-/g, '') }` }
          aria-label="전화 걸기"
          sx={ { border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' } }
        >
          <PhoneOutlinedIcon />
        </IconButton>
        { socials.map(({ label, url, icon }) => (
          <IconButton
            key={ label }
            href={ url }
            target="_blank"
            rel="noreferrer"
            aria-label={ label }
            sx={ { border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' } }
          >
            { icon }
          </IconButton>
        )) }
      </Stack>
    </Stack>
  );
}

export default ContactInfoCard;

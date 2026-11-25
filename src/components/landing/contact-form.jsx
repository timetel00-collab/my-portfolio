import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { supabase } from '../../lib/supabase-client';
import { CUSTOMER_TYPES } from '../../utils/contact-info';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const EMPTY_FORM = {
  customer_type: '기업',
  name: '',
  company: '',
  phone: '',
  email: '',
  product: '',
  delivery_info: '',
  message: '',
  consented: false,
};

/**
 * 견적 · 납품 문의 양식 (Supabase guestbook 테이블에 저장)
 *
 * Example usage:
 * <ContactForm />
 */
function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [file, setFile] = useState(null);
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleChange = (key) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  /** 첨부파일을 비공개 버킷에 올리고 저장 경로를 돌려줍니다. */
  const uploadAttachment = async () => {
    if (!file) return null;
    const ext = file.name.includes('.') ? file.name.split('.').pop().toLowerCase() : 'bin';
    const path = `${ Date.now() }-${ Math.random().toString(36).slice(2, 8) }.${ ext }`;
    const { error: uploadError } = await supabase.storage.from('guestbook-files').upload(path, file);
    if (uploadError) throw uploadError;
    return path;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (!form.consented) {
      setError('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }
    if (file && file.size > MAX_FILE_SIZE) {
      setError('첨부파일은 10MB 이하만 가능합니다.');
      return;
    }
    setIsBusy(true);
    try {
      const attachment_path = await uploadAttachment();
      const { error: insertError } = await supabase
        .from('guestbook')
        .insert({ ...form, attachment_path });
      if (insertError) throw insertError;
      setIsDone(true);
      setForm(EMPTY_FORM);
      setFile(null);
    } catch (err) {
      setError(`접수에 실패했습니다. 잠시 후 다시 시도해 주세요. (${ err.message })`);
    } finally {
      setIsBusy(false);
    }
  };

  if (isDone) {
    return (
      <Stack spacing={ 2 } alignItems="center" role="status" sx={ { py: 6, textAlign: 'center' } }>
        <Box sx={ { fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)' } }>
          문의가 접수되었습니다.
        </Box>
        <Box sx={ { color: 'var(--color-text-secondary)' } }>
          영업일 기준 1~2일 내에 입력하신 연락처로 회신드리겠습니다.
        </Box>
        <Button variant="outlined" onClick={ () => setIsDone(false) } sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)' } }>
          새 문의 작성
        </Button>
      </Stack>
    );
  }

  return (
    <Box component="form" id="contact-form" onSubmit={ handleSubmit } sx={ { display: 'grid', gap: 2.5 } }>
      <Box>
        <Box sx={ { fontSize: '0.88rem', fontWeight: 600, mb: 1, color: 'var(--color-text-primary)' } }>고객 유형</Box>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={ form.customer_type }
          onChange={ (_event, value) => value && setForm((prev) => ({ ...prev, customer_type: value })) }
          aria-label="고객 유형"
          sx={ {
            '& .MuiToggleButton-root': { px: 2.5, color: 'var(--color-text-secondary)' },
            '& .Mui-selected, & .Mui-selected:hover': {
              bgcolor: 'var(--color-text-primary)',
              color: 'var(--color-bg-primary)',
            },
          } }
        >
          { CUSTOMER_TYPES.map((type) => (
            <ToggleButton key={ type } value={ type }>{ type }</ToggleButton>
          )) }
        </ToggleButtonGroup>
      </Box>

      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12, sm: 6 } }>
          <TextField label="담당자 이름" required fullWidth value={ form.name } onChange={ handleChange('name') } autoComplete="name" />
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <TextField
            label={ form.customer_type === '일반 고객' ? '소속 (선택)' : '회사 / 기관명' }
            required={ form.customer_type !== '일반 고객' }
            fullWidth
            value={ form.company }
            onChange={ handleChange('company') }
            autoComplete="organization"
          />
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <TextField label="연락처" required fullWidth type="tel" placeholder="010-0000-0000" value={ form.phone } onChange={ handleChange('phone') } autoComplete="tel" />
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <TextField label="이메일" required fullWidth type="email" value={ form.email } onChange={ handleChange('email') } autoComplete="email" />
        </Grid>
      </Grid>

      <TextField label="문의 제품" fullWidth placeholder="예) 사무용 책상 30set" value={ form.product } onChange={ handleChange('product') } />
      <TextField label="납품 관련 정보" fullWidth placeholder="납품 희망일 · 장소 · 수량 등" value={ form.delivery_info } onChange={ handleChange('delivery_info') } />
      <TextField label="상세 문의 내용" required fullWidth multiline minRows={ 4 } value={ form.message } onChange={ handleChange('message') } />

      <Box>
        <Button component="label" variant="outlined" sx={ { color: 'var(--color-text-primary)', borderColor: 'var(--color-border-strong)' } }>
          첨부파일 선택
          <input
            hidden
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx"
            onChange={ (event) => setFile(event.target.files?.[0] || null) }
          />
        </Button>
        <Box component="span" sx={ { ml: 1.5, fontSize: '0.85rem', color: 'var(--color-text-secondary)' } }>
          { file ? file.name : '선택 사항 · 10MB 이하 (jpg, png, pdf, docx, xlsx)' }
        </Box>
      </Box>

      <Box sx={ { p: 2, bgcolor: 'var(--color-bg-secondary)', borderRadius: 1 } }>
        <FormControlLabel
          control={ <Checkbox checked={ form.consented } onChange={ handleChange('consented') } /> }
          label="[필수] 개인정보 수집 및 이용에 동의합니다."
          sx={ { m: 0, alignItems: 'center' } }
        />
        <Box sx={ { mt: 0.5, fontSize: '0.8rem', lineHeight: 1.5, color: 'var(--color-text-secondary)' } }>
          수집 항목: 이름, 회사명, 연락처, 이메일, 문의 내용, 첨부파일 · 이용 목적: 견적·납품 상담 및 회신 · 보유 기간: 상담 완료 후 1년
        </Box>
      </Box>

      { error && <Alert severity="error">{ error }</Alert> }

      <Button
        type="submit"
        variant="contained"
        size="large"
        disableElevation
        disabled={ isBusy }
        sx={ {
          py: 1.5,
          fontWeight: 700,
          bgcolor: 'var(--color-button-primary)',
          '&:hover': { bgcolor: 'var(--color-button-hover)' },
        } }
      >
        { isBusy ? '접수 중...' : '문의 접수하기' }
      </Button>
    </Box>
  );
}

export default ContactForm;
